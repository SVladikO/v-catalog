import './footer.style.scss'

import {GIT_LINK, LINKED_IN_LINK} from '../../common/link.js';

import Text from "../text/text.component";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as LinkedinIcon} from "../../image/footer/linkedin.svg";

const profileLinks = [
  {
    href: GIT_LINK,
    imageComponent: <GithubIcon/>,
  },
  {
    href: LINKED_IN_LINK,
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