import Button from "components/Button";
import EventCard from "components/event_card";
import Link from "next/link";

const Event = ({ EventName, is_Active, regCost, date, imgLink , is_Team , regLink, is_closed}: any) => {
    if(is_Active && is_closed){
      return (
          
   <div className="neoborder" >
  
        <div className=" max-w-md bg-bg-card rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700 ">
      
          <img src={imgLink} className="" alt="image"  />
          <div className="p-5">
        
              <h5 className="neonText mb-2 text-xl font-bold tracking-tight text-gray-500 text-center dark:text-white max-w-full" >{EventName}</h5>
        
          <p className=" font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">REGISTRAION FEE: {regCost}</p>
          <p className="mb-3 font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">DATE: {date}</p>
          <div className="">
          
         
  
          </div>
      </div>
    </div>
  </div>
        )
      
    }else if(is_Active ){
      return (
          
        <div className="neoborder" >
       
             <div className=" max-w-md bg-bg-card rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700 ">
           
               <img src={imgLink} className="" alt="image"  />
               <div className="p-5">
             
                   <h5 className="neonText mb-2 text-xl font-bold tracking-tight text-gray-500 text-center dark:text-white max-w-full" >{EventName}</h5>
             
               <p className=" font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">REGISTRAION FEE: {regCost}</p>
               <p className="mb-3 font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">DATE: {date}</p>
               <div className="">
               
               </div>
           </div>
         </div>
       </div>
             )

    }
    
    else{
        return(
          <EventCard/>
        );
    }
  }
  
  const Grid: React.FC = ({ children }) => (
    <div className="grid gap-5 grid-cols-1 md:grid-cols-3 grid-flow-row">
      {children}
    </div>
  )
  
  const PastEventSection: React.FC = () => {
    return (
      <>
        <Grid>
        <Event
        EventName="WORKSHOP ON LITHIUM BATTERIES"
        is_Active={true}
        regCost="Rs. FREE"
        regLink="https://forms.gle/Spsekju63ZCiG5FS6"
        date="OCT 09, 2022"
        imgLink="./img/posters/battery.png"
  
  
        />
        <Event
        EventName="INTRODUCTION TO ROBOTICS"
        is_Active={true}
        regCost="Rs. 100.0"
        regLink="https://forms.gle/UYvq9RSSRtjibyGU7"
        date="OCT 12,13,14, 2022"
        imgLink="./img/posters/robocuria.png"
     

  
        />

        
  
        </Grid>
  
      </>
    )
  }
  
  export default PastEventSection