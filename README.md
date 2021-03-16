# mushroom-api
## 1. Instalacion
### 1.1 Instalación de Docker

Necesitamos Docker y Docker-compose para correr el ambiente, aquí estan links para instalar Docker en diferentes plataformas (Docker-compose viene incluido con la instalación de Docker
como se especifica [aquí](https://docs.docker.com/compose/install/))

* Windows
[Docker para Windows](https://docs.docker.com/docker-for-windows/install/)

* Mac Os
[Docker para Mac Os](https://docs.docker.com/docker-for-mac/install/)

* Linux
[Docker para Linux por distribución](https://docs.docker.com/engine/install/)

### 1.2 Clonación del repositorio

`git clone https://github.com/chadsfatherlali/mushroom-api.git`


### 1.3 Correr el entorno

1. `cd mushroom-api/`
2. `docker-compose build`
3. `docker-compose up` ó `docker-compose up -d` (para mantenerlo corriendo en background)

### 1.4 Verificar que el entorno esta accesible

Abrir Chrome ó navegador preferido y acceder a `http://localhost:3000/healthCheck`, se espera recibir una respuesta `200` de parte de el servidor con un json `{ status: 'ok' }`
