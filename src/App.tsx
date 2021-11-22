import { useEffect, useState } from 'react'
import logo from './logo.svg'
import './index.css'
import { db } from './firebaseDB'

import { collection, query, onSnapshot, orderBy } from "firebase/firestore"

import Navbar from './components/Navbar'
import Header from './components/Header'
import Card from './components/Card'

function App() {
  const [ experience, setExperience ] = useState([])
  const [ loading, setLoading ] = useState(false)

  useEffect(() => {
    const getExperience = async () => {
      setLoading(true)
      const q =  query(collection(db, "experience"), orderBy("date", "asc"))
      onSnapshot(q, (snapShot) => {
        let experienceArr: Object[] = []
        snapShot.forEach(doc => {
          const data = doc.data()
          experienceArr.push(data)
          console.log("DATA: ", data);
        })
        setExperience(experienceArr)
      })
      setLoading(false)
    }
    getExperience()
  }, [])


  if(loading) {
    return (
      <div className="flex w-screen h-screen items-center justify-center space-x-2 animate-bounce">
          <div className="w-8 h-8 bg-purple-400 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-600 rounded-full"></div>
          <div className="w-8 h-8 bg-purple-800 rounded-full"></div>
      </div>
    )
  }

  return (
    <div className="p-6">
      <Navbar />
      <Header />

      <div className="mt-32">
        <h4 className="text-purple-400 font-light text-sm">FEATURED PROJECTS</h4>
        <div className="h-1 w-10 bg-purple-400 mt-2"></div>

        <h1 className="text-4xl font-bold mt-3">MY WORK</h1>
      </div>

      <div className="w-full flex flex-col justify-center mt-10">
        {experience.map(el => 
          <Card key={el.project + el.title} project={el.project} title={el.title} color={el.color} />
        )}
      </div>
    </div>
  )
}

export default App
