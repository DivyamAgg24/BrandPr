import { LeftComponent } from "./LeftComponent"
import { NavBar } from "./navigationBar"

export const Section1 = () => {
    return <div
            style={{
            backgroundImage: 'url("/Component 46.svg")',
            }} className="h-wcreen w-full"
        >
            <div>
                < NavBar />
                <div className="flex">
                    <LeftComponent />
                    <img className="w-[630px] h-[550px] mt-[50px] ml-8" src="SEO.png" />
                </div>
            </div>
        </div>
}