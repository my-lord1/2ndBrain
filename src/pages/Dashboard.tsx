 import { Button } from "../components/Button"
import { ShareIcon } from "../icons/ShareIcon"
import { PlusIcon } from "../icons/PlusIcon"
import { Card } from "../components/card"
import { Sidebar } from "../components/SideBar"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../config"
import { useContent } from "../hooks/useContent"
import { CreateContentModal } from "../components/CreateContentModal"
import axios from "axios"
import { LeftArrow } from "../icons/LeftArrow"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();

  useEffect(()=>{
    refresh();
  }, [modalOpen])
  

  
  return <div>
    <Sidebar open={true} />
    <div className="ml-72 p-8 bg-gray-50 min-h-screen">
      <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false);}} />

        <div className="flex justify-between items-center mb-8 w-full">
          <div className="flex items-center gap-4">
            <div >
              <LeftArrow/>
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-500">
            Hi, {localStorage.getItem("username")}
            </h1>
          </div>
        
        <div className="flex gap-4 mb-8">
          <Button onClick={() => {setModalOpen(true)}} variant="primary" text="Add content" startIcon={<PlusIcon />}>
          </Button>
          <Button onClick={async () => {
              const response = await axios.post<{ hash: string }>(`${BACKEND_URL}/api/v1/brain/share`, {
                  share: true
              }, {
                  headers: {
                      "Authorization": localStorage.getItem("token")
                  }
              });
              const shareUrl = `http://localhost:5174/share/${response.data.hash}`;
              alert(shareUrl);
          }} variant="secondary" text="Share brain" startIcon={<ShareIcon />}></Button>
        </div>
        </div>


      <div className="grid grid-flow-col grid-rows-3 gap-3">
        {contents.map(({type, link, title}) => <Card 
            type={type}
            link={link}
            title={title}
        />)}
      </div> ̰
    </div>
  </div>
}


