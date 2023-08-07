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
              sx={{ m: "auto 0" }}
              align="right"
              variant="body1"
              color="#c4cfde"
            >
              {item.date}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary" variant="outlined">
                <FaSchool />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: "12px", px: 2 }}>
              <h3 className="text-xl font-bold font-titleFont text-designColor">
                {item.title}
              </h3>
              <p className="text-lg">{item.subtitle}</p>
            </TimelineContent>
          </TimelineItem>
        ))}
    </Timeline>
  );
};

export default EducationTimeline;
