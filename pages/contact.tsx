// pages/contact.tsx
import Layout from '../components/Layout';
import React from 'react';

const Contact = () => {
  return (
    <Layout>
      <div className="ftco-blocks-cover-1">
        <div
          className="ftco-cover-1 overlay innerpage"
          style={{ backgroundImage: "url('images/hero_2.jpg')" }}
        >
          <div className="container">
            <div className="row align-items-center justify-content-center">
              <div className="col-lg-6 text-center">
                <h1>Contact Us</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="site-section bg-light" id="contact-section">
        <div className="container">
          <div className="row justify-content-center text-center">
            <div className="col-7 text-center mb-5">
              <h2>Contact Us Or Use This Form To Rent A Car</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-8 mb-5">
              <form action="#" method="post">
                <div className="form-group row">
                  <div className="col-md-6 mb-4 mb-lg-0">
                    <input type="text" className="form-control" placeholder="First name" />
                  </div>
                  <div className="col-md-6">
                    <input type="text" className="form-control" placeholder="Last name" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <input type="text" className="form-control" placeholder="Email address" />
                  </div>
                </div>

                <div className="form-group row">
                  <div className="col-md-12">
                    <textarea className="form-control" placeholder="Write your message." cols={30} rows={10}></textarea>
                  </div>
                </div>
                <div className="form-group row">
                  <div className="col-md-6 mr-auto">
                    <input type="submit" className="btn btn-block btn-primary text-white py-3 px-5" value="Send Message" />
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-4 ml-auto">
              <div className="bg-white p-3 p-md-5">
                <h3 className="text-black mb-4">Contact Info</h3>
                <ul className="list-unstyled footer-link">
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Address:</span>
                    <span>34 Street Name, City Name Here, United States</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Phone:</span>
                    <span>+1 242 4942 290</span>
                  </li>
                  <li className="d-block mb-3">
                    <span className="d-block text-black">Email:</span>
                    <span>info@yourdomain.com</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3">
              <h2 className="footer-heading mb-4">About Us</h2>
              <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
            </div>
            <div className="col-lg-8 ml-auto">
              <div className="row">
                {[...Array(4)].map((_, index) => (
                  <div className="col-lg-3" key={index}>
                    <h2 className="footer-heading mb-4">Quick Links</h2>
                    <ul className="list-unstyled">
                      <li><a href="#">About Us</a></li>
                      <li><a href="#">Testimonials</a></li>
                      <li><a href="#">Terms of Service</a></li>
                      <li><a href="#">Privacy</a></li>
                      <li><a href="#">Contact Us</a></li>
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="row pt-5 mt-5 text-center">
            <div className="col-md-12">
              <div className="border-top pt-5">
                <p>
                  Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="icon-heart text-danger" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </Layout>
  );
};

export default Contact;
