import Image from "next/image";

export const Section3 = () => {
    return <div className="bg-black flex flex-col justify-center text-white">
        <div className="flex flex-col items-center mt-10 mb-20 gap-2.5">
            <div className="text-[24px] font-medium font-satoshi">Trusted By</div>
            <Image src='/TrustedPartners.png' alt="Partners" width="1056" height="146"/>
        </div>
    </div>
}