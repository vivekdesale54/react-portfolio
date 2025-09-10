import React from "react";
import athlete from "./img/athlete.jpg";
import capture from "./img/capture.png";
// import Heroimage from "./img/Heroimage/jpg";
// import home2 from "./img/home2.jpg";
// import shoot1 from "./img/shoo1.jpg";
// import shoot2 from "./img/shoo2.jpg";

export const MovieState = () => {
  return [
    {
      title: "The Athelete",
      mainImage: athlete,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Truly a masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore ducimus quae.",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus consequuntur natus omnis praesentium labore consequatur fugiat. Accusantium cumque alias dolorem dignissimos repellendus quod quasi laboriosam eligendi, delectus architecto quae!",
        },
      ],
    },
    {
      title: "The Capture",
      mainImage: capture,
      url: "/work/the-capture",
      awards: [
        {
          title: "Truly a masterpiece",
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore dolore ducimus quae.",
        },
        {
          title: "Fresh look on a brutal sport",
          description:
            "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita possimus consequuntur natus omnis praesentium labore consequatur fugiat. Accusantium cumque alias dolorem dignissimos repellendus quod quasi laboriosam eligendi, delectus architecto quae!",
        },
      ],
    },
  ];
};

