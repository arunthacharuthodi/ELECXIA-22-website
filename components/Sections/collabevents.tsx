


import Button from "components/Button";
import EventCard from "components/event_card";
import Link from "next/link";

const Event = ({ EventName, is_Active, regCost, date, imgLink,siteLink , is_Team , regLink, is_closed}: any) => {
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
          
          <a >
            
          <button className="custom-btn btn-9">REGISTRATION CLOSED</button>
          </a>
  
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
                
               
               <Link href={regLink}>
               <a >
                 
               <button className="custom-btn btn-9">REGISTER NOW</button>
               </a>
       
               </Link>
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
  
  const collabEventSection: React.FC = () => {
    return (
      <>
        <Grid>
        {/* <Event
        EventName="INTER COLLEGE PROJECT COMPETITION"
        is_Active={true}
        regCost="Rs. 500"
        regLink="https://revelationreg.elecxia.live/"
        date="NOV 05, 2022"
        imgLink="./img/posters/revelation.jpeg"
        // is_closed={true}
        /> */}
        <Event
        EventName="LOST CRUSADE-TREASURE HUNT"
        is_Active={true}
        regCost="Rs. 100"
        regLink="https://www.yepdesk.com/gecw-treasure-hunt"
        date="NOV 05, 2022"
        imgLink="./img/posters/lostcruside.jpeg"
        // is_closed={true}
        />

      

        
  
        </Grid>
  
      </>
    )
  }
  
  export default collabEventSection