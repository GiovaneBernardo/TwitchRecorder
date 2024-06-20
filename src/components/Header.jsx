//import { useContext, useState } from "react";
//import { SearchContext, SearchProvider } from "../contexts/SearchContext";
import Link from "next/link";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <div className="header-container flex p-1.5 bg-header-bg-color">
      <div className="left-search-bar-div ml-5 space-x-5 w-[33%]">
        <SearchBar></SearchBar>
      </div>
      <div className="mid-buttons-div ml-5 space-x-5 w-[33%] text-center">
        <Link href="/live">Live</Link>
        <Link href="/">Home</Link>
        <Link href="/channel">Channel</Link>
      </div>
    </div>
  );
}
