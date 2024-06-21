import { Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react'
import { useId, type ComponentProps } from 'react'
import { Link } from './Link'
import { Title } from './Title'

export { Contacts }

type Info = {
  type: 'phone' | 'email' | 'address'
  text: string
}

type Social = {
  type: 'fb' | 'ig'
  href: string
}

type ContactsProps = {
  infos: Info[]
  socials: Social[]
  title: string
  text: string
}

function Contacts({ infos, socials, title, text }: ContactsProps) {
  const titleID = useId()
  const titleProps: ComponentProps<typeof Title> = {
    id: titleID,
    title,
    text,
    textDirection: 'left',
  }
  const infoList = {
    phone: <Phone size={18} fill='red' />,
    email: <Mail size={18} fill='red' />,
    address: <MapPin size={18} fill='red' />,
  }
  const socialList = {
    fb: <Facebook fill='red' />,
    ig: <Instagram fill='red' />,
  }

  return (
    <section
      id='contattaci'
      aria-labelledby={titleID}
      className='mb-20 mt-32 grid gap-8 px-4 md:mx-auto md:w-11/12 md:grid-cols-2'
    >
      <div className='md:w-10/12'>
        <Title {...titleProps} />

        <div className='mt-4'>
          <ul className='grid gap-2'>
            {infos.map((info) => (
              <li className='flex items-center gap-2' key={info.type}>
                <span className='w-fit'>{infoList[info.type]}</span>
                {info.type !== 'address' ? (
                  <a
                    className='hover:underline'
                    href={
                      info.type === 'phone'
                        ? `tel:${info.text}`
                        : `mailto:${info.text}`
                    }
                  >
                    {info.text}
                  </a>
                ) : (
                  info.text
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className='mt-4'>
          <h3 className='mb-2 font-bold uppercase'>Seguici su:</h3>

          <ul className='flex gap-2'>
            {socials.map((social) => (
              <li key={social.type}>
                <a href={social.href} target='_blank'>
                  {socialList[social.type]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div>
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.4836394681015!2d17.70011871218685!3d40.66331147128181!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134667a638c5f739%3A0x52ea4c29f7176685!2sViale%20Francia%2C%2072019%20San%20Vito%20dei%20Normanni%20BR%2C%20Italia!5e0!3m2!1sit!2sse!4v1718971686085!5m2!1sit!2sse'
          width='100%'
          height='450'
          loading='lazy'
          referrerPolicy='no-referrer-when-downgrade'
        />
      </div>
    </section>
  )
}
