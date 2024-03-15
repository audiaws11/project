import { useEffect } from "react";
import Layout from "../../components/layout/Layout";
import AOS from "aos";
import 'aos/dist/aos.css'; 
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

const Home = () => {
    useEffect(() => {
        AOS.init();
      }, []);
    
    return (
        <Layout>
            <div>
                <article className="article1 mt-5">
                    <p data-aos="fade-up" data-aos-delay="100">Official for All Fans</p></article>
                <article className="article2">
                    <h1 className="text-center" data-aos="fade-up">Looking for new artists?</h1>
                    <div className="row justify-content-center"  >
                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/474x/a5/5f/d7/a55fd7a5d78788d41281cea62be9cdce.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Aespa</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/564x/76/df/d1/76dfd144f7da66c3cd597ffe488dfcfd.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Paul Kim</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/736x/30/78/38/30783861cb79170fbae335377ee00bc0.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Itzy</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4"data-aos="fade-up" data-aos-delay="600">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/564x/4f/47/f1/4f47f1c85b936c98ef69b60045558bba.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Seventeen</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4"data-aos="fade-up" >
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/564x/b7/49/9c/b7499c2e17d4c9e1d9c1d6fa47a7405c.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">SHINee</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="200">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/564x/bd/e6/6c/bde66cf6be0700e4440a6e831fd4e21a.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">BSS</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="400">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/564x/cd/38/88/cd3888476819104000e755982d3b10bd.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">IVE</h5>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6 mb-4" data-aos="fade-up" data-aos-delay="600">
                            <div className="card" style={{ width: '18rem' }}>
                                <img src="https://i.pinimg.com/474x/11/e0/67/11e067721262658046d200c9fae9dc77.jpg" className="imagecard" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">Got7</h5>
                                </div>
                            </div>
                        </div>
                        </div>
                </article>
            </div>
        </Layout>
    );
};

export default Home;
