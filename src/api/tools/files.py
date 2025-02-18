import os


def get_this_directory(file) -> str:
    return os.path.dirname(os.path.realpath(file))
