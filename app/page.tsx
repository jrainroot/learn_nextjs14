"use client";
import { usePathname } from "next/navigation";
import Navigation from "../components/navigation";

export default function Tomate() {
  return (
    <div>
      <Navigation />
      <h1>Home!</h1>
    </div>
  );
}
