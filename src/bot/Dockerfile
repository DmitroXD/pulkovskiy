FROM python:3.12.9-slim

ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

RUN mkdir /bot
WORKDIR /bot

COPY requirements.txt .

COPY . .

CMD ["python", "main.py"]