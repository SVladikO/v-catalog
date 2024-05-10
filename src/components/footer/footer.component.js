
import {GIT_LINK, LINKED_IN_LINK} from '../../common/link.js';

import Text from "../text/text.component";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as LinkedinIcon} from "../../image/footer/linkedin.svg";

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
        <a href={GIT_LINK} target="_blank" rel="noreferrer">
            <GithubIcon/>
        </a>
        <a href={LINKED_IN_LINK} target="_blank" rel="noreferrer">
            <LinkedinIcon/>
        </a>
      </div>
    </div>
  )
}


export default Footer;