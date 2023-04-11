import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import fetcher from "@/lib/fetcher";
import Loader from "./_child/loader";
import Error from "./_child/error";


const Section3 = () => {
    SwiperCore.use([Autoplay])

    const {data, isLoading, isError}=fetcher('api/popular');

    if(isLoading) return <Loader/>
    if(isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>

        {/* SWIPER */}
        <Swiper
            slidesPerView={2}
            loop={1}
            grabCursor={1}
            spaceBetween={100}
            autoplay={{
                delay:4000
            }}
        >
            {
                data && data.map((value, index)=>(
                    <SwiperSlide key={index}>
                        <Post data={value}/>
                    </SwiperSlide>
                    )
                )
            }
        </Swiper>
    </section>
  )
}

export default Section3;

function Post({data}){
    const {id, title, category, img, published, author, description}=data;

    return(
        <div className="grid">
            <div className="images">
            <Link href='/' legacyBehavior>
                <a>
                <Image  
                className=''
                src={img} width={600} height={400} />
                </a>
            </Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
            <div className="cat">
                <Link href="/" legacyBehavior>
                    <a className='text-orange-600 hover:text-orange-800'>{category}</a>
                </Link>
                <Link href="/" legacyBehavior>
                    <a className='text-gray-800 hover:text-gray-600'>-{published}</a>
                </Link>
            </div>
            <div className="title">
                <Link href="/" legacyBehavior>
                    <a className='text-3xl font-bold text-gray-800 hover:text-gray-600'>
                        {title}
                    </a>
                </Link>
            </div>
            <p className='text-gray-500 py-3'>
                {description}
            </p>
            {author && <Author />}
            </div>
        </div>
    )
}