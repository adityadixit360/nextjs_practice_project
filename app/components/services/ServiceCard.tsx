type ServiceCardProps = {
  title: string;
  features: string;
  price: number;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  features,
  price,
}) => {
  return (
    <div className="h-[400px] w-[290px] p-8 border-2 flex flex-col justify-between items-start gap-6 rounded-md shadow-md hover:shadow-2xl transition-all ease-in-out cursor-pointer">
      <h1 className="text-4xl text-gray-600 font-medium text-ellipsis overflow-hidden whitespace-nowrap w-full py-2">
        {title}
      </h1>
      <p className="flex-grow overflow-hidden text-ellipsis w-full hover:overflow-y-auto">
        {features}
      </p>
      <button className="bg-blue-500 text-white shadow-md font-medium text-2xl w-full rounded-full px-3 py-4 border-none outline-none">
        ${price}/month
      </button>
    </div>
  );
};

export default ServiceCard;
