const mongoose = require("mongoose");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const signinschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    mobno: {
        type: Number,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    dvr_stu: {
        type: String,
        required: true
    },
    pw: {
        type: String,
        required: true
    },
    ev_name: {
        type: String,
        unique: true
    },
    status: {
        type: String
    },
    time: {
        type: Date
    },
    history: [{
        type: String
    }],

    tokens: [{
        token: {
            type: String,
            required: true
        }
    }]


})

signinschema.methods.tokencreation = async function () {
    try {
        console.log("hel")

        const token = jwt.sign({ email: this.email }, "himanshukumarguptaiswritingthiscodeforjwt", { expiresIn: "10 minutes" });
        console.log("hel")

        // console.log(token)
        this.tokens = this.tokens.concat({ token: token })
        console.log("hel")
        await this.save()
        return token
    }
    catch (error) { console.log(error) }
}

signinschema.pre("save", async function (next) {
    if(this.isModified("pw")){
    console.log(this.pw)
    this.pw = await bcrypt.hash(this.pw, 4);
    console.log(this.pw)
    }
    next();
})


const Sign = new mongoose.model("Signin", signinschema);
module.exports = Sign



