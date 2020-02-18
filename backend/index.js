const express = require('express');
const mongoose = require('mongoose');
const routes = require("./src/routes");
const cors = require('cors');

//mongoose.connect('mongodb+srv://gilberto:gilberto@cluster0-10q4h.mongodb.net/test?retryWrites=true&w=majority',
mongoose.connect('mongodb://Gilberto:Gilbert123@cluster0-shard-00-00-bl2ey.mongodb.net:27017,cluster0-shard-00-01-bl2ey.mongodb.net:27017,cluster0-shard-00-02-bl2ey.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true&w=majority',
{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).catch();

const app = express();
app.use(cors({origin:"http://localhost:3000"}));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3000);