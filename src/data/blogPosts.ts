export interface BlogPost {
  title: string;
  subtitle: string;
  image: string;
  date: string;
  slug: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    title: "Introduction to Assembly",
    subtitle: "Reverse Engineering Edition",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&q=80&w=2070",
    date: "March 15, 2024",
    slug: "intro-to-assembly",
    content: `# Introduction to Assembly (Reverse Engineering Edition)

Assembly language is the closest human-readable representation of machine code. As a reverse engineer, understanding assembly is crucial for analyzing binaries, debugging, and finding vulnerabilities. This blog introduces essential assembly concepts, covering registers, instructions, disassemblers, process memory, and practical tips for reverse engineering.

---

## **Registers: The Processor's Global Variables**

Registers are like variables in high-level programming languages such as C or Python. They store temporary data and are much faster than accessing memory. The size of registers varies based on the system architecture:

- **32-bit systems**: Registers are 32 bits wide (e.g., EAX, EBX, ECX).
- **64-bit systems**: Registers are 64 bits wide (e.g., RAX, RBX, RCX).

### **Special Registers**

1. **Program Counter (PC)**: Also known as **Instruction Pointer (IP)**, it stores the address of the next instruction to be executed.
    - In **x86 (32-bit)**: Called **EIP (Extended Instruction Pointer)**.
    - In **x86_64 (64-bit)**: Called **RIP (Register Instruction Pointer)**.
2. **Stack Pointer (SP)**: Always points to the top of the stack.
    - In **x86 (32-bit)**: ESP (Extended Stack Pointer).
    - In **x86_64 (64-bit)**: RSP (Register Stack Pointer).
3. **Base Pointer (BP)**: Points to the base of a stack frame.
    - In **x86 (32-bit)**: EBP.
    - In **x86_64 (64-bit)**: RBP.

---

## **Instructions: How the CPU Executes Code**

Assembly instructions are the fundamental operations the CPU performs. They are just numbers (binary), but we represent them in a human-readable format.

Example:

\`\`\`
mov eax, 5  ; Move the value 5 into the EAX register
\`\`\`

This corresponds to the machine code:

\`\`\`
B8 05 00 00 00
\`\`\`

Here, \`B8\` maps to \`mov eax\`, and \`05 00 00 00\` represents the value 5.

### **Control Flow Instructions**

- **Jump (JMP), Branches, and Calls** change the instruction pointer's value.
- **CALL**: Pushes the return address onto the stack and jumps to a function.
- **RET**: Pops the return address from the stack and resumes execution.

**Tip:** While analyzing assembly, look for jumps, branches, and loops to understand the code flow.

---

## **Disassemblers: Making Assembly Human-Readable**

A **disassembler** converts raw machine code (binary) into assembly instructions.

- Example: \`B8\` (binary) → \`mov eax,\` (assembly instruction)
- Popular disassemblers: IDA Pro, Ghidra, Radare2, objdump

Computers store and execute instructions in binary, and disassemblers help translate them into a readable format for reverse engineers.

---

## **Understanding Executable Files and Process Memory**

Ever wondered why an executable file looks like random gibberish when opened in a text editor?

### **ASCII vs. Bytes**

- **ASCII characters** range from **0 to 127** (A-Z, a-z, 0-9, symbols).
- **Computers work with bytes (0-255)**.
- Characters above **128-255** don't have assigned readable symbols, making executables look like random data.

### **Process Memory: Temporary & Virtual**

- When a program runs, it doesn't execute directly from disk.
- It is loaded into **virtual memory**, which disappears after execution.
- **argv** is a pointer storing addresses in memory.

**Tip:** Disassembled code contains only **hexadecimal** numbers, not decimal.

---

## **Simple Code Walkthrough**

Let's take a small C program, compile it, and analyze its assembly code.

### **C Code**

![C Code Example](/src/images/CODE.jpg)

### **Compiling and Disassembling**

To see the assembly output:

![Compilation Process](/src/images/CODE2.jpg)

### **Assembly Output**

![Assembly Output](/src/images/DEBUG.jpg)


This simple example shows function calls (\`call\`), stack operations (\`push\`, \`pop\`), and function return (\`ret\`).

---

## **Reverse Engineering Tips**

1. **Look for jumps, branches, and loops** to understand the code structure.
2. **Understand stack behavior:** The return pointer is always under EBP.
3. **Write small programs in assembly** and analyze their disassembled versions.
4. **Recognizing negative integers:** Represented in **hexadecimal (0xff…)**.
5. **Learn both assembly formats:** AT&T vs. Intel syntax.
6. **Disassemble simple binaries first** before tackling complex executables.
    
---

## **Conclusion**

Assembly language is the backbone of reverse engineering. Understanding registers, instructions, memory structures, and executable formats will help you analyze binaries efficiently. Start practicing with simple programs, use disassemblers, and focus on control flow to strengthen your reverse engineering skills.

Stay tuned for the next part in this series! 🚀

---

### References

x86-64 Basics: [Click Here](https://web.stanford.edu/class/cs107/guide/x86-64.html)

Ian Beer from Google Project Zero suggested writing test programs to analyze the complex data structures involved in the various flavors of IPC available on OS X to gain a deeper understanding of how they work: [Click Here](https://youtu.be/D1jNCy7-g9k?si=UsHlZpZ24C38dUwy)`
  },
  {
    title: "Buffer Overflow Exploitation",
    subtitle: "Understanding Memory Corruption Vulnerabilities",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80&w=2070",
    date: "March 14, 2024",
    slug: "buffer-overflow",
    content: "Coming soon..."
  },
  {
    title: "Advanced Debugging Techniques",
    subtitle: "Using GDB for Reverse Engineering",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=2070",
    date: "March 13, 2024",
    slug: "advanced-debugging",
    content: "Coming soon..."
  }
];