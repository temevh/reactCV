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
import {
  FaBriefcase,
  FaLaptop,
  FaIceCream,
  FaTruck,
  FaNetworkWired,
  FaSocks,
} from "react-icons/fa";

const workItems = [
  {
    workPlace: "Teemun Tötterö",
    title: "Entrepreneur, ice-cream shop",
    subtitle: "I ran my own ice-cream shop for 7 years",
    date: "2011 - 2018",
    icon: "FaIceCream",
  },
  {
    workPlace: "EDGE streetwear",
    title: "Entrepreneur, clothing brand",
    subtitle: "I ran my own clothing brand for a year with a few friends",
    date: "2018",
    icon: "FaSocks",
  },
  {
    workPlace: "014-kuljetus Oy",
    title: "Van driver",
    subtitle: "I drove a van and did logistics for about a year",
    date: "2020 - 2021",
    icon: "FaTruck",
  },
  {
    workPlace: "Technical specialist",
    title: "Telia Finland Oyj",
    subtitle: "I worked as a technical specialist fixing networking issues",
    date: "2022",
    icon: "FaNetworkWired",
  },
  {
    workPlace: "Software developer",
    title: "Twoday Oyj",
    subtitle: "I am currently working as a full-stack developer at Twoday Oyj",
    date: "2023 - ",
    icon: "FaLaptop",
  },
];

const WorkTimeLine = () => {
  return (
    <Timeline
      sx={{
        [`& .${timelineOppositeContentClasses.root}`]: {
          flex: 0.2,
        },
      }}
    >
      {workItems.map((item) => (
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: "auto 0" }}
            align="right"
            variant="body1"
            color="#FF6B6B"
          >
            {item.date}
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineDot color="primary" variant="outlined">
              {item.icon == "FaIceCream" ? <FaIceCream /> : null}
              {item.icon == "FaSocks" ? <FaSocks /> : null}
              {item.icon == "FaBriefcase" ? <FaBriefcase /> : null}
              {item.icon == "FaTruck" ? <FaTruck /> : null}
              {item.icon == "FaNetworkWired" ? <FaNetworkWired /> : null}
              {item.icon == "FaLaptop" ? <FaLaptop /> : null}
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

export default WorkTimeLine;
