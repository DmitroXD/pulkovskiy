from enum import StrEnum
from functools import lru_cache

from pydantic import Field, MySQLDsn, IPvAnyAddress
from pydantic_settings import BaseSettings, SettingsConfigDict


class EnvironmentType(StrEnum):
    PRODUCTION = "PRODUCTION"
    DEVELOPMENT = "DEVELOPMENT"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../../.env", env_file_encoding='utf-8')

    ENVIRONMENT: EnvironmentType = Field(
        default=EnvironmentType.PRODUCTION
    )

    HOST: IPvAnyAddress = Field(
        default="127.0.0.1",
        title="Uvicorn address",
    )

    PORT: int = Field(
        default=3001,
        title="Uvicorn port",
    )

    MYSQL_DNS: MySQLDsn | None = Field(
        default="sqlite://:memory:",
        title="MySQL URL",
    )

    ENCODING: str = Field(
        default="utf-8",
        title="Encoding",
    )

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == EnvironmentType.PRODUCTION


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
