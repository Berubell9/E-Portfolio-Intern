import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiPhp } from "react-icons/si";
import { SiMysql } from "react-icons/si";
import { RiJavaLine } from "react-icons/ri";
import { FaPython } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { DiJqueryLogo } from "react-icons/di";
import { FaBootstrap } from "react-icons/fa";
import { SiDjango } from "react-icons/si";
import { FaNode } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoFigma } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { SiXampp } from "react-icons/si";
import { SiCoursera } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { FaDatabase } from "react-icons/fa";

function skill() {
    return (
        <Container>
            <h1>Skills</h1>
            <Row>
                <Col xs={12} md={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title className='text-center'>Language</Card.Title>
                            <h5 className='text-center'>
                                <Badge bg="dark"> <FaHtml5 /> HTML</Badge>
                                <Badge bg="dark" className="ms-2"><FaCss3Alt /> CSS</Badge>
                                <Badge bg="dark" className="ms-2"><RiJavascriptFill /> JavaScript</Badge>
                                <Badge bg="dark" className="ms-2"><SiPhp /> PHP</Badge>
                                <Badge bg="dark" className="ms-2"><FaDatabase /> SQL</Badge>
                                <Badge bg="dark" className="ms-2"><RiJavaLine /> Java</Badge>
                                <Badge bg="dark" className="ms-2"><FaPython /> Python</Badge>
                                <Badge bg="dark" className="ms-2"><SiCoursera /> C</Badge>
                            </h5>
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title className='text-center'>Frameworks / Library</Card.Title>
                            <h5 className='text-center'>
                                <Badge bg="dark"><FaReact /> React</Badge>
                                <Badge bg="dark" className="ms-2"><DiJqueryLogo /> JQuery</Badge>
                                <Badge bg="dark" className="ms-2"><FaBootstrap /> Bootstrap</Badge>
                                <Badge bg="dark" className="ms-2"><RiTailwindCssFill /> Tailwind CSS</Badge>
                                <Badge bg="dark" className="ms-2"><FaNode /> Node.js</Badge>
                                <Badge bg="dark" className="ms-2"><SiDjango /> Django</Badge>
                            </h5>
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
                <Col xs={12} md={4}>
                    <Card style={{ width: '100%' }}>
                        <Card.Body>
                            <Card.Title className='text-center'>Tools / Database</Card.Title>
                            <h5 className='text-center'>
                                <Badge bg="dark"><IoLogoFigma /> Figma</Badge>
                                <Badge bg="dark" className="ms-2"><FaGithub /> Github Desktop</Badge>
                                <Badge bg="dark" className="ms-2"><SiXampp /> Xampp</Badge>
                                <Badge bg="dark" className="ms-2"><SiMysql /> MySQL</Badge>
                                <Badge bg="dark" className="ms-2"><SiMongodb /> MongoDB</Badge>
                            </h5>
                        </Card.Body>
                    </Card>
                    <br />
                </Col>
            </Row>
        </Container>
    );
}
export default skill;