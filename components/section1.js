import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';
import {Swiper, SwiperSlide} from 'swiper/react';
import "swiper/css";
import SwiperCore ,{ Autoplay } from 'swiper';
import fetcher from '@/lib/fetcher';
import Loader from './_child/loader';
import Error from './_child/error';

const Section1 = () => {
    const bg={
        background:"url('/images/banner.png') no-repeat ",
        backgroundPosition:"right",
        backgroundSize:"35%"
    }
    SwiperCore.use([Autoplay])

    const {data, isLoading, isError}=fetcher('api/trending');

    if(isLoading) return <Loader/>
    if(isError) return <Error />

  return (
    <section className='py-16 position-relative ' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>

        <Swiper 
            spaceBetween={50}
            slidesPerView={1}
            loop={true}
            autoplay={{
                delay:3000
            }}
        >
            {
                data&& data.map((value, index)=>(
                    <SwiperSlide key={index}>
                        <Slide data={value}/>
                    </SwiperSlide>
                ))
            }
        </Swiper>
        </div>
        
    </section>
  )
}

export default Section1;

function Slide({data}){
    const {id, title, category, img, published, author, description}=data;
    return(
        <div className='grid md:grid-cols-2'>
        <div className='image'> 
            <Link href={`/posts/${id}`} legacyBehavior>
                <a>
                <Image  src={img} width={600} height={600} />
                </a>
            </Link>
        </div>
        <div className='info flex justify-center flex-col'>
            <div className="cat">
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a className='text-orange-600 hover:text-orange-800'>{category}</a>
                </Link>
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a className='text-gray-800 hover:text-gray-600'>-{published}</a>
                </Link>
            </div>
            <div className="title">
                <Link href={`/posts/${id}`} legacyBehavior>
                    <a className='text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600'>
                        {title}
                    </a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                {description}
            </p>
            {author && <Author {...author} />}
        </div>
        </div>
    )
}