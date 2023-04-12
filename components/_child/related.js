import fetcher from "@/lib/fetcher";
import Image from "next/image"
import Link from "next/link"
import Author from "./author"
import Error from "./error";
import Loader from "./loader";

export default function Related() {

    const {data, isLoading, isError}=fetcher('api/posts');

    if(isLoading) return <Loader/>
    if(isError) return <Error />

    return(
        <section className="pt-20 ">
            <h1 className='font-bold text-3xl py-10 '>Related</h1>
            <div className="flex flex-col gap-10"> 
                {
                    data.map((val, idx)=>{
                        return(
                            <Post key={idx} data={val} />
                        )
                    })
                }
            </div>
        </section>
    )
};

function Post({data}){
    const {id,title, category, img, published, author }=data
    return(
        <div className="flex gap-5">
            <div className="image flex flex-col justify-start">
            <Link href={`/posts/${id}`} legacyBehavior>
                <a>
                <Image  
                className='rounded'
                src={img} width={300} height={200} />
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
