import ServiceCard from "./ServiceCard";

const Services = () => {
  return (
    <div className="flex justify-center gap-10 pt-10">
      {data.map((item, index) => (
        <ServiceCard
          title={item.title}
          features={item.features}
          price={item.price}
          key={index}
        />
      ))}
    </div>
  );
};

export default Services;

export const data = [
  {
    title: "Starter",
    features:
      "loreasd fdfdsglhdg kd agkdgkfdaghfd kgfkdhfdhgda gkhdhakg  hdhgd ghadhfdfafa sfdsfdsfdsaf dsfdsafdsafds",
    price: 30,
  },
  {
    title: "Golden",
    features:
      "loreasd fdfdsglhdg kd agkdgkfdaghfd kgfkdhfdhgda gkhdhakg  hdhgd ghadhfdfafa sfdsfdsfdsaf dsfdsafdsafdsloreasd fdfdsglhdg kd agkdgkfdaghfd kgfkdhfdhgda gkhdhakg  hdhgd ghadhfdfafa sfdsfdsfdsaf dsfdsafdsafds",
    price: 30,
  },
  {
    title: "Standard",
    features:
      "loreasd fdfdsglhdg kd agkdgkfdaghfd kgfkdhfdhgda gkhdhakg  hdhgd ghadhfdfafa sfdsfdsfdsaf dsfdsafdsafds",
    price: 30,
  },
];
