import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-green-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left bg-white"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-semibold text-green-800">{question}</span>
        {isOpen ? (
          <ChevronUp className="w-5 h-5 text-green-500" />
        ) : (
          <ChevronDown className="w-5 h-5 text-green-500" />
        )}
      </button>
      {isOpen && (
        <div className="mt-2 text-gray-700">
          <p>{answer}</p>
        </div>
      )}
    </div>
  );
};

const FAQSection = () => {
  const faqs = [
    {
      question: "What is QuranConnect?",
      answer: "QuranConnect is an online platform dedicated to providing accessible, high-quality education about the Quran and Islamic studies. We connect learners worldwide with respected Muslim scholars and preachers, offering a range of courses on various aspects of Islamic teachings and Quranic wisdom."
    },
    {
      question: "How do I sign up for QuranConnect?",
      answer: "Signing up for QuranConnect is easy and rewarding! Click the 'Join Our Ummah' button at the top of the page, fill in your details, and choose a learning plan that suits your needs. Once registered, you'll have immediate access to our extensive library of Islamic courses."
    },
    {
      question: "What types of courses are available?",
      answer: "QuranConnect offers a diverse range of courses covering various Islamic topics. These include Tafsir (Quranic interpretation), Tajweed (Quran recitation), Islamic history, Fiqh (Islamic jurisprudence), and Arabic language. We have courses suitable for beginners to advanced learners."
    },
    {
      question: "Can I interact with scholars and other students?",
      answer: "Absolutely! QuranConnect fosters a vibrant learning community. We provide interactive features such as live Q&A sessions with scholars, discussion forums for each course, and a messaging system to connect with instructors and fellow students, enhancing your Islamic learning experience."
    },
    {
      question: "How does the subscription model work?",
      answer: "We offer various subscription plans to accommodate different learning needs and budgets. All plans provide access to our full library of recorded courses. Higher-tier plans include additional benefits like live classes with scholars, one-on-one sessions, and special certification options."
    },
    {
      question: "Is there a mobile app available?",
      answer: "No, QuranConnect does not a mobile app for both iOS and Android devices. But it is under development, will be out soon."
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-green-800 mb-8">
          Frequently Asked Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;