import React from 'react';
import { motion } from 'framer-motion';
import { FaFacebook,FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const ContactForm = () => {
  return (
    <section className="bg-primary text-font py-16 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-customtwo to-secondary opacity-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Introduction Message */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl font-bold text-font mt-8">Contact Us</h1>
          <p className="text-lg text-tertiary mt-4">
            We are here to help you! Feel free to reach out to us with any questions or inquiries.
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto bg-custom p-8 rounded-lg shadow-2xl"
        >
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-tertiary">Name</label>
              <input
                type="text"
                id="name"
                className="w-full mt-2 p-3 bg-tertiary text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-altCta transition duration-300"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-tertiary">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full mt-2 p-3 bg-tertiary text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-altCta transition duration-300"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="subject" className="block text-lg font-medium text-tertiary">Subject</label>
              <select
                id="subject"
                className="w-full mt-2 p-3 bg-tertiary text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-altCta transition duration-300"
              >
                <option>General Inquiry</option>
                <option>Technical Support</option>
                <option>Content Request</option>
                <option>Feedback</option>
              </select>
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-tertiary">Message</label>
              <textarea
                id="message"
                className="w-full mt-2 p-3 bg-tertiary text-primary rounded-md focus:outline-none focus:ring-2 focus:ring-altCta transition duration-300"
                rows="6"
                placeholder="Type your message here..."
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button
                type="submit"
                className="bg-cta text-white py-3 px-8 rounded-full hover:bg-altCta transition duration-300 ease-in-out shadow-lg hover:shadow-2xl"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </div>
          </form>
        </motion.div>

        {/* Direct Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Contact Information</h2>
          <p className="text-lg text-secondary mt-4">Email: support@yourplatform.com</p>
          <p className="text-lg text-secondary mt-2">Phone: +123 456 7890</p>
          <p className="text-lg text-secondary mt-2">Address: 123 Islamic Education Road, City, Country</p>
        </motion.div>

        {/* FAQ Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center text-tertiary">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto mt-6">
            <div className="bg-custom p-4 rounded-lg mb-4 shadow-md">
              <h3 className="text-xl font-semibold text-font">How can I access the courses?</h3>
              <p className="text-secondary mt-2">You can access the courses by registering on our platform and browsing through our extensive library of courses.</p>
            </div>
            <div className="bg-custom p-4 rounded-lg mb-4 shadow-md">
              <h3 className="text-xl font-semibold text-font">What is the cost of the courses?</h3>
              <p className="text-secondary mt-2">Many of our courses are free, while others may require a nominal fee. Please check the specific course for details.</p>
            </div>
            <div className="bg-custom p-4 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-font">How can I join as a preacher?</h3>
              <p className="text-secondary mt-2">Scholars interested in contributing can apply through our dedicated form found in the "Join as a Preacher" section below.</p>
            </div>
          </div>
        </motion.div>

        {/* Support Hours */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Support Hours</h2>
          <p className="text-lg text-secondary mt-4">Our support team is available Monday to Friday, 9 AM - 6 PM (GMT).</p>
        </motion.div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Follow Us</h2>
          <div className="flex justify-center space-x-6 mt-4">
            <a href="#" className="text-black  transition duration-300">
              <i className="text-3xl"><FaFacebook /></i>
            </a>
            <a href="#" className="text-black  transition duration-300">
              <i className="text-3xl"><FaInstagram /></i>
            </a>
            <a href="#" className="text-black  transition duration-300">
              <i className="text-3xl"><FaXTwitter /></i>
            </a>
            
          </div>
        </motion.div>

        {/* Join as a Preacher Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Join as a Preacher</h2>
          <p className="text-lg text-secondary mt-4">
            Are you an Islamic scholar interested in contributing to our platform? Click the button below to learn more.
          </p>
          <motion.a
            href="#"
            className="inline-block bg-altCta text-white font-semibold py-3 px-8 mt-6 rounded-full hover:bg-cta transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Apply Now
          </motion.a>
        </motion.div>

        {/* Feedback Option */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Feedback</h2>
          <p className="text-lg text-secondary mt-4">
            We value your thoughts! Share your suggestions for improving the platform.
          </p>
          <motion.a
            href="#"
            className="inline-block bg-altCta text-white font-semibold py-3 px-8 mt-6 rounded-full hover:bg-cta transition duration-300 ease-in-out"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Provide Feedback
          </motion.a>
        </motion.div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-3xl font-bold text-center text-tertiary">Find Us</h2>
          <div className="mt-6 shadow-lg rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345096164!2d144.96305781531574!3d-37.8162797797517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577b88a0121a238!2s123%20Islamic%20Education%20Road!5e0!3m2!1sen!2sus!4v1634844975781!5m2!1sen!2sus"
              width="100%"
              height="450"
              allowFullScreen=""
              loading="lazy"
              title="Our Location"
            ></iframe>
          </div>
        </motion.div>

        {/* Privacy Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-12 text-center"
        >
          <h2 className="text-3xl font-bold text-tertiary">Privacy Assurance</h2>
          <p className="text-lg text-secondary mt-4">
            Your contact information is safe with us. We will never share it with third parties and will only use it for responding to your inquiries.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
