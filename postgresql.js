// const { Client } = require('pg');

// const client = new Client({
//     host: "localhost",
//     user: "findr",
//     post: 5432,
//     password: "Aug3rd01",
//     database: "findr"
// });

// client.connect();

// const username = 'Bob';
// const query = `SELECT DISTINCT * FROM users WHERE username = '${username}'`;


// exports.getItems = (req, res) => {
//     client.query(query, (err, result) => {
//         if (err) {
//             console.log(err);
//         } else {
//             console.log(result);
//         }
//         client.end();
//     });
// }


// exports.getItems = (req, res) => {
//     UserItems.findOne({ username: res.locals.user.username }, (err, userItems) => {
//         if (err) {
//             console.log(err);
//             res.status(500).send({ message: 'Internal server error' });
//         } else {
//             res.send(userItems.items);
//         }
//     });
// }





//CREATE users TABLE IF NOT EXISTS

// client.query(`
//     CREATE TABLE IF NOT EXISTS users(
//     id BIGSERIAL NOT NULL PRIMARY KEY,
//     username VARCHAR(15) NOT NULL,
//     password VARCHAR(100) NOT NULL
// );
// `, (err, res) => {
//     if (!err) {
//         console.log(res)
//             //log new user
//     } else {
//         console.log(err.message)
//     }
//     client.end();
// });

// product TABLE

// client.query(`
//     CREATE TABLE IF NOT EXISTS product(
//     id BIGSERIAL NOT NULL PRIMARY KEY,
//     name VARCHAR(15) NOT NULL,
//     price INT NOT NULL,
//     user_id BIGINT REFERENCES users (id)
// );
// `, (err, res) => {
//     if (!err) {
//         console.log(res)
//             //log new user
//     } else {
//         console.log(err.message)
//     }
//     client.end();
// });













//DROP users TABLE

// client.query(`
// DROP TABLE users2;
// `, (err, res) => {
//     if (!err) {
//         console.log(res)
//             //log new user
//     } else {
//         console.log(err.message)
//     }
//     client.end();
// });











//INSERT bob into users TABLE

// const id = 1
// const username = 'Bob'
// const password = '123'

// client.query(`
// INSERT INTO users (  
//     id,
//     username,
//     password )
// VALUES ( 
//     ${id},
//     '${username}',
//     '${password}'
//     );
// `, (err, res) => {
//     if (!err) {
//         console.log(res)
//             //log new user
//     } else {
//         console.log(err.message)
//     }
//     client.end();
// });

//INSERT product

// const id = 2
// const name = 'Apple'
// const price = 20
// const user_id = 1

// client.query(`
// INSERT INTO product (  
//     id,
//     name,
//     price,
//     user_id )
// VALUES ( 
//     ${id},
//     '${name}',
//     ${price},
//     ${user_id}
//     );
// `, (err, res) => {
//     if (!err) {
//         console.log(res)
//             //log new user
//     } else {
//         console.log(err.message)
//     }
//     client.end();
// });