'use client'

import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ExternalLink, Rocket, Shield } from 'lucide-react'

export function HeroSection(): JSX.Element {
  const handleApeIn = (): void => {
    window.open('https://ape.store', '_blank')
  }

  return (
    <section className="relative py-20 px-4 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Main Logo */}
        <div className="mb-8 animate-bounce">
          <img 
            src="https://raw.githubusercontent.com/main/main/wojak.jpg"
            alt="Wojak Memecoin Logo"
            className="w-48 h-48 mx-auto rounded-full border-8 border-green-400 shadow-2xl shadow-green-400/50"
          />
        </div>

        {/* Title and Tagline */}
        <div className="mb-8">
          <h1 className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 mb-4 animate-pulse">
            WOJAK
          </h1>
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            MEMECOIN
          </h2>
          <p className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
            🚀 HODL TO VALHALLA! 🚀
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-green-500/20 text-green-400 border-green-400 text-lg px-4 py-2">
              <Shield className="w-5 h-5 mr-2" />
              LP & Contract Safe
            </Badge>
            <Badge className="bg-blue-500/20 text-blue-400 border-blue-400 text-lg px-4 py-2">
              <Rocket className="w-5 h-5 mr-2" />
              From Apestore
            </Badge>
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-400 text-lg px-4 py-2">
              Ethereum Base L2
            </Badge>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            onClick={handleApeIn}
            size="lg"
            className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-8 py-4 rounded-full shadow-lg shadow-green-500/50 transform hover:scale-105 transition-all duration-300 animate-pulse"
          >
            <Rocket className="w-6 h-6 mr-2" />
            APE IN NOW!
            <ExternalLink className="w-5 h-5 ml-2" />
          </Button>
          
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-bold text-xl px-8 py-4 rounded-full transform hover:scale-105 transition-all duration-300"
            onClick={() => document.getElementById('tokenomics')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Learn More
          </Button>
        </div>

        {/* Ticker Info */}
        <div className="mt-12 p-6 bg-black/50 backdrop-blur-sm rounded-2xl border border-green-400/30 max-w-2xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-green-400 font-bold text-lg">SUPPLY</p>
              <p className="text-white text-2xl font-mono">1,000,000,000</p>
            </div>
            <div>
              <p className="text-blue-400 font-bold text-lg">CHAIN</p>
              <p className="text-white text-2xl font-mono">BASE L2</p>
            </div>
            <div>
              <p className="text-purple-400 font-bold text-lg">LAUNCH</p>
              <p className="text-white text-2xl font-mono">APESTORE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
