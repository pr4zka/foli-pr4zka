import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import back from '../assets/img/ivan-developer.png'


export const Banner = () => {

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["Back-End Developer"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(300 - Math.random() * 100)
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta)
        return () => { clearInterval(ticker) }
    }, [text])
    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)
        setText(updatedText)

        if (isDeleting) {
            setDelta(prevDelta => prevDelta / 2)
        }

        if (!isDeleting && updatedText === fullText) {
            setIsDeleting(true)
            setDelta(period)
        } else if (isDeleting && updatedText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(500)
        }
    }

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <TrackVisibility>
                            {({ isVisible }) =>
                                <div className={isVisible ? "animated__animated animate_fadeIn" : ""}>
                                    <span className="tagline">Welcome to my Portafolio</span>
                                    <h2>Hi everyone</h2>
                                    <h1>{`Hi I'am`} <span className="wrap">{text}</span></h1>
                                    <h2>My name is Ivan Martinez, I am a back-end developer in Paraguay</h2>
                                </div>}
                        </TrackVisibility>
                    </Col>
                    <Col xs={12} md={6} xl={7}>
                        <img src={back} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section >
    )
}