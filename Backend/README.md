# Backend

La siguiente API REST esta creada usando Laravel y PostgreSQL con uso de los tokens Sanctum, sus distintos endpoints estan creados para cubrir los requerimientos pautados.

## Endpoints

Los puede probar usando Postman (el archivo esta en PruebaTecnica/prueba tecnica.postman_collection.json) o ingresando a `pruebatecnica.nelsoncarrero.dev` y para el panel de administrador `admin.pruebatecnica.nelsoncarrero.dev`

#### Obtener todos los tipos de documentos

```http
  GET /api/v1/documentos
```

#### Obtener todas las divisas

```http
  GET /api/v1/divisas
```

#### Obtener las transacciones

```http
  GET /api/v1/transacciones
```

#### Registro de usuarios administradores

```http
  POST /api/v1/usuarios
```

| Parameter  | Type     | Description                                              |
| :--------- | :------- | :------------------------------------------------------- |
| `nombre`   | `string` | **Required**. nombre de usuario                          |
| `password` | `string` | **Required**. password de usuario de minimo 8 caracteres |

#### Login de usuarios administradores

```http
  POST /api/v1/auth/usuarios
```

| Parameter  | Type     | Description                       |
| :--------- | :------- | :-------------------------------- |
| `nombre`   | `string` | **Required**. nombre de usuario   |
| `password` | `string` | **Required**. password de usuario |

#### Registrar transaccion

```http
  POST /api/v1/transaccion
```

| Parameter         | Type     | Description                                    |
| :---------------- | :------- | :--------------------------------------------- |
| `divisa_id`       | `number` | **Required**. tipo de divisa                   |
| `monto`           | `double` | **Required**. monto a pagar                    |
| `descripcion`     | `string` | **Required**. descripcion                      |
| `documento_id`    | `number` | **Required**. tipo de documento                |
| `nro_documento`   | `string` | **Required**. numero de documento              |
| `nombre`          | `string` | **Required**. nombre de pagador                |
| `apellido`        | `double` | **Required**. apellido de pagador              |
| `nro_tarjeta`     | `double` | **Required**. numero de tarjeta                |
| `mes_vencimiento` | `double` | **Required**. mes de vencimiento de la tarjeta |
| `ano vencimiento` | `double` | **Required**. año de vencimiento de la tarjeta |

## Correr en Local

Para desplegar esta API en local debes tener en tu equipo PHP 4.4, Composer 2.8 y PostgreSQL.

Clone el repositorio

```bash
  https://github.com/Daheid/PruebaTecnica.git
```

Entre a la carpeta del backend

```bash
  cd PruebaTecnica/Backend
```

Instale el proyecto

```bash
  composer install
```

cambie de .env.example a .env (configure las variables de entorno)

```bash
  ren .env.example .env
```

cree una llave

```bash
  php artisan key:generate
```

ejecute las migraciones

```bash
  php artisan migrate
```

ejecute las seeders para poblar divisas, documentos y transacciones

```bash
  php artisan db:seed
```

inicie el servidor

````bash
  php artisan serve
```## variables de entorno

Para correr el proyecto, debe agregar el valor correspondiente a las siguientes variables.

`DB_DATABASE=`
`DB_USERNAME=`
`DB_PASSWORD=`

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.nelsoncarrero.dev/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nelson-carrero-96b984202/)
````
