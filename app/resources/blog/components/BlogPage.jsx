"use client";
import React, { useState, useEffect } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { BlogData, blogPosts } from "../constants";
import Pagination from "../components/Pagination";
import { HOME } from "@/app/constants";
import { fetchBlogs } from "@/redux/slices/blog.slice";
import { selectBlogSlice } from "@/redux/selectors/blog.selector";
import { useSelector, useDispatch } from "react-redux";

const BlogPage = () => {
	const {blogs, featuredPost} = useSelector(selectBlogSlice)
	// console.log(blogs)
	const dispatch = useDispatch()
	const [currentPage, setCurrentPage] = useState(1);
	const postsPerPage = 6;

	useEffect(() => {
		const queryPage = new URLSearchParams(window.location.search).get(
			"page"
		);
		setCurrentPage(queryPage ? parseInt(queryPage, 10) : 1);
	}, []);

	const indexOfLastPost = currentPage * postsPerPage;
	const indexOfFirstPost = indexOfLastPost - postsPerPage;
	const currentPosts = blogs?.slice(indexOfFirstPost, indexOfLastPost);
	const totalPages = Math.ceil(blogPosts.length / postsPerPage);

	useEffect(()=>{
		dispatch(fetchBlogs())
	}, [dispatch])
	return (
		<div className="flex relative items-center w-full">
			<div className="absolute inset-0">
				<div className="absolute-icons">
					{HOME.hero.icons.map((src, index) => (
						<Image
							key={index}
							src={src}
							width={1000}
							height={1000}
							alt={`Background Icon ${index}`}
							className="floating-icon"
						/>
					))}
				</div>
			</div>
			<div className="mx-auto pt-32 py-10 relative px-[7%]">
				<Head>
					<title>{BlogData.title}</title>
					<meta name="description" content={BlogData.description} />
				</Head>
				<div className="text-center flex flex-col items-center mb-10">
					<h1 className="text-3xl font-semibold mb-4">
						{BlogData.title}
					</h1>
					<p className="text-sm lg:w-[74%] text-[#222222]">
						{BlogData.description}
					</p>
				</div>

				<div className="bg-yellow-50 w-full mt-16 justify-between mb-24 flex flex-col md:flex-row rounded-xl ">
					<div className="flex flex-col justify-center">
						<div className="p-6 md:px-14 lg:px-20 md:w-[350px] lg:w-[550px] w-full rounded-xl">
							<h2 className="text-sm font-semibold text-[#222222BF]">
								Featured
							</h2>
							<h2 className="text-2xl text-[#222222] font-semibold mb-4">
								<Link
									href={`/resources/blog/featured/${BlogData.featured.link}`}
									passHref
									className="hover:underline"
								>
									{BlogData.featured.title}
								</Link>
							</h2>
							<p className="text-[#272727] text-sm mb-4 md:mb-14">
								{BlogData.featured.content}
							</p>
							<p className="text-[#222222D9] mb-4">
								{BlogData.featured.date}
							</p>
						</div>
						<Link
							href={`/resources/blog/${BlogData.featured.link}`}
							passHref
						></Link>
					</div>
					<div className="flex justify-center items-center w-full md:w-1/2">
						<div className="rounded-lg overflow-hidden w-full h-full  md:w-auto">
							<Image
								src={BlogData.featured.imageSrc}
								alt={BlogData.featured.altText}
								width={1000}
								height={1000}
								className="mx-auto h-full object-cover md:w-auto"
							/>
						</div>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
					{currentPosts.map((post, index) => (
						<div key={index} className="rounded-lg p-3 mt-3">
							<Image
								src={post.image || '/assets/post.svg'}
								alt={post.title}
								width={722}
								height={968}
								quality={100}
								className="rounded-lg mb-2"
							/>
							<h3 className="text-sm font-semibold text-[#272727]">
								{post.title}
							</h3>
							<p className="text-[#222222BF] text-sm">
								{post.content}
							</p>
							<p className="text-[#222222BF] text-sm mb-5">
								{post.date}
							</p>
							<Link href={`/resources/blog/${post._id}`} passHref>
								<buttons className="border-[1.5px] w-[48%] buttons bg-[#A020F0] px-5 py-3 rounded-md text-[#ffffff] text-[15px] leading-[20px]">
									Read Full Article
								</buttons>
							</Link>
						</div>
					))}
				</div>
				<div></div>
				<Pagination
					currentPage={currentPage}
					totalPages={totalPages}
					onPageChange={setCurrentPage}
				/>
			</div>
		</div>
	);
};

export default BlogPage;
