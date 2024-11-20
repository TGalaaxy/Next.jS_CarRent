import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const featuredCars = [
  {
    id: 1,
    name: 'Toyota Camry',
    image: '/images/car_1.png',
    price: 120
  },
  {
    id: 2,
    name: 'Honda Accord', 
    image: '/images/car_2.png',
    price: 130
  },
  {
    id: 3,
    name: 'BMW 5 Series',
    image: '/images/car_3.png',
    price: 200
  }
];

const blogPosts = [
  {
    id: 1,
    title: 'Top 5 Tips for Renting a Car',
    description: 'A comprehensive guide to help you choose the best car rental service.',
    image: '/images/blog_1.png',
    link: '/blog/top-5-tips'
  },
  {
    id: 2,
    title: 'Best Family Cars to Rent',
    description: 'Discover the best vehicles for your family road trips.',
    image: '/images/blog_2.png',
    link: '/blog/best-family-cars'
  },
  {
    id: 3,
    title: 'How to Save Money on Rentals',
    description: 'Learn tips and tricks to get the best deals on car rentals.',
    image: '/images/blog_3.png',
    link: '/blog/save-money'
  }
];

const Home: NextPage = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Head>
        <title>CarRent - Car Rental Services</title>
        <meta name="description" content="Rent the best cars with CarRent" />
      </Head>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/hero_1.png')" }}
        >
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="relative container mx-auto flex items-center h-full">
            <div className="w-full md:w-1/2 text-white p-6">
              <div className="bg-white/20 p-6 rounded-lg backdrop-blur-sm">
                <h1 className="text-4xl font-bold mb-4 text-white">Range Rover S7</h1>
                <ul className="space-y-2 mb-4 text-white">
                  {[
                    { label: 'Doors', value: '4' },
                    { label: 'Seats', value: '6' },
                    { label: 'Luggage', value: '2 Suitcase/2 Bags' },
                    { label: 'Transmission', value: 'Automatic' },
                    { label: 'Minimum age', value: '18 years' }
                  ].map((spec) => (
                    <li key={spec.label} className="flex justify-between border-b border-white/20 pb-1">
                      <span>{spec.label}</span>
                      <span className="font-semibold">{spec.value}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex items-center justify-between bg-white text-black p-4 rounded">
                  <span className="text-xl font-bold">$150/day</span>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Services</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: '🚗', title: 'Car Rental', description: 'Enjoy a wide selection of vehicles available for rent.' },
            { icon: '🛡️', title: 'Insurance', description: 'All rentals come with comprehensive insurance for peace of mind.' },
            { icon: '🗺️', title: 'Guided Tours', description: 'Explore the area with our guided tours available with rental.' }
          ].map((service) => (
            <div 
              key={service.title} 
              className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition border border-gray-200"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cars Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Our Cars</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {featuredCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200">
              <Image 
                src={car.image} 
                alt={car.name} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{car.name}</h3>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-blue-600">${car.price}/day</span>
                  <Link 
                    href="/contact" 
                    className="bg-blue-600 text-white px-3 py-2 rounded hover:bg-blue-700 transition"
                  >
                    Rent Now
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Blog Section */}
      <section className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Latest from Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition border border-gray-200">
              <Image 
                src={post.image} 
                alt={post.title} 
                width={400} 
                height={250} 
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold mb-2 text-gray-800">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.description}</p>
                <Link 
                  href={post.link} 
                  className="text-blue-600 hover:text-blue-800 transition font-semibold"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section className="container mx-auto py-16 px-4 bg-gray-50">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-800">Contact Us</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2 text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2 text-gray-700">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2 text-gray-700">Message</label>
              <textarea
                id="message"
                className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h4 className="text-xl font-semibold mb-4 text-gray-800">Contact Info</h4>
            <p className="mb-2 flex items-center text-gray-700">
              <span className="mr-2">📍</span> 123 Main Street, City
            </p>
            <p className="mb-2 flex items-center text-gray-700">
              <span className="mr-2">📞</span> +1 234 567 890
            </p>
            <p className="flex items-center text-gray-700">
              <span className="mr-2">✉️</span> info@carrent.com
            </p>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-4 text-center">
        <p>&copy; 2024 CarRent. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Home;