export const HeadingForm = ({ title, subtitle }: { title: string; subtitle: string }) => {
  return (
    <div className="mb-8 text-center">
      <h1 className="mb-[0.5rem] mt-[2rem] text-5xl font-bold text-[#2E323A]">{title}</h1>
      <h4 className="text-xl font-medium text-[#2E323A]">{subtitle}</h4>
    </div>
  );
};
