import React from 'react';


const teamMembers = [
  { id: 1, name: "Codehat01", role: "Forensics Expert", batch: "Forensics", batch2: "Web", image: "/src/images/5.jpg" },
  { id: 2, name: "0x4d", role: "PWN Specialist", batch: "PWN", batch2: "Game PWN", image: "/src/images/1.jpg" },
  { id: 3, name: "vexo", role: "Reverse Engineer", batch: "Rev", batch2: "Mobile", image: "/src/images/2.jpg" },
  { id: 4, name: "areus", role: "Cryptographer", batch: "Crypto", batch2: "Block Chain", image: "/src/images/4.jpg" },
  { id: 5, name: "vaincleric", role: "OSINT Expert", batch: "OSINT", batch2: "MISC", image: "/src/images/3.jpg" }
];


const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="relative text-center space-y-6 px-4 z-10">
            <h1 className="text-green-500 text-5xl sm:text-6xl md:text-7xl font-bold animate-fade-in">
              {`{₦uL`}
              <img
                src="/src/images/flag.png"
                alt="Icon"
                className="inline-block w-12 h-14"
                style={{
                  transform: 'scaleX(-1) translateY(-5px) translateX(15px)',
                }}
              />
              <span className="text-green-500">B0rn{`}`}</span>
            </h1>
          </div>

          {/* Who We Are */}
          <div className="flex flex-col md:flex-row items-center justify-center text-center md:text-left py-12 gap-8">
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold text-green-500 mb-4">Who We Are</h2>
              <p className="text-lg text-green-300 max-w-2xl">
                This is a vibrant community of students, researchers, and enthusiasts from Amrita who are passionate about
                CTFs, cybersecurity, and ethical hacking. Whether you're a beginner or a pro, this server is the place to{' '}
                <span className="font-bold">learn, collaborate, and compete</span> in CTFs and other security-related events.
              </p>
            </div>
            <div className="md:w-1/2">
              <video className="w-full h-auto rounded-lg shadow-lg border border-green-500/20" autoPlay 
            muted 
            loop
            playsInline>
                <source src="/src/images/3.mp4" type="video/mp4" />
                <source src="/src/images/nullborn.MOV" type="video/quicktime" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>


          {/* What We Offer */}
          <div className="py-12">
            <h2 className="text-2xl font-bold text-green-500 mb-6 text-center">What We Offer</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">CTF Training & Challenges</h3>
                <p className="text-green-300/80">Sharpen your skills with regular challenges.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Bug Bounty & Security Research</h3>
                <p className="text-green-300/80">Discuss latest vulnerabilities and ethical hacking techniques.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Workshops & Events</h3>
                <p className="text-green-300/80">Get access to exclusive community-driven events.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Team Collaboration</h3>
                <p className="text-green-300/80">Form teams for competitions and projects.</p>
              </div>
              <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                <h3 className="text-xl font-bold mb-2">Knowledge Sharing</h3>
                <p className="text-green-300/80">Learn from peers and experts through discussions and write-ups.</p>
              </div>
            </div>
          </div>

          {/* Our Team */}
          <div className="py-12">
            <h2 className="text-2xl font-bold text-green-500 mb-6 text-center">Meet Our Team</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors flex flex-col items-center"
                >
                  <img
                    src={member.image}
                    alt={`Image of ${member.name}`}
                    className="w-32 h-32 object-cover rounded-full mb-4"
                  />
                  <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                  <p className="text-green-300/80">{member.role}</p>
                  <div className="flex space-x-2 mt-2">
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {member.batch}
                    </span>
                    <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                      {member.batch2}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>


          {/* Get Involved */}
          <div className="py-12 text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-6">Get Involved</h2>
            <p className="text-lg text-green-300 mb-4">
              Introduce yourself in <span className="font-bold">#introductions</span>
            </p>
            <p className="text-lg text-green-300 mb-4">
              For off-talks <span className="font-bold">#general</span>
            </p>
            <p className="text-lg text-green-300 mb-4">
              Request or share resources in <span className="font-bold">#resource-sharing</span>
            </p>
            <p className="text-lg text-green-300">Need help? Ask in <span className="font-bold">#doubt-clarification</span></p>
          </div>

          {/* Call to Action */}
          <div className="py-12 text-center">
            <h2 className="text-2xl font-bold text-green-500 mb-6">Join Us Today</h2>
            <p className="text-lg text-green-300 mb-8">Let’s build, learn, and hack together! 🏴‍☠</p>
            <a href="https://discord.gg/ewmRB2V4" target="_blank" rel="noopener noreferrer">
              <button className="bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 transition-colors font-bold">
                Join the Community
              </button>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
