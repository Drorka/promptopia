"use client";

import React, { useEffect, useState } from "react";
import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
	function handleEdit() {}
	function handleDelete() {}
	return (
		<div className="mt-16 prompt_layout">
			{data.map((post) => (
				<PromptCard
					key={post.id}
					post={post}
					handleTagClick={handleTagClick}
					handleEdit={handleEdit}
					handleDelete={handleDelete}
				/>
			))}
		</div>
	);
};

function Feed() {
	const [searchText, setSearchText] = useState("");
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		async function fetchPosts() {
			const response = await fetch("/api/prompt");
			const data = await response.json();
			setPosts(data);
		}

		fetchPosts();
	}, []);

	function handleSearchChange(e) {}

	return (
		<section className="feed">
			<form action="" className="relative w-full flex-center">
				<input
					type="text"
					placeholder="Search for a tag or a username"
					value={searchText}
					onChange={handleSearchChange}
					required
					className="search_input peer"
				/>
			</form>

			<PromptCardList data={posts} handleTagClick={() => {}} />
		</section>
	);
}

export default Feed;
