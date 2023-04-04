import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, {Autoplay} from "swiper";
import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";


const Section3 = () => {
    SwiperCore.use([Autoplay])
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
            <SwiperSlide>
                {Post()}
            </SwiperSlide>
            <SwiperSlide>
                {Post()}
            </SwiperSlide>
            <SwiperSlide>
                {Post()}
            </SwiperSlide>
            <SwiperSlide>
                {Post()}
            </SwiperSlide>
     
        </Swiper>
    </section>
  )
}

export default Section3;

function Post(){
    return(
        <div className="grid">
            <div className="images">
            <Link href='/' legacyBehavior>
                <a>
                <Image  
                className=''
                src={"/images/img1.jpg"} width={600} height={400} />
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
                    <a className='text-3xl font-bold text-gray-800 hover:text-gray-600'>
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