import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useState, useEffect } from 'react'
import ivan from '../assets/img/Ivan.svg'
import lk from '../assets/img/lk.png'
import twitter from '../assets/img/Twitter-logo.svg.png'
import ig from '../assets/img/Ig.png'
import git from '../assets/img/github.png'

function BasicExample() {

    const [activeLink, setActiveLink] = useState('home')
    const [scrolled, seScrolled] = useState(false)


    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                seScrolled(true)
            } else {
                seScrolled(false)
            }
        }

        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUdateActiveLink = (value) => {
        setActiveLink(value)
    }

    return (
        <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
            <Container>
                <Navbar.Brand href="#home">
                    <img src={ivan} alt="Logo" />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav">
                    <span className='nabvar-toggler-icon'></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUdateActiveLink('projects')}>projects</Nav.Link>
                    </Nav>
                    <span className='navbar-text'>
                        <div className='social-icon'>
                            <a href="https://www.linkedin.com/in/ivan-martinez/" target="blank"><img src={lk} alt="linkedin" /></a>
                            <a href="https://twitter.com/ivan_yf666" target="blank"><img src={twitter} alt="f" /></a>
                            <a href="https://instagram.com/ivan.yf?igshid=YmMyMTA2M2Y=" target="blank"><img src={ig} alt="ig" /></a>
                            <a href="https://github.com/pr4zka" target="blank"><img src={git} alt="ig" /></a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default BasicExample;