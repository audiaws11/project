import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './menu.css';

const Menu = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <div>
            <Navbar />
            
            {/* Article 1 */}
            <article className="article1 min-vh-1000 p-5 mt-5" data-aos="fade-up">
                <div className="row container">
                    <div className="col-6 p-5 ms-5">
                        <h2 className="trade">Menu</h2>
                        <nav style={{ "--bs-breadcrumb-divider": ">" }} aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item"><Link to={"/"}>Home</Link></li>
                                <li className="active breadcrumb-item" aria-current="page">Menu</li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white min-vh-1000 p-5">
                <div className="container d-flex justify-content-center">
                    <h4 className="namebrand" data-aos="fade-up"><span style={{ color: '#518B25', fontSize: '50px', textAlign: 'center' }} >Discover Our Menus</span></h4>
                </div>
                <div className="container text-center mt-2 p-3">
                    <div className="row align-items-center">
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/_ (2).jpeg" className="card-img-top" alt="image-1" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Tofu Salad<span style={{ fontSize: "medium" }}> (380 kcal)</span></h5>
                                    <p className="card-text">Rp 48.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/Ted Cavanaugh _ MEALS _ 44.jpeg" className="card-img-top" alt="image-2" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Vegan Salad<span style={{ fontSize: "medium" }}> (380 kcal)</span></h5>
                                    <p className="card-text">Rp 38.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="200">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/_ (3).jpeg" className="card-img-top" alt="image-3" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Tuna Salad<span style={{fontSize:"medium"}}> (423 kcal)</span></h5>
                                    <p className="card-text">Rp 52.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="300">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/✰pinterest_ laurenchiangg.jpeg" className="card-img-top" alt="image-4" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Roasted Chick Salad<span style={{fontSize:"medium"}}> (485 kcal)</span></h5>
                                    <p className="card-text">Rp 57.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-4" data-aos="flip-left">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/Sushi Bowl au Surimi et Sauce Tahini - La Cuisine de Graldine.jpeg" className="card-img-top" alt="image-5" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Salmon Poke Salad<span style={{ fontSize: "medium" }}> (496 kcal)</span></h5>
                                    <p className="card-text">Rp 74.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/lucyrider.jpeg" className="card-img-top" alt="image-6" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Rainbow Salad<span style={{ fontSize: "medium" }}> (439 kcal)</span></h5>
                                    <p className="card-text">Rp 51.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="200">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/Bol poke de thon ahi au sésame grillé _ Dash of Honey.jpeg" className="card-img-top" alt="image-7" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Wagyu Steak Salad<span style={{fontSize:"medium"}}> (478 kcal)</span></h5>
                                    <p className="card-text">Rp 89.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="300">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/Teriyaki Chicken Poke Bowls - Easy & Healthy!.jpeg" className="card-img-top" alt="image-8" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Teriyaki Chick Salad<span style={{fontSize:"medium"}}> (435 kcal)</span></h5>
                                    <p className="card-text">Rp 69.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 mt-4" data-aos="flip-left">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/banana-kesemek.jpg" className="card-img-top" alt="image-9" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Peachnana Smoothies</h5>
                                    <p className="card-text">Rp 34.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/blue banana.jpg" className="card-img-top" alt="image-10" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Berrynana Smoothies</h5>
                                    <p className="card-text">Rp 38.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="200">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/sttraw.jpg" className="card-img-top" alt="image-11" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Dalkginana Smoothies</h5>
                                    <p className="card-text">Rp 39.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="300">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/green.jpg" className="card-img-top" alt="image-12" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Green Smoothies</h5>
                                    <p className="card-text">Rp 33.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/tea.jpg" className="card-img-top" alt="image-13" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Lychee Ade</h5>
                                    <p className="card-text">Rp 24.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="100">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/tea korea.jpg" className="card-img-top" alt="image-14" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Dalkgi Ade</h5>
                                    <p className="card-text">Rp 25.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="200">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/tea plum.jpg" className="card-img-top" alt="image-15" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Lemon Tea</h5>
                                    <p className="card-text">Rp 21.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                        <div className="col-lg-3 mt-4" data-aos="flip-left" data-aos-delay="300">
                            <div className="card" style={{ width: "20rem", height: "450px" }}>
                                <img src="image/peach.jpg" className="card-img-top" alt="image-16" style={{ maxHeight: "300px" }} />
                                <div className="card-body">
                                    <h5 className="card-title">Peach Tea</h5>
                                    <p className="card-text">Rp 24.000,00</p>
                                    <Link to={"/"} className="order btn" style={{fontSize: "medium", color: "aliceblue", background: "#518B25"}}>Order Now</Link>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
};

export default Menu;
