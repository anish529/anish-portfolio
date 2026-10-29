// @flow strict

import { personalData } from "@/utils/data/personal-data";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";
import BlogCard from "../components/homepage/blog/blog-card";

async function getBlogs() {
  if (!personalData.devUsername) {
    return [];
  }

  try {
    const res = await fetch(
      `https://dev.to/api/articles?username=${personalData.devUsername}`,
      { next: { revalidate: 3600 } }
    );

    if (!res.ok) {
      return [];
    }

    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}

export const metadata = {
  title: "Articles & Blog | Anish Kumar Prajapati",
  description:
    "Technical articles and learnings on Java backend development, Spring Boot, REST APIs, and database engineering.",
};

async function page() {
  const blogs = await getBlogs();

  return (
    <div className="py-8 min-h-[60vh]">
      <div className="flex justify-between items-center my-5 lg:py-8">
        <Link
          href="/"
          className="flex items-center gap-2 text-sm text-[#16f2b3] hover:text-white transition-colors duration-200"
        >
          <FaArrowLeft size={14} />
          <span>Back to Home</span>
        </Link>
        <div className="flex items-center">
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]"></span>
          <span className="bg-[#1a1443] w-fit text-white p-2 px-5 text-xl sm:text-2xl rounded-md">
            Articles
          </span>
          <span className="w-12 sm:w-24 h-[2px] bg-[#1a1443]"></span>
        </div>
        <div className="w-24"></div>
      </div>

      {blogs.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-5 lg:gap-8 xl:gap-10">
          {blogs.map(
            (blog, i) =>
              blog?.cover_image && (
                <BlogCard blog={blog} key={i} priority={i < 3} />
              )
          )}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center py-16 px-4 text-center">
          <div className="p-8 rounded-xl border border-[#1f223c] bg-[#11152c] max-w-lg">
            <p className="text-4xl mb-4">✍️</p>
            <h2 className="text-xl font-semibold text-white mb-2">
              Articles Coming Soon
            </h2>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed">
              Technical writings on Java backend architecture, Spring Boot microservices,
              concurrency, and relational database design will be published here.
            </p>
            <Link
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default page;
