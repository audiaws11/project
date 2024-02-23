import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from "react-router-dom";
import 'aos/dist/aos.css'; 
import AOS from 'aos'; 
import './home.css';

const Home = () => {
    

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <>
            <Navbar />

            {/* Article 1 */}
            <article className="article1 min-vh-1000">
                <div className="row container p-5 mt-5">
                    <div className="col-6 p-5 ms-5 mt-2">
                        <h2 className="trade" data-aos="fade-up">Fresh &<br/>Tasty Salad</h2>
                        <p className="trademark">Just Relax, we’ve got you covered 
                            everyday of the week, Make you always <span style={{color: '#518B25', fontSize: '25px'}}><b>On</b></span></p>
                            <Link to = {"/menu"}>
                                <button className="btn btn-xsmall rounded-2" style={{background: '#518B25', color: 'aliceblue', padding: '8px 30px', fontSize: '12px'}}>
                                    <b>Discover Menu</b>
                                </button>
                            </Link>
                    </div>
                </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white min-vh-1000 p-5">
                <div className="container d-flex p-5">
                    <div className="row align-items-center p-5">
                        <div className="col-lg-6 col-sm-12" >
                            <img className="rounded-5"
                                src="image/pexels-alteredsnaps-14415371.jpg"
                                alt="restaurant-1" 
                                style={{height: '400px', width: '550px'}}
                            />
                        </div>

                        <div className="col-lg-6 col-sm-12 mt-2" data-aos="fade-up">
                            <h3 className="welcome">Welcome</h3>
                            <h2 className="namebrand"><span style={{color: '#518B25'}}>On</span>Salad<b></b></h2>
                            <p className="history">We believe in the power of fresh, wholesome food to keep you energized and always on. Our mission is to deliver salads bursting with flavor and nutrition, crafted from the finest locally-sourced ingredients. Our diverse menu features everything from classic favorites to innovative dishes, all designed to boost your health and keep you moving.</p>
                        </div>
                    </div>
                </div>
            </article>

           {/* Article 3 */}
           <article className="article3 min-vh-1000 p-5">
                <div className="container flex-box text-center">
                    <div className="row align-items-center" data-aos="fade-up">
                        <div className="col-lg-4 col-sm-12">
                            <img data-aos="fade-up" className="rounded-pill"
                                src="image/✰pinterest_ laurenchiangg.jpeg"
                                alt="restaurant-1" 
                                style={{height: '200px'}}
                            />
                            <h1><button type="button" className="btn rounded-pill disabled m-2 border-0" style={{background: '#da9a12', color: 'rgb(255, 255, 255)', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '20px', '--bs-btn-font-size': '15px'}}>
                                <b>25% Off</b>
                            </button></h1>
                            <h2 className="menu">Chicken Teriyaki Salad</h2>
                            <p><button type="button" className="btn btn-xsmall rounded-2" style={{background: '#518B25', color: 'aliceblue', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '30px', '--bs-btn-font-size': '12px'}}>
                                <b>7 Days Remaining<br/>Order Now</b>
                            </button></p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img data-aos="fade-up" data-aos-delay="200" className="rounded-pill"
                                src="image/_ (3).jpeg"
                                alt="restaurant-1" 
                                style={{height: '200px'}}
                            />
                            <h1><button type="button" className="btn rounded-pill disabled m-2 border-0" style={{background: '#da9a12', color: 'rgb(255, 255, 255)', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '20px', '--bs-btn-font-size': '15px'}}>
                                <b>20% Off</b>
                            </button></h1>
                            <h2 className="menu mt-1">Tuna Salad</h2>
                            <p><button type="button" className="btn btn-xsmall rounded-2" style={{background: '#518B25', color: 'aliceblue', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '30px', '--bs-btn-font-size': '12px'}}>
                                <b>8 Days Remaining<br/>Order Now</b>
                            </button></p>
                        </div>
                        <div className="col-lg-4 col-sm-12">
                            <img data-aos="fade-up" data-aos-delay="400" className="rounded-pill"
                                src="image/✰pinterest_ laurenchiangg (1).jpeg"
                                alt="restaurant-1" 
                                style={{height: '200px'}}
                            />
                            <h1><button type="button" className="btn rounded-pill disabled m-2 border-0" style={{background: '#da9a12', color: 'rgb(255, 255, 255)', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '20px', '--bs-btn-font-size': '15px'}}>
                                <b>15% Off</b>
                            </button></h1>
                            <h2 className="menu mt-1">Roasted Chicken Salad</h2>
                            <p><button type="button" className="btn btn-xsmall rounded-2" style={{background: '#518B25', color: 'aliceblue', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '30px', '--bs-btn-font-size': '12px'}}>
                                <b>6 Days Remaining<br/>Order Now</b>
                            </button></p>
                        </div>
                    </div>
                </div>
            </article>


            {/* Article 4 */}
            <article className="article4 min-vh-1000 p-5">
                <div className="container text-center" data-aos="flip-up">
                    <h2 className="order mt-1">Are you ready to order<br/>with the best deals?</h2>
                    <p>
                        <Link to = {"/menu"}>
                            <button className="btn btn-xsmall rounded-2" style={{background: '#518B25', color: 'aliceblue', padding: '8px 30px', fontSize: '12px', boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)'}} aria-label="Proceed to order">
                                <b>PROCEED TO ORDER &gt;</b>
                            </button>
                        </Link>
                    </p>
                </div>
            </article>

            <Footer />
        </>
    );
};

export default Home;
