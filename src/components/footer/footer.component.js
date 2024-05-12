import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as LinkedinIcon} from "../../image/footer/linkedin.svg";

const GIT_LINK = 'https://github.com/SVladikO';
const LINKED_IN_LINK = 'https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/';

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