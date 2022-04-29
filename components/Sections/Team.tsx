import Icon from '@hackclub/icons'
import clsx from 'clsx'
import Heading from 'components/Heading'
import Image from 'next/image'
import arun from 'photos/team/arun.jpg'
import Claire from 'photos/team/claire.png'
import Kunal from 'photos/team/kunal.jpeg'
import Theo from 'photos/team/theo.png'
import Sarthak from 'photos/team/sarthak.png'

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
          name=" DR.Nithin Raj"
          role="advising professor"
          // pronouns="he/him"
          image={Kunal}
        />
        <Person
          name="Sourav K S"
          role="Student Organizer"
          // pronouns="he/him"
          image={Kunal}
        />
        <Person
          name="Arun Thacharuthodi"
          role="Technical Head"
          // pronouns="he/him"
          image={arun}
          // link='https://benjaminashbaugh.me'
        />
        <Person
          name="Binil Babu"
          role="finance and advertising Head"
          // pronouns="she/her"
          image={Claire}
        />
        <Person
          name="muhammed Anfal A"
          role="Media Head"
          // pronouns="he/him"
          image={Theo}
          // link='https://benjaminashbaugh.me'
        />
        <Person
          name="Ajith Kumar S"
          role="Event Co-ordinator"
          // pronouns="he/him"
          image={Sarthak}
        />
        <Person
        name="Shifana sherin"
        role="Decoraton Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Sooraj"
        role="Decoraton Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Mustak C P"
        role="Discipline Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Adheeb"
        role="Volunteer Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Jithin"
        role="Documentation Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Aswathy"
        role="invition Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Akshay"
        role="Project managing Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="krishna Das"
        role="Project managing Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Midhunjith"
        role="Project managing Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      
      <Person
        name="Dhilnesh"
        role="Project managing Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      <Person
        name="Soorya"
        role="Project managing Head"
        // pronouns="he/him"
        image={Sarthak}
      />
      
      
      </Grid>

      <Heading as="h3" small>
        Alumni
      </Heading>
      <ul>
        {alumni.map((name, i) => (
          <li key={i} className="inline">
            {name} {i !== alumni.length - 1 && <>&bull;</>}{' '}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Team
