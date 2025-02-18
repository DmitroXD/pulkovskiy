from typing import List

from aiogram import Router, Dispatcher, BaseMiddleware

from middlewares.localization import LocalizationMiddleware


common_middlewares: List[BaseMiddleware] = [
    LocalizationMiddleware()
]


def _outer_middleware(owner: Router, middleware: BaseMiddleware):
    owner.message.outer_middleware(middleware)
    owner.callback_query.outer_middleware(middleware)


def _middleware(owner: Router, middleware: BaseMiddleware):
    owner.message.middleware(middleware)
    owner.callback_query.middleware(middleware)


def include_middleware(dp: Dispatcher):
    for middleware in common_middlewares:
        _middleware(dp, middleware)


def create_router():
    return Router()
