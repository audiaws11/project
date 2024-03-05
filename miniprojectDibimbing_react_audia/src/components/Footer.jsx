import 'bootstrap/dist/css/bootstrap.min.css';
import './footer.css';
import 'bootstrap-icons/font/bootstrap-icons.css';

const Footer = () => {
  return (
    <footer id="footer" className="footer p-2">
      <hr />
      <div className="container p-5">
        <div className="row align-items-end">
          <div className="copyright col text-start">
            All rights Reserved <i className="bi bi-c-circle"></i> <b>Audia Winniar Savitri 2024</b>
          </div>
          <div className="copyright col text-end">
            Made with <i className="bi bi-heart-fill"></i> for Dibimbing Mini Project
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
