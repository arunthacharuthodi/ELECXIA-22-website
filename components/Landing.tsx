import Link from 'next/link'
import {
  HiOutlineCalendar,
  HiOutlineLocationMarker,
} from 'react-icons/hi'
import { Parallax } from 'react-scroll-parallax'
import Button from './Button'
import ShapeRain from './Effects/ShapeRain'

const Landing: React.FC = () => {
  return (
    <div>
      <ShapeRain count={10} />
      <Parallax y={[20, -20]}>
        <div className="px-3 max-w-3xl mx-auto h-screen flex flex-col items-start gap-6 sm:gap-10 justify-center">
          {/* <div className="p-3 text-center bg-accent-red border-accent-red border-2 rounded-lg font-bold animate-hover">
            MAHacks has been postponed from March 19-20. Please check
            your email for more details.
          </div> */}

          <div>
            <h1 className="text-7xl sm:text-7xl md:text-8xl font-brand font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              ELECXIA'22
            </h1>
            {/* <div className="text-xl font-semibold font-heading">
              March 19-20 @ Boston, MA
            </div> */}
          </div>

          <p className="sm:text-xl  font-ubuntu  max-w-5xl">
            Hey.. Come and Join us for the 3 days event Organised and Controlled by "ASSOCIATION OF ELECTRICAL AND ELECTRONICS ENGINEERING" in Government Engineering College Wayanad. we are Hosting Lots Of Events During this Fest... So lets Have 
            Fun Grab your Bag And Came here.. 
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
              22 May 2022
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <Link href="/register">
              <a>
                <Button glow>Register Now</Button>
              </a>
            </Link>

            {/* <Link href="/register-interest"> */}
            <a
              href="https://airtable.com/shruVkzby5uUng11e"
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
