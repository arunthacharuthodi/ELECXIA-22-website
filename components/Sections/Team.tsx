import Icon from '@hackclub/icons'
import clsx from 'clsx'
import Heading from 'components/Heading'
import Image from 'next/image'
import arun from 'photos/team/arun.jpg'

import sourav from 'photos/team/sourav.jpg'
import nithinraj from 'photos/team/nithinraj.jpeg'
import akshay from 'photos/team/akshay.jpeg'
import baburaj from 'photos/team/baburaj.jpg'
import sheeba from 'photos/team/sheeba.jpeg'
import hod from 'photos/team/hod.jpeg'
import avinash from 'photos/team/avinash.jpg'
import anfal from 'photos/team/anfal.jpg'
import binil2 from 'photos/team/binilbabu.jpeg'
import das from 'photos/team/das.jpeg'
import ajith from 'photos/team/ajith.jpeg'
import mustak from 'photos/team/mustak.jpg'
import farzana from 'photos/team/farzana.jpg'



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

const Person = ({ name, role, pronouns, image, link }: any) => {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={image}
        alt={name}
        width={120}
        height={120}
        className="rounded-md"
        objectFit="cover"
        objectPosition={'center'}
      />
      <div className="flex flex-col">
        <a href={link} target={'_blank'} rel="noreferrer">
          <h4
            className={clsx(
              'font-bold font-ubuntu text-lg border-b border-transparent border-dashed',
              link && 'hover:border-primary hover:text-primary'
            )}
          >
            {name}
            {/* <span className="text-gray-500 font-light">({pronouns})</span> */}
          </h4>
        </a>
        <p className="text-gray-500 font-ubuntu font-bold ">
          {role}
        </p>
        {/* <a><Icon glyph='web' /></a> */}
      </div>
    </div>
  )
}

const Grid: React.FC = ({ children }) => (
  <div className="grid gap-5 grid-cols-1 md:grid-cols-3 grid-flow-row">
    {children}
  </div>
)

const Team: React.FC = () => {
  return (
    <>
      <Grid>
      <Person
          name="Dr.JayaPrakash"
          role="HOD"
          // pronouns="he/him"
          image={hod}
        />
      <Person
          name="Dr.Nithin Raj"
          role="Program coordinators"
          // pronouns="he/him"
          image={nithinraj}
        />
        <Person
          name="Sourav KS"
          role="Program coordinators"
          // pronouns="he/him"
          image={sourav}
        />
        <Person
          name="Ajith Kumar VS"
          role="Event coordinator"
          // pronouns="he/him"
          image={ajith}
          // link='https://benjaminashbaugh.me'
        />
        <Person
          name="Binil Babu"
          role="Finance and sponsorship"
          // pronouns="she/her"
          image={binil2}
        />
        <Person
          name="Farzana"
          role="Finance and Advertising"
          // pronouns="he/him"
          image={farzana}
          // link='https://benjaminashbaugh.me'
        />
        <Person
          name="Arun Thacharuthodi"
          role="Technical Head"
          // pronouns="he/him"
          image={arun}
        />
        <Person
        name="Anfal"
        role="Media head"
        // pronouns="he/him"
        image={anfal}
      />
      <Person
        name="Musthak CP"
        role="Volunteer Head"
        // pronouns="he/him"
        image={mustak}
      />
      <Person
        name="Akshay C"
        role="Inter College program head"
        // pronouns="he/him"
        image={akshay}
      />
      <Person
        name="Krishnadas "
        role="Inter College project head"
        // pronouns="he/him"
        image={das}
      />
      <Person
        name="Dr. Baburaj"
        role="Supporting staffs"
        // pronouns="he/him"
        image={baburaj}
      />
      <Person
        name="Dr. Avinash Nelson"
        role="Supporting staffs"
        // pronouns="he/him"
        image={avinash}
      />
      <Person
        name="Sheeba paulouse"
        role="Supporting staffs"
        // pronouns="he/him"
        image={sheeba}
      />
      </Grid>

    </>
  )
}

export default Team
