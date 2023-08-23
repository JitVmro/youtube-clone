import React from "react";
import moment from "moment";

const VideoLength = ({ time }) => {
  const videoLengthInSeconds =
    time > 3599
      ? moment().startOf("day").seconds(time).format("H:mm:ss")
      : moment().startOf("day").seconds(time).format("mm:ss");
  return (
    <div className="absolute bottom-1 right-1 bg-black/[0.75] py-[2px] px-[6px] text-white text-xs rounded-md">
      {videoLengthInSeconds}
    </div>
  );
};

export default VideoLength;
