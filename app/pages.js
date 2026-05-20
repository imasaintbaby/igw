export default function Home() {
  return (
    <main style={{
      padding: '40px',
      fontFamily: 'Arial'
    }}>
      <h1>Python Script Running on Vercel</h1>

      <button
        onClick={async () => {
          const response = await fetch('/api')
          const data = await response.json()

          alert(JSON.stringify(data))
        }}
      >
        Run Script
      </button>
    </main>
  )
}
