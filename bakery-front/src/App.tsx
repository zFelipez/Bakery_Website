import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
 
import { UserAccountLogin } from "./pages/UserAccount/Login";
import { UserAccountSignUp } from "./pages/UserAccount/SignUp";

 




export function App (){



  

  return(
      
      <>

      
      
      
    <Routes>
      <Route path="/" element={<Home />} />
       <Route path="/account/login" element={<UserAccountLogin />} />
       <Route path="/account/signup" element={<UserAccountSignUp />} />
    </Routes>

      </>



  )
}