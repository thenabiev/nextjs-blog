import Image from "next/image"
import Link from "next/link"
const Author = ({name, img, designation}) => {
    if(!name && !img) return <></>
    console.log(designation);
  return (
    <div
        className="author flex py-5"
    >
        <Image
        width={60} height={60}
        objectFit="cover"
        style={{
            objectFit: 'cover',
            maxHeight:60,
            maxWidth:60
        }}
        src={img} 
        className="rounded-full"/>

        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} legacyBehavior>
                <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                    {name}
                </a>
            </Link>
            <span className="text-sm text-gray-500">{designation}</span>
        </div>
        
    </div>
  )
}

export default Author