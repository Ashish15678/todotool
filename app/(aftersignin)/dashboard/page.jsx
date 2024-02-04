import { GETINFO } from "@/app/api/checktoken/route"
import MainPageComp from "@/components/mainpagetasktodaycomponent"

const user = await GETINFO()
console.log(user.name);

export default function Page(){
    return(
        <>
        <div className="dashboardmaindiv">

                <div className="dashboardmaintwodiv">
                <MainPageComp name={"Tasks today"} totaltasks={"10"} taskdone={"7"} />
                <MainPageComp name={"Tasks monthly"} totaltasks={"100"} taskdone={"65"}/>
                <MainPageComp name={"Tasks yearly"} totaltasks={"1000"} taskdone={'155'}/>
                </div>
                <p className="text-gray-300 text-2xl mt-4 ml-4 p-8 text-bolder ">Today board : </p>  
      
                <div className=" ">
                    <button className="absolute z-1 rounded-3xl text-bolder text-gray-100 bg-green-600 p-2 text-2xl">Create new Task</button>
                </div>

        </div>
      


        </>
    )
}