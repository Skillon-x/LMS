import React, { useState } from 'react';
import { Mail, CheckCircle, AlertCircle } from 'lucide-react';

const NewsletterSignup = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) {
      setError('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Please enter a valid email address.');
      return;
    }
    console.log('Submitting email:', email);
    setIsSubmitted(true);
    setError('');
  };

  return (
    <div className="bg-white  shadow-lg rounded-3xl overflow-hidden max-w-4xl mx-auto my-16 border-4 shadow-white ">
      <div className="flex flex-col md:flex-row">
        <div className="bg-gradient-to-br from-green-600 to-green-800 p-8 md:p-12 text-white md:w-1/2">
          <h2 className="text-3xl font-bold mb-6">Join Our Islamic Learning Community</h2>
          <p className="text-xl mb-8">Gain exclusive access to:</p>
          <ul className="space-y-4">
            {[
              'New Quranic studies courses',
              'Scholar-led webinars',
              'Exclusive Islamic learning materials',
              'Community Iftars and events'
            ].map((item, index) => (
              <li key={index} className="flex items-center">
                <CheckCircle className="mr-3 flex-shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="p-8 md:p-12 md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">Grow in Faith with QuranConnect</h3>
          {isSubmitted ? (
            <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 rounded-md flex items-start" role="alert">
              <CheckCircle className="mr-3 flex-shrink-0 mt-1" />
              <div>
                <p className="font-bold">Alhamdulillah!</p>
                <p>Thank you for subscribing. Watch your inbox for inspiring updates!</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-md border-2 border-gray-300 focus:outline-none focus:border-green-500 transition duration-300 pl-10"
                  aria-label="Email address"
                />
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={20} />
              </div>
              {error && (
                <div className="text-red-500 text-sm flex items-center">
                  <AlertCircle className="mr-2 flex-shrink-0" size={16} />
                  <span>{error}</span>
                </div>
              )}
              <button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-4 rounded-md transition duration-300 transform hover:-translate-y-1 hover:shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
          )}
          <p className="text-gray-500 text-sm mt-6 text-center">
            We respect your privacy. Unsubscribe at any time.
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsletterSignup;