import React from "react";
import { Card } from "../ui/card";
import { Badge } from "../ui/badge";

type props = {
  id: number;
  name: string;
  category: string;
  location: string;
  price: number;
};

const ArtistCard = ({ id, name, category, location, price }: props) => {
  return (
    <Card className=" w-full mx-auto px-4 py-4 gap-0  box-border" key={id}>
      <h2 className="font-extrabold text-2xl ">{name}</h2>
      <section className="py-2 gap-2 flex">
        <Badge variant="destructive" className="bg-purple-700">
          ${price}
        </Badge>
        <Badge variant="outline">{category}</Badge>
        <Badge variant="secondary">{location}</Badge>
      </section>
    </Card>
  );
};

export default ArtistCard;
