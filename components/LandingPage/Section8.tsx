import Image from "next/image";

export const Section8 = () => {
    return <div style={{backgroundImage: 'url("/Section8Background.png")'}} className="bg-scroll bg-center bg-no-repeat bg-[#000000] h-[1024px] ">
        <div className="flex flex-col justify-between h-full">
            <div className="flex justify-center mt-36">
                <div className="flex flex-col items-center text-center">
                    <div className="text-white font-black lg:text-[54px] sm:text-[20px] md:text-[40px] text-[15px]">99K+</div>
                    <div className="text-[#FFFFFF87] lg:text-[20px] text-[10px]">Artwork</div>
                </div>
                <Image src='/Line.png' className="lg:h-[19px] lg:w-[79px] h-[10px] w-[50px] sm:h-[14px] sm:w-[65px] md:h-[16px] md:w-[75px] lg:mt-[35px] mt-[10px] mx-3" alt="Line" width="100" height="100"/>
                <div className="flex flex-col items-center text-center">
                    <div className="bg-gradient-to-r from-[#BE037D] to-[#FEAE70] text-transparent bg-clip-text font-black lg:text-[54px] sm:text-[20px] md:text-[40px] text-[15px] ">72K+</div>
                    <div className="text-[#FFFFFF87] lg:text-[20px] text-[10px]">Auction</div>
                </div>
                <Image src='/Line.png' className="lg:h-[19px] lg:w-[79px] h-[10px] w-[50px] sm:h-[14px] sm:w-[65px] md:h-[16px] md:w-[75px] lg:mt-[35px] mt-[10px] mx-3" alt="Line" width="100" height="100"/>
                <div className="flex flex-col items-center text-center">
                    <div className="text-white font-black lg:text-[54px] sm:text-[20px] md:text-[40px] text-[15px]">35K+</div>
                    <div className="text-[#FFFFFF87] lg:text-[20px] text-[10px]">Artist</div>
                </div>
                <Image src='/Line.png' className="lg:h-[19px] lg:w-[79px] h-[10px] w-[50px] sm:h-[14px] sm:w-[65px] md:h-[16px] md:w-[75px] lg:mt-[35px] mt-[10px] mx-3" alt="Line" width="100" height="100"/>
                <div className="flex flex-col items-center text-center">
                    <div className="text-white font-black lg:text-[54px] sm:text-[20px] md:text-[40px] text-[15px]">128K+</div>
                    <div className="text-[#FFFFFF87] lg:text-[20px] text-[10px]">NFTs Created</div>
                </div>
            </div>
            <div className="flex flex-col justify-center items-center text-center text-center lg:mx-[209px] mb-10">
                <div className="flex flex-col justify-center gap-5">
                    <div>
                        <div className="text-white sm:text-[25px] text-[20px] lg:text-[42px]">Building Trust and Hype for Web3 and</div>
                        <div className="lg:text-[42px] sm:text-[25px] text-[20px] bg-gradient-to-r from-[#A37BF9] to-[#FFC263] text-transparent bg-clip-text font-bold"> Blockchain Innovations.</div>
                    </div>
                    <div className="lg:text-[18px] sm:text-[20px] text-[15px] font-medium text-[#A8A8A8] font-satoshi">Our team has a proven track record of delivering successful PR campaigns. We offer media coverage on top-tier news sites to ensure your crypto project gets the exposure it deserves. Here, clients get innovative solutions from effective media outreach to community building.</div>
                </div>
                <button className="bg-gradient-to-r from-[#C4047E] to-[#850078] py-[20px] rounded-2xl text-white lg:text-xl mt-2 px-4">Hit the Connect Button</button>
            </div>
        </div>
    </div>
}