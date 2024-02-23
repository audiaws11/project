import './navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



function Footer() {

 

    return (
        <footer id="footer" className="min-vh-1000 p-5">
            <div className="container">
                <div className="row align-items-start">
                    <div className="col">
                        <p>Open Hours</p>
                        <ul id="open" style={{ listStyleType: 'none' }}>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        Monday - Friday
                                    </div>
                                    <div className="col">
                                        09.00 - 20.00
                                    </div>
                                </div>
                            </li>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        Saturday
                                    </div>
                                    <div className="col">
                                        09.00 - 21.00
                                    </div>
                                </div>
                            </li>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        Sunday and Holiday
                                    </div>
                                    <div className="col">
                                        10.00 - 21.00
                                    </div>
                                </div>
                            </li>
                        </ul>
                        <p>Locations</p>
                        <ul id="open" style={{ listStyleType: 'none' }}>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        Grand Indonesia, Jakarta
                                    </div>
                                </div>
                            </li>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        Tunjungan Plaza, Surabaya
                                    </div>
                                </div>
                            </li>
                            <li className="container">
                                <div className="row align-items-start">
                                    <div className="col">
                                        DP Mall, Semarang
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div id="followus" className="col mt-5">
                        <div>FOLLOW US
                            <p className="mt-4">
                                <i className="logo bi bi-instagram"></i>
                                <i className="logo bi bi-facebook"></i>
                                <i className="logo bi bi-twitter-x"></i>
                            </p>
                        </div>
                        <div> Receive exclusive offers in your mailbox
                            <div className="row mt-4">
                                <div className="col">
                                    <input type="text" className="form-control border-0" placeholder="Enter Your email" aria-label="Enter Your email" style={{ backgroundColor: '#ADADAD', fontSize: '18px', fontWeight: 'lighter' }} />
                                </div>
                                <div className="col">
                                    <button type="button" className="btn btn-xsmall rounded-2" data-bs-toggle="modal" data-bs-target="#exampleModal" style={{ background: '#FFB800', color: 'aliceblue', '--bs-btn-padding-y': '8px', '--bs-btn-padding-x': '30px', '--bs-btn-font-size': '14px', boxShadow: '0 0 20px rgba(219, 223, 12, 0.5)' }}>
                                        <b>Subscribe</b>
                                    </button>
                                    <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Subscribe</h1>
                                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                                </div>
                                                <div className="modal-body">
                                                    <h1><i className="bi bi-patch-check spinning" style={{ fontSize: 'larger', color: '#518B25'}}></i></h1>
                                                    Awesome!
                                                    <p>You are already subscribed.</p>
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container mt-1">
                <div className="row align-items-end">
                    <div className="copyright col text-start">
                        All rights Reserved <i className="bi bi-c-circle"></i> <b>Audia Winniar Savitri 2024</b>
                    </div>
                    <div className="copyright col text-end">
                        Made with <i className="bi bi-heart-fill"></i> for Dibimbing React Assignment
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
