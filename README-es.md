# Calculadora

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<img width="619" height="511" alt="ezgif-26c61f790c075188" src="https://github.com/user-attachments/assets/4348408c-cb17-43cc-9929-8cbce1732bd8" />

## Descripción

Calculadora simple creada con **HTML, CSS y JavaScript**, lista y preparada para desplegarse en un contenedor de **Docker**.

## Despliegue

Comandos para construir la imagen y ejecutar el contenedor:

```bash
# Construir la imagen
docker build -t calculator .

# Ejecutar el contenedor en el puerto 8080
docker run -d -p 8080:80 calculator:latest
```
