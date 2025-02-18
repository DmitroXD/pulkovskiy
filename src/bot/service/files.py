from abc import ABC, abstractmethod

import aiofiles

from core.config import settings


class AbstractFileService(ABC):
    @abstractmethod
    async def read(self, file: str, **kwargs):
        ...


class BaseFileService(AbstractFileService):
    __slots__ = ()

    async def read(self, file: str, **kwargs):
        async with aiofiles.open(file, mode="r", encoding=settings.ENCODING) as f:
            return await f.read()
