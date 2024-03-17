
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import OurRecipes from './components/OurRecipes'
import SingleCard from './SingleCard'
import { useEffect, useState } from 'react'
import WantCook from './WantCook'
import CurrentCooking from './CurrentCooking'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './components/Footer'


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
      toast.warn("Recipe already in Want Cook list.");
    }
  }

  const handlePreparing=(recipe)=>{
    const newRecipe = wantCookItems.filter(cookItem => cookItem.recipe_id != recipe.recipe_id)
    setWantCookItems(newRecipe)
    console.log(newRecipe)
    const mostNewRecipe = wantCookItems.filter(recepe=> recepe.recipe_id == recipe.recipe_id)
    // console.log(mostNewRecipe)
    setCurrentCookin([...currentCookings,mostNewRecipe])
    // console.log()
  }
  // console.log(currentCookings)

  return (
    <>
    <ToastContainer />
    <header className='w-5/6 mx-auto'>  
      <NavBar></NavBar>
      <Hero></Hero>
    </header>
    <main className="w-5/6 mx-auto">
      <section>
       <OurRecipes></OurRecipes>
      </section>
      <section>
        <div className='md:flex gap-5 mb-20'>
        <div className="md:w-3/5 grid md:grid-cols-2 gap-4">
          {
            foodCards.map((foodCard,idx)=> <SingleCard key={idx} foodCard={foodCard} handleWantToCook={handleWantToCook}></SingleCard>)
          }
        </div>
        <div className='md:w-2/5 border-[1px] border-[#FB8B24] shadow-lg shadow-[#FB8B24] rounded-xl p-5 h-full'>
        <WantCook wantCookItems={wantCookItems} handlePreparing={handlePreparing}></WantCook>
        <CurrentCooking currentCookings={currentCookings}></CurrentCooking>
        </div>
        </div>

      </section>
    </main>
    <footer>
      <Footer></Footer>
    </footer>
    
    </>
  )
}

export default App
