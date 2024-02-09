
import { useRef} from 'react';
import './App.css'


function App() {

  let arr = new Array(10).fill(null);
  

  let headings = useRef([])
  
  function changh1style(e){
    for(let ele of headings.current){
      ele.classList.remove('primary')
    }
    e.target.classList.add('primary') 
  }
  return (
    <>
   {
    arr.map(
      (ele,i)=>{
        return(
          <h1 
          ref={(el)=> headings.current[i]=el}  onClick={(eve)=>{
            changh1style(eve)
          }}

          className='style'
          >Heading {i +1}</h1>
        )

      }
    )
   }
</>
  
  );
}

export default App;
