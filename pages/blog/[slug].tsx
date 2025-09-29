import { useRouter } from "next/router";
import Image from "next/image";
import { blogPosts } from "../../data";
import { useEffect } from "react";

const BlogPage = () => {
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    if (!router.isReady) return;
    // Optional: side-effects if needed when slug is ready
  }, [router.isReady, slug]);

  if (!router.isReady) {
    return (
      <div className="bg-gray-800 min-h-screen p-10 text-gray-200">
        Loading article...
      </div>
    );
  }

  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="bg-gray-800 min-h-screen p-10 text-red-600">
        <h1>Article not found!</h1>
      </div>
    );
  }

  return (
    <div className="bg-gray-800 min-h-screen p-10">
      {/* Title */}
      <h1 className="text-yellow-500 text-4xl font-bold">{post.title}</h1>

      {/* Author + Date */}
      <div className="mt-4 flex items-center gap-3">
        <Image
          src={post.authorImage}
          alt={`Avatar of ${post.authorName}`}
          width={40}
          height={40}
          loading="lazy"
          className="rounded-full"
        />
        <div>
          <p className="text-sm font-medium text-gray-200">{post.authorName}</p>
          <p className="text-xs text-gray-400">{post.date}</p>
        </div>
      </div>

      {/* Blog Image */}
      {post.image && (
        <div className="flex justify-center my-8">
          <Image
            src={post.image}
            alt={`Cover image for ${post.title}`}
            className="rounded-lg"
            width={700}
            height={400}
            priority
          />
        </div>
      )}

      {/* Blog Content */}
      <div
        className="
          prose prose-invert max-w-none
          prose-h2:text-yellow-500
          prose-p:text-gray-200
          prose-li:text-gray-200
        "
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* Tags */}
      {post.tags?.length > 0 && (
        <div className="mt-8 flex flex-wrap gap-2">
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

      {/* CTA */}
      {post.ctaLink && (
        <div className="mt-10">
          <a
            href={post.ctaLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-lg bg-yellow-600 px-6 py-3 font-bold text-gray-900 shadow-md hover:bg-yellow-500"
          >
            🚀 Click this link to get a custom website
          </a>
        </div>
      )}
    </div>
  );
};

export default BlogPage;

