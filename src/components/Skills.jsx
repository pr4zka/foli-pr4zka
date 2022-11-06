import { Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css';
import js from '../assets/img/js.png'
import colorSharp from '../assets/img/color-sharp.png'
import react from '../assets/img/react.svg.png'
import mysql from '../assets/img/mysql.png'
import mongo from '../assets/img/mongo.png'
import css from '../assets/img/css.png'
import sequelize from '../assets/img/sequelize.png'
import node from '../assets/img/nodejs.png'
import swagger from '../assets/img/swagger.png'
import git from '../assets/img/git.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <section className='skill' id='skills'>
            <Container>
                <Row>
                    <Col>
                        <div className='skill-bx'>
                            <h2>Skills</h2>
                            <h3>Some of my skills</h3>
                            <Carousel responsive={responsive} infinite={true} className="skill=slider">
                                <div className='item'>
                                    <img src={js} alt="Image" />
                                </div>
                                <div className='item'>
                                    <img src={react} className="w-20" alt="Image" />
                                </div>
                                <div className='item'>
                                    <img src={mysql} alt="Image" />
                                </div>
                                <div className='item mongo'>
                                    <img src={mongo} alt="Image" />
                                </div>
                                <div className='item css'>
                                    <img src={css} alt="Image" />
                                </div>
                                <div className='item sequelize'>
                                    <img src={sequelize} alt="Image" />
                                </div>
                                <div className='item node'>
                                    <img src={node} alt="Image" />
                                </div>
                                <div className='item swagger'>
                                    <img src={swagger} alt="Image" />
                                </div>
                                <div className='item git'>
                                    <img src={git} alt="Image" />
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
            <img src={colorSharp} className='background-image-left' />
        </section>
    )
}