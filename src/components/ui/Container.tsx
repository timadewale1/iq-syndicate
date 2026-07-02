type ContainerProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Container({
  children,
  className = "",
}: ContainerProps) {
  return (
    <div
      className={`
        mx-auto
        max-w-[1320px]
        px-5
        md:px-8
        lg:px-10
        xl:px-12
        ${className}
      `}
    >
      {children}
    </div>
  );
}
