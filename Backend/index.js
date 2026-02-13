// //import module httpมา 
// const http = require('http');
// const host = 'localhost';
// const port = 8000;

// // //กำหนดค่าserver

// // const requestListener = function(req, res){
// //     res.writeHead(200);
// //     res.end('Hello World This is my first server');
// // } 

// // //run server
// // const server = http.createServer(requestListener);
// // server.listen(port, host, () =>{
// //     console.group(`server is running on http://${host}:${port}`);
// // });





const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 8000;

app.use(bodyParser.json());

let users =[];
let counter = 1;

/**
  GET /user - ดึงข้อมูลผู้ใช้ทั้งหมด
  POST /users - เพิ่มผู้ใช้ใหม่
  GET /users/:id - ดึงข้อมลผู้ใช้ตาม ID
  PUT /users/:id - แก้ไขผู้ใช้งานตาม ID ที่บันทึก
  DELETE /users/:id - ลบผู้ใช้ตาม ID ที่บันทึก
 */

app.get('/test', (req,res) => {
    let user = {
        name: "John Doe",
        age: 30,
        email: "John.doe@example.com"
    };
    res.json(user);
});


// path: = GET /user
app.get('/users', (req,res) => {
    res.json(users);
});



// path: = POST /user
app.post('/user', (req,res) => {
    let user = req.body;
    user.id = counter;
    counter += 1;

    users.push(user);
    res.json({
        message: 'Useer added successfully',
        user: user
    })
    res.send(req.body);
});

//path: = PUT /user/:id
// app.put('/user/:id', (req,res) =>{
//     let id = req.params.id;
//     let updateUser = req.body;
//     //หา user จาก id ที่ส่งมา

//     //เมื่อหาเสร็จแล้ว ให้อัพเดต users

//     //ส่ง users  ที่อัพเดตแล้วกลับไป
//     let selectedIndex = users.findIndex(user => {
//         if(user.id == id){
//             return true;
//         }else{
//             return false;
//         }
//     });

//     // res.send(selectedIndex + '');

//     users[selectedIndex].firstName = updateUser.firstName || users[selectedIndex].firstName;
//     users[selectedIndex].lastName = updateUser.lastName || users[selectedIndex].lastName;
    
//     res.json({
//         message: 'User upated successfully',
//         data: {
//             user: updateUser,
//             indexUpdate : selectedIndex
//         }
//     })
// })

app.patch('/user/:id', (req,res) =>{
    let id = req.params.id;
    let updateUser = req.body;
    //หา user จาก id ที่ส่งมา

    //เมื่อหาเสร็จแล้ว ให้อัพเดต users

    
    //ส่ง users  ที่อัพเดตแล้วกลับไป
    let selectedIndex = users.findIndex(user => user.id ==id);
        
    if(updateUser.firstName){
        users[selectedIndex].firstName = updateUser.firstName;
    }
    if(updateUser.lastName){
        users[selectedIndex].lastName = updateUser.lastName;
    }

    // res.send(selectedIndex + '');


    res.json({
        message: 'User upated successfully',
        data: {
            user: updateUser,
            indexUpdate : selectedIndex
        }
    })
})

app.delete('/users/:id', (req,res) => {
    let id = req.params.id;

    //หา index จาก id ที่ส่งมา
    let selectedIndex = users.findIndex(user => user.id ==id);
    
    //ลบ user ออกจาก users
    users.splice(selectedIndex,1)

    res.json({
        message: 'User deleted successfully',
        indexDelete: selectedIndex
    })

})



app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});










// const express = require('express');
// const app =express();
// const port = 8000;

//app.get('/',)req,res) => {
    //res.send('Hello World!')
    //});
//app.listen(port, () => {
    //console.log(`Sever is running on http://)})
