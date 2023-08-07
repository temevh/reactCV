import React from "react";
import WorkTimeLine from "./WorkTimeline";
import EducationTimeline from "./EducationTimeline";

const Timeline = () => {
  return (
    <div className="flex items-stretch">
      <WorkTimeLine />
      <EducationTimeline />
    </div>
  );
};

export default Timeline;
