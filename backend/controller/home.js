const home = async(req,res)=>{
    console.log("Hello you are at home");
    res.send("Hello world");
}

const about = async( req, res)=>{
    console.log("Hello you are at about");
    res.send("You are at about page");
}

export {home, about};