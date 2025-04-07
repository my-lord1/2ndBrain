import { Button } from "./components/Button"
import { ShareIcon } from "./icons/ShareIcon"
import { PlusIcon } from "./icons/PlusIcon"
import { Card } from "./components/card"
function App() {

  return (
      <div>
      <Button variant="primary" text="Share Brain" startIcon = {<ShareIcon/>}></Button> 
      <Button variant="secondary" text="Add Content" startIcon = {<PlusIcon/>}></Button>
      <Card  type = "youtube" title="test1" link= "https://www.youtube.com/watch?v=q8A2JIYwnn0&ab_channel=iGuruCrazy" />
      <Card  type = "twitter" title="test2" link= "https://x.com/IndianTechGuide/status/1908890060943917285" />
      
      </div>
  )
}

export default App


// https://www.youtube.com/watch?v=q8A2JIYwnn0&ab_channel=iGuruCrazy
// <iframe width="560" height="315" src="https://www.youtube.com/embed/q8A2JIYwnn0?si=uDujZTGS_tuxIJWN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

// https://x.com/IndianTechGuide/status/1908890060943917285
//