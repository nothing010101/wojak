import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Wojak Memecoin | HODL to Valhalla 🚀',
  description: 'The ultimate memecoin for diamond hands! Join the Wojak Army on our moon mission. Fair launch on Apestore, LP & Contract Safe, 1B supply on Ethereum Base L2.',
  keywords: 'wojak, memecoin, cryptocurrency, meme, hodl, moon, apestore, base l2, ethereum, defi',
  authors: [{ name: 'Wojak Memecoin Team' }],
  creator: 'Wojak Memecoin',
  publisher: 'Wojak Memecoin',
  robots: 'index, follow',
  openGraph: {
    title: 'Wojak Memecoin | HODL to Valhalla 🚀',
    description: 'The ultimate memecoin for diamond hands! Join the Wojak Army on our moon mission.',
    url: 'https://wojak-memecoin.com',
    siteName: 'Wojak Memecoin',
    images: [
      {
        url: 'https://raw.githubusercontent.com/main/main/wojak.jpg',
        width: 1200,
        height: 630,
        alt: 'Wojak Memecoin Logo',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Wojak Memecoin | HODL to Valhalla 🚀',
    description: 'The ultimate memecoin for diamond hands! Join the Wojak Army on our moon mission.',
    images: ['https://raw.githubusercontent.com/main/main/wojak.jpg'],
    creator: '@WojakMemecoin',
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/favicon.ico',
  },
  manifest: '/manifest.json',
  themeColor: '#10b981',
  colorScheme: 'dark',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}): JSX.Element {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#10b981" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Wojak Memecoin" />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Wojak Memecoin',
              description: 'The ultimate memecoin for diamond hands! Fair launch on Apestore, LP & Contract Safe.',
              url: 'https://wojak-memecoin.com',
              logo: 'https://raw.githubusercontent.com/main/main/wojak.jpg',
              sameAs: [
                'https://t.me',
                'https://x.com',
                'https://ape.store'
              ],
              foundingDate: '2024',
              industry: 'Cryptocurrency',
              keywords: 'wojak, memecoin, cryptocurrency, defi, ethereum, base l2'
            })
          }}
        />
      </head>
      <body className={`${inter.className} antialiased`}>
        <div className="min-h-screen bg-background text-foreground">
          {children}
        </div>
        
        {/* Background particles for extra meme effect */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <div className="absolute top-10 left-10 w-2 h-2 bg-green-400 rounded-full animate-ping opacity-75" />
          <div className="absolute top-20 right-20 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-50 delay-1000" />
          <div className="absolute bottom-20 left-20 w-2 h-2 bg-purple-400 rounded-full animate-ping opacity-75 delay-2000" />
          <div className="absolute bottom-40 right-40 w-3 h-3 bg-yellow-400 rounded-full animate-ping opacity-50 delay-3000" />
          <div className="absolute top-1/2 left-1/4 w-1 h-1 bg-pink-400 rounded-full animate-ping opacity-75 delay-4000" />
          <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-cyan-400 rounded-full animate-ping opacity-50 delay-5000" />
        </div>
      </body>
    </html>
  )
}
