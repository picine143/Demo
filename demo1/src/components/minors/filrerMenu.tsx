"use client";

import React, { useEffect, useState } from "react";
import { Input } from "../ui/input";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
} from "../ui/dropdown-menu";
import { Button } from "../ui/button";
import { ChevronDown } from "lucide-react";
import { Checkbox } from "../ui/checkbox";
import { Slider } from "../ui/slider";
import rawData from "../../data/artist.json";

// ✅ Correct type with 'category' (not 'catagory')
type Data = {
  id: number;
  name: string;
  category: string;
  location: string;
  price: number;
};

type Props = {
  setData: (data: Data[]) => void;
};

const FilterMenu = ({ setData }: Props) => {
  const [price, setPrice] = useState(50000);
  const [categories, setCategories] = useState<string[]>([]);
  const [nearMe, setNearMe] = useState(false);

  // Toggle selected category
  const toggleCategory = (cat: string) => {
    setCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat]
    );
  };

  // Filter data and send to parent
  useEffect(() => {
    const filtered = rawData.filter((artist) => {
      const matchPrice = artist.price <= price;
      const matchCategory =
        categories.length === 0 || categories.includes(artist.category);
      const matchLocation = !nearMe || artist.location === "local";

      return matchPrice && matchCategory && matchLocation;
    });

    setData(filtered);
  }, [price, categories, nearMe, setData]);

  return (
    <>
      {/* Search Input */}
      <Input className="w-full my-2" placeholder="Find artists..." />

      <section className="w-full flex flex-wrap gap-4 justify-between my-2">
        {/* Dropdown Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Filter <ChevronDown className="ml-2 h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>

          <DropdownMenuContent
            align="end"
            className="bg-white w-[22rem] border p-4 mx-4 rounded-[8px] mt-2"
          >
            <DropdownMenuLabel className="text-xs text-gray-500 mb-1">
              Filters
            </DropdownMenuLabel>

            {/* Price Slider */}
            <DropdownMenuItem className="flex flex-col items-start gap-2 p-2 focus:outline-none focus:bg-transparent">
              <span className="text-sm font-medium text-muted-foreground">
                Max price: ${price}
              </span>
              <Slider
                defaultValue={[price]}
                min={500}
                max={50000}
                step={100}
                className="w-full"
                onValueChange={(e) => setPrice(e[0])}
              />
            </DropdownMenuItem>

            {/* Category Filters */}
            <DropdownMenuItem className="flex flex-col items-start gap-2 p-2 focus:outline-none focus:bg-transparent">
              <span className="text-sm font-medium text-muted-foreground">
                Category
              </span>
              {["Singer", "Dancer", "DJ"].map((cat) => (
                <DropdownMenuCheckboxItem
                  key={cat}
                  checked={categories.includes(cat)}
                  onCheckedChange={() => toggleCategory(cat)}
                  className="capitalize text-sm font-medium w-full text-gray-700 data-[state=checked]:bg-transparent data-[state=checked]:text-black hover:bg-gray-100"
                >
                  {cat}s
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        {/* Near Me Filter */}
        <div className="flex gap-2 items-center border p-2 rounded-[8px]">
          <Checkbox
            id="nearme"
            checked={nearMe}
            onCheckedChange={() => setNearMe(!nearMe)}
          />
          <label htmlFor="nearme" className="text-sm font-semibold">
            Near me
          </label>
        </div>
      </section>
    </>
  );
};

export default FilterMenu;
