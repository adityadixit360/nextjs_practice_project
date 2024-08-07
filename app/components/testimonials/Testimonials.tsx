import Image from "next/image";
const Testimonials = () => {
  return (
    <div className="flex justify-between gap-8 items-start max-w-[1300px] mx-auto">
      <div className="border-2 border-gray-600 border-b-4 border-r-8 rounded-md">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRksoF0Tq1W6h-teAfUgpTWihmeT5XpMkPZUw&s"
          alt="testimonials"
          width={1000}
          height={1000}
        />
      </div>
      <div className="mt-10 flex flex-col gap-4">
        <h1 className="text-3xl text-gray-600 ">Andrew Mathew</h1>
        <span className="text-green-600 text-2xl">SDE-II . Amazon</span>
        <p className="flex gap-2">
          <span className="text-5xl text-orange-600">{`"`}</span>Lorem ipsum,
          dolor sit amet consectetur adipisicing elit. Exercitationem, enim
          totam quasi sunt, obcaecati similique reprehenderit repellendus a vel
          molestiae deserunt qui? Quibusdam ipsam, sed error consectetur
          pariatur reiciendis maxime.
        </p>
      </div>
    </div>
  );
};

export default Testimonials;
