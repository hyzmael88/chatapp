import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'

import {auth} from './firebase'
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from './components/Chat'

function App() {
  const [user] = useAuthState(auth)
  //console.log(user)
  const style={
    appConteiner: `max-w-[728px] mx-autp text-center`,
    sectionConteiner: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative`
  }

  return ( 
    <div className={style.appConteiner}>
      <section className={style.sectionConteiner}>
        <Navbar/>
        {user? <Chat/>:null}
    </section>

    </div>
  )
}

export default App
