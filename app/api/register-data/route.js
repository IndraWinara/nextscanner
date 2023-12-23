import Bar from "@/server/models/bar"
import connectDb from "@/server/utils/db"
import { NextResponse } from "next/server"
export const POST = async (req,res)=>{
    try {
        const {item_id,name,category,harga} = await req.json()
        const payload = {item_id,name,category,harga}
        connectDb()
        await Bar.create(payload)
        return NextResponse.json({
            success : true,
            message : 'Success Register Data'
        },{status : 200})
    } catch (error) {
        return NextResponse.json({
            success : true,
            message : `Error Register Data : ${error.message}`
        },{status : 500})
    }
}