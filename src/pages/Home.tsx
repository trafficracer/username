import React, { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { Shield, Flag, Users, ChevronDown } from 'lucide-react';
import { SiGithub, SiDiscord } from 'react-icons/si';


const Home: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [hasAnimated, setHasAnimated] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
        };
        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        const chars = '01010101';
        const fontSize = 14;
        const columns = canvas.width / fontSize;
        const drops: number[] = Array.from({ length: columns }).map(() => 1);

        const draw = () => {
            ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            ctx.fillStyle = '#0F0';
            ctx.font = `${fontSize}px monospace`;

            for (let i = 0; i < drops.length; i++) {
                const char = chars[Math.floor(Math.random() * chars.length)];
                ctx.fillText(char, i * fontSize, drops[i] * fontSize);

                if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
                    drops[i] = 0;
                }
                drops[i]++;
            }
        };

        const interval = setInterval(draw, 33);

        return () => {
            clearInterval(interval);
            window.removeEventListener('resize', resizeCanvas);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const statsSection = document.querySelector('#stats-section');
            const rect = statsSection?.getBoundingClientRect();
            if (rect && rect.top < window.innerHeight && rect.bottom > 0) {
                setHasAnimated(true);
                window.removeEventListener('scroll', handleScroll);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const scrollToFeatures = () => {
        document.querySelector('#features')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div className="min-h-screen bg-black text-green-400 font-mono">
            {/* Hero Section */}
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="absolute inset-0 w-full h-full z-0"
                />
                <div className="absolute inset-0 bg-black/5 backdrop-blur-[1px] z-[5]"></div>
                <div className="relative text-center space-y-6 px-4 z-10">
                    <h1 className="text-green-500 text-5xl sm:text-6xl md:text-7xl font-bold animate-fade-in">
                        {`{₦uL`}
                        <img
                            src="/images/flag.png"
                            alt="Icon"
                            className="inline-block w-12 h-14"
                            style={{
                                transform: 'scaleX(-1) translateY(-5px) translateX(15px)', // Flips horizontally and adjusts position
                            }}
                        />
                        <span className="text-green-500">B0rn{`}`}</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-green-300 max-w-2xl mx-auto">
                        Empowering the next generation of cybersecurity experts through hands-on learning and CTF challenges
                    </p>
                    <div className="flex justify-center space-x-4">
                    <a href="https://discord.gg/ewmRB2V4" target="_blank" rel="noopener noreferrer">
                        <button className="bg-green-500 text-black px-8 py-3 rounded-lg hover:bg-green-400 transition-colors font-bold">
                            Join Community
                        </button>
                        </a>
                    </div>
                </div>



                <div
                    onClick={scrollToFeatures}
                    className="absolute bottom-8 animate-bounce z-10 cursor-pointer"
                >
                    <ChevronDown className="w-8 h-8" />
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-20 bg-black/80">
                <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
                    <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                        <Shield className="w-12 h-12 mb-4 text-green-500" />
                        <h3 className="text-xl font-bold mb-2">Security Training</h3>
                        <p className="text-green-300/80">Comprehensive cybersecurity training from basics to advanced techniques.</p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                        <Flag className="w-12 h-12 mb-4 text-green-500" />
                        <h3 className="text-xl font-bold mb-2">CTF Challenges</h3>
                        <p className="text-green-300/80">Regular CTF events and challenges to test and improve your skills.</p>
                    </div>
                    <div className="bg-black/50 p-8 rounded-lg border border-green-500/20 hover:border-green-500/50 transition-colors">
                        <Users className="w-12 h-12 mb-4 text-green-500" />
                        <h3 className="text-xl font-bold mb-2">Community</h3>
                        <p className="text-green-300/80">Join a growing community of cybersecurity enthusiasts and experts.</p>
                    </div>
                </div>
            </section>

            {/* Community Stats */}
            <section id="stats-section" className="py-20 bg-gradient-to-b from-black to-green-950">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold text-green-500">
                                {hasAnimated ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
                            </div>
                            <div className="text-green-300">Community Members</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-500">
                                {hasAnimated ? <CountUp end={50} duration={2} suffix="+" /> : '0+'}
                            </div>
                            <div className="text-green-300">CTF Challenges</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-500">
                                {hasAnimated ? <CountUp end={24} duration={2} suffix="/7" /> : '0/0'}
                            </div>
                            <div className="text-green-300">Active Support</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold text-green-500">
                                {hasAnimated ? <CountUp end={100} duration={2} suffix="+" /> : '0+'}
                            </div>
                            <div className="text-green-300">Learning Resources</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer */}

            <footer className="bg-black border-t border-green-500/20 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                            <span className="text-lg font-mono">{'>'}</span>
                            <span className="font-bold">NULL Born</span>
                        </div>
                        <div className="flex space-x-4">
                            <a
                                href="https://github.com/Null-Born"
                                className="hover:text-green-500 transition-colors"
                                aria-label="GitHub"
                            >
                                <SiGithub className="w-6 h-6" />
                            </a>
                            <a
                                href="https://discord.gg/ewmRB2V4"
                                className="hover:text-green-500 transition-colors"
                                aria-label="Discord"
                            >
                                <SiDiscord className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default Home;
