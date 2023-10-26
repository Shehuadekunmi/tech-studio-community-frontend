import Hero from "../../components/Hero";
import { Container } from "react-bootstrap";
import Projects from "../../components/Projects";
import Footer from "../../Components/Footer";
import Header2 from "../../Components/Header2";

const Home = () => {
  return (
    <div>
      <Header2/>
      <Container>
        <Hero />
        <Projects />
      </Container>
      <Footer/>
    </div>
  );
};

export default Home;
