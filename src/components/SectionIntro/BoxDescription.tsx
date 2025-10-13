import FadeContent from "../FadeContent";

const BoxDescription = () => {
  return (
    <FadeContent
      blur={false}
      duration={300}
      easing="ease-out"
      initialOpacity={0}
      delay={600}
      className="flex flex-col tablet:flex-row tablet:gap-3 items-center justify-center pt-5"
    >
      <p className="font-thin tex-center self-center font-contrast text-3xl whitespace-break-spaces laptop:text-[40px] -mt-4">
        DESENVOLVEDOR
      </p>
      <p className="font-thin font-contrast text-3xl laptop:text-[40px] -mt-1 tablet:-mt-4">
        FRONTEND
      </p>
    </FadeContent>
  );
};

export default BoxDescription;
