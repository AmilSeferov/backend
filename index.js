const express = require('express');
const mysql = require('mysql2');
const app = express();
const cors= require('cors');
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// const card = [
//     {
//         "id": 1,
//         "kartNum": "4169738831774868"
//     },
//     {
//         "id": 2,
//         "kartNum": "4169738831775868"
//     },
//     {
//         "id": 3,
//         "kartNum": "4169738831774848"
//     },
//     {
//         "id": 4,
//         "kartNum": "4169738823474868"
//     },
//     {
//         "id": 5,
//         "kartNum": "4169738456274868"
//     },
// ]
const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'amil',
    database: 'books'
  });
app.get('/books', (req, res) => {
    // const id = parseInt(req.params.id)
    // console.log(id)
    // const item = card.find(item => item.id === id)
   
    // if (item) {
    //     res.status(200).json(item)
    // }
    // else {
    //     res.status(404).json({ err: 404 })
    // }
    connection.query('SELECT * FROM book', 
    (err, data) => {
      if (!err) {
        res.status(200).json(data)
        // console.log(data);
      }
    });
})
app.get('/books/:id', (req, res) => {
  console.log(req.params.id)
  const id = parseInt(req.params.id)
 
  
  connection.query('SELECT * FROM book', 
  (err, data) => {
    let item = data.find(item=>item.id===id)
    if (item) {
      res.status(200).json(item)
  }
  else {
      res.status(404).json({ err: 404 })
  }
    // if (!err) {
    //   res.status(200).json(data)
    //   // console.log(data);
    // }
  });
})
// app.get('/books/type/:id', (req, res) => {
//   // const type = parseInt(req.params.id)
//  console.log(req.params.id)
  
//   connection.query('SELECT * FROM book', 
//   (err, data) => {
//     let item = data.find(item=>item.type===id)
//     if (item) {
//       res.status(200).json(item)
//   }
//   else {
//       res.status(404).json({ err: 404 })
//   }
//   });
// })


// app.post('/users', (req, res) => {

//     console.log(req.body)
    
//     connection.query(`INSERT INTO users
//     (username, age, email, birth_date)
//   VALUES
//     ('${req.body.username}', ${req.body.age}, '${req.body.email}', '${req.body.birth_date}');`,
//     (err, data) => {
//       if (!err) {
//         res.status(200).json(data)
//       }
//       else{
//         res.status(400).json({message:"Error"})
//       }
//     });
// })

// app.put('/users/:id', (req, res) => {
// const id=req.params.id
//     console.log(req.body)
//     connection.query(`SELECT * FROM users WHERE id = ${id}`, 
//     (err, data) => {
//     connection.query(`UPDATE users
//     SET email = '${req.body.email}',
//     username='${req.body.email}',
//     age=${req.body.age},
//     birth_date='${req.body.birth_date}'
//     WHERE id = '${id}';`,
//     (err, data) => {
//       if (!err) {
//         res.status(200).json(data)
//       }
//       else{
//         res.status(400).json({message:"Error"})
//       }
//     });
// });
// })

// // app.post('/users', (req, res) => {

// //     const { username, age, email, birth_date } = (req.body)

// //     const sql = `INSERT INTO users
// //     (username, age, email, birth_date)
// //   VALUES
// //     ('${username}', ${age}, '${email}', '${birth_date}');`
// //     console.log(sql)
// //     connection.query(sql, (err, data) => {
// //         if (!err) {
// //             res.status(200).json(data)
// //         }
// //         else {
// //             res.status(400).json({ message: "Error" })
// //         }
// //     });
// // })
//   connection.connect((err) => {
//     if (!err) { 
//       console.log("SUCCESS");
//     }
//   });

//   const fs = require('node:fs');

//   fs.readFile('./tasks.json', 'utf8', (err, data) => {
//     const newa = JSON.parse(data)
//     if (err) {
//       console.error(err);
//       return;
//     }
//     else{
//         console.log(newa)

//         // newa.map(item=>{
//         //      connection.query(`INSERT INTO usert
//         //         (description, due, employee, finished)
//         //       VALUES {
//         //         ('${item.description}', '${item.due}', '${item.employee}', '${item.finished}')};`,
//         //         (err, data) => {
//         //           if (!err) {
//         //             res.status(200).json(data)
//         //           }
//         //           else{
//         //             res.status(400).json({message:"Error"})
//         //           }
//         //         });
            
//         // })
//     //     connection.query(`INSERT INTO usert
//     //     (description, due, employee, finished)
//     //   VALUES {
//     //     ('create ER-diagram', '2020-05-20', 'Alex', '1991-05-19')};`,
//     //     (err, data) => {
//     //       if (!err) {
//     //         res.status(200).json(data)
//     //       }
//     //       else{
//     //         res.status(400).json({message:"Error"})
//     //       }
//     //     });
//     }
    
//   });
  

app.listen(5000, (err) => {
    if (!err) {
        console.log('Server is going on')
    }
})





// const axios = require('axios');

// const options = {
//   method: 'GET',
//   url: 'https://tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com/getMLBBettingOdds',
//   params: {
//     gameDate: '20230703',
//     playerProps: 'true'
//   },
//   headers: {
//     'X-RapidAPI-Key': 'aa3b8360c3msh546211a45091087p18ded0jsnd590e1c94f9e',
//     'X-RapidAPI-Host': 'tank01-mlb-live-in-game-real-time-statistics.p.rapidapi.com'
//   }
// };
// async ()=>{
// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }}