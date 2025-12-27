import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './mobile-responsive.css'
import App from './App.jsx'

console.log('🚀 Starting Zikshana Global Foundation Website...')

try {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    throw new Error('Root element not found')
  }

  console.log('✅ Creating React application...')
  
  createRoot(rootElement).render(
    <StrictMode>
      <App />
    </StrictMode>,
  )
  
  console.log('✅ Zikshana website loaded successfully!')
  
} catch (error) {
  console.error('❌ Failed to load Zikshana website:', error)
  
  // Emergency fallback
  document.body.innerHTML = `
    <div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; font-family: Arial; min-height: 100vh;">
      <h1>🏥 Zikshana Global Foundation</h1>
      <h2>⚠️ Website Loading Error</h2>
      <p>We're experiencing technical difficulties. Please try refreshing the page.</p>
      <div style="background: rgba(0,0,0,0.2); padding: 15px; margin: 20px 0; border-radius: 8px;">
        <strong>Error:</strong> ${error.message}
      </div>
      <p style="font-size: 14px; opacity: 0.8; margin-top: 30px;">
        For immediate assistance, please contact our technical team.
      </p>
    </div>
  `
}
