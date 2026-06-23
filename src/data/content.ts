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
  "DeepLearning.AI - Generative Adversarial Networks Specialization",
  "NVIDIA - Fundamentals of Accelerated Computing with CUDA C/C++",
  "NVIDIA - Fundamentals of Deep Learning for Computer Vision",
  "NVIDIA - Fundamentals of Deep Learning on Multi-GPUs",
  "Johns Hopkins University - Data Science Toolbox",
];

export const expertise = [
  {
    label: "LLM Systems and agentic AI",
    icon: BrainCircuit,
  },
  {
    label: "Python, Rust, C++, Zig",
    icon: Activity,
  },
  {
    label: "Evolutionary algorithms & NeuroEvolution",
    icon: Dna,
  },
  {
    label: "AI Platform Architecture",
    icon: Workflow,
  },
  {
    label: "Pytorch, Tensorflow, LibTorch, GGML",
    icon: BrainCog,
  },
  {
    label: "NLP, NLU, NLI, GANs, Computer Vision",
    icon: Brain,
  },
  {
    label: "Machine Learning & Deep Learning",
    icon: Locate,
  },
  {
    label: "Docker, Kubernetes, Cloud Deployment",
    icon: ShieldCheck,
  },
  {
    label: "APIs, Microservices, Graph Databases",
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
    label: "Cross functional collaboration",
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
      "Led AI delivery for platform, including the LLM library, Rust-based agent orchestration, Ai lifecycle engine, API services and Kubernetes-base deployment.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "Limn AI",
    company: "AiFi technologies",
    icon: Dna,
    summary:
      "Developed pattern generation engine using NeuroEvolution and GANs.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "Moda AI",
    company: "AiFi technologies",
    icon: Handbag,
    summary:
      "Built browser-based fashion design solution with interactive 3D models and AI-driven pattern generation.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
  {
    name: "AiDiet",
    company: "AiFi technologies",
    icon: Broccoli,
    summary:
      "Built a recommendation system using evolutionary strategies to suggest diet plans based on physical parameters and optional blood reports.",
    // stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    // impact: "Reduced first-response time by 45%.",
  },
];

export const projects = [
  {
    name: "Evolutionary Computation Library",
    summary:
      "Developed an in-house library for evolutionary computation for research experiments.",
    stack: ["C++"],
    // impact: "",
  },
  {
    name: "Distributed Evolution",
    summary:
      "Built a distributed architecture for evolutionary strategies across clusters of computers.",
    stack: ["Python"],
    // impact: "",
  },
  {
    name: "Symbolic Regression",
    summary:
      "Developed evolutionary strategies for symbolic regression with Python evolution modules and C++ grammar parsing and evaluation.",
    stack: ["C++", "Python"],
    // impact: "",
  },
  {
    name: "Omega Infinity (Chess Algorithm)",
    summary:
      "Developed a modified Monte Carlo tree search algorithm, a LibTorch deep neural network and a chess engine build from scratch in C++ with alpha-beta pruning and iterative deepening.",
    stack: ["C++"],
    // impact: "",
  },
  {
    name: "Evolutionary Training Pipeline for Neural Networks",
    summary:
      "Created a parallel training pipeline for an in-house Chess AI using clusters of computers.",
    stack: ["C++", "Python"],
    // impact: "",
  },
  {
    name: "Heart Monitoring and Diagnosis System",
    summary:
      "Implemented 1D-CNN for ECG beat classification, built a portable ECG device with Arduino with a bespoke ECG signal processing algorithm, and developed an Android app for monitoring and diagnosis.",
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
      "Object Detection  & Recognition",
      "Recommendation Systems",
      "Neuro Evolution",
      "Evolutionary Algorithms",
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
      "Pytorch",
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
      "Monitoring/Logging",
      "Kubernetes",
      "Docker",
    ],
  },
];

export const experience = [
  {
    company: "Healsgood AI",
    role: "Senior AI Engineer",
    location: "Dubai, UAE",
    period: "2023 — Present",
    points: [
      "Led AI engineering for the Careo and Flexzo AI platforms, owning AI architecture, platform intelligence, and delivery of high-value product features.",
      "Architected and developed the core AI backbone, including LLM services, agent workflows, and intelligent platform capabilities.",
      "Built production-ready Agent Orchestrator in Rust for high-performance, memory-safe multi-agent execution.",
      "Designed AI API services and deployment architecture with containreization and cluster management.",
      "Created internal LLM Library used by the platform, combining Python interfaces with Rust implementations for high performance.",
      "Deployed and maintained LLM servers on Kubernetes clusters and developed AI lifecycle engine to support automation and platform operations.",
    ],
  },
  {
    company: "Nord A1",
    role: "AI Consultant",
    location: "Sweden (Remote, Part time)",
    period: "2022 — 2023",
    points: [
      "Developed and AI solution using transfer learning on pretrained models, clustering, and language data augmentation.",
      "Designed a Docker-based deployment architecture on Google Cloud Platform.",
      "Delivered native Android and iOS integration using Java and Swift for the AI solution.",
      "Improved training data availability through effective data augmentation techniques.",
    ],
  },
  {
    company: "AiFi technologies",
    role: "AI Team Lead",
    location: "Abu Dhabi, UAE",
    period: "2018 — 2023",
    points: [
      "Lead AI development across research and product initiatives, spanning GANs, recommendation systems, neuroevolution, intelligent pattern generation and reinforcement learning for chess AI.",
      "Designed AI-based pattern generation algorithms using GANs and evolutionary algorithms.",
      "Built a distributed evolutionary computation library to support research experiments and product use",
      "Created ModularNN, an in-house neural network framework based on Eigen and optimized for evolutionary approaches.",
      "Developed GPU acceleration approaches for neural networks workloads using OpenCL and CUDA.",
      "Built training pipelines for chess agents using symbolic regression, Monte Carlo tree search, alpha-beta pruning, iterative deepening, reinforcement learning and LibTorch-base deep neural networks.",
      "Worked extensively with Python, C++, PyTorch, Tensorflow, LibTorch, DyNet and distributed training workflows.",
    ],
  },
  {
    company: "QYZD Pvt. Ltd.",
    role: "Software Design Engineer",
    location: "Karachi, Pakistan",
    period: "2017 — 2018",
    points: [
      "Developed the search algorithm to travers the graph of components extracted from mobile application XML.",
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
