const mongoose = require('mongoose')

const connection_string = process.env.CONNECTION_STRING

mongoose.connect(connection_string).then((res)=>{
    console.log('Mongodb Atlas connected with Server');
}).catch((err)=>{
    console.log("Connection failed");
    console.log(err);
})