import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './about.css';

const About = () => {
    useEffect(() => {
        AOS.init();
    }, [])

  return (
    <div>
      <Navbar />

      {/* article 1 */}
      <article className="article1 min-vh-1000 p-5 mt-5">
        <div className="row container">
          <div className="col-6 p-5 ms-5">
            <h2 className="trade" data-aos="fade-up">About Us</h2>
            <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                <li className="breadcrumb-item active" aria-current="page">About Us</li>
              </ol>
            </nav>
          </div>
        </div>
      </article>

      {/* article 2 */}
      <article className="bg-white min-vh-1000 p-5">
        <div className="container d-flex">
          <div className="row align-items-" data-aos="fade-up" data-aos-delay="200">
            <div className="col">
              <h3 className="aboutus">about us:</h3>
              <h2 className="namebrand"><span style={{ color: "#518B25" }}><b>On</b></span>Salad</h2>
              <p className="history">Founded in 2010 by the visionary chef, Olivia N. Saladio, ONSalad has evolved into a culinary sanctuary committed to redefining the way we experience healthy eating. Olivias unwavering commitment to quality and her love for culinary innovation form the cornerstone of our establishment.
                <br /><br />
                More than a restaurant, ONSalad is a community hub with several locations across Indonesia. You can enjoy our culinary delights in the vibrant cities of <b>Surabaya, Jakarta, and Semarang</b>. Join us in celebrating a lifestyle of wellness, good food, and shared moments. Whether you prefer the cozy ambiance of our dine-in spaces, the convenience of ordering for delivery, or grabbing a quick bite on the go, ONSalad has multiple restaurants to enhance your culinary experience.
                <br /><br />
                Step into any of our inviting locations, each designed to create a warm and welcoming atmosphere. Our chefs at every ONSalad restaurant are dedicated to crafting nutritious and delicious meals, ensuring that each visit is a delightful experience.
                <br /><br />
                Thank you for being a part of the ONSalad journey. We invite you to savor the freshness, embrace the flavors, and make ONSalad a delicious part of your daily life.
                <br /><br />
                Cheers to good food, good health, and the ONSalad family!</p>
            </div>
          </div>
        </div>

        <div id="carouselExampleAutoplaying" className="carousel slide mt-4" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="2000">
              {/* First slide with three grid photos */}
              <div className="d-flex justify-content-around">
                <img src="image/Ficca + Luciano.jpeg" className="carousel-img rounded-4" alt="Image 1" style={{ width: "300px", height: "300px" }} />
                <img src="image/pexels-dmitry-zvolskiy-3679601.jpg" className="carousel-img rounded-4" alt="Image 2" style={{ width: "300px", height: "300px" }} />
                <img src="image/pexels-jonathan-bor.jpg" className="carousel-img rounded-4" alt="Image 3" style={{ width: "300px", height: "300px" }} />
              </div>
            </div>
            <div className="carousel-item">
              <div className="d-flex justify-content-around">
                <img src="image/sweetgreen eco-eateriy by Core Architecture, Bethesda – Maryland.jpeg" className="carousel-img rounded-4" alt="Image 1" style={{ width: "300px", height: "300px" }} />
                <img src="image/Sweetgreen Launches A New Menu That Bans Sriracha And Bacon.jpeg" className="carousel-img rounded-4" alt="Image 2" style={{ width: "300px", height: "300px" }} />
                <img src="image/Bol poke de thon ahi au sésame grillé _ Dash of Honey.jpeg" className="carousel-img rounded-4" alt="Image 3" style={{ width: "300px", height: "300px" }} />
              </div>
            </div>
            
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </article>

      {/* article 3 */}
      <article className="bg-body-tertiary min-vh-1000 p-5">
        <h2 className="namebrand1" data-aos="fade-up"><span style={{ color: "#518B25" }}><b>Our</b></span> Branch</h2>
        <div className="container flex-box text-center">
          <div className="row align-items-center" >
            <div className="col-lg-4 col-sm-12">
              <img className="rounded" data-aos="fade-up"src="image/_ (5).jpeg" alt="restaurant-1" style={{ height: "500px" }} />
              <h2 className="location">Grand Indonesia, Jakarta</h2>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img className="rounded" data-aos="fade-up" data-aos-delay="100"src="image/The Bowl by fortytwelve (1).jpeg" alt="restaurant-1" style={{ height: "500px" }} />
              <h2 className="location">Tunjungan Plaza, Surabaya</h2>
            </div>
            <div className="col-lg-4 col-sm-12">
              <img className="rounded" data-aos="fade-up" data-aos-delay="200"src="image/The Bowl by fortytwelve.jpeg" alt="restaurant-1" style={{ height: "500px" }} />
              <h2 className="location">DP Mall, Semarang</h2>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default About;
