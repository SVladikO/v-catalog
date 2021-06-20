import './footer.style.scss'

import Text from "../text/text.component";

import {ReactComponent as GithubIcon} from "../../image/footer/github.svg";
import {ReactComponent as LinkedinIcon} from "../../image/footer/linkedin.svg";

const profileLinks = [
    {
        href: 'https://github.com/SVladikO',
        imageComponent: <GithubIcon/>,
        alt: 'github'
    },
    {
        href: 'https://www.linkedin.com/in/vlad-serhiychuk-b753b7188/',
        imageComponent: <LinkedinIcon/>,
        alt: 'linkedin'
    }
];

function Footer() {
    return (
        <div className="footer">
            <div className="profile_container">
                <span className="profile_title">
                    <Text translationKey="$FOOTER.PROFILE.TITLE"/>
                </span>
                <div className="profile_links">
                    {
                        profileLinks.map(link =>
                            <a href={link.href} alt={link.alt} target="_blank" alt={link.alt}>
                                {link.imageComponent}
                            </a>
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default Footer;