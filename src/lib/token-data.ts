/**
 * Token data types and mock data generator for Wojak Memecoin
 * This will be replaced with real Dexscreener API data when contract is deployed
 */

export interface TokenData {
  price: number
  priceChange24h: number
  marketCap: number
  volume24h: number
  holders: number
  circulatingSupply: number
  burnedTokens: number
  rank: number
  ath: number
  atl: number
  athChange: number
  liquidity: number
  fdv: number // Fully Diluted Valuation
}

/**
 * Generate mock token data with realistic fluctuations
 * This simulates real market data until the actual contract is deployed
 */
export const getMockTokenData = (): TokenData => {
  // Base values with some randomization to simulate market movement
  const basePrice = 0.00001234
  const priceVariation = (Math.random() - 0.5) * 0.000002
  const currentPrice = Math.max(0.000001, basePrice + priceVariation)
  
  const priceChange = (Math.random() - 0.5) * 20 // -10% to +10%
  const marketCap = currentPrice * 900_000_000 // Circulating supply * price
  
  return {
    price: currentPrice,
    priceChange24h: priceChange,
    marketCap: marketCap,
    volume24h: 50000 + Math.random() * 200000, // $50k to $250k volume
    holders: 1234 + Math.floor(Math.random() * 5000), // Growing holder base
    circulatingSupply: 900_000_000, // 90% of total supply in circulation
    burnedTokens: 50_000_000, // 5% burned
    rank: 1500 + Math.floor(Math.random() * 500), // Market cap ranking
    ath: basePrice * 2.5, // All time high (2.5x from base)
    atl: basePrice * 0.1, // All time low (90% down from base)
    athChange: -60 + Math.random() * 40, // -60% to -20% from ATH
    liquidity: 100000 + Math.random() * 50000, // $100k to $150k liquidity
    fdv: currentPrice * 1_000_000_000 // Full supply * price
  }
}

/**
 * Mock API call structure for future Dexscreener integration
 * This will be replaced with actual API calls when contract is ready
 */
export interface DexscreenerResponse {
  schemaVersion: string
  pairs: Array<{
    chainId: string
    dexId: string
    url: string
    pairAddress: string
    baseToken: {
      address: string
      name: string
      symbol: string
    }
    quoteToken: {
      address: string
      name: string
      symbol: string
    }
    priceNative: string
    priceUsd: string
    txns: {
      m5: { buys: number; sells: number }
      h1: { buys: number; sells: number }
      h6: { buys: number; sells: number }
      h24: { buys: number; sells: number }
    }
    volume: {
      h24: number
      h6: number
      h1: number
      m5: number
    }
    priceChange: {
      m5: number
      h1: number
      h6: number
      h24: number
    }
    liquidity: {
      usd: number
      base: number
      quote: number
    }
    fdv: number
    marketCap: number
  }>
}

/**
 * Future function to fetch real data from Dexscreener
 * Will be implemented when contract address is available
 */
export const fetchRealTokenData = async (contractAddress: string): Promise<TokenData | null> => {
  try {
    // This will be implemented when contract is deployed
    // const response = await fetch('/api/proxy', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({
    //     protocol: 'https',
    //     origin: 'api.dexscreener.com',
    //     path: `/latest/dex/tokens/${contractAddress}`,
    //     method: 'GET',
    //     headers: {}
    //   })
    // })
    
    // For now, return mock data
    console.log('Contract not deployed yet, using mock data for:', contractAddress)
    return getMockTokenData()
  } catch (error) {
    console.error('Failed to fetch token data:', error)
    return null
  }
}
