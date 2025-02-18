from aiogram import Router
from aiogram.filters import Command
from aiogram.fsm.context import FSMContext
from aiogram.types import Message

from middlewares import create_router


__all__ = ["router"]


router: Router = create_router()


@router.message(Command("start"))
async def cmd_start(message: Message, state: FSMContext, locale: dict):
    await state.clear()
    await message.answer(locale["mainGreetMessage"])
