import {Logo, Wrapper, WrapperShadow, Link, LinkGroups} from "./header.style";

export default function Header() {
    return (
        <WrapperShadow>
            <Wrapper>
                <Logo>Serhiichuk</Logo>
                <LinkGroups>
                    <Link>About me</Link>
                    <Link>Projects</Link>
                    <Link>Packages</Link>
                    <Link>Experience</Link>
                    <Link>Contacts</Link>
                </LinkGroups>
            </Wrapper>
        </WrapperShadow>
    )
}