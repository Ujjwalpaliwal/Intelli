import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Award, TrendingUp, Users, Target } from 'lucide-react';
import bharatSikkaImage from '/images/bharatshikshaexpo.jpg';
import ideathonImage from '/images/ideathon2.jpg';
import tulasImage from '/images/tulas.jpg';
import news1Image from '/images/news1.jpg';
import news2Image from '/images/news2.jpg';


const TeamAchievements = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Replace these with your actual achievement data
  const achievements = [
    {
      id: 1,
      title: "Ideathon",
      description: "Won Gold Medal at AKTU Ideathon",
      image: ideathonImage,
      icon: Award,
    },
    {
      id: 2,
      title: "Hackathon Victory",
      description: "2nd runner up at national level Hackathon at Tulas Institute dehradun",
      image: tulasImage,
      icon: Award,
    },
    {
      id: 2,
      title: "Startathon",
      description: "Gold medal at Startathon organized by Bharat Shiksha Expo",
      image: bharatSikkaImage,
      icon: Award,
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <section id="teamAchievements" className="max-w-8xl mx-auto px-4 py-16 md:py-24">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <motion.h2 
          className="text-5xl md:text-6xl font-bold text-white mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Our Achievements
        </motion.h2>
        <motion.p 
          className="text-xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Celebrating milestones that define our journey to excellence
        </motion.p>
      </motion.div>

      {/* Achievement Cards */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-7xl mx-auto flex gap-5 md:flex-row flex-col items-center justify-center"
      >
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={achievement.id}
              variants={cardVariants}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group cursor-pointer"
            >
              <motion.div
                className="relative h-96 rounded-2xl w-full overflow-hidden shadow-2xl"
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {/* Background Image */}
                <img
                  src={achievement.image}
                  alt={achievement.title}
                  className="object-cover h-85"
                />

                {/* Gradient Overlay */}
                <motion.div
                  className={`absolute top-55 bottom-5 inset-0 bg-black opacity-60`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.8 : 0.6
                  }}
                  transition={{ duration: 0.3 }}
                />


                {/* Icon */}
                <motion.div
                  className="absolute bottom-6 right-6"
                  animate={{
                    scale: hoveredIndex === index ? 1.2 : 1,
                    rotate: hoveredIndex === index ? 360 : 0
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <motion.h3
                    className="text-2xl font-bold text-white"
                    animate={{
                      y: hoveredIndex === index ? -5 : 0
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.title}
                  </motion.h3>
                  
                  <motion.p
                    className="text-white/90 text-lg"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{
                      opacity: hoveredIndex === index ? 1 : 0.8,
                      y: hoveredIndex === index ? 0 : 10
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    {achievement.description}
                  </motion.p>

                  {/* Animated underline */}
                  <motion.div
                    className="h-1 bg-white mt-5 rounded-full"
                    initial={{ width: 0 }}
                    animate={{
                      width: hoveredIndex === index ? "85%" : "60px"
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Hover particles effect */}
                {hoveredIndex === index && (
                  <>
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 bottom-20 left-2 bg-white rounded-full"
                        initial={{
                          x: "50%",
                          y: "50%",
                          opacity: 0
                        }}
                        animate={{
                          x: `${50 + (Math.random() - 0.5) * 100}%`,
                          y: `${50 + (Math.random() - 0.5) * 100}%`,
                          opacity: [0, 1, 0]
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          delay: i * 0.1
                        }}
                      />
                    ))}
                  </>
                )}
              </motion.div>
            </motion.div>
          );
        })}
      </motion.div>


      {/* news papers */}
      <div className='mt-8'>
            <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className='flex justify-center items-center md:flex-row flex-col gap-6'
            >
                <h2 className="text-4xl md:text-6xl font-bold text-secondary mb-6">News Highlights</h2>
                <div className="flex gap-3">
                    <motion.div
                      className="px-4 py-2 h-90 rounded-full"
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <img src={news1Image} className='h-90'/>
                    </motion.div>
                </div>
                <div className="flex gap-3">
                    <motion.div
                      className="px-4 py-2 h-90 rounded-full"
                      transition={{ duration: 0.4, delay: 0.8 }}
                    >
                      <img src={news2Image} className='h-90'/>
                    </motion.div>
                </div>
              </motion.div>
        </div>

    </section>
  );
};

export default TeamAchievements;