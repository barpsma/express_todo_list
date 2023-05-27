# express_todo_list

Todo List Express

## Binar Mock Test

Muhammad Akbar

My FrontEnd Todo Repo <a href='https://github.com/barpsma/react_todo_list'>here</a>

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
