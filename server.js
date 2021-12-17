const express = require('express');
const app = express();



app.use("/users/", require("./routes/usersRoute"));

app.listen(8000, function(){
    console.log("express server has started");
})