import React, { useState } from 'react'
import Header from '../Header/Header'
import { Exploremenu } from '../Exploremenu/Exploremenu'
import { Fooddisplay } from '../Fooddisplay/Fooddisplay'
import { AppDownload } from '../App/AppDownload'
import { Footer } from '../Footer/Footer'
import { ChatBot } from '../Chat/ChatBot'

export default function Home() {
    const[category,setCategory] = useState("All");
  return (
    <div>
      <Header />
      <Exploremenu category={category} setCategory={setCategory} />
      {/* <Fooddisplay category={category} /> */}
      <AppDownload />
      <Footer />
      <ChatBot />
    </div>
  )
}
