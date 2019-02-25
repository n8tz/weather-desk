FROM node:8.12.0-alpine


RUN mkdir /home/app

RUN apk --no-cache update \
        && apk add --no-cache \
        python \
        make \
        g++ \
        automake \
        autoconf \
        zlib-dev \
        libpng-dev \
        mongodb-tools \
        bash \
        lcms2-dev \
        rsync \
        git



RUN echo $'#!/bin/bash\n\
cd /home/app\n\
npm i && npm run start-dev' > /bin/run.sh

RUN chmod a+x /bin/run.sh

WORKDIR /home/app


ENTRYPOINT ["/bin/bash", "-c", "/bin/run.sh"]