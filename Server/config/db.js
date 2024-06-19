import mongoose from "mongoose";

const connectDB = async (app) => {
    try
    {
        await mongoose.connect(process.env.CONNECTION_URL)
        app.listen(process.env.PORT, () => console.log(`Server Running on PORT : ${process.env.PORT}`))
    }
    catch(error)
    {
        console.log(error)
    }
}
export default connectDB