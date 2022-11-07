import { Col } from "react-bootstrap"

export const ProjectCard2 = ({ title, description, imageUrl, code }) => {
    console.log(imageUrl)
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="texto">{description}</span> 
                    <br />
                    <a href={code} target="_blank">Github</a>
                </div>

            </div>
        </Col>
    )
}