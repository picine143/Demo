"use client";
import React from "react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

const HeaderActions = () => {
  const router = useRouter();
  return (
    <nav className="md:flex md:gap-4 hidden">
      <Button onClick={() => router.push("/artists")} variant="link">
        Explore Artists
      </Button>
      <Button onClick={() => router.push("/onboard")} variant="link">
        Become an Artist
      </Button>
      <Button onClick={() => router.push("/dashboard")} variant="outline">
        Dashboard
      </Button>
    </nav>
  );
};

export default HeaderActions;
