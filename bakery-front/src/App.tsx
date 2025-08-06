import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
 
import { UserAccountLogin } from "./pages/UserAccount/Login";
import { UserAccountSignUp } from "./pages/UserAccount/SignUp";
import { Contact } from "./pages/Contact";
import { AiChatPage } from "./pages/AIChatPage";

 




export function App (){



  

  return(
      
      <>

      
      
      
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Contact" element={<Contact />} />
       <Route path="/account/login" element={<UserAccountLogin />} />
       <Route path="/account/signup" element={<UserAccountSignUp />} />
       <Route path="/AiChat" element={<AiChatPage />} />
    </Routes>

      </>



  )
}