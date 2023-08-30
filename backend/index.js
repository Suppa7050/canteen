// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");
// const logger = require("morgan");
// const mongoose = require("mongoose");
// const config = require("./config");

// const { dbUrl } = config;
// const { PORT = 3031, LOG_LEVEL = "dev" } = process.env;

// const options = {
// //   keepAlive: true,
//   connectTimeoutMS: 30000,
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const app = express();

// app.use(logger(LOG_LEVEL));
// app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

// const usersRouter = require("./routes/users");
// app.use("/users", usersRouter);

// (async () => {
//   try {
//     await mongoose.connect(dbUrl, options);
//     console.log("Connected to MongoDB");

//     app.listen(PORT, () => {
//       console.log(`Running on http://localhost:${PORT}`);
//     });
//   } catch (err) {
//     console.error("Error connecting to MongoDB:", err.message);
//     process.exit(1);
//   }
// })();

// module.exports = app;


const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
const config = require("./config");

const { dbUrl } = config;
const { PORT = 3031, LOG_LEVEL = "dev" } = process.env;

const options = {
  //keepAlive: true,
  connectTimeoutMS: 30000,
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const app = express();

app.use(logger(LOG_LEVEL));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const usersRouter = require("./routes/users");
app.use("/users", usersRouter);

// Import and use the MenuItem model and menuRoutes router
const MenuItem = require("./models/MenuItem");
const menuRoutes = require("./routes/menuRoutes");
app.use("/api", menuRoutes);
const admins = require("./routes/admins");
app.use('/admins',admins);
const orderRoutes = require('./routes/orderRoutes');
app.use('/orders', orderRoutes);

(async () => {
  try {
    await mongoose.connect(dbUrl, options);
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`Running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Error connecting to MongoDB:", err.message);
    process.exit(1);
  }
})();

module.exports = app;
