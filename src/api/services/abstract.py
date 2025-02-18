from abc import ABC, abstractmethod
from typing import Any


class AbstractService(ABC):

    @abstractmethod
    async def get_all(self):
        ...

    @abstractmethod
    async def get_by_id(self, item_id: int):
        ...

    @abstractmethod
    async def create(self, data: Any):
        ...

    @abstractmethod
    async def update(self, data: Any):
        ...

    @abstractmethod
    async def delete(self, item_id: int):
        ...
