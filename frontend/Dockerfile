FROM node:18-alpine

COPY wait-for.sh /app/wait-for.sh

RUN chmod +x /app/wait-for.sh

WORKDIR /app

COPY package*.json ./
RUN yarn install

COPY . .

# Definir el comando de inicio del contenedor utilizando el script wait-for.sh
CMD ["./wait-for.sh", "db_task", "yarn", "dev"]
