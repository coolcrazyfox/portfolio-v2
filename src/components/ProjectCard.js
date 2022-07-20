import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, href }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span><a href={href}>{description}</a></span>
          {/*<button className="proj-btn"><a href={href}>Link</a></button>*/}
        </div>
      </div>
    </Col>
  )
}
