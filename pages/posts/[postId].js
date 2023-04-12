import Author from "@/components/_child/author";
import Related from "@/components/_child/related";
import Format from "@/layout/format";
import getPost from "@/lib/helper";
import Image from "next/image";
import fetcher from "@/lib/fetcher";
import Loader from '../../components/_child/loader'
import Error from "@/components/_child/error";
import { useRouter } from "next/router";
import { SWRConfig } from "swr";


export default function Page({fallback}){
    const router=useRouter();
    const {postId}=router.query;

    const {data, isLoading, isError}=fetcher(`api/posts/${postId}`);

    if(isLoading) return <Loader />
    if(isError) return <Error />

    return (
        <SWRConfig value={{fallback}}>
            <Article {...data} ></Article>
        </SWRConfig>
    )
}

export function Article({id, title, category, img, published, author, description}){
    
  return(
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2   ">
            <div className="flex justify-center">
                {author && <Author />}
            </div>
            <div className="post py-10">
                <h1
                    className="font-bold text-4xl text-center pb-5"
                >{title}</h1>
                <p
                    className="text-center text-gray-500 text-xl"
                >
                    {category}
                </p>
                <div className="py-10">
                    <Image src={img} width={900} height={600} />
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>{description}</p>
                </div>
            </div>
            <Related />

        </section>
    </Format>
  )
}


export async function getStaticProps({params}){
    const posts= await getPost(params.postId);

    return {
        props:{
            fallback:{
                '/api/posts':posts
            }
        }
    }
}

export async function getStaticPaths(){
    const posts= await getPost();

    const paths=posts.map((val)=>{
        return {
            params:{
                postId: val.id.toString()
            }
        }
    })

    return{
        paths,
        fallback: false
    }
}