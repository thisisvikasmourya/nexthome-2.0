import { Link } from "react-router-dom";
export default function Home() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
        <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
          <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-right sm:ml-auto">
            <h2 className="text-4xl font-bold sm:text-5xl">
              Download Now
              <span className="hidden sm:block text-4xl">Lorem Ipsum</span>
            </h2>
            <Link
              className="inline-flex text-white items-center px-6 py-3 font-medium bg-[#986f3b] rounded-lg hover:opacity-75"
              to="/"
            >
              Download now
            </Link>
          </div>
        </div>

        <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
          <img className="w-96" src={"/bggg.png"} alt="image1" />
        </div>
      </aside>

      <div className="grid  place-items-center sm:mt-20">
        <img className="sm:w-96 w-48" src="/bgg.png" alt="image2" />
      </div>

      <h1 className="text-center text-2xl sm:text-5xl py-10 font-medium">
        <span className="text-[#333333]">Next</span>
        <span className="text-[#986f3b]">Home</span>
      </h1>
    </div>
  );
}
