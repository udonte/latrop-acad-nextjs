"use client";
import React, {useEffect, useState} from "react";
import { useRouter } from "next/navigation";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../constants";
import { HOME } from "@/app/constants";
import { fetchBlogs, getBlog } from "@/redux/slices/blog.slice";
import { selectBlogSlice } from "@/redux/selectors/blog.selector";
import { useSelector, useDispatch } from "react-redux";

const BlogPost = ({ params }) => {
	const {blogs, featuredPost, blog} = useSelector(selectBlogSlice)
	const dispatch = useDispatch()
	const router = useRouter();
	const { blogid } = params;
	// const post = blogPosts[blogid];
	// console.log("Post:", post);

	// if (!post) {
	// 	return <div>Post not found</div>;
	// }

	useEffect(()=>{
		dispatch(getBlog(blogid))
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
			<div className="container relative mx-auto pt-28 py-10 px-4 md:px-6 text-xs lg:px-16">
				<div className="font-semibold">
					<Head>
						<title>{blog?.title}</title>
						<meta name="description" content={blog?.content} />
					</Head>

					{/* Breadcrumbs */}
					<nav className="mb-8" aria-label="Breadcrumb">
						<ol className="list-none p-0 inline-flex">
							<li className="flex items-center">
								<Link
									href="/resources/blog"
									className="text-[#272727]"
								>
									Resources
								</Link>
								<svg
									className="fill-current w-3 h-3 mx-3"
									viewBox="0 0 24 24"
								>
									<path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
								</svg>
							</li>
							<li className="flex items-center">
								<Link
									href="/resources/blog"
									className="text-[#272727]"
								>
									Our Blog
								</Link>
								<svg
									className="fill-current w-3 h-3 mx-3"
									viewBox="0 0 24 24"
								>
									<path d="M8.59 16.58L13.17 12 8.59 7.41 10 6l6 6-6 6z" />
								</svg>
							</li>
							<li className="text-[#A020F0]">{blog?.subtitle}</li>
						</ol>
					</nav>
				</div>

				<div className="flex flex-col justify-center items-center md:flex-row mb-4">
					{/* Image Section */}
					<div className="w-full md:w-2/3 flex">
						<div className="rounded-lg">
							<Image
								src="/assets/ggimage.svg"
								alt={blog.title}
								width={520}
								height={358}
								className="mx-auto"
							/>
						</div>
					</div>

					{/* Text Content Section */}
					<div className="w-full md:w-2/3 py-4 md:py-0 md:p-4 top-8">
						<h1 className="text-2xl font-bold mb-4">
							{blog.title}
						</h1>
						<div className="text-[#222222] text-sm leading-relaxed">
							{blog?.content?.split("\n").map((paragraph, index) => (
									<p
										key={index}
										className="text-sm font-semibold text-start justify-start"
									>
										{paragraph}
									</p>
								))}
						</div>
					</div>
				</div>

				{/* Main Content */}
				<div className="text-[#222222] leading-relaxed">
					{blog?.content?.split("\n").map((paragraph, index) => (
						<p
							key={index}
							className="mb-4 text-sm font-semibold text-start justify-start"
						>
							{paragraph}
						</p>
					))}
				</div>
			</div>
		</div>
	);
};

export default BlogPost;
