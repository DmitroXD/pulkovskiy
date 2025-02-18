from typing import List

from fastapi import FastAPI, APIRouter

from routes.v1 import include_v1_routes

routes: List[APIRouter] = [
]


def include_routes(app: FastAPI):
    api_router = APIRouter(prefix="/api", tags=["api"])
    include_v1_routes(api_router)

    app.include_router(api_router)
