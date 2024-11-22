import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import { CgFileDocument } from "react-icons/cg";
import "./Home.css";

function Home() {
  return (
    <Container>
      <div class="detail">
      <h2>WELCOME TO MY PORTFOLIO</h2>
        <p>This website was developed to compile and showcase
          <br />my personal information and projects.</p>
        <Button variant="dark" size='lg' href='#about'>About Me</Button>
        <Button variant="light" size='lg' href='./image/Kornkamol Resume.pdf' target='blank' className="ms-2">My Resume <CgFileDocument/></Button>
      </div>
    </Container>
  );
}
export default Home;