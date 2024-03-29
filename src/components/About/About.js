import GitHubIcon from '@material-ui/icons/GitHub'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import { about } from '../../portfolio'
import Pdf from '../../assets/luke_Ichpekov_Resume.pdf';
import './About.css'


const About = () => {
  const { name, role, description, social } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hey, I&apos;m <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'>A {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
          <a  href={Pdf} target="_blank" rel="noreferrer">
            <span type='button' className='btn btn--outline'>
              Resume
            </span>
          </a>

        {social && (
          <>
            {social.github && (
              <a
                href={social.github}
                target="_blank"
                rel="noreferrer"
                aria-label='github'
                className='link link--icon'
              >
                <GitHubIcon />
              </a>
            )}

            {social.linkedin && (
              <a
                href={social.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label='linkedin'
                className='link link--icon'
              >
                <LinkedInIcon />
              </a>
            )}
          </>
        )}
      </div>
    </div>
  )
}

export default About
