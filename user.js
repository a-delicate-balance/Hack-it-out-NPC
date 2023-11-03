const User =  require("../users")

async funtion handlesignup(req, res) {
    const { name,email, password} = req.body;
    await User.create({
        name,
        email,
        password,
    });
    return res.redirect("/");
}

async funtion handlelogin(req, res) {
    const { email, password} = req.body;
    await User.findOne({email, password});
    if(!user) return res.render("login",{
        error : "invalid username or password"
    });
    return res.redirect("/");
}

module.exports = {
    handlesignup,
    handlelogin,
}