FROM python:3.10-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip3 install -r requirements.txt

COPY . .

EXPOSE 3000

ENTRYPOINT ["python3"]

CMD ["hello.py"]