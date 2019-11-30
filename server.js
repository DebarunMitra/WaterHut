const express = require("express");
const connectDB = require("./config/db");
const app = express();

app.use(express.urlencoded({extended:true}));

//body parser middleware
app.use(express.json());

//DB Connection
connectDB();
app.get("/", (req, res) => res.send("Working"));

//Middlewares
app.use(express.json({ extended: false }));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, x-auth-token"
  );
  next();
});

//Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/profile", require("./routes/api/profile"));
app.use("/api/consumers", require("./routes/api/consumers"));
app.use("/api/conserve", require("./routes/api/conserve"));




const PORT = process.env.PORT || 5020;
app.listen(PORT, () => console.log(`Server running @ ${PORT}`));
