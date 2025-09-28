# Prueba tecnica

El siguiente proyecto esta creado con distintas tecnologias y una arquitectura `JamStack` para separar las responsabilidades de las tres partes. Se usaron PHP, Laravel, JavaScript, Tailwind, HTML, React y PostgreSQL para cumplir con los requerimientos pautados.

Para probar el proyecto en la web:

- Formulario la puedes encontrar en `pruebatecnica.nelsoncarrero.dev`
- Backend la puedes encontrar en `api.pruebatecnica.nelsoncarrero.dev`
- panelAdmin la puedes encontrar en `admin.pruebatecnica.nelsoncarrero.dev`

## Feedback

Las secciones de `Backend, Formulario y panelAdmin` estan iguales en sus respectiva carpetas, en esta documentacion se agregan las tres.

## FAQ

#### Porque se uso ese Stack?

Para el Backend se eligio Laravel por su flexibilidad y velocidad para desarrollar APIs en poco tiempo, junto a los conocimientos que ya tengo fueron dos factores descisivos.

Para la base de datos se decidio PostgreSQL porque ya estaba preparado en el VPS donde se desplego el proyecto y me parecia un ahorro de tiempo, a parte, de su gran compatibilidad con Laravel.

Para el Formulario se usaron html5, Tailwind CSS y JavaScript sin Frameworks ya que al ser unicamente un formulario me parecia que no era necesario el uso de frameworks y se podia desarrollar en buen tiempo con el stack elegido.

Para panelAdmin se uso React, Tailwind CSS y JavaScript
por su velocidad de desarrollo para un sistema de Login>Dashboard con autenticacion>consumo de API, ademas, En la entrevista le comente al SR. Edison que no habia usado nunca React solo Livewire que es parecido y me parecio una buena oportunidad para usarlo.

#### Si tuvieras mas tiempo que mejorarias

- Agregar una pestaña para agregar Divisas y tipos de Documentos nuevos.

- Agregaria un boton para descargar en PDF las transacciones juntas o individuales.

- Mejoraria el stack de trabajo.

- Optimizacion de la Base de datos.

- Realizaria testing para validar el funcionamiento del codigo.

# Backend

La siguiente API REST esta creada usando Laravel y PostgreSQL con uso de los tokens Sanctum, sus distintos endpoints estan creados para cubrir los requerimientos pautados.

## Endpoints

Los puede probar usando Postman (el archivo esta en Backend/postman) o ingresando a `pruebatecnica.nelsoncarrero.dev` y para el panel de administrador `admin.pruebatecnica.nelsoncarrero.dev`

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


# panelAdmin

El siguiente panel esta creado con React, Tailwind y Javascript con los requerimientos pautados.

## Correr en Local

Para desplegar esta panel en local debes tener en su equipo la API de PruebaTecnica/Backend corriendo para que le cargen los datos y Nodejs 24.9 y npm 11.6.

Clone el repositorio

```bash
  https://github.com/Daheid/PruebaTecnica.git
````

Entre a la carpeta de panelAdmin

```bash
  cd PruebaTecnica/panelAdmin
```

Instale el proyecto

```bash
  npm install
```

cree el archivo .env (configure las variables de entorno)

```bash
  mkdir .env
```

haga una build del proyecto

```bash
  npm run build
```

inicie el servidor

```bash
  npm run dev
```

## variables de entorno

Para correr el proyecto, debe agregar el valor correspondiente a las siguientes variables.

`VITE_API_URL`

# Formulario

El siguiente Formulario esta creado con JavaScript, Tailwind y HTML con los requerimientos pautados.

## Correr en Local

Para desplegar esta Formulario en local debe tener en su equipo la API de PruebaTecnica/Backend corriendo para que le cargen los datos y un navegador actualizado.

Clone el repositorio

```bash
  https://github.com/Daheid/PruebaTecnica.git
```

Entre a la carpeta de Formulario

```bash
  cd PruebaTecnica/Formulario
```

Abra el archivo index.html

```bash
  index.html
```

## FAQ

#### Es necesario correr la API?

No, ya que los links que se usan en el formularios estan conectados a la version de la api en la web `api.pruebatecnica.nelsoncarrero.dev`

## 🔗 Links

[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://www.nelsoncarrero.dev/)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/nelson-carrero-96b984202/)
