# express_todo_list

Todo List Express

## Binar Mock Test

Muhammad Akbar

My FrontEnd Todo Repo <a href='https://github.com/barpsma/react_todo_list'>here</a>

## Pertanyaan Mock Test

1. Apakah Kegunaan JSON pada REST API?
2. Jelaskan bagaimana REST API bekerja?

## Jawaban Mock Test

1. JSON digunakan untuk pertukaran data dengan terstruktur antara server dan klien. Developer bisa mengirim data dalam bentuk objek, array, string, angka, boolean, atau null. Selain itu JSON memungkinkan komunikasi antarplatform dengan dukungan dari hampir semua bahasa pemrograman. Server yang ditulis dalam satu bahasa dapat berkomunikasi dengan klien yang ditulis dalam bahasa pemrograman lain melalui pertukaran data dalam format JSON.

2. Secara singkat REST API adalah cara bagi sistem yang berbeda untuk berkomunikasi melalui protokol HTTP. Klien mengirim permintaan menggunakan metode HTTP seperti GET, POST, PUT, PATCH atau DELETE ke server, yang kemudian server memberikan respons dengan menggunakan kode status HTTP dan data dalam format yang ditentukan seperti JSON.

## Deskripsi fitur

- Sequelize ORM
- Relasi Many to One
- JWT Auth
- Express Validator for validation input

## Deployed Project

Documentations <a href='http://103.193.177.199:8000/api-docs/'>http://103.193.177.199:8000/api-docs/</a>

## Installation

Clone this repo

```bash
git clone https://github.com/barpsma/express_todo_list.git
```

Open directory

```bash
cd express_todo_list
```

Install package

```bash
npm install
```

configure .env

```bash
nano .env
```

configure config database

```bash
nano /config/config.json
```

Create database that has been configured in config.json

```bash
sequelize db:create
```

Migrate database

```bash
sequelize db:migrate
```

## Usage

Make sure nodejs already installed on your computer

```javascript
npm start
```

## License

[MIT](https://choosealicense.com/licenses/mit/)
