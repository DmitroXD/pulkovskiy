from os import listdir

from tortoise import Tortoise

from core.config import settings
from tools.files import get_this_directory


directory = get_this_directory(__file__)

list_of_models = [
    f"api.database.models.{file.replace('.py', '')}"
    for file in listdir(f"{directory}/models")
    if file not in ["__init__.py", "abstract.py", "__pycache__"]
]


async def async_db_init(db_url: str = None):
    if not db_url or not settings.is_production:
        db_url = "sqlite://:memory:"
    await Tortoise.init(
        db_url=db_url,
        modules={"models": list_of_models}
    )
    await Tortoise.generate_schemas()
