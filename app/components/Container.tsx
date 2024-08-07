interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
    <div className="max-w-[1900px]  mx-auto  xl:px-20 md:px-2 sm:px-4 px-4">
      {children}
    </div>
  );
};

export default Container;
