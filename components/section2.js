import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
import Author from './_child/author';
import getPost from '@/lib/helper';
import fetcher from '@/lib/fetcher';
import Loader from './_child/loader';
import Error from './_child/error';

const Section2 = () => {
    const {data, isLoading, isError}=fetcher('api/posts');

    if(isLoading) return <Loader/>
    if(isError) return <Error />
   return (
    <section className='container mx-auto md:px-20 py-10 '>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>
        {/* GRID COLUMNS */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 sm:grid-cols-1 gap-14">
            {
                data && data.map((value, index)=>(

                    <Post data={value} key={index}/>
                ))
            }
        </div>
    </section>
  )
}

export default Section2;


function Post({data}){
    const {id, category, published, img, author, title, description  }=data
  

    return(
        <div className="item">
            <div className="images">
            <Link href={`/posts/${id}`} legacyBehavior>
                <a>
                <Image  
                className='rounded'
                src={img || "/"} width={500} height={350}/>
                </a>
            </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
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
                        {title.length>60 ? (title.slice(0, 59)+"...") : (title)}
                    </a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
            {description.length>=200 ? (description.slice(0, 199)+"...") : (description)}
            </p>
            {author ? <Author author={author}/> : "Unknown"}
            </div>
        </div>
    )
}