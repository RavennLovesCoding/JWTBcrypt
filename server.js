const express = require("express");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const app = express();
const PORT = 5000;

app.use(express.json());
app.use(cors());

//can replace with a db
const users = [];

app.post("/api/signup", async (req, res)=>{
    try{
        //Checks if username is unique.
        const { username, password } = req.body;
        if(username.find((user)=>user.username === username)){
            return res.status(400).json(message: "Username unavailable")
        }
        //password in the bcrypt hash comes from user post method in const above
        //number is the password legnth without hash value
        const hashedPassword = await bcrypt.hash(password, 12)
        users.push({ username, password: hashedPassword });
    } catch (error) {

    }
})

app.listen(PORT, ()=>{
    console.log('Listening to port ${PORT}');
})
