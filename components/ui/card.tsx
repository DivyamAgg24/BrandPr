import * as React from "react"
import Image from "next/image";
import { cn } from "@/lib/utils"

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg bg-[#FFFFFF0D] backdrop-blur-lg shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 mx-3 my-4",
      className
    )}
    {...props}
  ></div>
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex p-3 text-white", className)}
    {...props}
  >
    
  </div>
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-500 dark:text-gray-400", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0 text-[#A8A8A8]", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CompleteCard = ({img, titleup, titlebottom, description}: {img: string; titleup: string; titlebottom:string; description: string}) => {
    return <Card>
    <CardHeader >
        <div className=""><Image src={img} alt="Logo"/></div>
        <div className="pt-4 pl-4 text-[25px] bg-gradient-to-r from-[#BE037D] to-[#FEAE70] text-transparent bg-clip-text font-medium">
            <div>{titleup}</div>
            <div>{titlebottom}</div>
        </div>
    </CardHeader>
    <CardContent>
        {description}
    </CardContent>
    <CardFooter>
        <button className="text-white border-[0.8px] border-[#6F6F6F] rounded-lg text-[15px] text-center py-1 px-4 hover:bg-neutral-800">View More <span className="bg-gradient-to-r from-[#BE037D] to-[#FEAE70] text-transparent bg-clip-text font-bold pl-2"> {">"} </span></button>
    </CardFooter>
</Card>
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CompleteCard }
