import {
  BrainCircuit,
  BrainCog,
  Database,
  ShieldCheck,
  Workflow,
  ServerCog,
  Activity,
  Brain,
  Cloud,
  Users,
  Gauge,
  Locate,
  Waypoints,
  Dna,
  Handbag,
  Broccoli,
  icons,
  Phone,
} from "lucide-react";

export const profile = {
  name: "Kashif Sikander Sachwani",
  role: "Senior AI Engineer | Team Lead",
  tagline: "Building practical AI systems from prototype to production.",
  location: "Abu Dhabi, United Arab Emirates",
  phone: "+971-505281256",
  email: "kashsikander@gmail.com",
  github: "https://github.com/kash009",
  codeberg: "https://codeberg.org/ROOT009",
  linkedin: "https://www.linkedin.com/in/kashif-sikander-sachwani-642a3392/",
};

export const certs = [
  "DeepLearning.AI - Fine-tuning & RL for LLMs: Intro to Post-training",
  "DeepLearning.AI - AgenticAI",
  "DeepLearning.AI - Transformers in Practice",
  "DeepLearning.AI - Generative Adversarial Networks Specialization",
  "NVIDIA - Fundamentals of Accelerated Computing with CUDA C/C++",
  "NVIDIA - Fundamentals of Deep Learning for Computer Vision",
  "NVIDIA - Fundamentals of Deep Learning on Multi-GPUs",
];

export const expertise = [
  {
    label: "LLM systems and agentic AI",
    icon: BrainCircuit,
  },
  {
    label: "Python, Rust, C++, Zig",
    icon: Activity,
  },
  {
    label: "Evolutionary algorithms and neuroevolution",
    icon: Dna,
  },
  {
    label: "AI platform architecture",
    icon: Workflow,
  },
  {
    label: "PyTorch, TensorFlow, LibTorch, GGML",
    icon: BrainCog,
  },
  {
    label: "NLP, NLU, NLI, GANs, computer vision",
    icon: Brain,
  },
  {
    label: "Machine learning and deep learning",
    icon: Locate,
  },
  {
    label: "Docker, Kubernetes, cloud deployment",
    icon: ShieldCheck,
  },
  {
    label: "APIs, microservices, graph databases",
    icon: Database,
  },
  {
    label: "Performance, Reliability, and Observability",
    icon: Gauge,
  },
];

export const education = [
  {
    school: "National University of Computer and Emerging Sciences",
    degree: "BSc in Computer Science",
    period: "2013 - 2017",
  },
];

export const strengths = [
  {
    label: "Technical direction",
    icon: BrainCog,
  },
  {
    label: "Research-to-production execution",
    icon: Gauge,
  },
  {
    label: "AI platform architecture",
    icon: Waypoints,
  },
  {
    label: "Cross-functional collaboration",
    icon: Users,
  },
  {
    label: "Pragmatic decision-making",
    icon: Locate,
  },
];

export const productsLeadership = [
  {
    name: "Flexzo AI",
    company: "Healsgood AI",
    icon: Users,
    summary:
      "Led end-to-end AI delivery for a production platform, including an internal LLM library, Rust-based agent orchestration, an AI lifecycle engine, API services, and Kubernetes-based deployment, enabling faster feature delivery at scale.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "Limn AI",
    company: "AiFi Technologies",
    icon: Dna,
    summary:
      "Developed a neuroevolution- and GAN-based pattern-generation engine that accelerated creative experimentation while operating within constrained search spaces.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "Moda AI",
    company: "AiFi Technologies",
    icon: Handbag,
    summary:
      "Built a browser-based fashion design solution with interactive 3D models and AI-driven pattern generation, reducing concept-to-iteration cycles under real-time rendering constraints.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "AiDiet",
    company: "AiFi Technologies",
    icon: Broccoli,
    summary:
      "Built an evolutionary-strategy recommendation system to generate more personalized diet plans from sparse physical inputs and optional blood reports.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
];

export const projects = [
  {
    name: "Evolutionary Computation Library",
    summary:
      "Developed an in-house evolutionary-computation library to speed up large experiment batches and increase reuse across research projects.",
    stack: ["C++"],
    // impact: "",
  },
  {
    name: "Distributed Evolution",
    summary:
      "Built a distributed architecture for evolutionary strategies across computer clusters, enabling parallel optimization at cluster scale.",
    stack: ["Python"],
    // impact: "",
  },
  {
    name: "Symbolic Regression",
    summary:
      "Developed symbolic-regression strategies using Python evolution modules with C++ grammar parsing and evaluation to expand search space under strict expression constraints.",
    stack: ["C++", "Python"],
    // impact: "",
  },
  {
    name: "Omega Infinity (Chess Algorithm)",
    summary:
      "Developed a modified Monte Carlo Tree Search algorithm, a LibTorch neural network, and a chess engine in C++ to improve move quality under fixed time-control constraints.",
    stack: ["C++"],
    // impact: "",
  },
  {
    name: "Evolutionary Training Pipeline for Neural Networks",
    summary:
      "Created a parallel training pipeline for an in-house chess AI on compute clusters, increasing training throughput while keeping runs reproducible under resource limits.",
    stack: ["C++", "Python"],
    // impact: "",
  },
  {
    name: "Heart Monitoring and Diagnosis System",
    summary:
      "Implemented a 1D-CNN for ECG beat classification, built a portable ECG device with Arduino and bespoke signal processing, and delivered an Android app for edge-friendly monitoring under noisy-signal constraints.",
    stack: ["Python", "Arduino", "Android"],
    // impact: "",
  },
];

export const stack = [
  {
    title: "AI/ML",
    icon: BrainCircuit,
    items: [
      "LLMs",
      "GANs",
      "Object detection & recognition",
      "Recommendation systems",
      "Neuroevolution",
      "Evolutionary algorithms",
    ],
  },
  {
    title: "Programming",
    icon: ServerCog,
    items: ["Python", "Rust", "C++", "Zig"],
  },
  {
    title: "Frameworks & Libraries",
    icon: ShieldCheck,
    items: [
      "PyTorch",
      "TensorFlow",
      "LibTorch",
      "Celery",
      "Eigen",
      "Boost",
      "CUDA",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MongoDB", "FalkorDB", "AWS Neptune", "Neo4j"],
  },
  {
    title: "Cloud & Infrastructure",
    icon: Cloud,
    items: [
      "AWS",
      "GCP",
      "Terraform",
      "Monitoring and logging",
      "Kubernetes",
      "Docker",
    ],
  },
];

export const personalProjectLinks = [
  {
    label: "Codeberg",
    href: profile.codeberg,
    description: "Mirror and actively maintained personal projects",
  },
  {
    label: "GitHub",
    href: profile.github,
    description: "Open-source repositories and personal experiments",
  },
];

export const researchInterests = [
  "World Models, Energy-based Models, and Joint Embedding Predictive Architecture (JEPA)",
  "Self-supervised learning and Reinforcement Learning",
  "LLM systems, alignment, and agent reliability",
  "Neuroevolution and evolutionary computation",
  "Distributed training and high-throughput inference systems",
  "Rust-based multi-agent orchestration and safety",
  "Graph-based reasoning and knowledge-driven AI pipelines",
  "Practical MLOps for production AI lifecycle automation",
];

export const experience = [
  {
    company: "Healsgood AI",
    role: "Senior AI Engineer",
    location: "Dubai, UAE",
    period: "2023 — Present",
    stack: ["Rust", "Python", "LLMs", "Kubernetes", "Docker", "API Services"],
    impact:
      "Delivered production AI capabilities across Careo and Flexzo AI through platform-level architecture and execution.",
    points: [
      "Led AI engineering for Careo and Flexzo AI, translating product priorities into platform capabilities and shipping high-impact AI features.",
      "Architected the platform AI backbone (LLM services, agent workflows, and orchestration layers) to improve reuse, reliability, and delivery speed.",
      "Built a production-grade Rust multi-agent orchestrator to support high-throughput, memory-safe execution in critical workflows.",
      "Designed AI API and deployment architecture with containerization and Kubernetes, improving operability and release consistency.",
      "Developed an internal LLM library combining Python interfaces with Rust implementations, reducing integration overhead across product teams.",
      "Operated Kubernetes-hosted LLM servers and built an AI lifecycle engine to automate deployment and runtime platform operations.",
    ],
  },
  {
    company: "Nord A1",
    role: "AI Consultant",
    location: "Sweden (Remote, Part-time)",
    period: "2022 — 2023",
    stack: [
      "Python",
      "Transfer Learning",
      "Docker",
      "Google Cloud Platform",
      "Android (Java)",
      "iOS (Swift)",
    ],
    impact:
      "Productionized an AI solution from model development to mobile integration and cloud deployment.",
    points: [
      "Developed an AI solution using transfer learning, clustering, and language augmentation to improve model performance with limited labeled data.",
      "Designed a Docker-based deployment architecture on Google Cloud Platform to standardize packaging and release workflows.",
      "Delivered native Android and iOS integrations in Java and Swift, enabling production adoption in mobile workflows.",
      "Improved training-data coverage through targeted augmentation techniques, increasing dataset robustness for model training.",
    ],
  },
  {
    company: "AiFi Technologies",
    role: "AI Team Lead",
    location: "Abu Dhabi, UAE",
    period: "2018 — 2023",
    stack: [
      "Python",
      "C++",
      "PyTorch",
      "TensorFlow",
      "LibTorch",
      "CUDA",
      "OpenCL",
      "GANs",
      "Neuroevolution",
    ],
    impact:
      "Scaled research-heavy AI initiatives into production-ready systems across multiple product lines.",
    points: [
      "Led AI development across research and product initiatives, converting experimental work into production-ready capabilities.",
      "Designed GAN and evolutionary-algorithm-based pattern-generation pipelines used in product and design workflows.",
      "Built a distributed evolutionary-computation library to accelerate large-scale experimentation across compute clusters.",
      "Created ModularNN, an in-house neural-network framework on Eigen tuned for evolutionary approaches and custom experimentation.",
      "Developed GPU acceleration paths for neural-network workloads using OpenCL and CUDA to reduce training bottlenecks.",
      "Built chess-agent training pipelines using symbolic regression, Monte Carlo Tree Search, alpha-beta pruning, iterative deepening, and reinforcement learning.",
      "Standardized distributed training workflows across Python/C++ stacks (PyTorch, TensorFlow, LibTorch, DyNet) to improve reproducibility.",
    ],
  },
  {
    company: "QYZD Pvt. Ltd.",
    role: "Software Design Engineer",
    location: "Karachi, Pakistan",
    period: "2017 — 2018",
    stack: ["C++", "Graph Algorithms", "XML Processing"],
    impact:
      "Improved component discovery workflows by implementing graph-based traversal for XML-extracted structures.",
    points: [
      "Developed a graph-search algorithm to traverse components extracted from mobile application XML, improving component discovery for downstream tooling.",
    ],
  },
];

// _____ OLD __________________
//

export const skills = {
  "AI/ML": [
    "LLMs",
    "RAG",
    "Fine-tuning",
    "NLP",
    "Computer Vision",
    "Time Series",
  ],
  MLOps: ["MLflow", "Airflow", "Docker", "Kubernetes", "CI/CD", "Monitoring"],
  Backend: ["Python", "FastAPI", "Node.js", "PostgreSQL", "Redis", "REST/gRPC"],
  Cloud: ["AWS", "GCP", "Terraform", "Serverless", "Vector Databases"],
};
