import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
    CompleteCard2
  } from "@/components/ui/card2"

export const Section6 = () => {
    return <div style={{backgroundImage: 'url("/Section6Background.png")'}} className="bg-cover bg-scroll bg-black relative">
    <div className="pt-20">
        <div className="flex justify-center text-center text-white text-[42px]">
            What Our Client Say?
        </div>
        <div className="grid grid-cols-3 grid-rows-2 mt-10 mx-28">
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
                <CompleteCard2 img={"/Apostrophe.png"} description="Lorem ipsum dolor sit amet,  elit ut aliquam, purus sit amet luctus venenatis elit ut aliquam, purus sit amet luctus venenatis"/>
        </div>
        </div>
    </div>
}