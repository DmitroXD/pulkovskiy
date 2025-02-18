import uvicorn

from core.config import settings
from core.registrat import create_app


def main():
    app = create_app()
    return app


if __name__ == '__main__':
    uvicorn.run(
        "main:main",
        host=str(settings.HOST),
        port=settings.PORT,
        loop="uvloop",
        interface="asgi3",
        reload=not settings.is_production

    )
