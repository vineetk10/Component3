const express = require('express');
var cors = require('cors');
var mongoose = require('mongoose');

require('dotenv').config();

var app = express();
const port = process.env.PORT || 4000;
app.use(cors({
  origin: ["http://34.203.243.32:3000"],
  credentials: true,
}));


app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://34.203.243.32:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});




app.use(express.json());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri);
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})

const deliveriesRouter = require('./routes/deliveries');
const robotsRouter = require('./routes/robots');
const Robot = require('./models/robot.model');
const Delivery = require('./models/delivery.model');








app.use("/deliveries", deliveriesRouter);
app.use('/robots', robotsRouter);
app.use('/robotDetails/', (req,res)=>{
  Robot.find({robotname: req.body.robotName})
    .then(robots => res.json(robots))
    .catch(err => res.status(400).json('Error: ' + err));
})

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
