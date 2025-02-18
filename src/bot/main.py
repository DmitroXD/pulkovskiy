import asyncio
import logging

from core.config import settings
from core.registrat import create_bot, create_dispatcher
from handlers import include_routers
from middlewares import include_middleware


async def main(token: str):
    bot = create_bot(token)
    dp = create_dispatcher()
    include_middleware(dp)
    include_routers(dp)

    await dp.start_polling(
        bot,
        polling_timeout=15,
        allowed_updates=dp.resolve_used_update_types()
    )


is_debug = not settings.is_production

if is_debug:
    logging.basicConfig(level=logging.INFO)


if __name__ == '__main__':
    func = main(settings.TOKEN)
    asyncio.run(
        func,
        debug=is_debug
    )
