import React from 'react'
import shopify from '../assets/shopify.png'
import slack from '../assets/slack.png'
import dropbox from '../assets/dropbox.png'
import google from '../assets/google.png'
import atlassian from '../assets/atlassian.png'

const Companies = () => {
  return (
    <div className="w-full flex flex-row justify-center items-center py-12 gap-10">
      <img src={google} width="80" alt="companies" srcSet="" />
      <img src={slack} width="80" alt="companies" srcSet="" />
      <img src={atlassian} width="80" alt="companies" srcSet="" />
      <img src={dropbox} width="80" alt="companies" srcSet="" />
      <img src={shopify} width="80" alt="companies" srcSet="" />
    </div>
  );
}

export default Companies
