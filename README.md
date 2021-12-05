# Nava
## Main Stacks

[![N|Solid](http://www.ahmetd.com/works/ci/ci-new-logo-04-02.jpg)](https://codeigniter.com/user_guide/intro/index.html)
[![N|Solid](https://camo.githubusercontent.com/a492d6882b7e8703c681f48e72176860187c8fe9158f23f7a3707cb48bda4a32/68747470733a2f2f626c6f672d6173736574732e726973696e67737461636b2e636f6d2f323031362f4a616e2f72656163745f626573745f7072616374696365732d313435333231313134363734382e706e67)](https://reactjs.org/)


Nava is web application with RESTFUL API created for NAVA interview homework.


# Features
Nava handles CRUD operation
- Create images
- Read image
- Update already created images
- Delete images

# Tech

NAVA project uses a number of open source projects:

- [Codeigniter]
- [React]
- [Composer]
- [MYSQL]


# Installation

### Backend
Requirements:
 - PHP version 7.3 or newer is required, with the [\*intl\* extension] and [\*mbstring\* extension] installed.
 - The following PHP extensions should be enabled on your server: *php-json, php-mysqlnd, php-xml*
 - MySQL (5.1+) via the MySQLi driver

 - Composer package manager installed. (minimum version 2.1.6)

Install the MYSQL dump
```sh
cd nava
mysql -u [username] -p
CREATE DATABASE database_name;
USE database_name;
SOURCE dump.sql;
```

Install the dependencies and start the server.
```sh
cd nava/backend
composer install
```
Create the .env file based on the env file in the nava/backend directory.

Set the database configuration in the .env file under the # DATABASE comment.
And after that we can start the server:
```sh
php spark serve
```

### Frontend

Newest Node version is required.

```sh
cd nava/frontend
npm install
```
Copy the envExample.js to nava/frontend and rename it to: env.js
And after that we can start the server:
```sh
npm start
```
# RESTful Routes

Nava contains the following routes to provide response:

| URL | HTTP Verb |  Action |  Description
| ------ | ------ | ------ |------ |
| /images | GET  | Index | Show all images
| /images | POST  | Create | Create a new image
| /images/:id | GET | Show | Show image with :id
| /images/:id | PUT  | Update |  Update image with :id
| /images/:id | DELETE  | Destroy |  Delete image with :id


[//]: # (These are reference links used in the body of this note and get stripped out when the markdown processor does its job. There is no need to format nicely because it shouldn't be seen. Thanks SO - http://stackoverflow.com/questions/4823468/store-comments-in-markdown-syntax)

   [MYSQL]: <https://www.mysql.com/>
   [React]: <https://reactjs.org/>
   [Codeigniter]: <https://codeigniter.com/>
   [Composer]: <https://getcomposer.org/>
   [\*intl\* extension]: <https://www.php.net/manual/en/intl.requirements.php>
   [\*mbstring\* extension]: <https://www.php.net/manual/en/mbstring.requirements.php>
