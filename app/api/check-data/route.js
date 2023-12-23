import Bar from "@/server/models/bar";
import connectDb from "@/server/utils/db";
import { NextResponse } from "next/server";

export const POST = async (req, res) => {
  try {
    const { item_id } = await req.json();
    connectDb();
    const data = await Bar.findOne({ item_id });
    if (!data) {
      return res.status(401).json({
        success: false,
        message: `Item not found`,
      });
    }

    return NextResponse.json(
      {
        success: true,
        data,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        success: true,
        message: `Error Get Data : ${error.message}`,
      },
      { status: 500 }
    );
  }
};
