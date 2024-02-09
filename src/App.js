
import { useRef, useState } from 'react';
import './App.css'
function App() {

 

  let h1ele = useRef(null)

  let x= useRef(10)

  const [y,setY]=useState(100);
  
  return (
    <>
    <h1 ref={h1ele} className='active'>Heading Ele</h1>

    
<button onClick={()=>{
  console.log(h1ele) 
  console.dir(h1ele.current)

  h1ele.current.classList.toggle('active') 
  h1ele.current.classList.toggle('inactive')
}
}> Click Me</button>

<h1>x value: {x.current}</h1>

<button onClick={()=>{

  x.current = x.current+10
  console.log(x.current)

  setY (y+100)
}}>Increment</button>

</>
  
  );
}

export default App;
