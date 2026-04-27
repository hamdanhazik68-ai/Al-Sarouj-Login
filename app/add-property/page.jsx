"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabaseClient";

export default function AddProperty() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [location, setLocation] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = async () => {
    let imageUrl = "";

    // Upload image first
    if (image) {
      const fileName = Date.now() + image.name;

      const { data, error } = await supabase.storage
        .from("property-images")
        .upload(fileName, image);

      if (!error) {
        imageUrl = data.path;
      }
    }

    // Save property
    await supabase.from("properties").insert([
      {
        title,
        price,
        location,
        image: imageUrl,
      },
    ]);

    alert("Property added!");
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold">Add Property</h1>

      <input
        className="border p-2 mt-2 block"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />

      <input
        className="border p-2 mt-2 block"
        placeholder="Price"
        onChange={(e) => setPrice(e.target.value)}
      />

      <input
        className="border p-2 mt-2 block"
        placeholder="Location"
        onChange={(e) => setLocation(e.target.value)}
      />

      <input
        type="file"
        className="mt-2"
        onChange={(e) => setImage(e.target.files[0])}
      />

      <button
        onClick={handleSubmit}
        className="bg-black text-white px-4 py-2 mt-3"
      >
        Submit
      </button>
    </div>
  );
}