import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return (
        <div>
            <Navbar />

            {/* Article 1 */}
            <article className="article1 min-vh-1000 p-5 mt-5">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-6">
                            <h2 className="trade" data-aos="fade-up">Contact Us</h2>
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                                    <li className="breadcrumb-item active" aria-current="page">Contact Us</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </article>

            {/* Article 2 */}
            <article className="bg-white min-vh-1000 p-5">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-sm-12">
                            <h3 className="contact">Contact Us</h3>
                            <p className="contactexp" style={{ marginBottom: '30px', textAlign: 'justify'}}>Reach out to our catering team for personalized assistance, customizations, and any special arrangements you may need.</p>
                            <form className="form1 row g-3 border p-3 bg-body-tertiary rounded-2">
                                <div className="col-md-6">
                                    <label htmlFor="inputFirstName" className="form-label">First Name</label>
                                    <input type="text" className="form-control bg-body-secondary" id="inputFirstName" />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="inputLastName" className="form-label">Last Name</label>
                                    <input type="text" className="form-control bg-body-secondary" id="inputLastName" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputEmail" className="form-label">Email</label>
                                    <input type="email" className="form-control bg-body-secondary" id="inputEmail" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputPhone" className="form-label">Phone</label>
                                    <input type="number" className="form-control bg-body-secondary" id="inputPhone" />
                                </div>
                                <div className="col-12">
                                    <label htmlFor="inputMessage" className="form-label">Message</label>
                                    <input type="text" className="form-control bg-body-secondary" id="inputPhone" style={{ height: '100px' }} />
                                </div>
                                <div className="col-6">
                                    <select className="form-select bg-body-secondary" aria-label="Default select example">
                                        <option selected>Select Membership</option>
                                        <option value="1">Non-Member</option>
                                        <option value="2">Membership</option>
                                    </select>
                                </div>
                                <div className="col-12">
                                    <button type="submit" className="btn" style={{ background: '#518B25', color: 'aliceblue', padding: '6px 25px', fontSize: '13px', fontWeight: 'bold'}}>Send</button>
                                </div>
                            </form>
                        </div>
                        <div className="col-lg-6 col-sm-12 mt-2" data-aos="fade-up" data-aos-delay="300">
                            <img src="image/—Pngtree—contact us_5412848.png" alt="Contact Us" style={{ width: '550px', height: '470px' }} />
                        </div>
                    </div>
                </div>
            </article>

            <Footer />
        </div>
    );
}

export default Contact;
