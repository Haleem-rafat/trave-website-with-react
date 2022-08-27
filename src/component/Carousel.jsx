import React, { useState } from "react";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";

const slidData = [
  {
    url: "https://images.unsplash.com/photo-1614505241550-0777412c47ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1544473244-f6895e69ad8b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzR8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bWFsZGl2ZXMlMjBiZWFjaHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60",
  },
  {
    url: "https://images.unsplash.com/photo-1576158831003-d41033ec31fd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fG1hbGRpdmVzJTIwYmVhY2h8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60",
  },
];

const Carousel = () => {
  const [slide, setSlide] = useState(0);
  const data = slidData.length;

  const clickNext = () => {
    setSlide(slide === 0 ? data - 1 : slide - 1);
  };
  const clickBack = () => {
    setSlide(slide === data - 1 ? 0 : slide + 1);
  };
  console.log(slide);

  return (
    <div
      id="View"
      className="max-w-[1240px] mx-auto px-4 py-16 relative flex  justify-center transition-all"
    >
      <BsArrowLeftSquareFill
        onClick={clickBack}
        size={30}
        className="absolute top-[50%]  left-[14%] text-white cursor-pointer"
      />
      <BsArrowRightSquareFill
        onClick={clickNext}
        size={30}
        className="absolute top-[50%] right-[14%] text-white cursor-pointer"
      />
      {slidData.map((items, index) => (
        <div
          className={
            index === slide ? "opacity-100" : "opacity-0 transition-all"
          }
        >
          {index === slide && (
            <img
              className=" w-full h-full object-cover  rounded-md "
              src={items.url}
            />
          )}
        </div>
      ))}
    </div>
  );
};

export default Carousel;
