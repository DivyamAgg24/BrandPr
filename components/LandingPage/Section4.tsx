import {
    CompleteCard
  } from "@/components/ui/card"
  

export const Section4 = () => {
    return <div style={{backgroundImage: 'url("/Section4Background.png")'}} className="bg-scroll bg-black bg-center bg-no-repeat">
        <div className="gap-12 flex flex-col justify-center mx-[100px] pb-12">
            <div className="flex flex-col gap-3 justify-center">
                <div className="flex justify-center">
                    <h1 className="text-white text-[42px] ">Our Solutions <span className="bg-gradient-to-r from-pink-300 to-orange-400 text-transparent bg-clip-text">Services</span></h1>
                </div>
                <div className="text-[#E0E0E0] text-[24px] font-satoshi mx-48 text-center mt-4">
                        Brand PR offers comprehensive services designed to elevate your brand in the Web3space. These services are suitable for a wide range of clients:
                </div>
            </div>
            <div className="grid grid-cols-3 grid-rows-2">
                <CompleteCard img='/Group 16.png' titleup="Public" titlebottom="Relations" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
                <CompleteCard img='/Group 16.png' titleup="Marketing" titlebottom="Services" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
                <CompleteCard img='/Group 16.png' titleup="Event" titlebottom="Branding" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
                <CompleteCard img='/Group 16.png' titleup="Digital" titlebottom="Branding" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
                <CompleteCard img='/Group 16.png' titleup="UX UI Design &" titlebottom="Development" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
                <CompleteCard img='/Group 16.png' titleup="Community" titlebottom="Building" description= "Whether you’re a new project launching your first crypto token or an established blockchain firm looking to scale, "/>
            </div>

        </div>
    </div>
}