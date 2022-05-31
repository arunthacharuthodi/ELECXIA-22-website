import Link from 'next/link'
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'
import Button from './Button'
import ShapeRain from './Effects/ShapeRain'
import Heading from './Heading'

const Landing: React.FC = () => {
  return (
    <div>
      <Parallax y={[20, -20]}>
        <div className="px-3 max-w-3xl mx-auto h-screen flex flex-col items-start gap-6 sm:gap-10 justify-center">
          <div className="p-3 text-center bg-violet-400 border-white border-2 rounded-lg font-bold animate-hover">
            LOGO LAUNCH DAY LUCKY DRAW IS NOW ACTIVE .... LINK WILL BE CLOSED WITHIN 12 HOURS
          </div>

          <div>

            
            <div className="text-5xl sm:text-5xl md:text-8xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              ELECXIA'22
            </div>
         
            {/* <div className="text-xl font-semibold font-heading">
              March 19-20 @ Boston, MA
            </div> */}
          </div>

          <p className="sm:text-base  font-ubuntu   max-w-5xl">
            Hey.. Come and Join us for the 2 days event Organised  by <b>ASSOCIATION OF ELECTRICAL AND ELECTRONICS ENGINEERING</b> in Government Engineering College Wayanad. We are hosting lots of Events during this fest... So lets Have 
            Fun .. 
          </p>

          <div className="flex gap-3 font-light text-base drop-shadow-glow-white">
            <div className="flex items-center">
              <HiOutlineLocationMarker
                className="inline-block mx-2"
                size={20}
              />
              Government Engineering College Wayanad
            </div>
            <div className="flex items-center">
              <HiOutlineCalendar className="inline-block mx-2" size={20} />
              DATE TO BE ANNOUNCED!!!
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="https://docs.google.com/forms/d/e/1FAIpQLSf7JIFMAu9JI2MdKG6u-BoZB7389bDrcFxYxeiKLmdQuh-UTQ/viewform?usp=sf_link">
              <a>
                <Button glow>LUCKY DRAW!!!!!</Button>
              </a>
            </Link>

            {/* <Link href="/register-interest"> */}
            <a
              href="https://airtable.com/shrg8CUOGnZUsveIr"
              className="underline text-gray-400 text-xs"
            >
              Not yet sure if you can attend? Get a reminder closer to the
              event.
            </a>
            {/* </Link> */}
          </div>
        </div>
      </Parallax>
    </div>
  )
}

export default Landing
