import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from '../assets/img/color-sharp2.png'
import projImg3 from '../assets/img/project-img3.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css'


export const Projects = () => {
    const projects = [
        {
            title: "alkemy challegenge",
            descriptiom: "reto de alkemy",
            imageUrl: projImg3
        },
        {
            title: "alkemy challegenge",
            descriptiom: "reto de alkemy",
            imageUrl: projImg3
        },
        {
            title: "alkemy challegenge",
            descriptiom: "reto de alkemy",
            imageUrl: projImg3
        }

    ]
    return (
        <section className="project" id="projects">
            <Container>
                <Row>
                    <Col>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animate__animated animate__bounce" : ""}>
                                    <h2>Projects</h2>
                                    <p>These are some of my projects</p>
                                </div>}
                        </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">One</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Two</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Three</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            projects.map((project, index) => {
                                                return (
                                                    <ProjectCard key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="Second" className="text-center">
                                    In procces
                                </Tab.Pane>
                                <Tab.Pane eventKey="third" className="text-center">
                                    In procces
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} />
        </section>
    )
}