import Icon from '@hackclub/icons'
import clsx from 'clsx'
import Heading from 'components/Heading'
import Image from 'next/image'
import arun from 'photos/team/arun.jpg'
import Claire from 'photos/team/claire.png'
import Kunal from 'photos/team/kunal.jpeg'
import Theo from 'photos/team/theo.png'
import Sarthak from 'photos/team/sarthak.png'

import sourav from 'photos/team/sourav.jpg'
import binil from 'photos/team/binil.jpeg'
import nithinraj from 'photos/team/nithinraj.jpeg'
import akshay from 'photos/team/akshay.jpeg'


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
              'font-bold text-lg border-b border-transparent border-dashed',
              link && 'hover:border-primary hover:text-primary'
            )}
          >
            {name}
            {/* <span className="text-gray-500 font-light">({pronouns})</span> */}
          </h4>
        </a>
        <p className="text-gray-600">
          {role} &middot; {pronouns}
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
          image={arun}
          // link='https://benjaminashbaugh.me'
        />
        <Person
          name="Binil Babu"
          role="Finance and sponsorship"
          // pronouns="she/her"
          image={binil}
        />
        <Person
          name="Farzana"
          role="Finance and Advertising"
          // pronouns="he/him"
          image={Theo}
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
        image={Sarthak}
      />
      <Person
        name="Musthak CP"
        role="Volunteer Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Akshay C"
        role="Inter College program head"
        // pronouns="he/him"
        image={akshay}
      />
      <Person
        name="Dr. Baburaj"
        role="Supporting staffs"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Dr. Avinash Nelson"
        role="Supporting staffs"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Sheeba paulouse"
        role="Supporting staffs"
        // pronouns="he/him"
        image={Sarthak}
      />
      </Grid>

    </>
  )
}

export default Team
