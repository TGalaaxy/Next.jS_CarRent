// pages/services.js
import Layout from '../components/Layout';

const Services = () => {
    const currentYear = new Date().getFullYear(); // Get the current year

    return (
        <Layout>
            <div className="ftco-blocks-cover-1">
                <div className="ftco-cover-1 overlay innerpage" style={{ backgroundImage: "url('images/hero_2.jpg')" }}>
                    <div className="container">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-lg-6 text-center">
                                <h1>Our Services</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="site-section">
                <div className="container">
                    <div className="row">
                        {/* Service Cards */}
                        {[
                            { title: "Car Key", icon: "flaticon-car", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                            { title: "Valet Service", icon: "flaticon-valet-1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                            { title: "Key Replacement", icon: "flaticon-key", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                            { title: "Repair", icon: "flaticon-car-1", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                            { title: "Car Accessories", icon: "flaticon-traffic", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                            { title: "Own a Car", icon: "flaticon-valet", description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Obcaecati, laboriosam." },
                        ].map((service, index) => (
                            <div key={index} className="col-lg-4 mb-4 mb-lg-5">
                                <div className="service-1 dark">
                                    <span className="service-1-icon">
                                        <span className={service.icon}></span>
                                    </span>
                                    <div className="service-1-contents">
                                        <h3>{service.title}</h3>
                                        <p>{service.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container site-section mb-5">
                <div className="row justify-content-center text-center">
                    <div className="col-7 text-center mb-5">
                        <h2>How it works</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
                    </div>
                </div>
                <div className="how-it-works d-flex">
                    {[
                        { number: "01", caption: "Time & Place" },
                        { number: "02", caption: "Car" },
                        { number: "03", caption: "Details" },
                        { number: "04", caption: "Checkout" },
                        { number: "05", caption: "Done" },
                    ].map((step, index) => (
                        <div key={index} className="step">
                            <span className="number"><span>{step.number}</span></span>
                            <span className="caption">{step.caption}</span>
                        </div>
                    ))}
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
                                <div className="col-lg-3">
                                    <h2 className="footer-heading mb-4">Quick Links</h2>
                                    <ul className="list-unstyled">
                                        <li><a href="#">About Us</a></li>
                                        <li><a href="#">Testimonials</a></li>
                                        <li><a href="#">Terms of Service</a></li>
                                        <li><a href="#">Privacy</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                    </ul>
                                </div>
                                {/* You can add more quick links here if needed */}
                            </div>
                        </div>
                    </div>
                    <div className="row pt-5 mt-5 text-center">
                        <div className="col-md-12">
                            <div className="border-top pt-5">
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </Layout>
    );
};

export default Services;
