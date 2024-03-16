
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import OurRecipes from './components/OurRecipes'
import SingleCard from './SingleCard'
import { useEffect, useState } from 'react'

function App() {
  const [foodCards, setFoodCards]=useState([])
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setFoodCards(data))
  },[])

  return (
    <>
    <header className='w-5/6 mx-auto'>  
      <NavBar></NavBar>
      <Hero></Hero>
    </header>
    <main className="w-5/6 mx-auto">
      <section>
       <OurRecipes></OurRecipes>
      </section>
      <section>
        <div>
        <div className="md:w-3/5 grid md:grid-cols-2 gap-4">
          {
            foodCards.map((foodCard,idx)=> <SingleCard key={idx} foodCard={foodCard}></SingleCard>)
          }
        </div>
        <div>
          {/* == sideBar section == */}
        </div>
        </div>

      </section>
    </main>
    
    </>
  )
}

export default App
