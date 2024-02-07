"use server"
import { PrismaClient } from "@prisma/client"
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

function randomString(length) {
    var result = '';
    var chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (var i = length; i > 0; --i) result += chars[Math.floor(Math.random() * chars.length)];
    return result;
}

async function POST(req){
const prisma = new PrismaClient();
const token = randomString(32);
const ip = req.ip|| req.headers.get('x-forwarded-for')
const res = await prisma.user.create({
    data:{
        token:token,
        ip:ip,
    }
})

cookies().set('permtoken',token)
return NextResponse.json({ip:ip , token:token})
}

export {POST}
