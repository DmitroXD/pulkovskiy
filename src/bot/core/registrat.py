import logging

from aiogram import Bot, Dispatcher
from aiogram.client.default import DefaultBotProperties
from aiogram.client.session.aiohttp import AiohttpSession
from aiogram.fsm.storage.memory import MemoryStorage
from aiogram.fsm.storage.redis import RedisStorage

from core.config import settings
from service.serialize import OrjsonService, AbstractSerializeService


def create_bot(token: str, serialize: AbstractSerializeService = None) -> Bot:
    serialize = serialize or OrjsonService()
    logging.info(f"Serialize Service: {serialize.__class__.__name__}")
    session = AiohttpSession(
        proxy=settings.PROXY,
        json_loads=serialize.loads,
        json_dumps=serialize.dumps
    )
    default = DefaultBotProperties(
        parse_mode=settings.PARSE_MODE
    )
    bot = Bot(
        token=token,
        session=session,
        default=default
    )
    return bot


def get_storage():
    if settings.REDIS_DNS:
        return RedisStorage.from_url(settings.REDIS_DNS)
    logging.warning("Redis URL is not configured!")
    return MemoryStorage()


def create_dispatcher(name: str = None, **kwargs):
    storage = get_storage()
    dp = Dispatcher(
        storage=storage,
        name=name,
        **kwargs
    )
    return dp
