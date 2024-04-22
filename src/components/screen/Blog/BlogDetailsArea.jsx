/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import linkedIn from "../../../assets/icon/social_primary_color_lin.png";
import facebook from "../../../assets/icon/social_primary_color_fb.png";
import twitter from "../../../assets/icon/social_primary_color_tw.png";
import useBlogs from "../../../hooks/useBlogs";
import ThemeSuspense from "../../theme/ThemeSuspense";

const capitalizeFirstLetter = (text) => {
  return text.charAt(0).toUpperCase() + text.slice(1);
};

const BlogDetailsArea = ({ blogId }) => {
  const [BLogs] = useBlogs(blogId);

  if (!BLogs.length) {
    return <ThemeSuspense />;
  }

  const blogInfo = BLogs.find((blog) => blog._id === parseInt(blogId));
  const { blog_title, blog_details, banner_img, date, writer, writer_img } =
    blogInfo;

  const slices = [
    { start: 0, end: 475 },
    { start: 476, end: 1256 },
    { start: 1257, end: 2000 },
    { start: 2001, end: 3000 },
  ];

  return (
    <div className="mt-[80px] lg:mt-[20px]">
      <div
        className="h-[200px] md:h-[300px] lg:h-[400px] bg-cover bg-no-repeat"
        style={{
          backgroundImage: `url(${banner_img})`,
        }}
      ></div>

      <div className="container max-w-[1000px]">
        <div className="bg-white mt-[-50px] md:mt-[-100px] lg:mt-[-180px] p-[13px] md:p-[20px] lg:p-[64px] rounded-[12px] shadow-[0px_10px_60px_rgba(0,0,0,0.1)]">
          <h1 className="text-[16px] md:text-[30px] lg:text-[50px] font-bold">
            {blog_title}
          </h1>

          <div className="my-[20px] md:my-[30px] lg:my-[48px] flex items-center justify-between">
            <div className="flex items-center gap-[15px] md:gap-[32px]">
              <img className="w-[50px] md:h-full" src={writer_img} alt="" />
              <div>
                <h3 className="text-sm md:text-lg font-semibold">{writer}</h3>
                <p className="text-sm md:text-lg text-[#6F757D]">{date}</p>
              </div>
            </div>
            <div className="flex items-center gap-[12px] md:gap-[25px]">
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={linkedIn}
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={twitter}
                  alt=""
                />
              </a>
              <a href="#">
                {" "}
                <img
                  className="w-[19px] md:w-[30px] lg:w-full"
                  src={facebook}
                  alt=""
                />
              </a>
            </div>
          </div>

          {slices.map((slice, index) => (
            <React.Fragment key={index}>
              <p>
                {capitalizeFirstLetter(
                  blog_details.slice(slice.start, slice.end),
                )}
              </p>
              <br />
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogDetailsArea;
