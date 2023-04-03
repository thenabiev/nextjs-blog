import Image from "next/image"
import Link from "next/link"
const Author = () => {
  return (
    <div
        className="author flex py-5"
    >
        <Image
        width={60} height={60}
        src={"/images/author/hinata.jpg"} 
        className="rounded-full"/>

        <div className="flex flex-col justify-center px-4">
            <Link href={"/"} legacyBehavior>
                <a className="text-md font-bold text-gray-800 hover:text-gray-600">
                    Hinata Hyuga
                </a>
            </Link>
            <span className="text-sm text-gray-500">CEO and Founder</span>
        </div>
        
    </div>
  )
}

export default Author