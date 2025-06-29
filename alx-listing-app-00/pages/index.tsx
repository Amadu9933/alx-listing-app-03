import React, { useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Card from "@/components/common/Card";
import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";
import { PROPERTYLISTINGSAMPLE, HERO_BG_IMAGE } from "@/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const FILTERS = [
  "Top Villa",
  "Self Checkin",
  "Pet Friendly",
  "Free Parking",
  "Beachfront",
  "Mountain View",
  "City Center",
  "Private Pool",
  "Fireplace",
  "Free WiFi",
];

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

  // Filter properties if a filter is selected
  const filteredProperties = selectedFilter
    ? PROPERTYLISTINGSAMPLE.filter((property) =>
      property.category.includes(selectedFilter)
    )
    : PROPERTYLISTINGSAMPLE;

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section
        className="relative w-full h-[350px] flex items-center justify-center text-center bg-cover bg-center mb-8"
        style={{ backgroundImage: `url(${HERO_BG_IMAGE})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40 z-0" />
        <div className="relative z-10 text-white">
          <h1 className="text-4xl font-bold mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-lg font-medium drop-shadow">
            The best prices for over 2 million properties worldwide.
          </p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="container mx-auto px-4 mb-8">
        <div className="flex flex-wrap gap-2 justify-center">
          {FILTERS.map((filter) => (
            <Pill
              key={filter}
              label={filter}
              selected={selectedFilter === filter}
              onClick={() =>
                setSelectedFilter(selectedFilter === filter ? null : filter)
              }
            />
          ))}
        </div>
      </section>

      {/* Listing Section */}
      <section className="container mx-auto px-4 flex-1">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProperties.map((property, idx) => (
            <Card
              key={property.name + idx}
              title={property.name}
              description={`$${property.price} / night | Rating: ${property.rating}`}
              imageUrl={property.image}
              onClick={() => { }}
            />
          ))}
        </div>
        {filteredProperties.length === 0 && (
          <div className="text-center text-gray-500 py-12">
            No properties found for this filter.
          </div>
        )}
      </section>
    </div>
  );
}