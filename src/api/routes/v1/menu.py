from fastapi import APIRouter

from schemas.menu import CreateMenuScheme, UpdateMenuScheme
from services.menu import MenuService

router = APIRouter(
    prefix="/menu",
    tags=["menu"],
)


service: MenuService


@router.get("/all")
async def get_all_menu():
    return await service.get_all()


@router.get("/one")
async def get_position_by_id(item_id: int):
    return await service.get_by_id(
        item_id=item_id
    )


@router.get("/create")
async def create_position(data: CreateMenuScheme):
    return await service.create(
        data=data
    )


@router.get("/update")
async def update_position(data: UpdateMenuScheme):
    return await service.update(
        data=data
    )


@router.get("/delete")
async def delete_position(item_id: int):
    return await service.delete(
        item_id=item_id
    )
