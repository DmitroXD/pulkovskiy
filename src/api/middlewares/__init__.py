from fastapi import FastAPI


middlewares: list = [

]


def include_middlewares(app: FastAPI):
    for middleware in middlewares:
        app.add_middleware(middleware)
