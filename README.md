# Calculator

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E.svg?style=for-the-badge&logo=JavaScript&logoColor=black)
![NGINX](https://img.shields.io/badge/Nginx-009639?style=for-the-badge&logo=nginx&logoColor=white)
![HTML](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![Docker](https://img.shields.io/badge/docker-%230db7ed.svg?style=for-the-badge&logo=docker&logoColor=white)

<img width="619" height="511" alt="ezgif-26c61f790c075188" src="https://github.com/user-attachments/assets/4348408c-cb17-43cc-9929-8cbce1732bd8" />

## Description

A simple calculator built with **HTML, CSS, and JavaScript**, fully prepared and ready to be deployed as a **Docker** container.

## Deployment

Commands to build the image and run the container:

```bash
# Build the Docker image
docker build -t calculator .

# Run the container on port 8080
docker run -d -p 8080:80 calculator:latest

# Test if the container is working
docker ps
curl localhost:8080
```
