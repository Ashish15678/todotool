"use client"
import LEFTCOMPONENT from "./LEFTCOMPONENT";
export default function LEFTCOMP(){


          
        return(
          <>
          <main className="parentmainsection">
            <section className="leftmainsection">
              <div className="childleftmainsection">
              <LEFTCOMPONENT link={"/dashboard"} name={"Dashboard"}/>
              <LEFTCOMPONENT link={"/mytasks"} name={"My Task"}/>
              <LEFTCOMPONENT link={"/analytics"} name={"Analytics"}/>
              <LEFTCOMPONENT link={"/watchlater"} name={"Watch later"}/>
              <LEFTCOMPONENT link={"/team"} name={"Team"}/>
              <LEFTCOMPONENT link={"/settings"} name={"Settings"} />
              </div>
            </section>
          </main>
          </>
        )
    


}