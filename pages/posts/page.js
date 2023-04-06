import Author from "@/components/_child/author";
import Related from "@/components/_child/related";
import Format from "@/layout/format";
import Image from "next/image";

export default () => {
  return(
    <Format>
        <section className="container mx-auto md:px-2 py-16 w-1/2   ">
            <div className="flex justify-center">
                <Author />
            </div>
            <div className="post py-10">
                <h1
                    className="font-bold text-4xl text-center pb-5"
                >Eius praesentium soluta libero repellat tempore ut aliquam .</h1>
                <p
                    className="text-center text-gray-500 text-xl"
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque facilis commodi aperiam dolorum, corporis aspernatur vel iste excepturi autem assumenda. Dignissimos dolorum ullam deleniti omnis incidunt laboriosam nesciunt ipsum pariatur!</p>
                <div className="py-10">
                    <Image src={"/images/img1.jpg"} width={900} height={600} />
                </div>
                <div className="content text-gray-600 text-lg flex flex-col gap-4">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam fugit provident itaque. Iste modi dolore illo exercitationem! Maxime consequatur eos suscipit aliquam corporis voluptatem sunt voluptatum incidunt neque laboriosam?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam fugit provident itaque. Iste modi dolore illo exercitationem! Maxime consequatur eos suscipit aliquam corporis voluptatem sunt voluptatum incidunt neque laboriosam?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam fugit provident itaque. Iste modi dolore illo exercitationem! Maxime consequatur eos suscipit aliquam corporis voluptatem sunt voluptatum incidunt neque laboriosam?</p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Exercitationem numquam fugit provident itaque. Iste modi dolore illo exercitationem! Maxime consequatur eos suscipit aliquam corporis voluptatem sunt voluptatum incidunt neque laboriosam?</p>

                </div>
            </div>
            <Related />

        </section>
    </Format>
  )
}
