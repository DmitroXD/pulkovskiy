from typing import List

from fastapi import FastAPI, APIRouter


routes: List[APIRouter] = [

]


def include_routes(app: FastAPI):
    for route in routes:
        app.include_router(route)
