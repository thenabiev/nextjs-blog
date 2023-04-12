import fetcher from '@/lib/fetcher';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Author from './_child/author';
import Error from './_child/error';
import Loader from './_child/loader';

const Section4 = () => {
    const {data, isLoading, isError}=fetcher('api/popular');

    if(isLoading) return <Loader/>
    if(isError) return <Error />
  return (
    <div className='container mx-auto md:px-20 py-16'>
        <div className="grid lg:grid-cols-2">
            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Business</h1>
                <div className="flex flex-col gap-6">
                    {
                        data && data.map((value, idx)=>(
                            <Post data={value} key={idx}/>
                        ))
                    }
                </div>
            </div>
            <div className="item">
                <h1 className='font-bold text-4xl py-12 '>Travel</h1>
                <div className="flex flex-col gap-6">
                {
                        data && data.map((value, idx)=>(
                            <Post data={value} key={idx}/>
                        ))
                    }
                </div>
            </div>
        </div>
    </div>
  )
}

export default Section4;


function Post({data}){
    const {id, title, category, img, published, author, description}=data;

    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={`/posts/${id}`} legacyBehavior>
                <a>
                <Image  
                className='rounded'
                src={img} width={300} height={250} />
                </a>
            </Link>
            </div>
            <div className="info flex justify-center flex-col">
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
                    <a className='text-xl font-bold text-gray-800 hover:text-gray-600'>
                        {title}
                    </a>
                </Link>
            </div>
            {author && <Author {...author} />}

            </div>
        </div>
    )
}