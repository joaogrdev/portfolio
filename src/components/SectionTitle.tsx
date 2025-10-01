import { cn } from "@/lib/utils";

const SectionTitle = ({
  children,
  tipo,
  className,
}: {
  children: string;
  tipo: string;
  className?: string;
}) => {
  return (
    <div className="flex items-center justify-center gap-5 w-full">
      <h1
        className={cn(
          "text-4xl tablet:text-6xl font-contrast font-black scrollBlock w-fit whitespace-nowrap",
          tipo === "dark" ? "text-primary" : "text-secondary",
          className
        )}
      >
        {children}
      </h1>
      <div className="w-full h-px bg-primary/50"></div>
    </div>
  );
};

export default SectionTitle;
