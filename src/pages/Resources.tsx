import React, { useState } from 'react';
import ReactFlow, { Background, Controls, MiniMap } from 'reactflow';
import 'reactflow/dist/style.css';

const Resources = () => {
  const [filter, setFilter] = useState('All');
  const [selectedNode, setSelectedNode] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Categories for the 3x3 grid filter - just using the first 5 as requested
  const categories = [
    'PWN', 'Web Security', 'Reverse Engineering', 'Forensics', 'Cryptography'
  ];

  // Handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setFilter(category);
    setSelectedNode(null);
  };

  // Handle node click in the roadmap
  const handleNodeClick = (event, node) => {
    setSelectedNode(node);
    setFilter(node.data.label); // Use node label as the filter
  };

  // Get nodes and edges based on selected category
  const getFlowData = (category) => {
    switch (category) {
      case 'PWN':
        return {
          nodes: [
            { id: '1', data: { label: 'Start' }, position: { x: 0, y: 250 } },
            { id: '2', data: { label: 'Foundations of Reverse Engineering' }, position: { x: 200, y: 250 } },
            { id: '3', data: { label: 'Reverse Engineering Challenges & Writeups' }, position: { x: 400, y: 250 } },
            { id: '4', data: { label: 'Introduction to Memory Corruption' }, position: { x: 600, y: 250 } },
            { id: '5', data: { label: 'Shellcoding' }, position: { x: 800, y: 250 } },
            { id: '6', data: { label: 'Format String Vulnerabilities' }, position: { x: 0, y: 500 } },
            { id: '7', data: { label: 'DEP & Return-Oriented Programming (ROP)' }, position: { x: 200, y: 500 } },
            { id: '8', data: { label: 'ASLR Bypass Techniques' }, position: { x: 400, y: 500 } },
            { id: '9', data: { label: 'Heap Exploitation' }, position: { x: 600, y: 500 } },
            { id: '10', data: { label: 'Stack Cookies & Protection Mechanisms' }, position: { x: 800, y: 500 } },
            { id: '11', data: { label: 'Game Exploitation' }, position: { x: 1000, y: 250 } },
            { id: '12', data: { label: 'Kernel Exploitation' }, position: { x: 1000, y: 500 } },
            { id: '13', data: { label: 'Continuous Learning & CTF Participation' }, position: { x: 1200, y: 250 } },
            { id: '14', data: { label: 'Mastery: Research & Advanced Exploitation 🔥🚀' }, position: { x: 1200, y: 500 } },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2', animated: true },
            { id: 'e2-3', source: '2', target: '3', animated: true },
            { id: 'e3-4', source: '3', target: '4', animated: true },
            { id: 'e4-5', source: '4', target: '5', animated: true },
            { id: 'e5-6', source: '5', target: '6', animated: true },
            { id: 'e6-7', source: '6', target: '7', animated: true },
            { id: 'e7-8', source: '7', target: '8', animated: true },
            { id: 'e8-9', source: '8', target: '9', animated: true },
            { id: 'e9-10', source: '9', target: '10', animated: true },
            { id: 'e10-11', source: '10', target: '11', animated: true },
            { id: 'e11-12', source: '11', target: '12', animated: true },
            { id: 'e12-13', source: '12', target: '13', animated: true },
            { id: 'e13-14', source: '13', target: '14', animated: true },
          ]
        };
      case 'Web Security':
        return {
          nodes: [
            { id: '1', data: { label: 'Phase 1: Web Fundamentals' }, position: { x: 0, y: 0 } },
            { id: '2', data: { label: 'Basic Understanding of HTML and CSS' }, position: { x: 0, y: 100 } },
            { id: '3', data: { label: 'Understanding Front-End and Back-End' }, position: { x: 0, y: 200 } },
            { id: '4', data: { label: 'Phase 2: Web Security Basics' }, position: { x: 300, y: 0 } },
            { id: '5', data: { label: 'Authentication & Authorisation' }, position: { x: 300, y: 100 } },
            { id: '6', data: { label: 'SOP & CORS' }, position: { x: 300, y: 200 } },
            { id: '7', data: { label: 'Session Management - Cookies' }, position: { x: 300, y: 300 } },
            { id: '8', data: { label: 'HTTP Headers' }, position: { x: 300, y: 400 } },
            { id: '9', data: { label: 'Phase 3: Common Vulnerabilities' }, position: { x: 600, y: 0 } },
            { id: '10', data: { label: 'Injection' }, position: { x: 600, y: 100 } },
            { id: '11', data: { label: 'XSS Attack' }, position: { x: 600, y: 200 } },
            { id: '12', data: { label: 'CSRF' }, position: { x: 600, y: 300 } },
            { id: '13', data: { label: 'Broken Authentication' }, position: { x: 600, y: 400 } },
            { id: '14', data: { label: 'IDOR' }, position: { x: 600, y: 500 } },
            { id: '15', data: { label: 'File Inclusion' }, position: { x: 600, y: 600 } },
            { id: '16', data: { label: 'SSRF' }, position: { x: 600, y: 700 } },
            { id: '17', data: { label: 'Phase 4: Advanced' }, position: { x: 900, y: 0 } },
            { id: '18', data: { label: 'Phase 5: Hands-On Experience' }, position: { x: 1200, y: 0 } },
            { id: '19', data: { label: 'CTF Challenges & Bug Bounty' }, position: { x: 1200, y: 100 } },
          ],
          edges: [
            { id: 'e1-2', source: '1', target: '2' },
            { id: 'e2-3', source: '2', target: '3' },
            { id: 'e1-4', source: '1', target: '4' },
            { id: 'e4-5', source: '4', target: '5' },
            { id: 'e5-6', source: '5', target: '6' },
            { id: 'e6-7', source: '6', target: '7' },
            { id: 'e7-8', source: '7', target: '8' },
            { id: 'e4-9', source: '4', target: '9' },
            { id: 'e9-10', source: '9', target: '10' },
            { id: 'e10-11', source: '10', target: '11' },
            { id: 'e11-12', source: '11', target: '12' },
            { id: 'e12-13', source: '12', target: '13' },
            { id: 'e13-14', source: '13', target: '14' },
            { id: 'e14-15', source: '14', target: '15' },
            { id: 'e15-16', source: '15', target: '16' },
            { id: 'e9-17', source: '9', target: '17' },
            { id: 'e17-18', source: '17', target: '18' },
            { id: 'e18-19', source: '18', target: '19' },
          ]
        };
      case 'Reverse Engineering':
        return {
          nodes: [
            { id: '1', data: { label: 'Phase 1: Fundamentals' }, position: { x: 0, y: 0 } },
            { id: '2', data: { label: 'Computer Architecture & OS Concepts\n- x86, x86_64, ARM' }, position: { x: 0, y: 100 } },
            { id: '3', data: { label: 'Assembly Language\n- x86/x86_64 assembly (basic commands)' }, position: { x: 0, y: 200 } },
            { id: '4', data: { label: 'C & C++ Basics' }, position: { x: 0, y: 300 } },
            { id: '5', data: { label: 'Phase 2: Reverse Engineering Tools & Debugging' }, position: { x: 300, y: 0 } },
            { id: '6', data: { label: 'Disassemblers & Debuggers\n- IDA Free / IDA Pro\n- Ghidra\n- Binary Ninja\n- Radare2\n- WinDbg (Windows)' }, position: { x: 300, y: 100 } },
            { id: '7', data: { label: 'Debugging & Dynamic Analysis\n- GDB, PEDA, pwndbg\n- strace, ltrace\n- Frida for dynamic instrumentation' }, position: { x: 300, y: 200 } },
            { id: '8', data: { label: 'Static & Dynamic Binary Analysis\n- objdump\n- readelf\n- nmstrings' }, position: { x: 300, y: 300 } },
            { id: '9', data: { label: 'Phase 3: Malware & Obfuscation Analysis' }, position: { x: 600, y: 0 } },
            { id: '10', data: { label: 'Basic Malware Analysis' }, position: { x: 600, y: 100 } },
            { id: '11', data: { label: 'Binary Obfuscation & Protection\n- Understand anti-debugging, anti-VM techniques.' }, position: { x: 600, y: 200 } },
            { id: '12', data: { label: 'Phase 4: Advanced Reverse Engineering & Exploitation' }, position: { x: 900, y: 0 } },
            { id: '13', data: { label: 'Advanced Binary Exploitation\n- Heap & stack exploitation\n- ROP\n- Format string exploitation' }, position: { x: 900, y: 100 } },
            { id: '14', data: { label: 'Kernel & Driver Reverse Engineering\n- Windows & Linux kernel debugging' }, position: { x: 900, y: 200 } },
            { id: '15', data: { label: 'Phase 5: Practice & CTF Challenges\n- Reverse Engineering CTFs\n- Contribute & Research' }, position: { x: 1200, y: 100 } }
          ],

          edges: [
            { id: 'e1-2', source: '1', target: '2' },
            { id: 'e2-3', source: '2', target: '3' },
            { id: 'e3-4', source: '3', target: '4' },
            { id: 'e1-5', source: '1', target: '5' },
            { id: 'e5-6', source: '5', target: '6' },
            { id: 'e6-7', source: '6', target: '7' },
            { id: 'e7-8', source: '7', target: '8' },
            { id: 'e5-9', source: '5', target: '9' },
            { id: 'e9-10', source: '9', target: '10' },
            { id: 'e10-11', source: '10', target: '11' },
            { id: 'e9-12', source: '9', target: '12' },
            { id: 'e12-13', source: '12', target: '13' },
            { id: 'e13-14', source: '13', target: '14' },
            { id: 'e14-15', source: '14', target: '15' }
          ]
        }
      case 'Forensics':
        return {
          nodes: [
            { id: 'forensics-start', data: { label: 'Start' }, position: { x: 250, y: 0 }, style: { background: '#d4edda', width: 150, textAlign: 'center', fontWeight: 'bold' } },
            { id: 'forensics-basics', data: { label: 'Digital Forensics Basics' }, position: { x: 250, y: 80 }, style: { width: 250 } },
            { id: 'forensics-os', data: { label: 'OS Forensics (Windows, Linux, macOS)' }, position: { x: 250, y: 160 }, style: { width: 250 } },
            { id: 'forensics-disk', data: { label: 'Disk Forensics' }, position: { x: 250, y: 240 }, style: { width: 250 } },
            { id: 'forensics-memory', data: { label: 'Memory Forensics' }, position: { x: 250, y: 320 }, style: { width: 250 } },
            { id: 'forensics-network', data: { label: 'Network Forensics' }, position: { x: 250, y: 400 }, style: { width: 250 } },
            { id: 'forensics-mobile', data: { label: 'Mobile Device Forensics' }, position: { x: 250, y: 480 }, style: { width: 250 } },
            { id: 'forensics-tools', data: { label: 'Forensic Tools & Techniques' }, position: { x: 250, y: 560 }, style: { width: 250 } },
            { id: 'forensics-malware', data: { label: 'Malware Forensics' }, position: { x: 250, y: 640 }, style: { width: 250 } },
            { id: 'forensics-ctf', data: { label: 'CTF & Practice' }, position: { x: 250, y: 720 }, style: { width: 250 } },
            { id: 'forensics-certification', data: { label: 'Certifications & Advanced Training' }, position: { x: 250, y: 800 }, style: { width: 250, background: '#d4edda' } },
          ],
          edges: [
            { id: 'e-forensics-start-basics', source: 'forensics-start', target: 'forensics-basics' },
            { id: 'e-forensics-basics-os', source: 'forensics-basics', target: 'forensics-os' },
            { id: 'e-forensics-os-disk', source: 'forensics-os', target: 'forensics-disk' },
            { id: 'e-forensics-disk-memory', source: 'forensics-disk', target: 'forensics-memory' },
            { id: 'e-forensics-memory-network', source: 'forensics-memory', target: 'forensics-network' },
            { id: 'e-forensics-network-mobile', source: 'forensics-network', target: 'forensics-mobile' },
            { id: 'e-forensics-mobile-tools', source: 'forensics-mobile', target: 'forensics-tools' },
            { id: 'e-forensics-tools-malware', source: 'forensics-tools', target: 'forensics-malware' },
            { id: 'e-forensics-malware-ctf', source: 'forensics-malware', target: 'forensics-ctf' },
            { id: 'e-forensics-ctf-certification', source: 'forensics-ctf', target: 'forensics-certification' },
          ]
        };
      case 'Cryptography':
        return {
          nodes: [
            { id: 'crypto-start', data: { label: 'Start' }, position: { x: 250, y: 0 }, style: { background: '#d4edda', width: 150, textAlign: 'center', fontWeight: 'bold' } },
            { id: 'crypto-basics', data: { label: 'Cryptography Fundamentals' }, position: { x: 250, y: 80 }, style: { width: 250 } },
            { id: 'crypto-classical', data: { label: 'Classical Ciphers' }, position: { x: 250, y: 160 }, style: { width: 250 } },
            { id: 'crypto-symmetric', data: { label: 'Symmetric Encryption' }, position: { x: 250, y: 240 }, style: { width: 250 } },
            { id: 'crypto-asymmetric', data: { label: 'Asymmetric Encryption' }, position: { x: 250, y: 320 }, style: { width: 250 } },
            { id: 'crypto-hash', data: { label: 'Hash Functions' }, position: { x: 250, y: 400 }, style: { width: 250 } },
            { id: 'crypto-protocols', data: { label: 'Cryptographic Protocols' }, position: { x: 250, y: 480 }, style: { width: 250 } },
            { id: 'crypto-attacks', data: { label: 'Common Cryptographic Attacks' }, position: { x: 250, y: 560 }, style: { width: 250 } },
            { id: 'crypto-implementations', data: { label: 'Implementation Vulnerabilities' }, position: { x: 250, y: 640 }, style: { width: 250 } },
            { id: 'crypto-ctf', data: { label: 'Cryptography in CTFs' }, position: { x: 250, y: 720 }, style: { width: 250 } },
            { id: 'crypto-advanced', data: { label: 'Advanced Topics & Research' }, position: { x: 250, y: 800 }, style: { width: 250, background: '#d4edda' } },
          ],
          edges: [
            { id: 'e-crypto-start-basics', source: 'crypto-start', target: 'crypto-basics' },
            { id: 'e-crypto-basics-classical', source: 'crypto-basics', target: 'crypto-classical' },
            { id: 'e-crypto-classical-symmetric', source: 'crypto-classical', target: 'crypto-symmetric' },
            { id: 'e-crypto-symmetric-asymmetric', source: 'crypto-symmetric', target: 'crypto-asymmetric' },
            { id: 'e-crypto-asymmetric-hash', source: 'crypto-asymmetric', target: 'crypto-hash' },
            { id: 'e-crypto-hash-protocols', source: 'crypto-hash', target: 'crypto-protocols' },
            { id: 'e-crypto-protocols-attacks', source: 'crypto-protocols', target: 'crypto-attacks' },
            { id: 'e-crypto-attacks-implementations', source: 'crypto-attacks', target: 'crypto-implementations' },
            { id: 'e-crypto-implementations-ctf', source: 'crypto-implementations', target: 'crypto-ctf' },
            { id: 'e-crypto-ctf-advanced', source: 'crypto-ctf', target: 'crypto-advanced' },
          ]
        };
      default:
        return { nodes: [], edges: [] };
    }
  };

  // Sample resources data
  const resourcesData = [
    // PWN Resources
    { id: 1, title: 'Introduction to Assembly', category: 'PWN', url: '/blog/intro-to-assembly' },
    { id: 2, title: 'Binary Exploitation Course (RPI)', category: 'PWN', url: 'https://web.archive.org/web/20210710080726/http://security.cs.rpi.edu/courses/binexp-spring2015/' },
    { id: 3, title: 'LiveOverflow Binary Exploitation Playlist', category: 'PWN', url: 'https://www.youtube.com/playlist?list=PLhixgUqwRTjxglIswKp9mpkfPNfHkzyeN' },

    { id: 4, title: 'Protostar Exploitation Challenges', category: 'PWN', url: 'https://exploit.education/protostar/' },
    { id: 5, title: 'Pwnable.kr Challenges', category: 'PWN', url: 'http://pwnable.kr/play.php' },
    { id: 6, title: 'Pwnable.tw Challenges', category: 'PWN', url: 'https://pwnable.tw/challenge/' },

    { id: 7, title: 'ROP Emporium Guide', category: 'PWN', url: 'https://ropemporium.com/guide.html' },

    { id: 8, title: 'Heap Exploitation Guide', category: 'PWN', url: 'https://heap-exploitation.dhavalkapil.com' },

    { id: 9, title: 'Guided Hacking - Game Exploitation', category: 'PWN', url: 'https://guidedhacking.com' },

    { id: 10, title: 'HTB PWN Challenges', category: 'PWN', url: 'https://www.hackthebox.com/' },
    { id: 11, title: 'TryHackMe PWN Rooms', category: 'PWN', url: 'https://tryhackme.com/' },

    { id: 12, title: 'Adversarial Machine Learning Reading List', category: 'PWN', url: 'https://nicholas.carlini.com/writing/2018/adversarial-machine-learning-reading-list.html' },
    { id: 13, title: 'AI Village Blog on ML Exploitation', category: 'PWN', url: 'https://aivillage.org/blog/' },

    // Web Resources
    { id: 30, title: 'PortSwigger Web Security Academy', category: 'Web Security', url: 'https://portswigger.net/web-security' },
    { id: 31, title: 'Advanced SQL Injection Cheatsheet', category: 'Web Security', url: 'https://github.com/kleiton0x00/Advanced-SQL-Injection-Cheatsheet' },
    { id: 32, title: 'OWASP Top Ten', category: 'Web Security', url: 'https://owasp.org/www-project-top-ten/' },
    { id: 33, title: 'OWASP SQL Injection Prevention Cheat Sheet', category: 'Web Security', url: 'https://cheatsheetseries.owasp.org/cheatsheets/SQL_Injection_Prevention_Cheat_Sheet.html' },
    { id: 34, title: 'PayloadsAllTheThings', category: 'Web Security', url: 'https://github.com/swisskyrepo/PayloadsAllTheThings/tree/master' },
    { id: 35, title: 'CSRF PoC Generator', category: 'Web Security', url: 'https://security.love/CSRF-PoC-Genorator/' },
    { id: 36, title: 'DOM XSS Wiki', category: 'Web Security', url: 'https://github.com/wisec/domxsswiki/wiki' },
    { id: 37, title: 'PHP Security Guidelines', category: 'Web Security', url: 'https://www.php.net/manual/en/security.php' },
    { id: 38, title: 'SQL Injection Payload List', category: 'Web Security', url: 'https://github.com/payloadbox/sql-injection-payload-list' },

    // Reverse Engineering Resources
    { id: 17, title: 'Practical Reverse Engineering', category: 'Reverse Engineering', url: '/resources/practical-rev-eng' },
    { id: 18, title: 'Ghidra for Beginners', category: 'Reverse Engineering', url: '/resources/ghidra-beginners' },
    { id: 19, title: 'Radare2 Tutorial', category: 'Reverse Engineering', url: '/resources/radare2' },

    // Forensics Resources
    { id: 20, title: 'Trail of Bits Forensics', category: 'Forensics', url: 'https://trailofbits.github.io/ctf/forensics/' },
    { id: 21, title: 'ExifTool', category: 'Forensics', url: 'https://www.exiftool.org' },
    { id: 22, title: 'Wireshark User Guide', category: 'Forensics', url: 'https://www.wireshark.org/docs/wsug_html_chunked/ChapterIntroduction.html' },
    { id: 23, title: 'File Signatures List', category: 'Forensics', url: 'https://en.wikipedia.org/wiki/List_of_file_signatures#:~:text=A%20file%20signature%20is%20data,its%20contents%20will%20be%20unintelligible.' },
    { id: 24, title: 'Gist File Signatures Reference', category: 'Forensics', url: 'https://gist.github.com/leommoore/f9e57ba2aa4bf197ebc5' },
    { id: 25, title: 'Steganography Resources', category: 'Forensics', url: 'https://0xrick.github.io/lists/stego/' },
    { id: 26, title: 'Morse Code CTF Guide', category: 'Forensics', url: 'https://ryan-orlando.github.io/posts/ctf_morse/' },

    // Cryptography Resources
    { id: 23, title: 'Cryptography I - Stanford', category: 'Cryptography', url: 'https://www.coursera.org/learn/crypto' },
    { id: 24, title: 'CryptoHack', category: 'Cryptography', url: 'https://cryptohack.org/' },
    { id: 25, title: 'Cryptopals Challenges', category: 'Cryptography', url: 'https://cryptopals.com/' },
  ];

  // Filter resources based on selected category or "All"
  const filteredResources = filter === 'All'
    ? resourcesData
    : resourcesData.filter(resource => resource.category === filter);

  // Get flow data for the selected category
  const { nodes, edges } = getFlowData(selectedCategory);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">CTF Learning Resources</h2>

      {/* Category Filter */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Select a Category</h3>
        <div className="grid grid-cols-3 gap-2">
          <button
            className={`p-2 rounded ${selectedCategory === '' ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
            onClick={() => {
              setSelectedCategory('');
              setFilter('All');
              setSelectedNode(null);
            }}
          >
            All
          </button>
          {categories.map((category) => (
            <button
              key={category}
              className={`p-2 rounded ${selectedCategory === category ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Roadmap Visualization - Only show when a category is selected */}
      {selectedCategory && (
        <div className="mb-6">
          <h3 className="text-lg font-semibold mb-2">{selectedCategory} Learning Path</h3>
          <div style={{ height: '600px', border: '1px solid #ddd' }}>
            <ReactFlow
              nodes={nodes}
              edges={edges}
              onNodeClick={handleNodeClick}
              fitView
            >
              <Background />
              <Controls />
              <MiniMap />
            </ReactFlow>
          </div>
        </div>
      )}

      {/* Resources List */}
      <div>
        <h3 className="text-lg font-semibold mb-2">
          {filter === 'All' ? 'All Resources' : `${filter} Resources`}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredResources.map((resource) => (
            <div
              key={resource.id}
              className="border p-4 rounded shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-medium text-lg">{resource.title}</h4>
              <p className="text-sm text-gray-600">{resource.category}</p>

              <a
                href={resource.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-500 hover:underline mt-2 inline-block"
              >
                View Resource
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Resources;