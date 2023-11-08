import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineOppositeContent, {
  timelineOppositeContentClasses,
} from "@mui/lab/TimelineOppositeContent";
import { FaSchool } from "react-icons/fa";
import { educationItems } from "../data/Data";

const EducationTimeline = () => {
  return (
    <div className="lg:flex-col lg:text-center -mt-8">
      <p className="text-center text-slate-300/50 text-2xl">Education</p>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {educationItems
          .slice(0)
          .reverse()
          .map((item) => (
            <TimelineItem>
              <TimelineOppositeContent
                key={item.title}
                variant="body1"
                sx={{ marginTop: 1 }}
                color="#c4cfde"
              >
                {item.date}
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot color="primary" variant="outlined">
                  <FaSchool />
                </TimelineDot>
                {item.title === "High school" ? null : <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h3 className="text-xl font-bold font-titleFont text-designColor">
                  {item.title}
                </h3>
                <p className="text-lg">{item.subtitle}</p>
                <p className="text-sm">{item.lore}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
};

export default EducationTimeline;
