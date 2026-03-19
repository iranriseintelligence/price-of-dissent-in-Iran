export const metadata = {
  title: 'The Price of Dissent — Rise Iran Intelligence Monitor',
  description: 'A visual chronicle of state violence against Iranian protesters, 1999–2026. 27 years of protest. Tens of thousands killed in crackdowns alone. The full regime toll is far higher.',
  openGraph: {
    title: 'The Price of Dissent — Rise Iran Intelligence Monitor',
    description: '27 years of protest against the Islamic Republic. Tens of thousands killed. A visual chronicle, 1999–2026.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Price of Dissent',
    description: '27 years of protest against the Islamic Republic. A visual chronicle, 1999–2026.',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=JetBrains+Mono:wght@300;400;600;700&family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet" />
      </head>
      <body style={{ margin: 0, padding: 0 }}>{children}</body>
    </html>
  )
}
