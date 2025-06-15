import { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import './App.css'

function App() {
  const [isSecure, setIsSecure] = useState(false)

  useEffect(() => {
    // Check if the connection is secure
    setIsSecure(window.location.protocol === 'https:')
  }, [])

  return (
    <>
      <Helmet>
        <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval'; style-src 'self' 'unsafe-inline';" />
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        <meta httpEquiv="X-Frame-Options" content="DENY" />
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        <meta httpEquiv="Strict-Transport-Security" content="max-age=31536000; includeSubDomains" />
      </Helmet>
      <div className="app">
        <header className="app-header">
          <h1>TEFL Website</h1>
          <div className="security-status">
            {isSecure ? (
              <span className="secure">🔒 Secure Connection</span>
            ) : (
              <span className="insecure">⚠️ Insecure Connection</span>
            )}
          </div>
        </header>
        <main>
          <p>Welcome to the TEFL Website</p>
        </main>
      </div>
    </>
  )
}

export default App
