import React from 'react'

const SocialShareComponent: React.FC = () => {
  const shareOnSocialMedia = (platform: string) => {
    alert(`Shared on ${platform}!`)
  }

  return (
    <div className="social-share-component">
      <h1 className="text-2xl font-bold mb-4">Share your progress</h1>
      <button onClick={() => shareOnSocialMedia('Facebook')} className="mb-2 p-2 bg-blue-500 text-white rounded">Share on Facebook</button>
      <button onClick={() => shareOnSocialMedia('Twitter')} className="mb-2 p-2 bg-blue-500 text-white rounded">Share on Twitter</button>
    </div>
  )
}

export default SocialShareComponent
