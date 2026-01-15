import React from 'react';

function App() {
    return (
        <div className="container" style={{ padding: '4rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
            <header style={{ marginBottom: '4rem', textAlign: 'center' }}>
                <h1 className="title-gradient" style={{ fontSize: '3.5rem', marginBottom: '1rem' }}>
                    SonicVibes
                </h1>
                <p style={{ color: 'var(--text-muted)', fontSize: '1.25rem' }}>
                    Generic Repository Template with BMAD Methods & Firebase AI SDK
                </p>
            </header>

            <main style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                <div className="glass-panel">
                    <h2 style={{ marginBottom: '1rem' }}>BMAD Methods</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Fully integrated Breakthrough Method for Agile AI-Driven Development. Use specialized agents for analysis, design, and implementation.
                    </p>
                    <button className="btn-primary">Explore Workflows</button>
                </div>

                <div className="glass-panel">
                    <h2 style={{ marginBottom: '1rem' }}>Firebase AI SDK</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Leverage Vertex AI for Firebase to build intelligent features directly in your frontend. Includes Firestore and Analytics setup.
                    </p>
                    <button className="btn-primary">View Config</button>
                </div>

                <div className="glass-panel">
                    <h2 style={{ marginBottom: '1rem' }}>Agent Workflows</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                        Custom workflows for automated setup and maintenance. Run `setup-firebase` to get started in seconds.
                    </p>
                    <button className="btn-primary">Run Workflow</button>
                </div>
            </main>

            <footer style={{ marginTop: '4rem', textAlign: 'center', color: 'var(--text-muted)' }}>
                <p>&copy; 2026 SonicVibes. Powered by BMAD.</p>
            </footer>
        </div>
    );
}

export default App;
