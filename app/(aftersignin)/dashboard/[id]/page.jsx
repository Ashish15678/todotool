"use client"
export default function Page({params}){
console.log(params.id);
    return(
    
    <>
    <h1 className="text-3xl -text-gray-100 absolute z-1">{params.id}</h1>
    </>
)
}