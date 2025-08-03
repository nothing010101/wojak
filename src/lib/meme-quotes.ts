/**
 * Collection of meme quotes for Wojak Memecoin
 * English crypto/meme quotes with HODL to Valhalla theme
 */

export const getMemeQuotes = (): string[] => {
  return [
    'HODL to Valhalla! 🚀',
    'Wen moon ser? 🌙',
    'Diamond hands forever! 💎🙌',
    'This is the gwei! ⚡',
    'Probably nothing 👀',
    'To the moon and beyond! 🚀🌙',
    'Not your keys, not your crypto! 🔑',
    'Buy the dip, ser! 📉💰',
    'Stonks only go up! 📈',
    'I like the coin! 🪙',
    'This is gentlemen! 🎩',
    'Number go up! 📊⬆️',
    'Have fun staying poor! 💸',
    'Few understand this! 🧠',
    'Laser eyes activated! 👀⚡',
    'Trust the process! ⏰',
    'We are so early! 🕐',
    'Still undervalued! 💎',
    'Generational wealth incoming! 💰',
    'Buckle up, buttercup! 🎢',
    'The flippening is near! 🔄',
    'Bullish on everything! 🐂📈',
    'Ngmi if you sell! ❌📉',
    'Wagmi together! 🤝✨',
    'Only up from here! ⬆️🚀',
    'Cope harder, paper hands! 📄🙌',
    'Fortune favors the bold! ⚔️💰',
    'This is financial advice! 💡💰',
    'Always has been! 👨‍🚀🔫',
    'Number go brrr! 🖨️💵',
    'Ape together strong! 🦍💪',
    'Degen mode activated! 🎰⚡',
    'Send it to zero or hero! 🎯',
    'Up only technology! 📈🛸',
    'Price discovery mode! 🔍💰',
    'Maximum hopium achieved! 💊✨',
    'Feeling cute, might pump later! 😘📈',
    'Bears are temporary, bulls are forever! 🐻➡️🐂',
    'Not selling until Valhalla! ⚔️🏛️',
    'Lambos or food stamps! 🏎️🎫',
    'Zoom out and chill! 🔍😎',
    'This is a Wendy\'s sir! 🍔',
    'Sir, this is a casino! 🎰',
    'Rekt is just a mindset! 💀🧠',
    'Pain is temporary, gains are forever! 😤💎',
    'Sell in May and go away? Nah! ❌🌸',
    'Stack sats, stay humble! ₿🙏',
    'Time in market beats timing! ⏰📈',
    'Just up! No down, only up! ⬆️🚫⬇️',
    'Volatility is my middle name! 📊💥'
  ]
}

export const getRandomMemeQuote = (): string => {
  const quotes = getMemeQuotes()
  return quotes[Math.floor(Math.random() * quotes.length)]
}
