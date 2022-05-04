const express = require("express");
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require("./config/db");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT || 9000;
const serverURI = `http://localhost:${port}`;

connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/products", require("./routes/productRoutes"));
app.use("/api/orders", require("./routes/orderRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`Server started at ${serverURI}`));