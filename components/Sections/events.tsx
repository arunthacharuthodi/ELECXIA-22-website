import Icon from '@hackclub/icons'
import clsx from 'clsx'
import Heading from 'components/Heading'
import Image from 'next/image'
import arun from 'photos/team/arun.jpg'
import Claire from 'photos/team/claire.png'
import Kunal from 'photos/team/kunal.jpeg'
import Theo from 'photos/team/theo.png'
import Sarthak from 'photos/team/sarthak.png'
import EventCard from 'components/event_card'
import Button from 'components/Button'
import Link from 'next/link'

const alumni = [
  'Jolene Pern',
  'Vicki Yang',
  'Jonathan Yin',
  'Kunal Sharda',
  'Matt Tengtrakool',
  'Michelle Yu',
  'Jocelyn Pern',
  'Justin Yu',
  'Max Krieger',
  'Edward Song',
  'Nimish Garg',
  'Jennifer Kim',
  'Katherine Huang',
  'Emily Tan',
  'Walter Shen',
  'Zhi Wei Gan',
  'Rebekah Agwunobi',
  'Aadhya Puttur',
  'Nina Zhang',
]

const Event = ({ EventName, is_Active, eventType, desc, cost , is_Team , regLink }: any) => {
  if(is_Active){
    return (
        // <div className="flex items-center gap-3">
        //   <Image
        //     src={image}
        //     alt={name}
        //     width={120}
        //     height={120}
        //     className="rounded-md"
        //     objectFit="cover"
        //     objectPosition={'center'}
        //   />
        //   <div className="flex flex-col">
        //     <a href={link} target={'_blank'} rel="noreferrer">
        //       <h4
        //         className={clsx(
        //           'font-bold text-lg border-b border-transparent border-dashed',
        //           link && 'hover:border-primary hover:text-primary'
        //         )}
        //       >
        //         {name}
        //         {/* <span className="text-gray-500 font-light">({pronouns})</span> */}
        //       </h4>
        //     </a>
        //     <p className="text-gray-600">
        //       {role} &middot; {pronouns}
        //     </p>
        //     {/* <a><Icon glyph='web' /></a> */}
        //   </div>
        // </div>
        <div className=" " >

<div className="max-w-md bg-bg-card rounded-lg  shadow-md dark:bg-gray-800 dark:border-gray-700">
    
    <div className="p-5">
      
            <h5 className="mb-2 text-xl font-bold tracking-tight text-gray-500 text-center dark:text-white max-w-full" >{EventName}</h5>
      
        <p className="mb-3 font-ubuntu font-bold text-gray-700 dark:text-gray-400 ">{regLink}</p>
        <div className="cursor-not-allowed">
        <Link href={regLink}>
        <a >
        <Button  className="cursor-not-allowed hover:bg-zinc-500"  >
          Register
        </Button>
        </a>

        </Link>
        </div>
    </div>
</div>
    </div>
      )
    
  }else{
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
      EventName="nothing"
      is_Active={false}

      />
      <Event
      EventName="nothing"
      is_Active={false}

      />
      <Event
      EventName="nothing"
      is_Active={false}

      />
      <Event
      EventName="nothing"
      is_Active={false}

      />
      <Event
      EventName="nothing"
      is_Active={false}

      />
      <Event
      EventName="nothing"
      is_Active={false}

      />
      

      </Grid>

    </>
  )
}

export default EventSection
