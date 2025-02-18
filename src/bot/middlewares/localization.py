import os
from typing import Callable, Dict, Any, Awaitable
from aiogram import BaseMiddleware
from aiogram.types import TelegramObject

from service.localization import AbstractLocalizationService, YamlLocalizationService
from tools.files import parent_dir


class LocalizationMiddleware(BaseMiddleware):
    localization: AbstractLocalizationService = YamlLocalizationService()
    base_path = f"{os.path.abspath(parent_dir(__file__))}/locales"

    async def __call__(
            self,
            handler: Callable[[TelegramObject, Dict[str, Any]], Awaitable[Any]],
            event: TelegramObject,
            data: Dict[str, Any]
    ) -> Any:
        # locale = self.localization.get_locale()  # Need get language from user. Add new state for input
        locale = await self.localization.get_locale(f"{self.base_path}/ru")
        data["locale"] = locale
        return await handler(event, data)
