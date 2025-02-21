import { plainToInstance, Transform } from 'class-transformer';
import { IsEnum, IsString, IsNumber, validateSync } from 'class-validator';
import { config } from 'dotenv';
import { join } from 'path';

enum EnvironmentType {
  PRODUCTION = 'PRODUCTION',
  DEVELOPMENT = 'DEVELOPMENT',
}

class Settings {
  @IsEnum(EnvironmentType)
  @Transform(({ value }) => value || process.env.ENVIRONMENT)
  ENVIRONMENT: EnvironmentType = EnvironmentType.PRODUCTION;

  @IsString()
  @Transform(({ value }) => value || process.env.ENCODING)
  ENCODING: string = 'utf-8';

  @IsNumber()
  @Transform(({ value }) => value || process.env.PORT)
  PORT: number = 3002;

  get isProduction(): boolean {
    return this.ENVIRONMENT === EnvironmentType.PRODUCTION;
  }
}

let cachedSettings: Settings | null = null;

export function getSettings(): Settings {
  if (process.env.ENVIRONMENT != EnvironmentType.DEVELOPMENT) {
    try {
      config({ path: join(__dirname, '../../.env') });
    } catch (_) {
      console.warn('.env is not exists');
    }
  }
  if (cachedSettings) {
    return cachedSettings;
  }

  const settings = plainToInstance(Settings, process.env);
  const errors = validateSync(settings);

  if (errors.length > 0) {
    throw new Error(`Validation error: ${errors}`);
  }
  cachedSettings = settings;
  return settings;
}

const settings = getSettings();
export default settings;
