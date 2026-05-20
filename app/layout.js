export const metadata = {
  title: 'IGW',
  description: 'Python Vercel App',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
