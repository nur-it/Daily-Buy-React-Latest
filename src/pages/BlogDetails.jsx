import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import BlogDetailsArea from "../components/screen/Blog/BlogDetailsArea";
import RecentBlog from "../components/screen/Blog/RecentBlog";
import ProcessingSteps from "../components/screen/ProcessingSteps";

const BlogDetails = () => {
  const { blogId } = useParams();
  return (
    <>
      <Helmet>
        <title>DailyBuy - Blog Details</title>
        <meta
          charSet="utf-8"
          name="description"
          content="DailyBuy Blog Details Page"
        />
      </Helmet>
      <BlogDetailsArea blogId={blogId} />
      <RecentBlog blogId={blogId} />
      <ProcessingSteps />
    </>
  );
};

export default BlogDetails;
