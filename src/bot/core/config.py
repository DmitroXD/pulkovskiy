from enum import StrEnum
from functools import lru_cache

from aiogram.enums import ParseMode
from pydantic import Field, RedisDsn, AliasChoices
from pydantic_settings import BaseSettings, SettingsConfigDict

from tools.enum_func import get_enum_values


class EnvironmentType(StrEnum):
    PRODUCTION = "PRODUCTION"
    DEVELOPMENT = "DEVELOPMENT"


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file="../../.env", env_file_encoding='utf-8')

    ENVIRONMENT: EnvironmentType = Field(
        default=EnvironmentType.PRODUCTION
    )

    TOKEN: str = Field(
        validation_alias=AliasChoices("TOKEN", 'token'),
        title="Bot Token",
        description="Telegram bot token"
    )

    PROXY: str | None = Field(
        default=None,
        validation_alias=AliasChoices("PROXY", "proxy", "bot_proxy", "proxy_alias"),
        title="Session proxy",
        description="Telegram session proxy"
    )
    REDIS_DNS: RedisDsn | None = Field(
        default=None,
        validation_alias=AliasChoices("REDIS_DNS", 'redis_url', "redis_path"),
        title="Redis URL",
    )

    ENCODING: str = Field(
        default="utf-8",
        title="Encoding",
    )

    PARSE_MODE: str = Field(
        default=ParseMode.HTML,
        title="Formating mode",
        description="\\".join(get_enum_values(ParseMode))
    )

    @property
    def is_production(self) -> bool:
        return self.ENVIRONMENT == EnvironmentType.PRODUCTION


@lru_cache(maxsize=1)
def get_settings() -> Settings:
    return Settings()


settings = get_settings()
