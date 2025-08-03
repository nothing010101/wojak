'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { TrendingUp, TrendingDown, Users, DollarSign, BarChart3, Flame, RefreshCw } from 'lucide-react'
import type { TokenData } from '@/lib/token-data'
import { getMockTokenData } from '@/lib/token-data'

export function TokenStats(): JSX.Element {
  const [tokenData, setTokenData] = useState<TokenData>(getMockTokenData())
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [lastUpdated, setLastUpdated] = useState<Date>(new Date())

  const refreshData = async (): Promise<void> => {
    setIsLoading(true)
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000))
    
    // For now, generate new mock data
    // Later this will be replaced with real dexscreener API call
    setTokenData(getMockTokenData())
    setLastUpdated(new Date())
    setIsLoading(false)
  }

  // Auto refresh every 30 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      refreshData()
    }, 30000)

    return () => clearInterval(interval)
  }, [])

  const formatPrice = (price: number): string => {
    if (price < 0.01) {
      return `$${price.toFixed(8)}`
    }
    return `$${price.toFixed(4)}`
  }

  const formatLargeNumber = (num: number): string => {
    if (num >= 1e9) {
      return `${(num / 1e9).toFixed(2)}B`
    }
    if (num >= 1e6) {
      return `${(num / 1e6).toFixed(2)}M`
    }
    if (num >= 1e3) {
      return `${(num / 1e3).toFixed(2)}K`
    }
    return num.toString()
  }

  const getPriceChangeColor = (change: number): string => {
    return change >= 0 ? 'text-green-400' : 'text-red-400'
  }

  const getPriceChangeIcon = (change: number): JSX.Element => {
    return change >= 0 ? 
      <TrendingUp className="w-5 h-5" /> : 
      <TrendingDown className="w-5 h-5" />
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🔥 LIVE WOJAK STATS 🔥
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Real-time data from the blockchain (Mock data until contract deployed)
          </p>
          <Button
            onClick={refreshData}
            disabled={isLoading}
            variant="outline"
            className="border-green-400 text-green-400 hover:bg-green-400 hover:text-black"
          >
            <RefreshCw className={`w-4 h-4 mr-2 ${isLoading ? 'animate-spin' : ''}`} />
            {isLoading ? 'Refreshing...' : 'Refresh Data'}
          </Button>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: {lastUpdated.toLocaleTimeString()}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {/* Current Price */}
          <Card className="bg-black/50 backdrop-blur-sm border-green-400/30 hover:border-green-400/60 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-green-400 flex items-center">
                <DollarSign className="w-5 h-5 mr-2" />
                Current Price
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {formatPrice(tokenData.price)}
              </div>
              <div className={`flex items-center text-sm ${getPriceChangeColor(tokenData.priceChange24h)}`}>
                {getPriceChangeIcon(tokenData.priceChange24h)}
                <span className="ml-1">
                  {tokenData.priceChange24h >= 0 ? '+' : ''}{tokenData.priceChange24h.toFixed(2)}%
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Market Cap */}
          <Card className="bg-black/50 backdrop-blur-sm border-blue-400/30 hover:border-blue-400/60 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-blue-400 flex items-center">
                <BarChart3 className="w-5 h-5 mr-2" />
                Market Cap
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                ${formatLargeNumber(tokenData.marketCap)}
              </div>
              <div className="text-sm text-gray-400">
                Rank #{tokenData.rank}
              </div>
            </CardContent>
          </Card>

          {/* Volume 24h */}
          <Card className="bg-black/50 backdrop-blur-sm border-purple-400/30 hover:border-purple-400/60 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-purple-400 flex items-center">
                <TrendingUp className="w-5 h-5 mr-2" />
                24h Volume
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                ${formatLargeNumber(tokenData.volume24h)}
              </div>
              <div className="text-sm text-gray-400">
                Trading active
              </div>
            </CardContent>
          </Card>

          {/* Holders */}
          <Card className="bg-black/50 backdrop-blur-sm border-yellow-400/30 hover:border-yellow-400/60 transition-all duration-300">
            <CardHeader className="pb-3">
              <CardTitle className="text-yellow-400 flex items-center">
                <Users className="w-5 h-5 mr-2" />
                Holders
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-white mb-2">
                {formatLargeNumber(tokenData.holders)}
              </div>
              <div className="text-sm text-gray-400">
                Diamond hands 💎
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Additional Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Supply Info */}
          <Card className="bg-black/50 backdrop-blur-sm border-green-400/30">
            <CardHeader>
              <CardTitle className="text-green-400">Supply Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Total Supply:</span>
                <span className="font-bold text-white">1,000,000,000</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Circulating:</span>
                <span className="font-bold text-white">{formatLargeNumber(tokenData.circulatingSupply)}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-300">Burned:</span>
                <div className="flex items-center">
                  <Flame className="w-4 h-4 text-red-400 mr-1" />
                  <span className="font-bold text-red-400">{formatLargeNumber(tokenData.burnedTokens)}</span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Info */}
          <Card className="bg-black/50 backdrop-blur-sm border-blue-400/30">
            <CardHeader>
              <CardTitle className="text-blue-400">Network Info</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">Blockchain:</span>
                <Badge className="bg-blue-500/20 text-blue-400">Base L2</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Launch Pad:</span>
                <Badge className="bg-green-500/20 text-green-400">Apestore</Badge>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">Status:</span>
                <Badge className="bg-green-500/20 text-green-400">✅ Safe</Badge>
              </div>
            </CardContent>
          </Card>

          {/* Performance */}
          <Card className="bg-black/50 backdrop-blur-sm border-purple-400/30">
            <CardHeader>
              <CardTitle className="text-purple-400">Performance</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-300">ATH:</span>
                <span className="font-bold text-green-400">${tokenData.ath.toFixed(6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">ATL:</span>
                <span className="font-bold text-red-400">${tokenData.atl.toFixed(6)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-300">From ATH:</span>
                <span className={`font-bold ${getPriceChangeColor(tokenData.athChange)}`}>
                  {tokenData.athChange.toFixed(1)}%
                </span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
