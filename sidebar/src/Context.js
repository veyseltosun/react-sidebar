import React, {useState, useContext} from "react";

const AppContext = React.createContext()

const AppProvider = ({children}) =>{
   
    const[isSidebarOpen, SetIsSidebarOpen] = useState(false)
    const[isModalOpen, SetIsModalOpen] = useState(false)

    const openSidebar = () =>{
        SetIsSidebarOpen(true)
    }
    const closeSidebar = () =>{
        SetIsSidebarOpen(false)
    }
    const openModal= () =>{
        SetIsModalOpen(true)
    }
    const closeModal = () =>{
        SetIsModalOpen(false)
    }



    return <AppContext.Provider value={{isModalOpen, isSidebarOpen, openModal, openSidebar}}>{children}</AppContext.Provider>
}

export const useGlobalContext = ()=> {
    return useContext(AppContext);
}

export {AppContext, AppProvider}