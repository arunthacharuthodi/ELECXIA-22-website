import type { NextPage } from 'next'
import HomeLayout from 'components/HomeLayout'
import InfoGrid from 'components/Sections/InfoGrid'
import Heading from 'components/Heading'
import { BsArrowRight, BsGrid } from 'react-icons/bs'
import FAQ from 'components/Sections/FAQ.mdx'
import Team from 'components/Sections/Team'
import Meta from 'components/Meta'
import Previous from 'components/Sections/Previous'
import Sponsors from 'components/Sections/Sponsors'
import EventCard from 'components/event_card'
import EventSection from 'components/Sections/events'
import PreEventSection from 'components/Sections/preevent'

const Home: NextPage = () => {
  
  return (
    <HomeLayout>
      <Meta />
      <Heading>

      <div id="preevents" >
      <h1 className="text-3xl sm:text-3xl md:text-3xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              PRE EVENTS
            </h1>
      </div >
      </Heading>
      <PreEventSection/>
      <Heading>

      <div id="ourevents" >
      <h1 className="text-3xl sm:text-3xl md:text-3xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              OUR EVENTS
            </h1>
      </div >
      </Heading>
      <EventSection/>



     
      <br />
      <p className="text-gray-400 text-sm">
            <a className="underline" href="/prospectus">
              view more events
            </a>
            &nbsp;
            <BsArrowRight className="inline-block mx-1" />
           
          </p>
      


      <div>
        {/* <InfoGrid /> */}

        <div id="sponsors">
          <Heading><h1 className="text-3xl sm:text-3xl md:text-3xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              SPONSORS
            </h1></Heading>
          <p className="text-gray-400 text-sm">
            Elecxia is looking forward for good sponsers like you–
            <a className="underline" href="https://online.fliphtml5.com/mvuck/hndj/">
              check out our Brochure
            </a>
            ! Want to work together?&nbsp;
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:help@elecxia.live"
            >
              Let&apos;s talk <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>

          {/* <Sponsors /> */}
        </div>

        <div id="faq">
          <Heading><h1 className="text-3xl sm:text-3xl md:text-3xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
              FAQ
            </h1></Heading>
          <p className="text-gray-400 text-sm">
            Have a question?{' '}
            <a
              className="font-semibold hover:underline inline-flex items-center"
              href="mailto:team@mahacks.com"
            >
              Contact the team <BsArrowRight className="inline-block mx-1" />
            </a>
          </p>

          <div className="p-6  to-bg-card font-ubuntu my-4 mdx">
            <FAQ />
          </div>
        </div>

        <div id="team">
          <Heading><h1 className="text-3xl sm:text-3xl md:text-3xl font-ubuntu font-bold text-transparent bg-clip-text bg-text drop-shadow-glow-white">
          ORGANIZERS
            </h1></Heading>

          <Team />
        </div>

      
      </div>
    </HomeLayout>
  )
}

export default Home
