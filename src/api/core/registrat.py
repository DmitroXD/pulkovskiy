from contextlib import asynccontextmanager

from fastapi import FastAPI
from tortoise import Tortoise

from core.config import settings
from database import async_db_init
from middlewares import include_middlewares
from routes import include_routes


@asynccontextmanager
async def lifespan(_app: FastAPI):
    await async_db_init(settings.MYSQL_DNS)
    yield
    await Tortoise.close_connections()


def create_app():
    param = {}
    if settings.is_production:
        param["docs_url"] = None

    app = FastAPI(
        lifespan=lifespan,
        **param
    )

    include_middlewares(app)
    include_routes(app)

    return app

