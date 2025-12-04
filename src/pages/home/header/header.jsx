import {Wrapper, InnerWrapper, Logo, Navigation, NavigationItem} from "./header.style";

const Header = () => {
    return (
        <Wrapper className="t-Header">
            <InnerWrapper>
                <Logo>Serhiichuk CV</Logo>
                <Navigation>
                    <NavigationItem href='#AboutMe'>About me</NavigationItem>
                    <NavigationItem href='#OwnProjects'>Projects</NavigationItem>
                    <NavigationItem href='#OwnPackages'>Packages</NavigationItem>
                    <NavigationItem href='#WorkExperience'>Experience</NavigationItem>
                    <NavigationItem href='#ContactMe'>Contacts</NavigationItem>
                </Navigation>
            </InnerWrapper>
        </Wrapper>
    )
}

export default Header;