from abc import ABC, abstractmethod
from typing import Any

import orjson

from core.config import settings


class AbstractSerializeService(ABC):

    @abstractmethod
    def loads(self, data: Any) -> Any:
        ...

    @abstractmethod
    def dumps(self, data: Any) -> Any:
        ...


class OrjsonService(AbstractSerializeService):
    __slots__ = ()

    def loads(self, data: bytes | bytearray | memoryview | str):
        return orjson.loads(
            data
        )

    def dumps(self, obj: Any) -> str:
        return orjson.dumps(
            obj
        ).decode(
            encoding=settings.ENCODING
        )
