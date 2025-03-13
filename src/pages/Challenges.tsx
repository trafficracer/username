import React, { useState } from 'react';
import { LockIcon, UnlockIcon,FileIcon, ChevronRight } from 'lucide-react';

const Challenges: React.FC = () => {
  const categories = [
    {
      name: 'Pwn',
      description: 'Binary exploitation challenges',
      icon: <LockIcon size={20} />,
      challenges: [
        {
          id: 1,
          title: 'Buffer Overflow 101',
          description: 'Classic stack-based buffer overflow vulnerability. Can you control the execution flow?',
          difficulty: 'Easy',
          fileLink: '/challenges/pwn/buffer_overflow_101.zip',
          hint: 'Try examining what happens when you send more than 64 bytes...'
        }
      ]
    },
    {
      name: 'REV',
      description: 'rev challenge',
      icon: <LockIcon size={20} />,
      challenges: [
        {
          id: 1,
          title: 'Flag casino',
          description: 'The team stumbles into a long-abandoned casino. As you enter, the lights and music whir to life, and a staff of robots begin moving around and offering games, while skeletons of prewar patrons are slumped at slot machines. A robotic dealer waves you over and promises great wealth if you can win - can you beat the house and gather funds for the mission?',
          difficulty: 'Easy',
          fileLink: 'https://drive.google.com/file/d/1XUGiVZuTq-4jNE2XKZ7Xy-F_QKS_l5FZ/view?usp=sharing',
          hint: 'no hint'
        }
      ]
    },
    {
      name: 'Forensics',
      description: 'Digital forensics challenges',
      icon: <FileIcon size={20} />,
      challenges: [
        {
          id: 3,
          title: 'letsgooooo',
          description: 'Which iconic hippie van from Cars shares its name with a historic San Francisco district known for jazz and counterculture?',
          difficulty: 'Medium',
          fileLink: 'https://drive.google.com/file/d/1fGjKvjJYAZ_gpI79yuch6HAiApV_W0xu/view?usp=sharing',
          hint: 'Do you know about cars movie?'
        }
      ]
    },
    {
      name: 'Web Exploitation',
      description: 'Web application security challenges',
      icon: <UnlockIcon size={20} />,
      challenges: [
        {
          id: 5,
          title: 'SQL Injection',
          description: 'Can you bypass the login by exploiting SQL injection?',
          difficulty: 'Easy',
          fileLink: '/challenges/web/sql_injection',
          hint: 'What happens if you use a single quote in the username field?'
        }
      ]
    },
    {
      name: 'Web Exploitation',
      description: 'Web application security challenges',
      icon: <UnlockIcon size={20} />,
      challenges: [
        {
          id: 5,
          title: 'SQL Injection',
          description: 'Can you bypass the login by exploiting SQL injection?',
          difficulty: 'Easy',
          fileLink: '/challenges/web/sql_injection',
          hint: 'What happens if you use a single quote in the username field?'
        }
      ]
    }
  ];

  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [selectedChallenge, setSelectedChallenge] = useState<any>(null);
  const [showHint, setShowHint] = useState(false);
  const [flagInput, setFlagInput] = useState('');
  const [flagStatus, setFlagStatus] = useState<null | 'correct' | 'incorrect'>(null);

  const handleCategoryChange = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setSelectedChallenge(null);
    setShowHint(false);
  };

  const openChallenge = (challenge: any) => {
    setSelectedChallenge(challenge);
    setShowHint(false);
    setFlagInput('');
    setFlagStatus(null);
  };

  const closeChallenge = () => {
    setSelectedChallenge(null);
    setShowHint(false);
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  const handleFlagSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFlagStatus(flagInput.toLowerCase().includes('flag{') ? 'correct' : 'incorrect');
  };

  const currentChallenges = categories.find(cat => cat.name === selectedCategory)?.challenges || [];
  
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="bg-gray-800 py-4 px-6 shadow-md">
      </div>
      {/* Main content */}
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-center text-green-500 mb-8">Challenges</h2>
          
          {/* Category tabs */}
          <div className="flex flex-wrap justify-center mb-8 gap-2">
            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => handleCategoryChange(category.name)}
                className={`px-4 py-2 rounded-md flex items-center space-x-2 ${
                  selectedCategory === category.name
                    ? 'bg-green-600 text-white'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span>{category.name}</span>
              </button>
            ))}
          </div>

          {/* Challenge cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentChallenges.map((challenge) => (
              <div
                key={challenge.id}
                onClick={() => openChallenge(challenge)}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-green-900/30 hover:scale-105 transition duration-300 cursor-pointer border border-gray-700"
              >
                <div className="px-6 py-4">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="text-xl font-bold text-green-400">{challenge.title}</h3>
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      challenge.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                      challenge.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {challenge.difficulty}
                    </span>
                  </div>
                  <p className="text-gray-300 text-sm mb-4">{challenge.description}</p>
                </div>
                <div className="bg-gray-700 px-6 py-2 flex justify-between items-center">
                  <span className="text-xs text-gray-300">Click to view details</span>
                  <ChevronRight size={16} className="text-green-400" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Challenge modal */}
        {selectedChallenge && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
            <div className="bg-gray-800 rounded-lg shadow-xl w-full max-w-2xl border border-gray-700">
              <div className="px-6 py-4 border-b border-gray-700">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-green-400">{selectedChallenge.title}</h2>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded text-xs font-bold ${
                      selectedChallenge.difficulty === 'Easy' ? 'bg-green-900 text-green-300' :
                      selectedChallenge.difficulty === 'Medium' ? 'bg-yellow-900 text-yellow-300' :
                      'bg-red-900 text-red-300'
                    }`}>
                      {selectedChallenge.difficulty}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="px-6 py-4">
                <p className="text-gray-300 mb-4">{selectedChallenge.description}</p>
                
                <div className="bg-black p-4 rounded-md mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-sm font-semibold text-gray-400">Challenge Files</h3>
                  </div>
                  <a
                    href={selectedChallenge.fileLink}
                    className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 text-sm"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FileIcon size={16} />
                    <span>Download challenge files</span>
                  </a>
                </div>
                
                <div className="mb-6">
                  <button
                    onClick={toggleHint}
                    className="text-yellow-500 hover:text-yellow-400 text-sm"
                  >
                    {showHint ? 'Hide hint' : 'Show hint'}
                  </button>
                  
                  {showHint && (
                    <div className="mt-2 p-3 bg-yellow-900/30 border border-yellow-800 rounded-md text-yellow-300 text-sm">
                      {selectedChallenge.hint}
                    </div>
                  )}
                </div>
                
                <form onSubmit={handleFlagSubmit} className="mb-4">
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    Submit Flag
                  </label>
                  <div className="flex">
                    <input
                      type="text"
                      value={flagInput}
                      onChange={(e) => setFlagInput(e.target.value)}
                      placeholder="flag{...}"
                      className="flex-grow px-3 py-2 bg-gray-700 text-white rounded-l-md border border-gray-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    />
                    <button
                      type="submit"
                      className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-r-md"
                    >
                      Submit
                    </button>
                  </div>
                  
                  {flagStatus === 'correct' && (
                    <div className="mt-2 p-2 bg-green-900/30 border border-green-800 rounded-md text-green-400 text-sm">
                      Correct! Challenge solved!
                    </div>
                  )}
                  
                  {flagStatus === 'incorrect' && (
                    <div className="mt-2 p-2 bg-red-900/30 border border-red-800 rounded-md text-red-400 text-sm">
                      Incorrect flag. Try again!
                    </div>
                  )}
                </form>
              </div>
              
              <div className="px-6 py-4 border-t border-gray-700 flex justify-end">
                <button
                  onClick={closeChallenge}
                  className="bg-gray-700 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Challenges;
