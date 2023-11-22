import React from "react";
import useBlogs from "../../../hooks/useBlogs";
import ThemeSuspense from "../../theme/ThemeSuspense";
import BlogCard from "./BlogCard";

const RecentBlog = ({ blogId }) => {
  /* The line `const [BLogs] = useBlogs(blogId);` is using the `useBlogs` custom hook to fetch and
  retrieve a list of blogs. The `useBlogs` hook takes in a `blogId` as a parameter, which is used to
  exclude the current blog from the list of blogs. */
  const [BLogs] = useBlogs(blogId);

  /* The code `if (!BLogs.length) { return <ThemeSuspense />; }` is checking if the `BLogs` array is
  empty. If it is empty, it means that the blogs have not been loaded yet, so it returns the
  `<ThemeSuspense />` component. This component is typically used to show a loading state or
  placeholder content while the data is being fetched or loaded. */
  if (!BLogs.length) {
    return <ThemeSuspense />;
  }

  /* The line `const recentBlog = BLogs.filter((blog) => blog._id !== blogId).slice(0, 3);` is
  filtering the array of blogs (`BLogs`) to exclude the blog with the same `blogId` as the current
  blog. It then uses the `slice` method to get the first 3 blogs from the filtered array. This
  creates a new array called `recentBlog` that contains the 3 most recent blogs, excluding the
  current blog. */
  const recentBlog = BLogs.filter((blog) => blog._id !== blogId).slice(0, 3);

  return (
    <div className="container">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center mt-[48px] lg:mt-[80px] mb-[48px]">Related posts</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 justify-center gap-[28px]">
        {recentBlog.map((blog) => (
          <BlogCard blog={blog} key={blog._id} />
        ))}
      </div>
    </div>
  );
};

export default RecentBlog;
