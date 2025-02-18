from fastapi import FastAPI

from core.config import settings
from middlewares import include_middlewares
from routes import include_routes


def create_app():
    param = {}
    if not settings.is_production:
        param["docs_url"] = None

    app = FastAPI(**param)

    include_middlewares(app)
    include_routes(app)

    return app

