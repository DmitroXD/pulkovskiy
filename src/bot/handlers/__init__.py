import logging
from typing import List

from aiogram import Router, Dispatcher

from . import main

routers: List[Router] = [
    main.router
]


def include_routers(dp: Dispatcher):
    if not routers:
        logging.warning("No routers included!")
        return
    dp.include_routers(*routers)
