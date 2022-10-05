Before running the app please use the following command
`npm install`

After doing that Run the following Command
`npm run dev`

<h1>Explanation About The Code:</h1>
i have used sequelize npm module in order to automate the process of creating database instead of manually setting it up. Sequelize is the ORM for the SQL databases which can help you write queries in short manner for example you need to search a table, In sql you will write a whole query with sequelize you can just do this: Db.find(), Similar to what you do with MongoDb.

The code simply uses some modules major is express which is used to create the server. The main part of the API is encrypting the credit card so let's jump into that.

I have created a folder named "helpers" in that there is a encrypt.js file. It takes a text from the user and encrypts the data. It returns an iv and encrypted data both as an object and both are crucial in order to decrypt the data later. Therefore we will insert both in the database.
