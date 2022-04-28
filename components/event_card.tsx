import Image from "next/image";
import { BsQuestion } from "react-icons/bs";
import Button from "./Button";

// use tailwind
export default function EventCard({name, disc , reglink, eventtype}:any){
  return(
  
    <div className=" " >

<div className="max-w-md bg-bg-card rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
    
    <div className="p-5">
      
            <h5 className="mb-2 text-9xl font-bold tracking-tight text-gray-500 text-center dark:text-white max-w-full" ><BsQuestion/></h5>
      
        <p className="mb-3 font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">ELEXCIA EVENTS ARE SUPER SECRET :)....STAY TUNED REGISTRATIONS WILL BE OPENED SOON... GET READY TO GRAB YOUR TICKETS..</p>
        <div className="cursor-not-allowed">
        <Button  className="cursor-not-allowed hover:bg-zinc-500" >
          Coming Soon
        </Button>

        </div>
    </div>
</div>
    </div>
    
  );
}