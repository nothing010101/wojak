'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Users, MessageCircle, Store } from 'lucide-react'

interface SocialLink {
  name: string
  url: string
  icon: string
  bgColor: string
  hoverColor: string
  textColor: string
  description: string
  iconComponent: JSX.Element
}

export function SocialLinks(): JSX.Element {
  const socialLinks: SocialLink[] = [
    {
      name: 'Telegram',
      url: 'https://t.me',
      icon: 'tele.jpg',
      bgColor: 'bg-blue-500/20',
      hoverColor: 'hover:bg-blue-500/40',
      textColor: 'text-blue-400',
      description: 'Join our community chat',
      iconComponent: <MessageCircle className="w-6 h-6" />
    },
    {
      name: 'X (Twitter)',
      url: 'https://x.com',
      icon: 'x.jpg',
      bgColor: 'bg-gray-700/20',
      hoverColor: 'hover:bg-gray-700/40',
      textColor: 'text-gray-300',
      description: 'Follow for updates',
      iconComponent: <Users className="w-6 h-6" />
    },
    {
      name: 'Apestore',
      url: 'https://ape.store',
      icon: 'ape.jpg',
      bgColor: 'bg-green-500/20',
      hoverColor: 'hover:bg-green-500/40',
      textColor: 'text-green-400',
      description: 'Trade on our launchpad',
      iconComponent: <Store className="w-6 h-6" />
    }
  ]

  const handleSocialClick = (url: string): void => {
    window.open(url, '_blank', 'noopener,noreferrer')
  }

  return (
    <section className="py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            🌟 JOIN THE WOJAK ARMY 🌟
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Connect with the community and stay updated on our moon mission!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {socialLinks.map((social, index) => (
            <Card 
              key={index} 
              className={`${social.bgColor} backdrop-blur-sm border-gray-600/30 ${social.hoverColor} transition-all duration-300 transform hover:scale-105 cursor-pointer`}
              onClick={() => handleSocialClick(social.url)}
            >
              <CardContent className="p-6 text-center">
                <div className="mb-4">
                  <img
                    src={`https://raw.githubusercontent.com/main/main/${social.icon}`}
                    alt={`${social.name} Icon`}
                    className="w-16 h-16 mx-auto rounded-full border-4 border-gray-400/50 shadow-lg"
                    onError={(e) => {
                      // Fallback to icon component if image fails to load
                      const target = e.target as HTMLImageElement
                      target.style.display = 'none'
                      const iconContainer = target.nextElementSibling as HTMLElement
                      if (iconContainer) {
                        iconContainer.style.display = 'flex'
                      }
                    }}
                  />
                  <div className="hidden w-16 h-16 mx-auto rounded-full bg-gray-700 items-center justify-center border-4 border-gray-400/50">
                    {social.iconComponent}
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold ${social.textColor} mb-2`}>
                  {social.name}
                </h3>
                
                <p className="text-gray-400 text-sm mb-4">
                  {social.description}
                </p>
                
                <Button
                  variant="outline"
                  size="sm"
                  className={`border-2 ${social.textColor} hover:bg-current hover:text-black transition-all duration-300`}
                  onClick={(e) => {
                    e.stopPropagation()
                    handleSocialClick(social.url)
                  }}
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Visit
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Community Stats */}
        <Card className="bg-gradient-to-r from-green-900/50 to-blue-900/50 backdrop-blur-sm border-green-400/30 mb-8">
          <CardContent className="p-8">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">
                🚀 Community Power 🚀
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-green-400 mb-2">10K+</div>
                  <p className="text-gray-300">Telegram Members</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-blue-400 mb-2">5K+</div>
                  <p className="text-gray-300">X Followers</p>
                </div>
                <div>
                  <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
                  <p className="text-gray-300">Community Support</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Final CTA */}
        <div className="text-center">
          <Card className="bg-black/50 backdrop-blur-sm border-yellow-400/30">
            <CardContent className="p-8">
              <h3 className="text-3xl font-bold text-white mb-4">
                Ready to Join the Revolution? 🎯
              </h3>
              <p className="text-gray-300 mb-6 text-lg">
                Don't be a spectator in the greatest meme coin journey ever!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  onClick={() => handleSocialClick('https://ape.store')}
                  className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-bold text-xl px-8 py-4 transform hover:scale-105 transition-all duration-300"
                >
                  <Store className="w-6 h-6 mr-2" />
                  Buy on Apestore
                  <ExternalLink className="w-5 h-5 ml-2" />
                </Button>
                
                <Button
                  onClick={() => handleSocialClick('https://t.me')}
                  variant="outline"
                  className="border-2 border-blue-400 text-blue-400 hover:bg-blue-400 hover:text-black font-bold text-xl px-8 py-4 transform hover:scale-105 transition-all duration-300"
                >
                  <MessageCircle className="w-6 h-6 mr-2" />
                  Join Community
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
