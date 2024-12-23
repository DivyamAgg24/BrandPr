import { BentoGrid, BentoGridItem } from "../ui/bento-grid"


export const Section7 = () => {
    return <div style={{backgroundImage: 'url("/Section7Background.png")'}} className="bg-scroll bg-black">
        <div className="pb-20">
            <div className="gap-3 text-white text-[42px] flex text-center justify-center pt-[200px]">
                How We <span className="bg-gradient-to-r from-[#A37BF9] to-[#FFC263] font-bold text-transparent bg-clip-text">Work?</span>
            </div>
            <BentoGrid className="max-w-4xl mx-auto py-10">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    icon={item.icon}
                    className={i === 3 || i === 6 ? "md:col-span-2" : ""}
                    />
                ))}
            </BentoGrid>
            <div className="text-center mt-10">
                <h1 className="text-white text-[42px] font-satoshi">Our Projects <span className="bg-gradient-to-r from-[#BE037D] to-[#FEAE70] text-transparent bg-clip-text">Portfolios</span></h1>
            </div>
            <div className="pt-5 flex space-x-16 overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
                < img src="Portfolio.png" className="animate-infinite-scroll "/>
                < img src="Portfolio.png" className="animate-infinite-scroll " aria-hidden="true"/>
            </div>
        </div>
    </div>
}

const items = [
    {
      title: "Discover and Strategize",
      description: "We start by understanding your brand, its values, and its goals. Through in-depth research and competitor analysis, we uncover unique opportunities and craft a customized strategy that aligns with your vision and sets you apart in the market",
      icon: <div/>,
    },
    {
      title: "Creative Conceptualization",
      description: "Great branding begins with a strong concept. Our team of creative thinkers designs compelling visual identities, memorable messaging, and standout campaigns that resonate with your target audience and elevate your brand presence",
      icon: <div/>,
    },
    {
      title: "Multi-Channel Execution",
      description: "Whether it’s social media, influencer collaborations, website design, or PR outreach, our integrated approach ensures consistency and impact across all channels",
      icon: <div/>,
    },
    {
      title: "Data-DrivenOptimization",
      description: "We back every campaign with analytics, tracking performance and refining strategies in real-time for maximum ROI",
      icon: <img src="BentoIcon2.png" className="h-full w-fit"/>,
    },
    {
      title: "Sustainable Growth",
      description: "Our mission doesn’t end with the campaign. We focus on building long-term brand equity by fostering customer loyalty, creating lasting impressions, and ensuring your brand evolves to meet new challenges and opportunities",
      icon: <img src="BentoIcon3.png" className="h-12"/>,
    },
  ];