import React from "react";
import { blog1, blog2, blog3, blog4, blog5 } from "../assets/images";
const Blog = () => {
  return (
    <>
      <div className="w-full flex flex-col px-[80px]">
        <h1 className="gradient-text">
          A lot is happening, We are blogging about it.
        </h1>
        <div className="flex w-full h-full">
          <div className="w-full h-[100%] flex flex-col flex-[0.7]">
            <div className="w-full h-full">
              <img
                className="w-full flex h-full"
                src={blog1}
                alt=""
                srcSet=""
              />
            </div>
            <div className="h-[200px] flex flex-col justify-between">
              <div className="">
                <h4>Sep 26, 2021</h4>
                <h3>
                  GPT-3 and Open AI is the future. Let us exlore how it is?
                </h3>
              </div>
              <button className="flex ">Read Full Article</button>
            </div>
          </div>
          <div className="grid flex-1 grid-cols-2 gap-6">
            <div className="w-full h-full flex justify-start items-start flex-col flex-[0.7]">
              <img
                className="w-full h-full flex"
                src={blog2}
                alt=""
                srcSet=""
              />
              <div className="h-full flex flex-col">
                <div className="flex h-[200px] flex-col justify-between">
                  <div className="">
                    <h4>Sep 26, 2021</h4>
                    <h3>
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </h3>
                  </div>
                  <button className="flex ">Read Full Article</button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-start items-start flex-col flex-[0.7]">
              <img
                className="w-full h-full flex"
                src={blog3}
                alt=""
                srcSet=""
              />
              <div className="h-full flex flex-col">
                <div className="flex h-[200px] flex-col justify-between">
                  <div>
                    <h4>Sep 26, 2021</h4>
                    <h3>
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </h3>
                  </div>
                  <button className="flex ">Read Full Article</button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-start items-start flex-col flex-[0.7]">
              <img
                className="w-full h-full flex"
                src={blog4}
                alt=""
                srcSet=""
              />
              <div className="h-full flex flex-col">
                <div className="flex h-[200px] flex-col justify-between">
                  <div>
                    <h4>Sep 26, 2021</h4>
                    <h3>
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </h3>
                  </div>
                  <button className="flex ">Read Full Article</button>
                </div>
              </div>
            </div>
            <div className="w-full h-full flex justify-start items-start flex-col flex-[0.7]">
              <img
                className="w-full h-full flex"
                src={blog5}
                alt=""
                srcSet=""
              />
              <div className="h-full flex flex-col">
                <div className="flex h-[200px] flex-col justify-between">
                  <div>
                    <h4>Sep 26, 2021</h4>
                    <h3>
                      GPT-3 and Open AI is the future. Let us exlore how it is?
                    </h3>
                  </div>
                  <button className="flex ">Read Full Article</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
