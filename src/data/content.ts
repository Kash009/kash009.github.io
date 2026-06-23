export const profile = {
  name: "Your Name",
  role: "AI Engineer",
  tagline: "Building practical AI systems from prototype to production.",
  location: "City, Country",
  email: "you@example.com",
  github: "https://github.com/yourusername",
  linkedin: "https://linkedin.com/in/yourusername",
};

export const projects = [
  {
    name: "LLM Support Copilot",
    summary:
      "Built a retrieval-augmented support assistant with hybrid search and citation grounding.",
    stack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "Docker"],
    impact: "Reduced first-response time by 45%.",
  },
  {
    name: "Forecasting Platform",
    summary:
      "Designed multi-tenant demand forecasting pipelines with automated retraining and drift monitoring.",
    stack: ["PyTorch", "Airflow", "MLflow", "AWS"],
    impact: "Improved MAPE by 18%.",
  },
  {
    name: "Realtime CV Quality Scanner",
    summary:
      "Implemented computer vision pipeline for defect detection with edge deployment.",
    stack: ["OpenCV", "ONNX", "TensorRT", "NVIDIA Jetson"],
    impact: "Caught 92% of defects before packaging.",
  },
];

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

export const experience = [
  {
    company: "Acme AI Labs",
    role: "Senior AI Engineer",
    period: "2023 — Present",
    points: [
      "Led deployment of enterprise RAG platform used by 2k+ internal users.",
      "Implemented eval framework for answer quality, hallucination rate, and latency.",
      "Mentored engineers on model serving and prompt engineering best practices.",
    ],
  },
  {
    company: "DataNova",
    role: "Machine Learning Engineer",
    period: "2021 — 2023",
    points: [
      "Built model training platform with reproducible pipelines and experiment tracking.",
      "Shipped anomaly detection service for IoT telemetry at 99.95% uptime.",
    ],
  },
];
