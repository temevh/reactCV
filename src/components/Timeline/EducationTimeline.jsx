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

const educationItems = [
  {
    title: "High school",
    subtitle: "Jyväskylän Lyseon Lukio",
    date: "2017-2020",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 1st and 2nd year",
    subtitle: "Lappeenranta University of Technology",
    date: "2021-2023",
    icon: "school",
  },
  {
    title: "Bachelor of computer science, 3rd year",
    subtitle: "Tampere university",
    date: "2023-2024",
    icon: "school",
  },
  {
    title: "Master of computer science",
    subtitle: "Tampere university",
    date: "2024-",
    icon: "school",
  },
];

const EducationTimeline = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {educationItems.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body2"
            color="#FF6B6B"
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
            <h3 className="text-xl font-bold">{item.title}</h3>
            <p className="text-lg">{item.subtitle}</p>
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
};

export default EducationTimeline;
