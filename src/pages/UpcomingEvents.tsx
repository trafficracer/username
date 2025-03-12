import React, { useState, useEffect } from 'react';
import { Calendar, Clock, MapPin, Users, Award, ChevronRight, ExternalLink, Search, Filter, ArrowLeft, Home,ArrowRight } from 'lucide-react';

// Main App Component
const EventsApp = () => {
  // State to track which view to show
  const [currentView, setCurrentView] = useState('landing');
  // State to track which event is selected
  const [selectedEventId, setSelectedEventId] = useState(null);

  // Sample events data
  const events = [
    {
      id: 1,
      title: "3-Day CTF Bootcamp",
      tagline: "Level up your cybersecurity skills",
      dates: "March 13-15, 2025",
      location: "In-person (SHIELD LAB)",
      description: "Join us for an intensive 3-day bootcamp covering all aspects of Capture The Flag competitions. Perfect for beginners and intermediate security enthusiasts looking to enhance their skills.",
      image: "/images/bootcamp.jpg",
      category: "workshop",
      timeline: [
        { day: "Day 1 (March 12)", focus: "About CTFs", 
          sessions: [
            { time: "1 :", title: "Introduction to CTFs" },
            { time: "2 :", title: "Why NULLBorn" },
            { time: "3 :", title: "Steps To Attack" },
            { time: "4 :", title: "Importance of  CTF" },
            { time: "5 :", title: "Domains Of Ctf " },
            { time: "6 :", title: "Team Building "},
            { time: "7 :", title: "Resource Sharing"},
            { time: "8 :", title: "Play Ground/labs For CTF"}
          ]
        },
        { day: "Day 2 (March 13)", focus: "Solving Live Challenges", 
          sessions: [
            { time: "1", title: "Crypto" },
            { time: "2", title: "Reverse " },
            { time: "3", title: "Web" },
            { time: "4", title: "Forensics" },
            { time: "5", title: "PWN" }
          ] 
        },
        { day: "Day 3 (March 14)", focus: "HARDWARE Hacking demo", 
          sessions: [
            { time: "1", title: "Wi-Fi attack" },
            { time: "2", title: "Raspberry Pi-Based RFID/NFC Emulator + Sniffer" }
          ] 
        }
      ],
      eventDate: new Date('2025-03-12T15:30:00')
    },
    {
      id: 2,
      title: "Network Security Conference",
      tagline: "Latest trends in network protection",
      dates: "April 5-6, 2025",
      location: "Convention Center",
      description: "Explore cutting-edge network security solutions with industry leaders and peers.",
      image: "/api/placeholder/800/410",
      category: "conference",
      timeline: [
        { day: "Day 1 (April 5)", focus: "Network Threats & Detection", 
          sessions: [
            { time: "09:00 - 10:30", title: "Keynote: Future of Network Security" },
            { time: "11:00 - 12:30", title: "Zero Trust Architecture Implementation" },
            { time: "13:30 - 15:00", title: "Advanced Threat Detection" },
            { time: "15:30 - 17:00", title: "Panel: Ransomware Defense Strategies" }
          ]
        },
        { day: "Day 2 (April 6)", focus: "Security Solutions & Practices", 
          sessions: [
            { time: "09:00 - 10:30", title: "SASE Framework Adoption" },
            { time: "11:00 - 12:30", title: "Automated Security Response" },
            { time: "13:30 - 15:00", title: "Vendor Showcase" },
            { time: "15:30 - 17:00", title: "Closing Remarks & Networking" }
          ] 
        }
      ],
      eventDate: new Date('2025-04-05T09:00:00')
    },
    {
      id: 3,
      title: "Ethical Hacking Masterclass",
      tagline: "From beginner to penetration tester",
      dates: "March 25, 2025",
      location: "Virtual",
      description: "Learn ethical hacking techniques from certified professionals in this hands-on masterclass.",
      image: "/api/placeholder/800/420",
      category: "training",
      timeline: [
        { day: "Full Day (March 25)", focus: "Penetration Testing Methodology", 
          sessions: [
            { time: "09:00 - 10:30", title: "Reconnaissance Techniques" },
            { time: "11:00 - 12:30", title: "Vulnerability Scanning & Exploitation" },
            { time: "13:30 - 15:00", title: "Post-Exploitation & Privilege Escalation" },
            { time: "15:30 - 17:00", title: "Report Writing & Remediation" }
          ]
        }
      ],
      eventDate: new Date('2025-03-25T09:00:00')
    },
    {
      id: 4,
      title: "Cloud Security Summit",
      tagline: "Securing your cloud infrastructure",
      dates: "April 18, 2025",
      location: "Tech Hub, Downtown",
      description: "Discover best practices for cloud security from AWS, Azure, and GCP experts.",
      image: "/api/placeholder/800/430",
      category: "summit",
      timeline: [
        { day: "Full Day (April 18)", focus: "Multi-Cloud Security", 
          sessions: [
            { time: "09:00 - 10:30", title: "Cloud Security Posture Management" },
            { time: "11:00 - 12:30", title: "Securing Containers & Kubernetes" },
            { time: "13:30 - 15:00", title: "Identity Management in the Cloud" },
            { time: "15:30 - 17:00", title: "Cloud Security Automation Workshop" }
          ]
        }
      ],
      eventDate: new Date('2025-04-18T09:00:00')
    },
    {
      id: 5,
      title: "Bug Bounty Weekend",
      tagline: "Hunt bugs, earn rewards",
      dates: "May 2-3, 2025",
      location: "Virtual",
      description: "Join companies and security researchers for an intensive bug hunting weekend with prizes.",
      image: "/api/placeholder/800/440",
      category: "competition",
      timeline: [
        { day: "Day 1 (May 2)", focus: "Bug Hunting Skills", 
          sessions: [
            { time: "09:00 - 10:30", title: "Bug Bounty Fundamentals" },
            { time: "11:00 - 12:30", title: "Advanced Web Vulnerability Detection" },
            { time: "13:30 - 17:00", title: "Live Bug Hunting (Phase 1)" }
          ]
        },
        { day: "Day 2 (May 3)", focus: "Competition & Awards", 
          sessions: [
            { time: "09:00 - 15:00", title: "Live Bug Hunting (Phase 2)" },
            { time: "15:30 - 17:00", title: "Awards Ceremony & Closing" }
          ] 
        }
      ],
      eventDate: new Date('2025-05-02T09:00:00')
    },
    {
      id: 6,
      title: "Cybersecurity Career Fair",
      tagline: "Connect with top employers",
      dates: "April 29, 2025",
      location: "University Campus",
      description: "Meet with leading cybersecurity employers and explore career opportunities in the field.",
      image: "/api/placeholder/800/450",
      category: "career",
      timeline: [
        { day: "Full Day (April 29)", focus: "Career Development", 
          sessions: [
            { time: "09:00 - 10:30", title: "Industry Panel: Career Paths in Cybersecurity" },
            { time: "11:00 - 15:00", title: "Employer Exhibition & Interviews" },
            { time: "15:30 - 17:00", title: "Networking Reception" }
          ]
        }
      ],
      eventDate: new Date('2025-04-29T09:00:00')
    }
  ];

  // Function to navigate to event details
  const navigateToEventDetails = (eventId) => {
    setSelectedEventId(eventId);
    setCurrentView('details');
    window.scrollTo(0, 0); // Scroll to top when changing views
  };

  // Function to go back to landing page
  const navigateToLanding = () => {
    setCurrentView('landing');
    window.scrollTo(0, 0); // Scroll to top when changing views
  };

  // Find the selected event
  const selectedEvent = events.find(event => event.id === selectedEventId);

  // Return the appropriate view
  return currentView === 'landing' ? (
    <EventsLandingPage 
      events={events} 
      onEventClick={navigateToEventDetails} 
    />
  ) : (
    <EventDetailPage 
      event={selectedEvent} 
      onBackClick={navigateToLanding} 
    />
  );
};

// Events Landing Page Component
const EventsLandingPage = ({ events, onEventClick }) => {
  // State for search and filter
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("workshop");

  // Get unique categories for filter
  const categories = [ ...new Set(events.map(event => event.category))];

  // Filter events based on search and category
  const filteredEvents = events.filter(event => {
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          event.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || event.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Video Header Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/70 to-black z-10"></div>
        <div className="w-full h-96 overflow-hidden">
          <video 
            className="w-full h-full object-cover opacity-60" 
            autoPlay 
            muted 
            loop
            playsInline
          >
            <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="container mx-auto px-4 py-16 relative z-20 absolute top-0 left-0 right-0">
          <h1 className="text-4xl font-bold text-green-400 mb-2">Upcoming Cybersecurity Events</h1>
          <p className="text-xl text-green-300 mb-6">Discover workshops, conferences, and training opportunities</p>
        </div>
      </div>
      
      {/* Search and Filter */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-8">
          <div className="relative w-full md:w-1/2">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <Search size={18} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full pl-10 pr-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          
{/*        <div className="flex items-center w-full md:w-auto">
            <Filter size={18} className="text-gray-400 mr-2" />
            <select
              className="bg-gray-800 border border-gray-700 rounded-md text-white px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </option>
              ))}
            </select>
          </div> */}
        </div>
        
        {/* Events Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredEvents.length > 0 ? (
            filteredEvents.map(event => (
              <div 
                key={event.id}
                className="bg-gray-900 rounded-lg overflow-hidden border border-green-900/50 hover:border-green-500 transition duration-300 cursor-pointer"
                onClick={() => onEventClick(event.id)}
              >
                <div className="relative">
                  <img 
                    src={event.image} 
                    alt={event.title} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-0 right-0 bg-green-600 text-xs font-bold uppercase px-2 py-1 m-2 rounded">
                    {event.category}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-green-400 mb-2">{event.title}</h3>
                  <p className="text-gray-300 mb-4">{event.tagline}</p>
                  
                  <div className="flex items-center text-gray-400 mb-2">
                    <Calendar size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{event.dates}</span>
                  </div>
                  <div className="flex items-center text-gray-400 mb-4">
                    <MapPin size={16} className="mr-2 text-green-500" />
                    <span className="text-sm">{event.location}</span>
                  </div>
                  
                  <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                  
                  <button className="w-full mt-2 bg-gray-800 hover:bg-green-800 text-green-400 font-medium py-2 rounded flex items-center justify-center transition duration-300">
                    View Details
                    <ExternalLink size={16} className="ml-2" />
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-16 text-center">
              <p className="text-gray-400 text-lg">No events match your search criteria.</p>
              <button 
                className="mt-4 text-green-400 hover:text-green-300"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                }}
              >
                Clear filters
              </button>
            </div>
          )}
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="bg-green-900/20 border-t border-green-900">
        <div className="container mx-auto px-4 py-12 text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-4">Don't see what you're looking for?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Stay updated with our upcoming events. Subscribe to our newsletter for the latest announcements.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email address"
              className="px-4 py-2 bg-gray-800 border border-gray-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-md transition duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 mb-4 md:mb-0">©nullborn community. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="/about" className="text-gray-400 hover:text-green-400 transition duration-300">About</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Event Detail Page Component
const EventDetailPage = ({ event, onBackClick }) => {
  // State for active day in agenda
  const [activeDay, setActiveDay] = useState(0);
  
  // Countdown timer state and effect
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  
  // Calculate and update the countdown
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = event.eventDate - new Date();
      let timeLeft = {};

      if (difference > 0) {
        timeLeft = {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      } else {
        timeLeft = {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        };
      }

      return timeLeft;
    };

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    // Set up interval for countdown
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Clean up interval on component unmount
    return () => clearInterval(timer);
  }, [event.eventDate]);
  
  return (
    <div className="min-h-screen bg-black text-white ">
      {/* Back Button & Home Button */}
      <div className="container mx-auto px-4 pt-16 pb-4 flex justify-between items-center">
        <button 
          onClick={onBackClick}
          className="flex items-center text-green-400 hover:text-green-300 transition duration-300"
        >
          <ArrowLeft size={20} className="mr-2" />
          Back to Events
        </button>
        
      </div>

      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-green-900/50 to-black z-10"></div>
        <img 
          src={event.image}
          alt={event.title}
          className="w-full h-96 object-cover opacity-40"
        />
        <div className="container mx-auto px-4 py-20 relative z-20">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold text-green-400 mb-4">{event.title}</h1>
            <p className="text-xl text-green-300 mb-6">{event.tagline}</p>
            
            <div className="flex items-center space-x-4 mb-8">
              <div className="flex items-center text-gray-300">
                <Calendar size={20} className="mr-2 text-green-500" />
                <span>{event.dates}</span>
              </div>
              <div className="flex items-center text-gray-300">
                <MapPin size={20} className="mr-2 text-green-500" />
                <span>{event.location}</span>
              </div>
            </div>
            
            <p className="text-gray-300 mb-8">{event.description}</p>
          </div>
        </div>
      </div>
      
      {/* Countdown Timer */}
      <div className="bg-green-900/20 border-t border-b border-green-900">
        <div className="container mx-auto px-4 py-8">
          <h2 className="text-2xl font-bold text-center text-green-400 mb-6">Event Starts In</h2>
          <div className="flex justify-center space-x-4 md:space-x-8">
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white bg-green-800/30 rounded-lg p-4 w-20 md:w-28 text-center">
                {timeLeft.days}
              </div>
              <span className="text-sm md:text-base mt-2 text-green-300">Days</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white bg-green-800/30 rounded-lg p-4 w-20 md:w-28 text-center">
                {timeLeft.hours}
              </div>
              <span className="text-sm md:text-base mt-2 text-green-300">Hours</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white bg-green-800/30 rounded-lg p-4 w-20 md:w-28 text-center">
                {timeLeft.minutes}
              </div>
              <span className="text-sm md:text-base mt-2 text-green-300">Minutes</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-3xl md:text-5xl font-bold text-white bg-green-800/30 rounded-lg p-4 w-20 md:w-28 text-center">
                {timeLeft.seconds}
              </div>
              <span className="text-sm md:text-base mt-2 text-green-300">Seconds</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Event Agenda */}
      <div className="bg-gray-900/50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-6">Event Agenda</h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            {event.timeline.length > 1 
              ? "Our comprehensive program covers essential topics through hands-on workshops and practical challenges"
              : "A full day of intensive training and hands-on learning"}
          </p>
          
          {/* Tabs for days */}
          {event.timeline.length > 1 && (
            <div className="flex justify-center mb-8">
              {event.timeline.map((day, index) => (
                <button
                  key={index}
                  onClick={() => setActiveDay(index)}
                  className={`px-4 py-3 font-medium ${
                    activeDay === index
                      ? 'bg-green-600 text-white'
                      : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                  } ${index === 0 ? 'rounded-l-md' : ''} ${
                    index === event.timeline.length - 1 ? 'rounded-r-md' : ''
                  }`}
                >
                  {day.day.split(' ')[0]} {day.day.split(' ')[1]}
                </button>
              ))}
            </div>
          )}
          
          {/* Active day content */}
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-xl font-bold text-green-400">
                {event.timeline[activeDay].day}
              </h3>
              <span className="bg-green-900/40 text-green-300 px-3 py-1 rounded-full text-sm">
                Focus: {event.timeline[activeDay].focus}
              </span>
            </div>
            
            <div className="space-y-4">
              {event.timeline[activeDay].sessions.map((session, index) => (
                <div key={index} className="flex border-l-4 border-green-600 pl-4 py-2">
                  <div className="w-32 flex-shrink-0 flex items-center">
                    <ArrowRight size={16} className="text-green-500 mr-2" />
                    <span className="text-green-300 text-sm">{session.time}</span>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-white font-medium">{session.title}</h4>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      
      {/* Footer CTA */}
      <div className="bg-green-900/20 border-t border-green-900">
        <div className="container mx-auto px-4 py-12 text-center">
          <p className="mt-6 text-sm text-gray-400">
            For questions, contact us at <span className="text-green-400">nullborn@ch.amrita.edu</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventsApp;