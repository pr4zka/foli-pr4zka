import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, description, imageUrl, url }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span className="texto">{description}</span> 
                    <br />
                    <a href={url} target="_blank">Go to project</a>
                </div>

            </div>
        </Col>
    )
}