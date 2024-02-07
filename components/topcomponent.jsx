// import { GETINFO } from "@/app/api/checktoken/route"

// async function GETUSER(){
//     const user = await GETINFO()
//     // console.log( "from terminal",user , "from terminal");
//     return await user
// }

// const user = await GETUSER()

// console.log(user);
export default function TOPCOMPONENT(){
  
    return(
        <>
        {/* <title>{user.name}</title> */}
        <div className="topcompptag">TODO TOOl
        <div className="topcompdiv ">
            {/* <span className="text-gray-300">Hii  {" "}
                {user.name?user.name:"no-name"}</span> */}
            <p className="text-gray-500 text-sm"> lets check your todays tasks</p>
        </div>
        </div>
        </>
    )
}