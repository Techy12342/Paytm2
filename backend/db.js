const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/paytm");
const userschema = mongoose.Schema({
    username: String,
    password: String,
    firstname: String,
    lastname: String

})
const user = mongoose.model("User",userSchema);
module.exports = {
    User
}