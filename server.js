const express = require("express");
const mongoose = require("mongoose");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/social-network", {
    useFindAndModify: false,
    userMewUrlParser: true,
    useUnifiedTopology: true,
});

//log mongo queries to execute
mongoose.set("debug", true);
app.use(require("./routes"));

app.listen(PORT, () => console.log("connected to localhost:${PORT}"));