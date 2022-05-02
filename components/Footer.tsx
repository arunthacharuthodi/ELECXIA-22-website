import Icon from '@hackclub/icons'
import Link from 'next/link'

const SocialButton = ({ glyph, href }: any) => (
  <a target={'_blank'} rel="noreferrer" href={href}>
    <Icon
      glyph={glyph}
      size={36}
      className="hover:text-primary transition-all"
    />
  </a>
)

const FooterLink = ({ href, children }: any) => (
  <Link href={href}>
    <a className="hover:text-primary underline decoration-dotted transition-all ">
      {children}
    </a>
  </Link>
)

const Footer: React.FC = () => {
  return (
    <div className="bg-bg-card text-sm">
      <div className="p-14 flex flex-col sm:flex-row max-w-2xl mx-auto gap-6 justify-center">
        <div className="flex-1 flex flex-col gap-3">
          <div className="flex gap-3">
            <SocialButton
              href="https://www.instagram.com/elexia'22/"
              glyph="instagram"
            />
            <SocialButton href="https://twitter.com/ma_hacks" glyph="twitter" />
            <SocialButton href="https://elecxia.live/" glyph="link"  />
            <SocialButton href="mailto:help@elecxia.live" glyph="email" />
          </div>

          <div className="flex-1 flex flex-col gap-1">
            <FooterLink href="/conduct">code of conduct</FooterLink>
            {/* <FooterLink href="https://v.mahacks.com/">old website</FooterLink> */}
          </div>
        </div>
        <div className="flex-1 flex flex-col gap-3">
          <div>
            
              {/* eslint-disable @next/next/no-img-element */}
              <img
                src="/img/aeee.png"
                alt="Powered By aeee"
                className="w-44"
              />
            
          </div>

         
          {/* <p className="font-semibold">
        Copyright &copy; {new Date().getFullYear()} MAHacks.
      </p> */}
        </div>
      </div>

      <div className="text-center pb-6">
        <p className="font-semibold p-2">
          Copyright {new Date().getFullYear()}@ elecxia
        </p>

        <div className="text-gray-300">
          <p>
             organized and controlled by{' '}
            
              AEEE GECW
            
            .
          </p>
        
        </div>
      </div>
    </div>
  )
}

export default Footer
