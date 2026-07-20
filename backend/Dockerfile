FROM node:24-bookworm

WORKDIR /app

RUN apt-get update && apt-get install -y \
    qpdf \
    ghostscript \
    libreoffice \
    poppler-utils \
    libcairo2 \
    libpango-1.0-0 \
    libjpeg62-turbo \
    libgif7 \
    librsvg2-2 \
    && rm -rf /var/lib/apt/lists/*

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "start"]