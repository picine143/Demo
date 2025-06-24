import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";

type props = {
  Heading: string;
  Description: string;
  btn_name: string;
  btn_address: string;
  img_url: string;
};

const CatagoryCard = ({
  Heading,
  Description,
  btn_name,
  btn_address,
  img_url,
}: props) => {
  return (
    <Card className=" w-90 mx-auto px-4 py-4 gap-0  box-border">
      <h2 className="font-extrabold text-2xl  ">{Heading}</h2>
      <p className="font-light text-xs ">{Description}</p>
      <img
        src={img_url}
        className="w-full h-75 object-cover mx-auto rounded-xl my-4"
        alt=""
      />
      <Button variant={"outline"} className="bg-black text-white ">
        {btn_name}
      </Button>
    </Card>
  );
};

export default CatagoryCard;
