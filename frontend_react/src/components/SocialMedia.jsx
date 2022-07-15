import React from 'react';
import { BsInstagram, BsGithub } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';

const openInNewTab = (url) => {
  const newWindow = window.open(url, '_blank', 'noopener,noreferrer')
  if (newWindow) newWindow.opener = null
}

const SocialMedia = () => (

  <div className="app__social">
    <div onClick={() => openInNewTab('https://github.com/vishalpatel011')}>
      <BsGithub />
    </div>
    <div onClick={() => openInNewTab('https://www.instagram.com/infiniter.11/')}>
      <BsInstagram />
    </div>
    <div onClick={() => openInNewTab('https://www.facebook.com/Vis.Patel11/')}>
      <FaFacebookF />
    </div>
    
  </div>
);

export default SocialMedia;