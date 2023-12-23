import mongoose from "mongoose";



const dbUrl  = process.env.DB_URI || ''


const connectDb = async ()=>{
    try {
        await mongoose.connect(dbUrl)
        .then(()=>{
            console.log(`Mongodb Connected`)
        })
    } catch (error) {
        console.log(`Mongodb disconnected ${error.message}`)
        setTimeout(connectDb,4000)
    }
}

export default connectDb