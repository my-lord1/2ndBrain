import { Button } from "../components/Button"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { Card } from "../components/card"
import { Sidebar } from "../components/SideBar"

export function Dashboard() {

  return (
      <div className = "p-4" >
        <div >
          <Sidebar/>
        </div>
        <div className = "flex justify-end gap-x-4 ">
          <Button variant="primary" text="Share Brain" startIcon = {<ShareIcon/>}></Button> 
          <Button variant="secondary" text="Add Content" startIcon = {<PlusIcon/>}></Button>
        </div>
        <div className= "flex justify-center ">
          <Card  type = "youtube" title="test1" link= "https://www.youtube.com/watch?v=q8A2JIYwnn0&ab_channel=iGuruCrazy" />
          
          <Card  type = "twitter" title="test2" link= "https://x.com/IndianTechGuide/status/1908890060943917285" />
        </div>
      </div>
  )
}


