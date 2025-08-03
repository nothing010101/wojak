'use client'

import { useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Shuffle, Copy, Share2, MessageCircle } from 'lucide-react'
import { getMemeQuotes } from '@/lib/meme-quotes'

export function MemeGenerator(): JSX.Element {
  const [currentQuote, setCurrentQuote] = useState<string>('Click to generate some Wojak wisdom!')
  const [isGenerating, setIsGenerating] = useState<boolean>(false)
  const [generatedCount, setGeneratedCount] = useState<number>(0)
  const [copied, setCopied] = useState<boolean>(false)

  const generateQuote = (): void => {
    setIsGenerating(true)
    
    // Add a small delay for better UX
    setTimeout(() => {
      const quotes = getMemeQuotes()
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
      setCurrentQuote(randomQuote)
      setGeneratedCount(prev => prev + 1)
      setIsGenerating(false)
    }, 500)
  }

  const copyToClipboard = async (): Promise<void> => {
    try {
      await navigator.clipboard.writeText(currentQuote)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy:', err)
    }
  }

  const shareOnTwitter = (): void => {
    const twitterUrl = `https://x.com/intent/tweet?text=${encodeURIComponent(currentQuote + ' #WojakMemecoin #HODL #ToTheMoon')}`
    window.open(twitterUrl, '_blank')
  }

  const shareOnTelegram = (): void => {
    const telegramUrl = `https://t.me/share/url?url=${encodeURIComponent('https://wojak-memecoin.com')}&text=${encodeURIComponent(currentQuote)}`
    window.open(telegramUrl, '_blank')
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🎲 WOJAK WISDOM GENERATOR 🎲
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Generate legendary meme quotes to fuel your diamond hands!
          </p>
          {generatedCount > 0 && (
            <Badge className="bg-purple-500/20 text-purple-400 border-purple-400 text-lg px-4 py-2">
              Wisdom Generated: {generatedCount}
            </Badge>
          )}
        </div>

        <Card className="bg-black/50 backdrop-blur-sm border-green-400/30 mb-8">
          <CardHeader>
            <CardTitle className="text-green-400 flex items-center text-2xl">
              <MessageCircle className="w-6 h-6 mr-2" />
              Current Wojak Wisdom
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center p-8">
              <div 
                className={`text-xl md:text-2xl font-bold text-white mb-8 min-h-[60px] flex items-center justify-center bg-gray-900/50 rounded-lg p-6 border-l-4 border-green-400 transition-all duration-500 ${isGenerating ? 'animate-pulse' : ''}`}
              >
                {isGenerating ? '🔄 Generating wisdom...' : `"${currentQuote}"`}
              </div>

              <div className="flex flex-wrap gap-4 justify-center">
                <Button
                  onClick={generateQuote}
                  disabled={isGenerating}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold px-6 py-3 transform hover:scale-105 transition-all duration-300"
                >
                  <Shuffle className={`w-5 h-5 mr-2 ${isGenerating ? 'animate-spin' : ''}`} />
                  {isGenerating ? 'Generating...' : 'Generate Wisdom'}
                </Button>

                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  disabled={currentQuote === 'Click to generate some Wojak wisdom!'}
                  className="border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black"
                >
                  <Copy className="w-5 h-5 mr-2" />
                  {copied ? 'Copied!' : 'Copy'}
                </Button>

                <Button
                  onClick={shareOnTwitter}
                  variant="outline"
                  disabled={currentQuote === 'Click to generate some Wojak wisdom!'}
                  className="border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-black"
                >
                  <Share2 className="w-5 h-5 mr-2" />
                  Share on X
                </Button>

                <Button
                  onClick={shareOnTelegram}
                  variant="outline"
                  disabled={currentQuote === 'Click to generate some Wojak wisdom!'}
                  className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Share on TG
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sample Quotes Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getMemeQuotes().slice(0, 6).map((quote, index) => (
            <Card key={index} className="bg-black/30 backdrop-blur-sm border-gray-600/30 hover:border-gray-400/50 transition-all duration-300">
              <CardContent className="p-4">
                <div className="text-gray-300 text-sm font-mono italic">
                  "{quote}"
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Fun Stats */}
        <div className="mt-12">
          <Card className="bg-gradient-to-r from-purple-900/50 to-pink-900/50 backdrop-blur-sm border-purple-400/30">
            <CardContent className="p-8">
              <div className="text-center">
                <h3 className="text-2xl font-bold text-white mb-4">
                  🚀 Meme Power Stats 🚀
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                  <div>
                    <div className="text-3xl mb-2">📚</div>
                    <h4 className="font-bold text-green-400 mb-2">50+ Quotes</h4>
                    <p className="text-gray-300 text-sm">Premium meme wisdom collection</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">💎</div>
                    <h4 className="font-bold text-blue-400 mb-2">Diamond Hands</h4>
                    <p className="text-gray-300 text-sm">Quotes to strengthen your resolve</p>
                  </div>
                  <div>
                    <div className="text-3xl mb-2">🌙</div>
                    <h4 className="font-bold text-purple-400 mb-2">Moon Mission</h4>
                    <p className="text-gray-300 text-sm">Inspirational space journey quotes</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
