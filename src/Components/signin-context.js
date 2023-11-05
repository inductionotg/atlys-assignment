import { createContext ,useContext} from "react";
import { useState } from "react";
const CloseContext =  createContext({})

const CloseProvider =({children})=>{
    const [showModal1, setShowModal1] = useState(false); 
    const [showModal2, setShowModal2] = useState(false);
    return (
        <CloseContext.Provider value={{showModal1,setShowModal2,showModal2,setShowModal1}}>
            {children}
        </CloseContext.Provider>
    )
}
const useCloseModal = () =>useContext(CloseContext)
export {useCloseModal,CloseProvider}