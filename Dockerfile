
FROM node:10-alpine

# Create app directory
WORKDIR /usr/src/app

##ENV NODE_ENV production
ENV NODE_ENV $NODE_ENV
ENV DEBUG $DEBUG

# Copy app dependencies
#COPY package*.json yarn.lock ./
#
RUN chmod 2777 "/usr/src/app"

#RUN set -x ; \
#  addgroup -g 82 -S www-data ; \
#  adduser -u 82 -D -S -G www-data www-data
#
#RUN chown -R www-data:www-data "/usr/src/app"
#USER www-data

COPY . .

# Install app dependencies
RUN yarn install --pure-lockfile
#
RUN yarn build
#
# Generate build files
#RUN npm run build

EXPOSE 3012

CMD [ "yarn", "start" ]
