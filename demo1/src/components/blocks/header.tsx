import React from "react";
import HeaderActions from "../minors/HeaderActions";
import MobileActions from "../minors/MobileActions";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-white text-black px-4 md:px-12 py-4">
      <section>
        <Link href={"/"}>
          <h1 className="text-2xl font-bold">Artistly</h1>
        </Link>
      </section>
      <HeaderActions />
      <MobileActions />
    </div>
  );
};

export default Header;
