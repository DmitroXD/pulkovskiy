from abc import ABC, abstractmethod

from schemas.menu import CreateMenuScheme, UpdateMenuScheme


class AbstractMenuService(ABC):

    @abstractmethod
    async def get_all_positions(self):
        ...

    @abstractmethod
    async def get_position_by_id(self, item_id: int):
        ...

    @abstractmethod
    async def create_position(self, data: CreateMenuScheme):
        ...

    @abstractmethod
    async def update_position(self, data: UpdateMenuScheme):
        ...

    @abstractmethod
    async def delete_position(self, item_id: int):
        ...
