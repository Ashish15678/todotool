export default function MainPageComp({name,taskdone,totaltasks}){
    return(
        <>
        <div  className="bold ml-6 text-gray-100 mt-4  xl:p-4 xl:px-10 md:px-6 sm:px-4 sm:p-2 rounded-xl">
        <p className="text-2xl ">{name}</p>
        <progress value={taskdone} max={totaltasks}></progress>
        <p className="text-gray-400 r-8">{(taskdone/totaltasks) *100}</p>
        </div>
        </>
    )
}