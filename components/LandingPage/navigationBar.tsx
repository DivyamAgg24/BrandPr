"use client"

export const NavBar = () => {
    return <div className="pt-4">
            <div className="bg-navbarBackground py-[12px] px-[22px] text-white w-[799px] h-[72px] ml-[320px] border-[1px] rounded-2xl border-navbarBorder gap-2">
            <div className="h-[48px] w-[755px] flex items-center gap-x-12">
                <div>
                    <img src='brandprlogo1 1.png' />
                </div>
                <div className="h-[20px] w-[396px] gap-x-8 flex font-satoshi">
                    <div className="text-[14px] ">Home</div>
                    <div className="text-[14px]">Blogs</div>
                    <div className="text-[14px]">Services</div>
                    <div className="text-[14px]">Conferences</div>
                    <div className="text-[14px]">About Us</div>
                </div>
                <button className="w-[178px] h-[48px] rounded-2xl py-[10px] gap-[23px] bg-gradient-to-r from-[#C4047E] to-[#850078] shadow-[4px]">
                    Book a call
                </button>
            </div>
        </div>
    </div>
}