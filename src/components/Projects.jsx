import "../styles/projects.css";
import image1 from "../assets/image1.png";
import icon1 from "../assets/icon1.png";
import image2 from "../assets/image2.png";
import icon2 from "../assets/icon2.png";
import image3 from "../assets/image3.png";
import icon3 from "../assets/icon3.png";
import image4 from "../assets/image4.png";
import icon4 from "../assets/icon4.png";
import image5 from "../assets/image5.png";
import icon5 from "../assets/icon5.png";
import image6 from "../assets/image6.png";
import icon6 from "../assets/icon6.png";
import image7 from "../assets/image7.png";
import icon7 from "../assets/icon7.png";
import image8 from "../assets/image8.png";
import icon8 from "../assets/icon8.png";
import image9 from "../assets/image9.png";
import icon9 from "../assets/icon9.png";
import image10 from "../assets/image10.png";
import icon10 from "../assets/icon10.png";
import image11 from "../assets/image11.png";
import icon11 from "../assets/icon11.png";
import image12 from "../assets/image12.png";
import icon12 from "../assets/icon12.png";
import { AiOutlineHeart } from "react-icons/ai";
import { AiOutlineEye } from "react-icons/ai";
import { Container } from "react-bootstrap";
import Pagination from "react-bootstrap/Pagination";

const Projects = () => {
  return (
    <Container>
      <div className="hero-sec">
        <div className="mt-5">
          <section>
            <div className="d-flex justify-content-between filter">
              <h3>Community Projects</h3>
              <select name="" id="">
                {/* <option value="">Filter By</option> */}
                <option value="">Data Analysis</option>
                <option value="">Web Development</option>
                <option value="">Product Design</option>
              </select>
            </div>
            <hr />
          </section>
          <section>
            <div className="project-profile">
              <div className=" profile">
                <img src={image1} alt="" className="profile-image" />
                <div className="w-100 h-25  text-capitalize px-4 profile-tittle">
                  <p>Job Tittle
                    Lorem ipsum dolor sit amet consectetuelit.
                  </p>
                </div>
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon1} alt="" className="profile-icon" />
                    <p className="profile-name">Daniel Joshua Ademide</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>232</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>1.4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image2} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon2} alt="" className="profile-icon" />
                    <p className="profile-name">Mary Kingsley</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>312</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>12.8k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image3} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon3} alt="" className="profile-icon" />
                    <p className="profile-name">Joseph Gift</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>200</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>62.4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image4} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon4} alt="" className="profile-icon" />
                    <p className="profile-name">John Doe</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>202</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>3.0k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image5} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon5} alt="" className="profile-icon" />
                    <p className="profile-name">Success Techie</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>562</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>7.4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image6} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon6} alt="" className="profile-icon" />
                    <p className="profile-name">Sikiru Semiu</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>772</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>8.1k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image7} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon7} alt="" className="profile-icon" />
                    <p className="profile-name">Multiple Owners</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>732</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>12k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image8} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon8} alt="" className="profile-icon" />
                    <p className="profile-name">Funsho Adekunle</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>91</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image9} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon9} alt="" className="profile-icon" />
                    <p className="profile-name">Chris Chukuebuka</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>342</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>87.4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image10} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon10} alt="" className="profile-icon" />
                    <p className="profile-name">Olatunbosun Solomon Adelana</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>542</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>2.5k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image11} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon11} alt="" className="profile-icon" />
                    <p className="profile-name">Olamide Owoseni Elizabeth</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>502</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>41.4k</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" profile">
                <img src={image12} alt="" className="profile-image" />
                <div className="d-flex justify-content-between mt-2">
                  <div className="d-flex gap-2">
                    <img src={icon12} alt="" className="profile-icon" />
                    <p className="profile-name">Sheue Fashola</p>
                  </div>

                  <div className="gap-1 d-flex">
                    <div className="d-flex  ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineHeart />
                      </p>
                      <p>340</p>
                    </div>

                    <div className="d-flex ">
                      <p className="d-flex fs-6 p-1">
                        {" "}
                        <AiOutlineEye />
                      </p>
                      <p>16.5k</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="mt-5 d-flex justify-content-center">
        <Pagination>
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Last />
        </Pagination>
      </div>
    </Container>
  );
};

export default Projects;
