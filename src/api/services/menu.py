from schemas.menu import CreateMenuScheme, UpdateMenuScheme
from services.abstract import AbstractService


class MenuService(AbstractService):

    async def get_all(self):
        ...

    async def get_by_id(self, item_id: int):
        ...

    async def create(self, data: CreateMenuScheme):
        ...

    async def update(self, data: UpdateMenuScheme):
        ...

    async def delete(self, item_id: int):
        ...
