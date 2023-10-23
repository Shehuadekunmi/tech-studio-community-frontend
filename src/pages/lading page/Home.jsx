import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import Projects from "../../components/Projects";

const Home = () => {
  return (
    <div>
      <Container>
        <Hero />
        <Projects />
      </Container>
    </div>
  );
};

export default Home;
