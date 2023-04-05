import Link from 'next/link'
import React from 'react'
import { ImFacebook, ImTwitter, ImYoutube } from 'react-icons/im'
import Newsletter from './_child/newsletter'

const Footer = () => {

const bg={
  backgroundImage:"url('/images/leaves.png')",
  backgroundRepeat:"no-repeat",
  backgroundPosition:"top left"
}


  return (
    <footer className='bg-gray-50' style={bg}>
      <Newsletter />
       <div className="container mx-auto flex justify-center py-2">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href='/'><ImFacebook color='#888' /></Link>
            <Link href='/'><ImTwitter color='#888' /></Link>
            <Link href='/'><ImYoutube color='#888' /></Link>
          </div>
          <p className='py-5 text-gray-400'>Copyright &copy; 2023 | All rights reserved</p>
          <div className="p text-gray-400 text-center">Terms & Condition</div>
        </div>
       </div>
    </footer>
  )
}

export default Footer