import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
async function GET(){
    // the name used for token we use is permtoken
    const token = cookies().get("permtoken")
    if(!token){
        console.log("done");
        return NextResponse.json({token:0})
    }
    if(token){
        console.log("done");
        return NextResponse.json({token:token})
    }
}

async function GETINFO(){
    const prisma = new PrismaClient()
    const token = cookies().get("permtoken")
    // console.log(token);
    const user = await prisma.user.findFirst({
        where:{
            token:token.value,
        }
    })

    // console.log(user);

   
    return await user
}

export {GET,GETINFO}