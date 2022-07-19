import './footer.style.scss'

import Text from "../text/text.component";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as LinkedinIcon} from "../../image/footer/linkedin.svg";

const profileLinks = [
  {
    href: 'https://github.com/SVladikO',
    imageComponent: <GithubIcon/>,
  },
  {
    href: 'https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/',
    imageComponent: <LinkedinIcon/>,
  }
];


function Footer() {
  return (
    <div className="footer">
      {getProfilePart()}
    </div>
  )
}

function getProfilePart() {
  return (
    <div className="profile_container">
      <div className="profile_title">
        <Text translationKey="$FOOTER.PROFILE.TITLE"/>
      </div>
      <div className="profile_links">
        {
          profileLinks.map(link =>
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.imageComponent}
            </a>
          )
        }
      </div>
    </div>
  )
}


export default Footer;