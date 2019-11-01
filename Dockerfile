# Utilizando a versão 1.17 do nginx
FROM nginx:1.17

# Copia os arquivos estáticos para dentro do conteúdo
COPY . /usr/share/nginx/html

EXPOSE 80