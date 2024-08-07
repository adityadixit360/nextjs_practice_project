import Container from "../Container";

const Navbar = () => {
  return (
    <div className="bg-gray-50 shadow-md text-gray-800 text-xl sticky top-0">
      <div className="border-b-2 py-4">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-3">
            <div className="logo">
              <h1 className="text-">Blogs.AI</h1>
            </div>
            <div className="searcBar">
              <input
                type="text"
                placeholder="Type here...."
                className="outline-none border-[1px] border-gray-400 rounded-md px-2 py-2 focus:border-blue-500"
              />
            </div>
            <div className="profile">
              <span>Profile User</span>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
