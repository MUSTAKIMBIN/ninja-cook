
import './App.css'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import OurRecipes from './components/OurRecipes'

function App() {
  

  return (
    <>
    <header className='w-5/6 mx-auto'>  
      <NavBar></NavBar>
      <Hero></Hero>
    </header>
    <main>
      <section>
       <OurRecipes></OurRecipes>
      </section>
    </main>
    
    </>
  )
}

export default App
