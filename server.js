var express=require("express");
var app=express();
var mongoose=require("mongoose");
const bodyParser=require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
require('dotenv').config();
var PORT=process.env.PORT || 5000;

const userRoutes = require("./routes/User");

mongoose.set('useNewUrlParser',true);
mongoose.set('useUnifiedTopology',true);
mongoose.set('useFindAndModify',false);
mongoose.set('useCreateIndex',true);
mongoose.connect("mongodb+srv://fayeque123:fayeque123@devconnector-mxfos.mongodb.net/test?retryWrites=true&w=majority");

app.use(bodyParser.json());
app.use(cors());
app.use(cookieParser());

app.get("/",(req,res) => {
    res.send("App");
})


app.use("/api",userRoutes);
app.use("/api",require("./routes/auth"));
app.use("/api",require("./routes/adminSide"));
app.use("/api",require("./routes/employeeSide"));
// app.use("/api/posts",require("./routes/leave"));
// app.use("/api/profile",require("./routes/api/profile"));

app.listen(PORT,(req,res) =>{
    console.log("server started at 5000");
})