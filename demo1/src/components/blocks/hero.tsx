import React from "react";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="bg-gradient-to-b from-indigo-100 via-pink-50 to-pink-00 py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-800 mb-6">
          Discover and Book Talented Performers with Ease
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Find the perfect artist for your next event—singers, dancers,
          speakers, and more.
        </p>
        <Link
          href={"/artists"}
          className="inline-block bg-indigo-600 font-bold hover:bg-indigo-700 text-white px-6 py-2 rounded-sm text-[18px] transition"
        >
          Explore Artists
        </Link>
      </div>
    </section>
  );
};

export default Hero;
