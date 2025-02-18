from fastapi import APIRouter, FastAPI

from .utils import router as utils_router


routers: list[APIRouter] = [
    utils_router
]


def include_v1_routes(app: APIRouter | FastAPI):
    v1_router = APIRouter(prefix="/v1", tags=["v1"])
    for router in routers:
        v1_router.include_router(router)

    app.include_router(v1_router)
