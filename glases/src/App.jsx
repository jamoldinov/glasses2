import React from 'react'
import Navbar from './components/Navbar'
import Basketproducts from './components/Basketproducts'
function App() {
  return (
    <div className='container max-w-5xl mx-auto'>
      <Navbar/>
      <h1 className='text-black text-center text-5xl my-8 font-serif font-medium'>Redex Store</h1>
      <Basketproducts/>
    </div>
  )
    
}

export default App
