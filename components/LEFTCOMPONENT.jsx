import Link from "next/link"
export default function LEFTCOMPONENT({link,name}){
    return(
        <>
        <div className="block">

        <Link href={link} className="linkleftcomp">
        <button id="buttonleftcomp" className="hover:bg-green-600 hover:text-gray-900 rounded-xl py-2 px-12 mt-2 ml-2" onClick={()=>{
            const btn = document.getElementById("buttonleftcomp")
            btn.style.backgroundColor = "#16a34a";
            btn.style.color = "black";
        }            
        }>
            {name}
        </button>
        </Link>
        </div>
        </>
    )
}