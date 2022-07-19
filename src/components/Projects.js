import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/social.gif";
import projImg2 from "../assets/img/todolist.gif";
import projImg3 from "../assets/img/webSite.gif";
import projImg4 from "../assets/img/hanami.gif";
import projImg5 from "../assets/img/counter.gif";
import projImg6 from "../assets/img/cards.jpg";
import projImg7 from "../assets/img/miami.gif";
import projImg8 from "../assets/img/bmw.gif";
import projImg9 from "../assets/img/hotel.jpg";
import projImg10 from "../assets/img/weather.gif";
import projImg11 from "../assets/img/chess.gif";
import projImg12 from "../assets/img/rick&morty.gif";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projectsTabFirst = [
    {
      title: "SOCIAL NETWORK",
      description: "Look at my SOCIAL NETWORK",
      imgUrl: projImg1,
    },
    {
      title: "TODOLIST",
      description: "Look at my TODOLIST-APP",
      imgUrl: projImg2,
    },
    {
      title: "WEBSITE",
      description: "Look at my WEBSITE",
      imgUrl: projImg3,
    },
    {
      title: "HANAMI",
      description: "Look at my HANAMI-WEBSITE",
      imgUrl: projImg4,
    },
    {
      title: "COUNTER",
      description: "Look at my COUNTER-APP",
      imgUrl: projImg5,
    },
    {
      title: "CARDS",
      description: "Look at my CARDS-APP",
      imgUrl: projImg6,
    },
  ];
  const projectsTabSecond = [
    {
      title: "MIAMI",
      description: "Look at my MIAMI-WEBSITE",
      imgUrl: projImg7,
    },
    {
      title: "BMW-WEBSITE",
      description: "Look at my BMW-WEBSITE",
      imgUrl: projImg8,
    },
    {
      title: "HOTELS WEBSITE",
      description: "Look at my HOTELS WEBSITE",
      imgUrl: projImg9,
    },
    {
      title: "WEATHER SITE",
      description: "Look at my WEATHER-WEBSITE",
      imgUrl: projImg10,
    },
    {
      title: "CHESS APP",
      description: "Look at my CHESS-GAME",
      imgUrl: projImg11,
    },
    {
      title: "RICK & MORTY APP",
      description: "Look at my R&M-APP",
      imgUrl: projImg12,
    },
  ];
  const projectsTabThird = [
    {
      title: "3D WEBSITE",
      description: "Look at my 3D WEBSITE",
      imgUrl: projImg13,
    },
    {
      title: "TODOLIST",
      description: "Look at my TODOLIST-APP",
      imgUrl: projImg2,
    },
    {
      title: "WEBSITE",
      description: "Look at my WEBSITE",
      imgUrl: projImg3,
    },
    {
      title: "HANAMI",
      description: "Look at my HANAMI-WEBSITE",
      imgUrl: projImg1,
    },
    {
      title: "COUNTER",
      description: "Look at my COUNTER-APP",
      imgUrl: projImg2,
    },
    {
      title: "CARDS",
      description: "Look at my CARDS-APP",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projectsTabFirst.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                        {
                          projectsTabSecond.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                        {
                          projectsTabThird.map((project, index) => {
                            return (
                                <ProjectCard
                                    key={index}
                                    {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} ></img>
    </section>
  )
}
