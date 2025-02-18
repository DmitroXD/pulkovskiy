import asyncio
from abc import ABC, abstractmethod

import yaml

from service.files import AbstractFileService, BaseFileService


class AbstractLocalizationService(ABC):

    @abstractmethod
    async def get_locale(self, locale: str) -> dict:
        ...


class YamlLocalizationService(AbstractLocalizationService):
    __slots__ = ()

    LOADER: AbstractFileService = BaseFileService()

    async def get_locale(self, locale: str) -> dict:
        data = await self.LOADER.read(f"{locale}.yaml")
        return await asyncio.to_thread(yaml.safe_load, data)
