const home = async(req,res)=>{
    res.send("Hello world");
}

const about = async( req, res)=>{
    res.send("You are at about page");
}

export {home, about};