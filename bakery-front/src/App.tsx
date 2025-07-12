import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { UserAccount } from "./pages/UserAccount";

 




export function App (){



  

  return(
      
      <>

      
      
      
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/account" element={<UserAccount />} />
    </Routes>

      </>



  )
}