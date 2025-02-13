import React, { useEffect } from "react";

const Image = (props) => {
  // useEffect(() => {
  //   console.log(props.imageUrl);
  // }, [props.imageUrl]);
  const str = "url(" + props.imageUrl + ")";

  return (
    <div
      className="image"
      style={
        {
          // backgroundImage: str,
          // backgroundSize: props.contain ? "contain" : "cover",
          // backgroundPosition: props.left ? "left" : "center",
        }
      }
    >
      <img src={props.imageUrl} alt={""} />
    </div>
  );
};
export default Image;
