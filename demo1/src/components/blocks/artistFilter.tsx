"use client";
import { useEffect, useState } from "react";
import FilterMenu from "../minors/filrerMenu";
import data from "../../data/artist.json";
import ArtistCard from "../minors/ArtistCard";

const ArtistFilter = () => {
  const [filtered, setFiltered] = useState(data);

  return (
    <div className="px-4">
      <FilterMenu setData={setFiltered} />
      <section className="flex flex-col gap-4 pt-6 md:grid md:grid-cols-3">
        {filtered.map((artist, index) => (
          <ArtistCard
            key={index}
            id={artist.id}
            name={artist.name}
            location={artist.location}
            price={artist.price}
            category={artist.category}
          />
        ))}
      </section>
    </div>
  );
};

export default ArtistFilter;
