import os


def current_dir(file):
    return os.path.dirname(os.path.realpath(file))


def parent_dir(file):
    current_directory = os.path.dirname(os.path.realpath(file))
    return os.path.join(current_directory, "..")
