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
      "rounded-lg bg-white/5 backdrop-blur-2xl shadow dark:border-gray-800 dark:bg-gray-950 dark:text-gray-50 p-6 mx-3 my-4 hover:bg-gradient-to-r from-[#BE037D] to-[#FEAE70]",
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
  <div ref={ref} className={cn("p-3 pt-6 text-white", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("p-3 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

const CompleteCard2 = ({img, description}: {img: string; description: string}) => {
    return <Card>
    <CardHeader >
        <div className="pl-3"><Image src={img} alt="Logo"/></div>
    </CardHeader>
    <CardContent>
        {description}
    </CardContent>
    <CardFooter>
        <div className="flex flex-col mt-10 gap-1">
            <div className="bg-gradient-to-r from-[#1FE1E6] via-[#725CDF] to-[#AD32FF] text-transparent bg-clip-text text-[14px]">Laila Bahar</div>
            <div className="text-white text-[14px]">Designer</div>
        </div>
    </CardFooter>
</Card>
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CompleteCard2 }
