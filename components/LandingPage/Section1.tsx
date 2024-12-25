import { LeftComponent } from "./LeftComponent"
import { NavBar } from "./navigationBar"
import Image from "next/image";

export const Section1 = () => {
    return <div
            style={{
            backgroundImage: 'url("/Component 46.svg")',
            }} className="sm:max-w-max md:max-w-max"
        >
            <div className="flex-col">
                < NavBar />
                <div className="flex flex-col lg:flex-row lg:gap-2">
                    <LeftComponent />
                    <Image className="h-fit" src="/SEO.png" alt="Card" width="500" height="200" layout="responsive" />
                </div>
            </div>
        </div>
}