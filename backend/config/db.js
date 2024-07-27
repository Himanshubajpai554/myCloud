const mongoose = require("mongoose");


 const connectToMongodb=async()=>{
    await mongoose
    .connect(process.env.MONGODBURI)
    .then(() => {
        console.log("DB Connected ");
    })
    .catch((err) => {
        console.log("DB Connect Failed:\n");
        console.log(err.message);
    });
}
module.exports=connectToMongodb