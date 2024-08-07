import Container from "../Container";

const Feature = () => {
  return (
    <Container>
      <div className="w-full bg-gradient-to-br from-blue-200 to-blue-600 py-24 rounded-r-3xl flex justify-start px-20 flex-col items-start gap-8 mt-10">
        <h1 className="text-5xl text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
          itaque.
        </h1>
        <p className="text-2xl text-white font-medium">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto
          ratione distinctio unde corporis sint praesentium iure architecto a.
          Modi esse non alias sapiente?
        </p>
        <button className="px-8 py-3 border-2 border-white rounded-full text-4xl bg-yellow-500 text-white font-semibold transition-all ease-in-out  hover:bg-blue-500 hover:shadow-2xl">
          Go Now {"> "}
        </button>
      </div>
    </Container>
  );
};

export default Feature;
