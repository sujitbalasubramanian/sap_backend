const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const multer = require("multer");

//routes
const eventRoutes = require('./routes/event_routes')
const profileRoutes = require('./routes/profile_routes')
const sapRoutes = require('./routes/sap_routes')
const userRoutes = require('./routes/user_routes')
const staffRoutes = require('./routes/staff_routes')


//initilizing
const app = express();
app.use('/public', express.static(path.join(__dirname, "/uploads")));
dotenv.config();
app.use(express.json({extended: true}));
app.use(express.urlencoded({extended: true}));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs")

//db connection
mongoose.connect(process.env.DB).then(() => {
    console.log('Db connected')
}).catch(err => {
    console.log(err.message, 'oops err');
});

//express app
app.use('/user', userRoutes)
app.use('/staff', staffRoutes)
app.use('/sap', sapRoutes)
app.use('/profile', profileRoutes)
app.use('/event', eventRoutes)

app.get('/', (req, res) => {
    res.send("KEC SAP Portal")
});


//port
const port = process.env.port || 8088
app.listen(port, () => {
    console.log(`Server is running at port ${port}`)
});
