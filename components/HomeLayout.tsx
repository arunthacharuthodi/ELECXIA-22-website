import Image from 'next/image'
import BackgroundImage from '../photos/landing.jpg'
import Navbar from './Navbar'
import { Parallax } from 'react-scroll-parallax'
import Landing from './Landing'
import Footer from './Footer'
import AnalyticsScript from './AnalyticsScript'

const HomeLayout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <AnalyticsScript />
      <Navbar />
      <div className="h-screen">
        <div className="landing-bg-img-container" >
          <Image
            
            layout="responsive"
            src={BackgroundImage}
            alt="elecxia"
            priority
            quality={100}
            objectFit="cover"
            objectPosition={'center'}
          />

          <style jsx global>{`
            .landing-bg-img-container {
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              z-index: -1;
            }

            .landing-bg-img-container:after {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: black;
              opacity: 0.55;
            }

            .landing-bg-img-container > span {
              height: 100% !important;
            }
          `}</style>
        </div>

        <Landing />
      </div>

      <div className="h-2 w-full bg-" />

      <div className="max-w-5xl mx-auto px-6 mb-20">{children}</div>

      <Footer />
    </div>
  )
}

export default HomeLayout
