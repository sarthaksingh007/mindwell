import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from './component/footer/Footer'
import Header from './component/header/Header'
import Home from './component/home/Home'
import Login from './component/login/Login';
import Choice from './component/choice/Choice';
import User from './component/User/User';
import SignUp from './component/signup/SignUp';
import FindExpert from './component/findExpert/FindExpert';
import SetAvatar from './component/setAvatar/setAvatar'
import Chat from './component/chat/Chat'

import "./style/footer1.scss"
import "./style/app.scss"
import "./style/header.scss"
import "./style/aboutus.scss"
import "./style/services.scss"
import "./style/faq.scss"
import "./style/contact.scss"
import "./style/home.scss"
import "./style/login.scss"
import "./style/chat.scss"
import "./style/user.scss"
import "./style/responsive.scss"
import "./style/signup.scss"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path='/user' element={<User/>}/>
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/choice' element={<Choice/>}/>
          <Route path='/setAvatar' element={<SetAvatar/>}/>
          <Route path='/chat' element={<Chat/>}/>
          <Route path='/findExpert' element={<FindExpert/>}/>
    
          <Route path='/findexperts' element={<FindExperts/>}/>
          <Route path='/experts' element={<Expert/>}/>
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  )
}

export default App

