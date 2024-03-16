
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import OurRecipes from './components/OurRecipes'
import SingleCard from './SingleCard'
import { useEffect, useState } from 'react'
import WantCook from './WantCook'
import CurrentCooking from './CurrentCooking'


function App() {
  const [foodCards, setFoodCards]=useState([])
  const [wantCookItems, setWantCookItems]=useState([])
  const [currentCookings, setCurrentCookin]=useState([])
 
  useEffect(()=>{
    fetch('./data.json')
    .then(res=>res.json())
    .then(data=>setFoodCards(data))
  },[])

  const handleWantToCook=(cookItem)=>{
    const isExist = wantCookItems.find(wantCookItem => wantCookItem.recipe_id == cookItem.recipe_id)
    if(!isExist){
      setWantCookItems([...wantCookItems,cookItem])
    }else{
      alert("Don't do this")
    }
  }

  const handlePreparing=(recipe_id)=>{
    const newRecipe = wantCookItems.filter(cookItem => cookItem.recipe_id != recipe_id)
    console.log(newRecipe)
    setWantCookItems(newRecipe)
    const mostNewRecipe = newRecipe.find(recepe=> recepe.recipe_id == newRecipe.recipe_id)
    console.log(mostNewRecipe)
    setCurrentCookin([...currentCookings,mostNewRecipe])
  }
  console.log(currentCookings)

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
        <div className='md:flex gap-5'>
        <div className="md:w-3/5 grid md:grid-cols-2 gap-4">
          {
            foodCards.map((foodCard,idx)=> <SingleCard key={idx} foodCard={foodCard} handleWantToCook={handleWantToCook}></SingleCard>)
          }
        </div>
        <div className='w-2/5 border-[1px] border-[#FB8B24] shadow-lg shadow-[#FB8B24] rounded-xl p-5 h-full'>
        <WantCook wantCookItems={wantCookItems} handlePreparing={handlePreparing}></WantCook>
        <CurrentCooking currentCookings={currentCookings}></CurrentCooking>
        </div>
        </div>

      </section>
    </main>
    
    </>
  )
}

export default App
