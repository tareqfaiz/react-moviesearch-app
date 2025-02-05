import { useState, useEffect } from 'react'
import './App.css'

const Card = ({title}) => { 
  const [HasLiked, setHasLiked] = useState(false);
  const [count, setCount] = useState(0);

  useEffect(() => { 
    console.log(`${title} has been liked: ${HasLiked}`);
  }, [HasLiked]);
  
  return (
    <div className='card' onClick={() => setCount((prevState) => prevState + 1)}>
      <h2>{title} <br />{count || null}</h2>

      <button onClick={()=> setHasLiked(!HasLiked)}>
        {HasLiked ? '❤️' : '🤍'}
      </button>
    </div>
  )
 }


function App() {
  const [HasLiked, setHasLiked] = useState(false);
  
  
 return (
  <div className="card-container">
  
    <Card title="Star Wars" ratings={5} iscool={true} actors={[{name:'Actors'}]}/>
    <Card title="Avatar"/>
    <Card title="The lion King"/>
  
    </div>
 )
}

export default App
