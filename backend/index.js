const express = require("express");
const mainrouter = require("./routes/index")
const app = express();

app.use("/api/v1",mainrouter);
// ./api/v1/user/signup ./api/v1/user/signin
// ./api/v1/account/...
app.listen(3000);