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
import { TrashIcon } from "../icons/TrashIcon"
import { DeleteContentModal } from "../components/DeleteContentModal"

export function Dashboard() {
  const [modalOpen, setModalOpen] = useState(false);
  const {contents, refresh} = useContent();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false); // ADD THIS at top



  
  

  useEffect(()=>{
    refresh();
  }, [modalOpen])


  
  

  
  return <div>
      <Sidebar open={isSidebarOpen} />
      <div className={`transition-all duration-300 ${isSidebarOpen ? "ml-72" : "ml-0"} p-8 bg-gray-50 min-h-screen`}>
      <CreateContentModal open={modalOpen} onClose={() => {setModalOpen(false);}} />
      <DeleteContentModal open={deleteModalOpen} onClose={() => setDeleteModalOpen(false)} />


        <div className="flex justify-between items-center mb-8 w-full">
          <div className="flex items-center gap-4">
            <div onClick={()=>setIsSidebarOpen(!isSidebarOpen)} className= {`cursor-pointer transform transition-transform duration-300 ${isSidebarOpen ? "" : "rotate-180"}`}>
              <LeftArrow/>
            </div>
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-purple-500 to-purple-500">
            Hi, {localStorage.getItem("username")}
            </h1>
          </div>
        
        <div className="flex gap-4 mb-8">
          <Button onClick={() => {setModalOpen(true)}} variant="primary" text="Add content" startIcon={<PlusIcon />} >
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
          <Button variant= "primary" text="Delete Content" startIcon={<TrashIcon/> }
            onClick={() => setDeleteModalOpen(true)}
          ></Button>
        </div>
        </div>


      <div className="grid grid-flow-col grid-rows-3 gap-3">
        {contents.map(({type, link, title}) => (<Card 
            type={type}
            link={link}
            title={title}


        />))}
      </div> ̰
    </div>
  </div>
}


