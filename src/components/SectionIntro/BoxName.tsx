import SplitText from "@/components/SplitText";
import { cn } from "@/lib/utils";

const BoxName = () => {
  return (
    <div className="flex flex-col items-center tablet:items-center justify-center relative">
      <SplitText
        text="JOÃO"
        delay={30}
        duration={1}
        ease="ease-out"
        splitType="lines"
        rootMargin="-100px"
        from={{ opacity: 1, y: 1000 }}
        to={{ opacity: 1, y: 0 }}
        className={cn("text-8xl tablet:text-9xl laptop:text-[12rem] font-super pt-10 -mt-10")}
      />
      <SplitText
        text="GABRIEL"
        delay={30}
        duration={1}
        ease="ease-out"
        splitType="lines"
        rootMargin="-100px"
        from={{ opacity: 1, y: 1000 }}
        to={{ opacity: 1, y: 0 }}
        className={cn(
          "text-7xl tablet:text-8xl laptop:text-9xl font-super -mt-3 tablet:-mt-8"
        )}
      />
    </div>
  );
};

export default BoxName;
