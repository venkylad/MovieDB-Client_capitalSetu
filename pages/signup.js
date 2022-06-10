import Image from "next/image";
import Link from "next/link";

const Signup = () => {
  return (
    <>
      <div className="relative grid md:grid-cols-2 sm:grid-cols-1">
        <div className="relative img-cont">
          <Image
            src="https://media.gq.com/photos/5b6dad62cc91ae0c5f57eeaf/master/pass/Comedy-Movies-Netflix-GQ-2018-081018.jpg"
            alt=""
            layout="fill"
            objectFit="cover"
            objectPosition="center"
            placeholder="blur"
            blurDataURL="https://media.gq.com/photos/5b6dad62cc91ae0c5f57eeaf/master/pass/Comedy-Movies-Netflix-GQ-2018-081018.jpg"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center p-4 mt-10 lg:items-start lg:ml-20 md:mt-0">
            <h1 className="mb-2 text-3xl font-semibold text-red-800">
              Become A Member,
            </h1>
            <h3 className="text-lg font-normal">Start movie info searchs</h3>
            <form className="flex flex-col mt-16 space-y-8 lg:w-[400px] w-[320px]">
              <input
                className="lg:w-[400px] px-6 py-2 border-0 rounded-lg bg-[#F6F6F6] focus:outline-none ring-1 focus:ring-2 ring-red-700"
                type="text"
                placeholder="Name"
              />
              <input
                className="lg:w-[400px] px-6 py-2 border-0 rounded-lg bg-[#F6F6F6] focus:outline-none ring-1 focus:ring-2 ring-red-700"
                type="email"
                placeholder="Email"
              />
              <input
                className="lg:w-[400px] px-6 py-2 border-0 rounded-lg bg-[#F6F6F6] focus:outline-none ring-1 focus:ring-2 ring-red-700"
                type="password"
                placeholder="Password"
              />
              <button className=" text-gray-100 text-lg font-semibold px-6 py-2 bg-[#E4003F] rounded-lg hover:scale-105 duration-150 shadow-lg shadow-grey-500/30">
                Register
              </button>
            </form>

            <div className="flex mt-2 ml-1 font-semibold text-red-700">
              <p className="text-black">Existing User?&nbsp;</p>
              <Link href="/login">Login</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
