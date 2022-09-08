# Rate a biz App

## Description:

Company search portal that shows information about the companies, based on the ratings provided by previous employees registered on the web, so that any user can obtain accurate information when looking for companies to work for and can find it easily.

## Developed with:

- HTML
- CSS
- JAVASCRIPT
- NODE.JS
- REACT

## Authors:

- Martín García García: [github](https://github.com/AgoladaMartin)
- Cristina López Rey: [github](https://github.com/krizs981)
- Roberto Palomino de la Cruz: [github](https://github.com/roberto-palomino)

## Prerequisites:

To be able to use this application and test all its functionalities you will need to have the following tools installed:

- NodeJS y npm. To check if you have them, run the following in a terminal:

```bash
node --version
```

Consult [here](https://nodejs.org/es/) on how to install it.

- MySQL Server. If you have Ubuntu from the terminal launch the following line of code:

```bash
sudo apt-get install mysql-server
```

For more information on how to download it you can access [this page](https://dev.mysql.com/downloads/mysql/).

- MySQL Workbench. You can get it from [this page](https://dev.mysql.com/downloads/workbench/) and in Ubuntu from the command terminal with the following line of code:

```bash
sudo snap install mysql-workbench-community
```

## Start-up instructions:

1. To start the application you will need to clone the [repository](https://github.com/roberto-palomino/rate_a_biz) in a folder on your computer.

2. Access the repository folder from the terminal and once inside, install the necessary dependencies with the command:

```bash
   npm install
```

3. In the "/server" folder, rename the file .env.example to .env and fill it with your data.

4. Create a new database in SQL with the name "rate_a_biz" (without quotes), with the command:

```sql
CREATE DATABASE rate_a_biz
```

5. We will need to create the columns for the database, to do this, enter in the terminal the command:

```bash
 npm run initDB
```

6. To initialize the app, access the repository terminal and run the following command:

```bash
 npm start
```

A new window will open in your browser with the application running.


## Endpoints

### Common endpoints

-   POST - [/signup] - Create a user to be activated.
-   GET - [/validate/:registrationCode] - Validate a newly registered user.
-   POST - [/login] - Logs a user in by returning a token.
-   PUT - [/password/recover] - Send an email with password reset code to an email address.
-   PUT - [/password/reset/:recoverCode] - Change a user's password with a reset code.

### Endpoints del usuario

-   GET - [/users/:idUser] - Returns information for a specific user.
-   PUT - [/users/:idUser] - Edit user profile.
-   PUT - [/users/:idUser/avatar] - Edit a user's avatar.
-   PUT - [/users/:idUser/password] - Edit a user's password.
-   DELETE - [/users/:idUser] - Delete a user.

### Endpoints de la empresa

-   GET - [/business] - Return information from companies.
-   GET - [/business/idUser] - Returns information about a specific company.
-   PUT - [/business/:idUser] - Edit company profile.
-   PUT - [/business/:idUser/avatar] - Edit the avatar of a company.

### Endpoints de review

-   GET - [/review/:idBusiness] - Returns reviews of a specific company (filterable by user).
-   GET - [/review/:idUser] - Return user reviews.
-   GET - [/states] - Return the table of provinces.
-   GET - [/jobs] - Return job table.
-   GET - [/sectors] - Returns the sector table.
-   GET - [/salaries] - Returns the salary range table.
-   POST - [/review/:idBusiness] - Create a company review.
-   DELETE - [/review/:idBusiness/:idReview] - Delete a review.
