import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { 
  ChevronDown, 
  Heart, 
  Users, 
  BookOpen, 
  Phone, 
  Mail, 
  MapPin,
  Calendar,
  Clock,
  Globe,
  Flame
} from 'lucide-react';
import './App.css';
import '../'



const App = () => {
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  // Hero Section
  const Hero = () => (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.pexels.com/photos/276701/pexels-photo-276701.jpeg" 
          alt="FBI Church Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="mb-8"
        >
          <img 
            src="frontend/public/images/FBI-Gelan.jfif"
            alt="FBI Church Logo"
            className="w-32 h-32 mx-auto mb-6 bg-white/10 backdrop-blur-sm rounded-2xl p-4"
          />
        </motion.div>
        
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-red-400 via-orange-400 to-yellow-400 bg-clip-text text-transparent"
        >
          FBI CHURCH GELAN
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl md:text-2xl mb-8 text-gray-200 max-w-3xl mx-auto leading-relaxed"
        >
          Where Faith Transforms Lives & Global Ministry Touches Hearts
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-6 justify-center items-center"
        >
          <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl">
            Join Our Community
          </button>
          <button className="border-2 border-white/30 backdrop-blur-sm bg-white/10 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-white/20">
            Explore Ministries
          </button>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white"
      >
        <ChevronDown className="animate-bounce" size={32} />
      </motion.div>
    </section>
  );

  // About Section
  const About = () => (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-gray-800">
              About <span className="text-red-600">FBI Church Gelan</span>
            </h2>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              FBI Church Gelan is a vibrant community of believers dedicated to spreading the Gospel 
              globally while nurturing spiritual growth locally. Our mission is to transform lives 
              through the power of faith, hope, and love.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a strong emphasis on global ministry, we believe in touching hearts across 
              nations while building a strong foundation of faith in our local community.
            </p>
            <div className="flex items-center gap-4">
              <Globe className="text-blue-600" size={24} />
              <span className="text-lg font-semibold text-gray-700">Global Ministry • Local Impact</span>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a"
              alt="Church Community"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Ministry Card Component
  const MinistryCard = ({ title, description, image, icon: Icon, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute top-4 left-4 bg-white/20 backdrop-blur-sm rounded-full p-3">
          <Icon className="text-white" size={24} />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-3 text-gray-800">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );

  // Ministries Section
  const Ministries = () => (
    <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-white">
            Our <span className="text-orange-400">Ministries</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover the various ways we serve our community and spread God's love
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <MinistryCard
            title="Youth Ministry"
            description="Empowering young believers to grow in faith and leadership through engaging activities, mentorship, and spiritual development programs."
            image="https://images.unsplash.com/photo-1594913434694-2164156256c0"
            icon={Users}
            delay={0.1}
          />
          <MinistryCard
            title="Children Ministry"
            description="Nurturing the next generation with age-appropriate biblical teachings, fun activities, and a safe environment for spiritual growth."
            image="https://images.unsplash.com/flagged/photo-1567116681178-c326fa4e2c8b"
            icon={Heart}
            delay={0.2}
          />
          <MinistryCard
            title="Prayer Ministry"
            description="Creating a powerful atmosphere of prayer and intercession, connecting our community with God through worship and spiritual warfare."
            image="https://images.unsplash.com/photo-1495552665515-46e119a10545"
            icon={Flame}
            delay={0.3}
          />
          <MinistryCard
            title="Evangelism Ministry"
            description="Reaching out to communities with the Gospel message through outreach programs, community service, and compassionate ministry."
            image="https://images.unsplash.com/photo-1608686207856-001b95cf60ca"
            icon={Globe}
            delay={0.4}
          />
          <MinistryCard
            title="Choirs Ministry"
            description="Leading worship through powerful music ministry, creating an atmosphere of praise and worship that touches hearts and souls."
            image="https://images.pexels.com/photos/14990429/pexels-photo-14990429.jpeg"
            icon={BookOpen}
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );

  // Services Section
  const Services = () => (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold mb-6 text-gray-800">
            Service <span className="text-blue-600">Times</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us for worship, fellowship, and spiritual growth
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Clock className="text-blue-600 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Sunday Service</h3>
            <p className="text-lg text-gray-600 mb-2">10:00 AM - 12:00 PM</p>
            <p className="text-gray-500">Main worship service with message and communion</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Flame className="text-red-600 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Prayer Meeting</h3>
            <p className="text-lg text-gray-600 mb-2">Wednesday 7:00 PM</p>
            <p className="text-gray-500">Mid-week prayer and bible study</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            <Calendar className="text-green-600 mb-4" size={32} />
            <h3 className="text-2xl font-bold mb-3 text-gray-800">Special Events</h3>
            <p className="text-lg text-gray-600 mb-2">Monthly Programs</p>
            <p className="text-gray-500">Revival meetings, conferences, and special services</p>
          </motion.div>
        </div>
      </div>
    </section>
  );

  // Contact Section
  const Contact = () => (
    <section className="py-20 bg-gradient-to-br from-gray-800 to-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl font-bold mb-6 text-white">
              Get In <span className="text-orange-400">Touch</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              We'd love to connect with you! Whether you're looking for a church home 
              or have questions about our ministries, we're here for you.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-red-600 p-3 rounded-full">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Address</h4>
                  <p className="text-gray-300">Gelan, Ethiopia</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-3 rounded-full">
                  <Phone className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Phone</h4>
                  <p className="text-gray-300">+251 XXX XXX XXX</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="bg-green-600 p-3 rounded-full">
                  <Mail className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">Email</h4>
                  <p className="text-gray-300">info@fbichurchgelan.org</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <img 
              src="https://images.pexels.com/photos/32248290/pexels-photo-32248290.jpeg"
              alt="Church Building"
              className="rounded-2xl shadow-2xl w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );

  return (
    <div className="App">
      <Hero />
      <About />
      <Ministries />
      <Services />
      <Contact />
    </div>
  );
};

export default App;