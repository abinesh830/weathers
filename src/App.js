
import './App.css';
import {useEffect, useState} from 'react'
import img1 from './images/483530.png'
import img2 from './images/humidity.jpg'
import img4 from './images/wind2.png'


function App() {
  const[input,setinput]=useState("")
  const[data,setdata]=useState()

  const receiver=async()=>{
 let response=await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=bd0dcce2d25a05cea40398c527fd3107&units=metric`);
let result=await response.json();
setdata(result)
console.log(result)

  }

  useEffect(()=>{
    receiver()
  },[input])
  
  return (
    <div className="App">

      
                <div className='head'>
                   <h1><i class="fa-solid fa-cloud" ></i>Weather Analyzer</h1>

               </div>

              <div className='weather'>
                {input.length.toString()>2 ?(<div>

                  <h2>CITY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{data?.name}</h2>

                        
                        <p>TEMPERATURE &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-sun" style={{color:"yellow"}}></i>{data?.main?.temp}<img src={img1 }alt='' width={50}></img></p>
                         <p>HUMIDITY &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-droplet" style={{color:"skyblue"}}></i>{data?.main?.humidity}% <img src={img2} alt='' width={50}/>   </p>
                        <p>WIND SPEED&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa-solid fa-wind" style={{color:"black"}}></i>{data?.wind?.speed}&nbsp;KM/H <img src={img4} alt="" width={50} /></p>

                </div>):(<div>
                  <h1>  Enter your city if you want to know the weather in your city &nbsp;&nbsp;&nbsp;<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; உங்கள் நகரத்தின் வானிலையை அறிய விரும்பினால் உங்கள் நகரத்தை உள்ளிடவும்?</h1>
                </div>)}

                        <input type="search" placeholder='enter city name' value={input} onChange={(e)=>setinput(e.target.value)} required /> <br />
                        
                        
              </div>
       
        
        
      
      
    </div>
  );
}

export default App;
