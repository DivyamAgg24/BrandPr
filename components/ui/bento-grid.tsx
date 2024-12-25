import { cn } from "@/lib/utils";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 h-full sm:px-0 px-4",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  icon,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  icon?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "row-span-1 rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-gradient-to-r from-[#A0A0A01F] to-[#00000000] backdrop-blur-xl border border-gray-200 border-transparent justify-between flex flex-col space-y-4 dark:border-gray-800",
        className
      )}
    >
        <div>
            {icon}
        </div>
      <div className="group-hover/bento:translate-x-2 transition duration-200">
        <div className="font-sans font-bold text-white dark:text-neutral-200 mb-2 mt-2 text-[24px] font-medium">
          {title}
        </div>
        <div className="font-sans font-normal text-[#C6C6C6] text-[14px] dark:text-neutral-300">
          {description}
        </div>
      </div>
      
    </div>
  );
};
