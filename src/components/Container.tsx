interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children, className }: ContainerProps) => {
  return (
    <div
      className={`flex flex-col justify-between items-center max-w-[var(--container-max-width)] m-auto grow-1 ${className}`}
    >
      {children}
    </div>
  );
};
