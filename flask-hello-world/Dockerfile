FROM python:3.10-alpine

WORKDIR /app

COPY requirements.txt .

RUN pip3 install --update pip && pip3 install --no-cache-dir -r requirements.txt

COPY . .

RUN adduser -D flaskuser

USER flaskuser

EXPOSE 3000

ENTRYPOINT ["python3"]

CMD ["hello.py"]