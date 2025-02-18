import time

from fastapi import APIRouter

router = APIRouter(
    prefix="/utils",
    tags=["utils"],
)


@router.get("/server_time")
async def server_time():
    return {
        "server_time": time.perf_counter()
    }
