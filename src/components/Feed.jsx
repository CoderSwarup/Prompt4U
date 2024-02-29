"use client";
import React, { useEffect, useState } from "react";
import PromptCardList from "./PromptCardList";

export default function Feed() {
  const [searchtext, setSearchText] = useState("");
  const [post, setPost] = useState([]);

  const handleSearchChange = (e) => {};

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch("/api/prompt");
      const data = await res.json();
      setPost(data.prompts);
      // console.log(data);
      // console.log(res);
    };

    fetchPost();
  }, []);
  return (
    <section className="feed ">
      <form action="" className="w-[70%]  ralative flex-center ">
        <input
          type="text"
          placeholder="Search for a tag or username.."
          value={searchtext}
          onChange={handleSearchChange}
          className="search_input peer"
        />
      </form>

      <PromptCardList data={post} handleTagClick={() => {}}></PromptCardList>
    </section>
  );
}
