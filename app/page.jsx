"use client"

import { redirect } from "next/dist/server/api-utils";
import { useRouter } from "next/navigation";

async function getCookie(){
  const res = await fetch("/api/checktoken")
  return await res.json()
}





export default function Home() {
  const router = useRouter();
return(
  <>
  <button className="bg-green-300 rounded-xl text-gray-600 text-2xl p-2 px-8 ml-8 mt-8" onClick={async()=>{
    const token = await getCookie();
    
    if(token.token == 0){
      const res = await fetch("/api/maketoken",{
        method:"POST"
      })
      const {ip,token} =  await res.json()
      localStorage.setItem("token",token)
      router.push("/dashboard")
    }else{
      router.push("/dashboard")
    }
  }}>Get started now!!</button>
  </>
)

         
}
