import { Col } from "react-bootstrap"

export const ProjectCard = ({ title, descripcion, imageUrl }) => {
    return (
        <Col sm={6} md={4}>
            <div className="proj-imgbx">
                <img src={imageUrl} />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{descripcion}</span>
                </div>
            </div>
        </Col>
    )
}