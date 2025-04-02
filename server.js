const express = require("express");
const mongoose = require("mongoose");
const Router = require("./routes")

const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://holyknight03:<db_password>@learnmongo.ce5vwcc.mongodb.net/?retryWrites=true&w=majority&appName=LearnMongo",
    {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }
);

