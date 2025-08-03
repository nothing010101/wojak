'use client'

import { HeroSection } from '@/components/HeroSection'
import { TokenStats } from '@/components/TokenStats'
import { Tokenomics } from '@/components/Tokenomics'
import { MemeGenerator } from '@/components/MemeGenerator'
import { SocialLinks } from '@/components/SocialLinks'

export default function HomePage(): JSX.Element {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-purple-900 to-green-900">
      {/* Background Wojak Image */}
      <div 
        className="fixed inset-0 opacity-10 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://raw.githubusercontent.com/main/main/bg-wojak.png)'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        <HeroSection />
        <TokenStats />
        <Tokenomics />
        <MemeGenerator />
        <SocialLinks />
      </div>
      
      {/* Floating Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/20 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-500/20 rounded-full blur-xl animate-pulse delay-1000" />
        <div className="absolute bottom-40 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-xl animate-pulse delay-2000" />
        <div className="absolute bottom-20 right-1/3 w-40 h-40 bg-red-500/20 rounded-full blur-xl animate-pulse delay-3000" />
      </div>
    </div>
  )
}
