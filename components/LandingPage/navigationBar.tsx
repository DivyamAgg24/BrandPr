"use client"
import Image from "next/image";

export const NavBar = () => {
    return <div className="pt-4 flex justify-center">
                <div className="bg-navbarBackground lg:py-[12px] lg:px-[22px] text-white border-[1px] rounded-2xl border-navbarBorder gap-2 px-4 py-2">
                    <div className="flex items-center md:gap-x-12 gap-x-6">
                        <div className="max-w-full">
                            <Image src='/brandprlogo1 1.png' alt='BrandPR Logo' width="80" height="80" layout="responsive"/>
                        </div>
                        <div className=" md:gap-x-8 flex font-satoshi gap-x-4 ">
                            <div className="text-[10px] sm:text-[14px]">Home</div>
                            <div className="text-[10px] sm:text-[14px]">Blogs</div>
                            <div className="text-[10px] sm:text-[14px]">Services</div>
                            <div className="text-[10px] sm:text-[14px]">Conferences</div>
                            <div className="text-[10px] sm:text-[14px]">About Us</div>
                        </div>
                        <button className="md:w-[178px] md:h-[48px] md:text-[14px] text-[10px] rounded-2xl md:py-[10px] gap-[23px] bg-gradient-to-r from-[#C4047E] to-[#850078] shadow-[4px] px-4">
                            Book a call
                        </button>
                    </div>
                </div>
        </div>
}