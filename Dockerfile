FROM nginx:alpine
COPY docs /usr/share/nginx/html

# Make Directorty of `src` and COPY it
RUN mkdir /usr/share/nginx/html/src
COPY src /usr/share/nginx/html/src