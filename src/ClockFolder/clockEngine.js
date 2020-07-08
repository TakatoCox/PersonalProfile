import React , {useState, useEffect} from 'react';
import './clocks.css'


const Time = (props) => {

const[hour, setHour]=useState("Loading...");
const[minutes, setMinutes]=useState();
const[seconds, setSeconds]=useState();

const getTime = ()=>{

  const currHour = new Date().getHours();
  const currSeconds = new Date().getSeconds();
  let currMinutes;

  //set minutes based on time zone. :00 or :30
      if(props.timeZone%3600===0){
        currMinutes= new Date().getMinutes();
      } else {
        if(new Date().getMinutes() > 29)
        currMinutes= new Date().getMinutes()-30;
        else
        currMinutes= new Date().getMinutes()+30;
      }
   
      if(currMinutes<10 && currMinutes>=0)
        setMinutes(":0" + currMinutes)
      else 
        setMinutes(":" +currMinutes)
      
//add time diff to Pacific time to get correct time
      let timeDiff = 0;
      switch(props.timeZone){
        case 32400: //Japan Time
            if(currHour >= 0 && currHour < 8)
              timeDiff = 16
            else 
              timeDiff = -8
            break;
        case 28800: //Beijing Time
            if(currHour >= 0 && currHour < 9)
              timeDiff = 15
            else 
              timeDiff = -9
            break;
        case 19800: //Mumbai Time
            if(currHour >=0 && currHour < 12 && new Date().getMinutes()<30)
              timeDiff = 12;
            else if(currHour >=0 && currHour < 11 && new Date().getMinutes()>=30)
              timeDiff = 13;
            else if(currHour >=12 && currHour < 24 && new Date().getMinutes()<30)
              timeDiff=-12;
              else if(currHour >=11 && currHour < 24 && new Date().getMinutes()>=30)
              timeDiff=-11;
            break;
        case 3600: //London Time
            if(currHour >= 0 && currHour < 16)
            timeDiff = 8
            else 
             timeDiff= -16
            break;
        case -14400: //(US/Eastern)
            if(currHour >= 0 && currHour < 21)
            timeDiff = 3
            else 
            timeDiff=-21
            break;
        case -18000: //(US/Central)
            if(currHour >= 0 && currHour < 22)
            timeDiff = 2
            else 
             timeDiff= -22
            break;
        case -21600: //(US/Mountain)
            if(currHour >= 0 && currHour < 23)
              timeDiff = 1
            else 
              timeDiff = 0
            break;
        case -36000: //Hawaii
            if(currHour >= 0 && currHour < 3)
              timeDiff = 21
            else 
              timeDiff = -3
            break;
        case -25200: //(US/Pacific)
            timeDiff = 0   
            break;
        default://Default
            timeDiff=0;
          break;
      }
      
      if(currHour+timeDiff>12 && currHour<24)
        setHour(currHour+timeDiff-12)
      else if(currHour+timeDiff===0)
        setHour(12)
      else
        setHour(currHour+timeDiff)

      
      if(currHour+timeDiff>=0 && currHour+timeDiff< 12)
        setSeconds(currSeconds+" am")
      else
        setSeconds(currSeconds+" pm");
    }
 

useEffect(()=>{
    setInterval(()=>getTime(),1000)
})

    return ( 
         <div className="App-clock">
          <div>
          {hour}{minutes}
          </div>
          <div className="seconds">
          {seconds}
          </div>
        </div>
     );
}
 
export default Time;
