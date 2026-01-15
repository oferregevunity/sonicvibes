# 🚀 SonicVibes - Generic AI-First Repo

Welcome to **SonicVibes**, a high-performance repository template designed for modern, agentic workflows. This repo combines the power of the **BMAD Method** for AI-driven development with a robust **Firebase + Vertex AI** foundation.

---

## ✨ Features

- **BMAD Method Integration**: Full suite of AI agents (Architect, Dev, PM, QA) and workflows tailored for rapid iteration.
- **Firebase AI SDK**: Pre-configured with Vertex AI (Gemini 1.5 Flash), Firestore, and Analytics.
- **Vite + React**: Lightning-fast development environment with a premium Glassmorphism UI.
- **Agentic Workflows**: Custom `.agent/workflows` to automate environment setup and deployments.

---

## 🏁 Getting Started

### 1. Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (v20 or above recommended)
- [Firebase CLI](https://firebase.google.com/docs/cli) (`npm install -g firebase-tools`)

### 2. Installation

Clone the repository and install dependencies:

```bash
npm install
```

### 3. Firebase Configuration

#### A. Initialize Firebase (Workflow)
The easy way to set up Firebase is using our built-in workflow. In your agent-enabled IDE (like Cursor or Claude Code), run:
`/setup-firebase`

#### B. Manual Setup
1. Create a project in the [Firebase Console](https://console.firebase.google.com/).
2. Enable **Firestore**, **Analytics**, and **Vertex AI for Firebase**.
3. Copy your project configuration and update the `.env` file (see `.env.example`).

```bash
cp .env.example .env
# Edit .env with your credentials
```

### 4. Development

Start the local development server:

```bash
npm run dev
```

The app will be available at `http://localhost:5173`.

---

## 🤖 Using the BMAD Method

This repo is an "AI Engineering Operating System." You can interact with specialized agents to build features without chaos.

### Available Agents
- `@analyst`: Refine project briefs.
- `@pm`: Create detailed PRDs.
- `@architect`: Design system architecture.
- `@dev`: Implement code and fix bugs.
- `@qa`: Verify functionality and performance.

### Running Workflows
BMAD workflows are located in `.bmad-core/workflows`. For a new feature, follow the **Greenfield** workflow:
1. **Analysis**: `@analyst` creates `/docs/briefs/feature-name.md`.
2. **Planning**: `@pm` creates `/docs/prds/feature-name.md`.
3. **Solutioning**: `@architect` updates `docs/architecture/`.
4. **Implementation**: `@dev` writes the code.

---

## 📁 Project Structure

```text
├── .agent/              # Custom agent workflows (e.g., setup-firebase)
├── .bmad-core/          # BMAD Framework core agents and configs
├── src/
│   ├── firebase/        # Firebase & AI SDK configuration
│   ├── components/      # Reusable UI components
│   ├── App.jsx          # Main application logic
│   └── index.css        # Global styles (Glassmorphism + Tokens)
├── docs/                # Project documentation (Briefs, PRDs, Architecture)
└── public/              # Static assets
```

---

## 🛠️ Commands

- `npm run dev`: Start development server.
- `npm run build`: Build for production.
- `npm run preview`: Preview production build locally.
- `firebase deploy`: Deploy to Firebase Hosting.

---

## 📄 License

This repo is built for rapid prototyping and production-ready AI applications. Use it, break it, and build something amazing. 🚀
