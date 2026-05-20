import { useState } from 'react'

export default function Home() {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  async function runPythonScript() {
    setLoading(true)

    try {
      const response = await fetch('/api')
      const result = await response.json()

      setData(result)
    } catch (error) {
      setData({ error: error.message })
    }

    setLoading(false)
  }

  return (
    <div style={{
      fontFamily: 'Arial',
      padding: '40px'
    }}>
      <h1>Python Script on Vercel</h1>

      <button
        onClick={runPythonScript}
        style={{
          padding: '10px 20px',
          fontSize: '16px',
          cursor: 'pointer'
        }}
      >
        Run Script
      </button>

      {loading && <p>Running...</p>}

      {data && (
        <pre style={{
          marginTop: '20px',
          background: '#f4f4f4',
          padding: '20px'
        }}>
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  )
            }
