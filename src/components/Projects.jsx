import { Col, Container, Row, Tab } from "react-bootstrap"
import Nav from 'react-bootstrap/Nav';
import { ProjectCard } from "./ProjectCard";
import { ProjectCard2 } from './ProjectCard2';
import colorSharp2 from '../assets/img/color-sharp2.png'
import mern from '../assets/img/projects/mern.png'
import alkemy from '../assets/img/projects/alkemy2.png'
import tzuzul from '../assets/img/projects/tzuzul.png'
import organizer from '../assets/img/projects/OrganizerApp.png'
import taskCrud from '../assets/img/projects/task-crud.png'
import TrackVisibility from 'react-on-screen';
import 'animate.css'


export const Projects = () => {
    const projects = [
        {
            title: "Alkemy Challegenge",
            description: "Api para explorar el mundo disney, la cual permite conocer y modificar personajes",
            url: "https://pr4zka-challenge-production.up.railway.app/api-docs/",
            code: "https://github.com/pr4zka/pr4zka-challenge",
            imageUrl: alkemy
        },
        {
            title: "Agenda App",
            description: "lorem asjkdjka asjdkajhskld ahsdhjas hjashdjkas jkashdjkas",
            url: "https://agenda-app-production.up.railway.app/api-docs/",
            code: "https://github.com/pr4zka/agenda-app",
            imageUrl: tzuzul
        },
        {
            title: "MERN-STACK",
            description: "lorem asjkdjka asjdkajhskld ahsdhjas hjashdjkas jkashdjkas",
            url: "https://agenda-app-production.up.railway.app/api-docs/",
            code: "https://github.com/pr4zka/mern-stack",
            imageUrl: mern
        },

    ]
    const projects2 = [
        {
            title: "Organizador de tareas",
            description: "lorem asjkdjka asjdkajhskld ahsdhjas hjashdjkas jkashdjkas",
            code: "https://github.com/pr4zka/organizerapp",
            imageUrl: organizer
        },
        {
            title: "Aplicacion de Tareas",
            description: "lorem asjkdjka asjdkajhskld ahsdhjas hjashdjkas jkashdjkas",
            code: "https://github.com/pr4zka/crud-react",
            imageUrl: taskCrud
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
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            projects2.map((project, index) => {
                                                return (
                                                    <ProjectCard2 key={index} {...project} />
                                                )
                                            })
                                        }
                                    </Row>
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