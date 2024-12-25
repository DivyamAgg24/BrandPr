import Image from "next/image";

export const Section9 = () => {
    return <div style={{backgroundImage: 'url("/Section9Background.png")'}} className="bg-scroll bg-center bg-no-repeat h-full">
        <div className="flex justify-center">
            <div className="flex flex-col py-20">
                <div className="flex flex-col justify-center gap-4">
                    <div className="text-center text-white md:text-[42px] text-[35px] font-medium">Award & <span className="bg-gradient-to-r from-[#A37BF9] to-[#FFC263] text-transparent bg-clip-text">Honors</span></div>
                    <Image src='/Honors.png' alt="Honors" width="757" height="242"/>
                </div>
                <div className="flex flex-col justify-center items-center text-center gap-8">
                    <div className="flex flex-col gap-5">
                        <div className="md:text-[42px] text-[30px] font-bold text-white">Contact Us NOW !</div>
                        <div className="text-white md:text-[18px] text-[15px] font-satoshi">
                            <div>
                                Ready to Elevate Your Crypto Brand?
                            </div>
                            <span>Partner with BrandPR today and let’s build your brand’s future in the blockchain world.</span>
                        </div>
                    </div>
                    <button className="rounded-2xl py-5 bg-gradient-to-r px-10 from-[#C4047E] to-[#850078] md:text-[18px] text-[15px] font-bold text-white">
                        Book the Call now!!
                    </button>
                </div>
            </div>
        </div>
    </div>
}