// pages/index.js
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <div className="site-wrap" id="home-section">

                <div className="site-mobile-menu site-navbar-target">
                    <div className="site-mobile-menu-header">
                        <div className="site-mobile-menu-close mt-3">
                            <span className="icon-close2 js-menu-toggle"></span>
                        </div>
                    </div>
                    <div className="site-mobile-menu-body"></div>
                </div>

                <header className="site-navbar site-navbar-target" role="banner">
                    <div className="container">
                        <div className="row align-items-center position-relative">
                            <div className="col-3">
                                <div className="site-logo">
                                    <a href="/">CarRent</a>
                                </div>
                            </div>
                            <div className="col-9 text-right">
                                <span className="d-inline-block d-lg-none">
                                    <a href="#" className="text-white site-menu-toggle js-menu-toggle py-5 text-white">
                                        <span className="icon-menu h3 text-white"></span>
                                    </a>
                                </span>
                                <nav className="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">
                                    <ul className="site-menu main-menu js-clone-nav ml-auto">
                                        <li className="active"><a href="/" className="nav-link">Home</a></li>
                                        <li><a href="/services" className="nav-link">Services</a></li>
                                        <li><a href="/cars" className="nav-link">Cars</a></li>
                                        <li><a href="/about" className="nav-link">About</a></li>
                                        <li><a href="/blog" className="nav-link">Blog</a></li>
                                        <li><a href="/contact" className="nav-link">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </header>

                <div className="ftco-blocks-cover-1">
                    <div className="ftco-cover-1 overlay" style={{ backgroundImage: "url('images/hero_1.jpg')" }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="feature-car-rent-box-1">
                                        <h3>Range Rover S7</h3>
                                        <ul className="list-unstyled">
                                            <li><span>Doors</span><span className="spec">4</span></li>
                                            <li><span>Seats</span><span className="spec">6</span></li>
                                            <li><span>Luggage</span><span className="spec">2 Suitcase/2 Bags</span></li>
                                            <li><span>Transmission</span><span className="spec">Automatic</span></li>
                                            <li><span>Minimum age</span><span className="spec">18 years</span></li>
                                        </ul>
                                        <div className="d-flex align-items-center bg-light p-3">
                                            <span>$150/day</span>
                                            <a href="/contact" className="ml-auto btn btn-primary">Rent Now</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Services Section */}
                <section className="ftco-section" id="services-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="heading-section">Our Services</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="service">
                                    <span className="icon-car"></span>
                                    <h3 className="heading">Car Rental</h3>
                                    <p>Enjoy a wide selection of vehicles available for rent.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service">
                                    <span className="icon-shield"></span>
                                    <h3 className="heading">Insurance</h3>
                                    <p>All rentals come with comprehensive insurance for peace of mind.</p>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="service">
                                    <span className="icon-map"></span>
                                    <h3 className="heading">Guided Tours</h3>
                                    <p>Explore the area with our guided tours available with rental.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Cars Section */}
                <section className="ftco-section" id="cars-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="heading-section">Our Cars</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="car">
                                    <image src="images/car_1.jpg" alt="Car 1" className="img-fluid" />
                                    <h3 className="heading">Toyota Camry</h3>
                                    <span className="price">$120/day</span>
                                    <link href="/contact" className="btn btn-primary">Rent Now</link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="car">
                                    <image src="images/car_2.jpg" alt="Car 2" className="img-fluid" />
                                    <h3 className="heading">Honda Accord</h3>
                                    <span className="price">$130/day</span>
                                    <link href="/contact" className="btn btn-primary">Rent Now</link>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="car">
                                    <img src="images/car_3.jpg" alt="Car 3" className="img-fluid" />
                                    <h3 className="heading">BMW 5 Series</h3>
                                    <span className="price">$200/day</span>
                                    <a href="/contact" className="btn btn-primary">Rent Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* About Section */}
                <section className="ftco-section" id="about-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="heading-section">About Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <p>At CarRent, we offer the best rental services in town with a fleet of modern vehicles to choose from. Our commitment is to provide you with an unforgettable driving experience.</p>
                            </div>
                            <div className="col-md-6">
                                <p>Whether you need a car for a day or a month, we have flexible options tailored to your needs. Our customer support team is always ready to assist you.</p>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Blog Section */}
                <section className="ftco-section" id="blog-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="heading-section">Latest from Blog</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-4">
                                <div className="blog">
                                    <img src="images/blog_1.jpg" alt="Blog 1" className="img-fluid" />
                                    <h3 className="heading">Top 5 Tips for Renting a Car</h3>
                                    <p>A comprehensive guide to help you choose the best car rental service.</p>
                                    <a href="/blog/top-5-tips" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog">
                                    <img src="images/blog_2.jpg" alt="Blog 2" className="img-fluid" />
                                    <h3 className="heading">Best Family Cars to Rent</h3>
                                    <p>Discover the best vehicles for your family road trips.</p>
                                    <a href="/blog/best-family-cars" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                            <div className="col-md-4">
                                <div className="blog">
                                    <img src="images/blog_3.jpg" alt="Blog 3" className="img-fluid" />
                                    <h3 className="heading">How to Save Money on Rentals</h3>
                                    <p>Learn tips and tricks to get the best deals on car rentals.</p>
                                    <a href="/blog/save-money" className="btn btn-primary">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Contact Section */}
                <section className="ftco-section" id="contact-section">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12 text-center mb-5">
                                <h2 className="heading-section">Contact Us</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6">
                                <form action="#">
                                    <div className="form-group">
                                        <label for="name">Name</label>
                                        <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    </div>
                                    <div className="form-group">
                                        <label for="email">Email</label>
                                        <input type="email" className="form-control" id="email" placeholder="Your Email" />
                                    </div>
                                    <div className="form-group">
                                        <label for="message">Message</label>
                                        <textarea className="form-control" id="message" placeholder="Your Message" rows="5"></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="btn btn-primary">Send Message</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-md-6">
                                <div className="contact-info">
                                    <h4>Contact Info</h4>
                                    <p><span className="icon-map-marker"></span> 123 Main Street, City</p>
                                    <p><span className="icon-phone"></span> +1 234 567 890</p>
                                    <p><span className="icon-envelope"></span> info@carrent.com</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <footer className="footer">
                    <div className="container text-center">
                        <p>&copy; 2024 CarRent. All Rights Reserved.</p>
                    </div>
                </footer>
            </div>
        </Layout>
    );
}
