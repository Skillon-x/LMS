import React from 'react'
import { motion } from 'framer-motion'
import { Book, Eye, History, Heart, Users, GraduationCap, MessageSquare } from 'lucide-react'

const OurStoryHeroSection = () => {
  const cards = [
    {
      icon: <Book className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Mission Statement",
      courseCount: "Our Purpose",
      description: "Our mission is to provide accessible, authentic Quranic education online, enriching the lives of our students with Islamic wisdom."
    },
    {
      icon: <Eye className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Our Vision",
      courseCount: "Future Goals",
      description: "To become a leading platform for Islamic education, using modern technology to bring the teachings of the Quran to learners worldwide."
    },
    {
      icon: <History className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Platform History",
      courseCount: "Since 2020",
      description: "Founded with the goal of making Quranic education accessible to all, achieving key milestones in interactive learning."
    },
    {
      icon: <Heart className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Our Values",
      courseCount: "Core Principles",
      description: "Commitment to authentic knowledge, accessibility, fostering community, and continuous innovation in education."
    },
    {
      icon: <Users className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Meet Our Team",
      courseCount: "Expert Staff",
      description: "Experienced educators and developers dedicated to providing the best Quranic education experience online."
    },
    {
      icon: <GraduationCap className="w-16 h-16 mb-4 text-amber-400" />,
      title: "Advisory Board",
      courseCount: "Scholar Panel",
      description: "Guided by respected Islamic scholars ensuring alignment with authentic Islamic teachings."
    },
    {
      icon: <MessageSquare className="w-16 h-16 mb-4 text-amber-400" />,
      title: "What Students Say",
      courseCount: "Testimonials",
      description: "This platform has transformed my understanding of the Quran and made learning accessible from anywhere in the world."
    }
  ]

  return (
    <section className="relative bg-primary overflow-hidden">
      <div className="container mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16"
        >
          <h1 className="text-4xl md:text-5xl mt-8 lg:text-6xl font-bold mb-6 text-center text-font">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl mb-8 leading-relaxed text-center max-w-3xl mx-auto text-font">
            From a small startup to a global education platform, transforming online Islamic learning since 2020.
          </p>
        </motion.div>

        {/* Applying styles from the BrowseCategories component */}
        <div className="grid grid-cols-1 bg-green-50 w-full md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-10">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-green-900 p-6 m-4 rounded-lg shadow-lg flex flex-col items-center text-center hover:shadow-lg transition-shadow duration-700 cursor-pointer hover:scale-110 ease-in-out shadow-primary"
            >
              {card.icon}
              <h3 className="text-2xl font-bold text-amber-400 mb-2">
                {card.title}
              </h3>
              <p className="text-amber-400/80 text-sm mb-4">
                {card.courseCount}
              </p>
              <p className="text-green-50 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-12"
        >
          <motion.a
            href="#get-involved"
            className="inline-block bg-amber-400 hover:bg-amber-500 text-green-900 font-semibold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out hover:shadow-lg"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Involved
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStoryHeroSection
