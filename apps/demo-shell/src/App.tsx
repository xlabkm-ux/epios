import React from 'react'

function App() {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      fontFamily: 'system-ui, sans-serif',
      backgroundColor: '#0f172a',
      color: '#f8fafc'
    }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Epistemic OS</h1>
      <p style={{ fontSize: '1.2rem', color: '#94a3b8' }}>Universal Mission Room — Demo Shell</p>
      <div style={{ 
        marginTop: '2rem', 
        padding: '1.5rem', 
        borderRadius: '0.5rem', 
        backgroundColor: '#1e293b',
        border: '1px solid #334155'
      }}>
        <p>Status: <strong>MVP Bootstrap</strong></p>
        <p>Horizon: <strong>6 Weeks</strong></p>
      </div>
    </div>
  )
}

export default App
