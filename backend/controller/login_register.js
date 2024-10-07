import User from "../db/user.js";


const register = async (req, res) => {
    const data = req.body;
    const userData = {
        name: data.name,
        email: data.email,
        password: data.password,
    };
    const newUser = new User(userData);
    try {
        const userInfo = await User.find({ email: data.email });
        if (userInfo.lenght > 0) {
            return res.status(409).json({ message: "Email ID already exists!" });
        } else {
            const tokenData = await newUser.save();
            return res.status(200).json({ message: "Registered Successfully!", success: true, token: tokenData[0]["_id"] });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Something went wrong with database. Please retry later!" });
    }
}

const login = async (req, res) => {
    const data = req.body;
    const email = data.email;
    const password = data.password;
    try {
        const userInfo = await User.find({ email: email, password: password });
        if (userInfo.length > 0) {
            return res.status(200).json({ message: "LoggedIn Successfully", success: true, token: userInfo[0]["_id"] });
        } else {
            return res.status(401).json({ message: "Email or Password might be wrong or You may not be registered!" });
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ message: "Something went wrong with database. Please retry later!" });
    }
}

export { register, login };
