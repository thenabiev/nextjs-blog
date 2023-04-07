import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Author from './_child/author';
import getPost from '@/lib/helper';

const Section2 = () => {
    getPost(2).then(res=>console.log(res))
  return (
    <section className='container mx-auto md:px-20 py-10 '>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>
        {/* GRID COLUMNS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-14">
            {Post()}
            {Post()}
            {Post()}
            {Post()}
            {Post()}

        </div>
    </section>
  )
}

export default Section2;


function Post(){
    return(
        <div className="item">
            <div className="images">
            <Link href='/' legacyBehavior>
                <a>
                <Image  
                className='rounded'
                src={"/images/img1.jpg"} width={500} height={350} />
                </a>
            </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href="/" legacyBehavior>
                    <a className='text-orange-600 hover:text-orange-800'>Business, Travel</a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className='text-gray-800 hover:text-gray-600'>-July 3, 2022</a>
                </Link>
            </div>
            <div className="title">
                <Link href="/" legacyBehavior>
                    <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
                        Your most unhappy customers are your greatest source of learning
                    </a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis consectetur modi aspernatur, unde magnam nihil, atque tempore possimus, ut quaerat reprehenderit dolorum obcaecati! Sed vitae sapiente obcaecati, sunt harum dignissimos dolore soluta. Inventore quod neque libero dolor temporibus ullam voluptates?
            </p>
            <Author />
            </div>
        </div>
    )
}