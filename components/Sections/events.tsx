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
               <a target="_blank" >
                 
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
  
  const EventSection: React.FC = () => {
    return (
      <>
        <Grid>
            
            <Event
        EventName="ELECTRIC VEHICLES DESIGN WORKSHOP"
        is_Active={true}
        regCost="Rs. 150"
        regLink="https://www.yepdesk.com/electrical-vehicles-designing"
        date="NOV 05, 2022"
        imgLink="./img/posters/ev workshop.jpeg"
        // is_closed={true}
        />
        <Event
        EventName="INTERNET of THINGS WORKSHOP"
        is_Active={true}
        regCost="Rs. 150"
        regLink="https://www.yepdesk.com/internet-of-things2"
        date="NOV 06, 2022"
        imgLink="./img/posters/IOT.jpeg"
        // is_closed={true}
        />
            <Event
        EventName="E-KNOT -SOLDERING COMPETITION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/soldering-competition"
        date="NOV 05, 2022"
        imgLink="./img/posters/SOLDERING-1.png"
        // is_closed={true}
        />
         <Event
        EventName="REVELATION- INTER COLLAGE COMPETITION"
        is_Active={true}
        regCost="Rs. 500"
        regLink="https://www.yepdesk.com/revelation-inter-college-project-competition"
        date="NOV 05, 2022"
        imgLink="./img/posters/Revelation poster-3.png"
        // is_closed={true}
        /> 
         <Event
        EventName="SIMULATE- CIRCUIT SIMULATION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/circuit-simulation"
        date="NOV 06, 2022"
        imgLink="./img/posters/CIRCUIT STIMULATION-1.png"
        // is_closed={true}
        />
            <Event
        EventName="SPARK PITCH -IDEA PITCHING COMPETITION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/idea-pitching-competition"
        date="NOV 05, 2022"
        imgLink="./img/posters/IDEA PITCHING-1.png"
        // is_closed={true}
        />
       
         <Event
        EventName="WIRZZ - WIRING MASTER COMPETITION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/wiring-master"
        date="NOV 05, 2022"
        imgLink="./img/posters/WIRING-MASTER-1.png"
        // is_closed={true}
        /> 
        <Event
        EventName="EVTHON - HACKATHON ON ELECTRIC VEHICLES"
        is_Active={true}
        regCost="Rs. 200"
        regLink="https://www.yepdesk.com/evthoh"
        date="NOV 06, 2022"
        imgLink="./img/posters/EVTHON.jpeg"
        // is_closed={true}
        /> 
        <Event
        EventName="KICK OF KING -DEBATE COMPETITION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/kick-of-king-debate-competition-"
        date="NOV 06, 2022"
        imgLink="./img/posters/DEBATE.jpeg"
        // is_closed={true}
        /> 
        <Event
        EventName="REVELATION - SCHOOL PROJECT COMPETITION"
        is_Active={true}
        regCost="Rs. 50"
        regLink="https://www.yepdesk.com/revelation-school-level-competition"
        date="NOV 05, 2022"
        imgLink="./img/posters/REVELATION-SCHOOL.jpeg"
        // is_closed={true}
        /> 

      

        
  
        </Grid>
  
      </>
    )
  }
  
  export default EventSection
