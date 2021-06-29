const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");


const userRoutes = require("./routes/userRoute");
const HttpError = require("./utils/httpError");

app.use(cors());
const port = 3002;
app.use(bodyParser.json());

app.use("/user", userRoutes);



app.use((req, res, next) => {
  const error = new HttpError("Page not found", 405);
  throw error;
});

app.use((error, req, res, next) => {
  res.status(error.code);
  res.json({
    message: error.message || "Unknown error occured",
    code: error.code,
  });
});


mongoose.connect('mongodb+srv://kskartiksharma:Papa@1511@mernstackcluster.sesac.mongodb.net/SocialMediaProject?retryWrites=true&w=majority',
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }).then(() => {
    app.listen(port, () => {
      console.log(`App running on http://localhost:${port}`)
    });
  }).catch(err => {
    console.log(err);
  });