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
import { workItems } from "../data/Data";

const WorkTimeLine = () => {
  return (
    <div className="lg:flex-col lg:text-center">
      <p className="text-center text-slate-300/50 text-2xl">Work</p>
      <Timeline
        sx={{
          [`& .${timelineOppositeContentClasses.root}`]: {
            flex: 0.2,
          },
        }}
      >
        {workItems
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
                  {item.icon == "FaIceCream" ? <FaIceCream /> : null}
                  {item.icon == "FaSocks" ? <FaSocks /> : null}
                  {item.icon == "FaBriefcase" ? <FaBriefcase /> : null}
                  {item.icon == "FaTruck" ? <FaTruck /> : null}
                  {item.icon == "FaNetworkWired" ? <FaNetworkWired /> : null}
                  {item.icon == "FaLaptop" ? <FaLaptop /> : null}
                </TimelineDot>
                {item.workPlace === "Teemun Tötterö" ? null : (
                  <TimelineConnector />
                )}
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}>
                <h3 className="text-xl font-bold font-titleFont text-designColor">
                  {item.title}
                </h3>
                <p className="text-md italic text-gray-400">
                  {" "}
                  {item.workPlace}
                </p>
                <p className="text-lg">{item.subtitle}</p>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </div>
  );
};

export default WorkTimeLine;
