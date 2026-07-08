# 🚀 Smart Library Assistant

<div align="center">

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](https://github.com/yourusername/smart-library)
[![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/yourusername/smart-library/pulls)

**An Intelligent AI-Powered Retrieval & Workflow System**

A modern, modular **TypeScript** framework for building powerful AI applications with **Retrieval-Augmented Generation (RAG)**, intelligent workflows, and vector-based search capabilities.

</div>

---

## ✨ Features

- **🔍 Advanced Vector Retrieval** — Embeddings, similarity search, and hybrid retrieval
- **🌊 Composable Flow System** — Build complex AI pipelines with modular flows
- **⚙️ Robust Configuration** — Environment-based config with validation and type safety
- **📚 Document Intelligence** — Ingestion, chunking, and semantic search ready
- **🔧 TypeScript-First** — Full type safety and excellent developer experience
- **🚀 Production-Ready** — Scalable architecture designed for real-world AI applications
- **🔄 Extensible** — Easy to integrate with LangChain, LlamaIndex, Grok, OpenAI, and more

---

## 📁 Project Structure

```bash
smart-library/
├── src/
│   ├── config/          # Configuration & environment management
│   ├── flows/           # Workflow orchestration and business logic
│   ├── retrievers/      # Vector stores and retrieval implementations
│   └── index.ts         # Main SmartLibrary class
├── .env                 # Environment variables (not committed)
├── .env.example.md                 
├── .gitignore
├── package.json
├── tsconfig.json
├── CONTRIBUTING.md
├── README.md
└── package-lock.json
```

## 🛠️ Quick Start
Prerequisites

- Node.js ≥ 18
- npm or yarn

1. Installation
    ```bash
    # Clone the repository
    git clone https://github.com/bundlab/smart-library-assistant.git
    cd smart-library-assistant

    # Install dependencies
    npm install
    ```

2. Environment Setup
    ```bash
    # Copy environment template
    cp .env.example .env
    ```
    Then edit ```.env``` with your API keys.

3. Running the Application
    ```bash
    # Development mode (recommended)
    npm run dev

    # Build for production
    npm run build

    # Run production build
    npm run start
    ```

## 📖 Usage Example
```TypeScript
    import { SmartLibrary } from './src';

    const library = new SmartLibrary();

    async function main() {
    const response = await library.processQuery(
        "What are the key features of vector databases?"
    );
    console.log("Response:", response);
    }

    main().catch(console.error);
```

## 🏗️ Architecture
Core Components

- SmartLibrary — Main orchestrator class
- VectorRetriever — Handles semantic search and document retrieval
- Flows — Executable workflow modules
- Config — Centralized configuration service

## ⚙️ Configuration
Key environment variables:

```env
    # LLM API Keys
    OPENAI_API_KEY=sk-...
    GROK_API_KEY=...

    # Vector Database
    VECTOR_DB_PATH=./data/vectors
    EMBEDDING_MODEL=text-embedding-3-small

    # System Settings
    CHUNK_SIZE=512
    CHUNK_OVERLAP=50
    LOG_LEVEL=info
```

## 🗺️ Roadmap

 - [x] Core TypeScript structure with retrieval & flows
 - [ ] Full LangChain / LlamaIndex integration
 - [ ] Multiple LLM provider support (OpenAI, Grok, Anthropic, local models)
 - [ ] Rich document loaders (PDF, Markdown, DOCX, etc.)
 - [ ] Advanced RAG with reranking & query expansion
 - [ ] REST API server (Fastify/Express)
 - [ ] Evaluation framework & unit tests
 - [ ] Dashboard UI

## 🤝 Contributing

We welcome contributions! Please read our [Contributor Guide](doc/create-contributor-guide) and [CONTRIBUTING.md](CONTRIBUTING.md) to get started.

See the [Contributing Guidelines](CONTRIBUTING.md) for details on our code of conduct, development process, and how to submit pull requests.

## 📄 License
This project is licensed under the MIT License — see the LICENSE file for details.

---
Built with ❤️ for the AI community

Making AI development clean, powerful, and accessible.
