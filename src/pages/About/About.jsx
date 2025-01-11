const About = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section
        className="relative bg-cover bg-center h-[400px] flex items-center justify-center"
        style={{ backgroundImage: "url('/path-to-yoga-hero-image.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="relative z-10 text-center text-white">
          <h1 className="text-5xl font-extrabold">About Us</h1>
          <p className="mt-4 text-xl">
            Discover our mission, vision, and dedication to holistic wellness.
          </p>
        </div>
      </section>

      {/* Mission, Vision, Ambition */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Mission</h2>
            <p className="mt-4 text-gray-600">
              To inspire and empower individuals to embrace yoga and mindfulness
              as a way to achieve balance, health, and happiness.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Vision</h2>
            <p className="mt-4 text-gray-600">
              To create a global community where yoga becomes a lifestyle,
              enabling holistic growth for people of all ages and abilities.
            </p>
          </div>
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-800">Our Ambition</h2>
            <p className="mt-4 text-gray-600">
              To expand our reach, provide accessible yoga education, and
              promote mental well-being for a healthier world.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-800">Why Choose Us?</h2>
          <p className="mt-6 text-lg text-gray-600 leading-relaxed">
            At our yoga center, we combine traditional yoga practices with
            modern approaches to provide a holistic experience. Our experienced
            instructors, welcoming environment, and commitment to personal
            growth make us a trusted choice for individuals seeking physical,
            mental, and emotional well-being.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6 lg:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Get in Touch</h2>
            <form className="mt-8 space-y-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
              <textarea
                placeholder="Your Message"
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="w-full bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
          {/* Location */}
          <div>
            <h2 className="text-3xl font-bold text-gray-800">Our Location</h2>
            <p className="mt-4 text-lg text-gray-600">
              Visit us at our serene yoga center, surrounded by nature, where
              you can relax and rejuvenate.
            </p>
            <div className="mt-8">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.836535734708!2d144.9630576155062!3d-37.81362774202185!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0x5045675218ce6e0!2sYoga%20Center!5e0!3m2!1sen!2sus!4v1642159945454!5m2!1sen!2sus"
                width="100%"
                height="300"
                allowFullScreen=""
                loading="lazy"
                className="rounded-lg shadow-lg"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action */}
      <section className="py-16 bg-gradient-to-r from-green-100 to-green-200 text-center">
        <h2 className="text-3xl font-bold text-gray-800">Join Us Today</h2>
        <p className="mt-4 text-lg text-gray-600">
          Ready to begin your yoga journey? Sign up today and transform your
          life with us.
        </p>
        <button className="mt-6 px-8 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-lg hover:bg-green-700 transition duration-300">
          Get Started
        </button>
      </section>
    </div>
  );
};

export default About;
