
# NodejsTask

Psychiatrist registration him/her self and his patients data in it. complete backend project.


## Tech Stack

**Server:** Node, Express

**Dependencies:** Mongoose, JWT, validator, nodemon, dotenv, cookie-parser


## API Reference

#### Register a Psychiatrist

```http
 POST http://localhost:8080/api/v1/register
```


#### Adding a patient

```http
 POST http://localhost:8080/api/v1/patient/new
```


#### Updtaing exiting patient

```http
  POST  http://localhost:8080/api/v1/patient/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of patient to update |


#### Get Single Psychiatrist patient details

```http
  GET  http://localhost:8080/api/v1/pyschiatrists/:id
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of Psychiatrist fetch the data |




## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT`

`DB_URI`

`COOKIE_EXPIRE`

`JWT_SECRET`

`JWT_EXPIRESIN`


## Run Locally

Clone the project

```bash
  git clone https://github.com/gopimudumal99/gopimudumal_NodejsTask.git
```

Go to the project directory

```bash
  cd gopimudumal_NodejsTask
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

