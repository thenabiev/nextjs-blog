import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";

const Section1 = () => {
    const bg={
        background:"url('/images/banner.png') no-repeat ",
        backgroundPosition:"right",
        backgroundSize:"35%"
    }
  return (
    <section className='py-16 position-relative xl:mx-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
        </div>
        {Slide()}
        
    </section>
  )
}

export default Section1;

function Slide(){
    return(
        <div className='grid md:grid-cols-2'>
        <div className='image'>
            <Link href='/' legacyBehavior>
                <a>
                <Image  src={"/images/img1.jpg"} width={600} height={600}/>
                </a>
            </Link>
        </div>
        <div className='info flex justify-center flex-col'>
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
                    <a className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
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