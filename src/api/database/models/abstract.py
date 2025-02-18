"""
    Abstract Tortoise base model with default primary key ID.
"""

from tortoise import fields
from tortoise.models import Model


__all__ = [
    "AbstractBaseModel"
]


class AbstractBaseModel(Model):
    """
    Encapsulates realisation of the ID field.
    """

    id = fields.IntField(pk=True)

    created_at = fields.DatetimeField(auto_now_add=True)
    updated_at = fields.DatetimeField(auto_now=True)

    class Meta:
        abstract = True
