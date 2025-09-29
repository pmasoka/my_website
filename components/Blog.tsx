"use client";

import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "@/data";

const Blog = () => {
  return (
    <section className="min-h-fit bg-gray-800" id="blog">
      <div className="px-5 py-14 md:container">
        {/* Section Title */}
        <h2 className="title text-yellow-500" data-aos="fade-down">
          Blog
        </h2>
        <h4 className="subtitle" data-aos="fade-down">
          LATEST ARTICLES
        </h4>
        <br />

        {/* Blog Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group relative flex flex-col rounded-md border-2 border-yellow-700 bg-gray-950 shadow-md duration-200 hover:border-yellow-500"
              data-aos="fade-up"
            >
              {/* Blog Image */}
              <div className="relative h-56 w-full overflow-hidden rounded-t-md">
                <Image
                  src={post.image}
                  alt={`Cover image for ${post.title}`}
                  fill
                  loading="lazy"
                  className="object-cover duration-300 group-hover:scale-110"
                />
              </div>

              {/* Blog Content */}
              <div className="flex flex-col flex-1 p-5">
                <h3 className="text-lg font-semibold text-gray-100 group-hover:font-bold">
                  {post.title}
                </h3>
                <p className="mt-2 text-sm text-gray-300">{post.description}</p>

                {/* Tags */}
                {post.tags?.length > 0 && (
                  <div className="mt-3 flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-md bg-yellow-700/20 px-2 py-1 text-xs text-yellow-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                {/* Author + Date */}
                <div className="mt-4 flex items-center gap-3">
                  <Image
                    src={post.authorImage}
                    alt={post.authorName}
                    width={35}
                    height={35}
                    loading="lazy"
                    className="rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium text-gray-200">
                      {post.authorName}
                    </p>
                    <p className="text-xs text-gray-400">{post.date}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
