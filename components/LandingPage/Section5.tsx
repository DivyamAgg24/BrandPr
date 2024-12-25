import { Card, Carousel } from "../ui/apple-cards-carousel"
import Image from "next/image";


export const Section5 = () => {

    const cards = data.map((card, index) => (
        <Card key={card.src} card={card} index={index} />
      ));

    return <div style={{backgroundImage: 'url("/Section5Background.svg")'}} className="bg-scroll bg-cover bg-no-repeat">
        <div className="flex flex-col ">
            <div className="gap-[46px]  mb-20">
                <div>
                    <div>
                        <div className="flex flex-col justify-center text-center gap-3">
                            <h1 className="text-white text-[42px] font-satoshi">Our Projects <span className="bg-gradient-to-r from-[#BE037D] to-[#FEAE70] text-transparent bg-clip-text">Portfolios</span></h1>
                            <div className="text-white text-[24px] font-satoshi text-center lg:mx-[300px]">BrandPR offers comprehensive services designed to elevate your brand in the Web3space. These services are suitable for a wide range of clients:</div>
                        </div>
                        <div>
                            <Carousel items={cards} />
                        </div>
                    </div>
                    <div className="flex justify-center">
                    <button className="w-[267px] h-[64px] rounded-2xl py-[10px] gap-[23px] bg-gradient-to-r from-[#C4047E] to-[#850078] shadow-lg text-white md:text-[18px] text-[14px] mx-10">
                        Book the Call now!!
                    </button>
                    <button className="w-[267px] h-[64px] rounded-2xl py-[10px] gap-[23px] bg-[#F5F5F5] font-semibold shadow-lg text-black md:text-[18px] text-[14px] mx-10">
                        Contact Us
                    </button>
                    </div>
                </div>
            </div>
            <div>

            </div>
        </div>
    </div>
}


const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="/SEO.png" alt="Macbook mockup from Aceternity UI" height="100" width="100" className="mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Artificial Intelligence",
    title: "You can do more with AI.",
    src: "/SEO.png",
    content: <DummyContent />,
  },
  {
    category: "Productivity",
    title: "Enhance your productivity.",
    src: "/SEO.png",
    content: <DummyContent />,
  },
  {
    category: "Product",
    title: "Launching the new Apple Vision Pro.",
    src: "/SEO.png",
    content: <DummyContent />,
  },

  {
    category: "Product",
    title: "Maps for your iPhone 15 Pro Max.",
    src: "/SEO.png",
    content: <DummyContent />,
  },
  {
    category: "iOS",
    title: "Photography just got better.",
    src: "/SEO.png",
    content: <DummyContent />,
  },
  {
    category: "Hiring",
    title: "Hiring for a Staff Software Engineer",
    src: "/SEO.png",
    content: <DummyContent />,
  },
];
