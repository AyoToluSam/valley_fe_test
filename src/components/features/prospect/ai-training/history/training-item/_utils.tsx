import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { iconTypes } from "@/constants/common";
import type { TrainingHistory } from "@/store/data/ai-training";
import { formatTimestamptoDate } from "@/utils/formatDate";
import { getInitials } from "@/utils/formatText";
import { TbStarFilled, TbStarHalfFilled } from "react-icons/tb";

export const formatTrainingTitle = (training: TrainingHistory) => {
  if (training.type === "EDIT" || training.type === "CUSTOM") {
    return (
      <p className="flex items-center gap-[4px] text-muted-foreground text-[12px] font-[500]">
        {training.trainingTitle}
        <span>from</span>
        <span className="text-foreground">{training.campaign}</span>
        <span>via</span>
        <span className="text-foreground">{training.prospect.name}</span>
        <span className="w-[4px] h-[4px] bg-gray-400 rounded-full mx-1" />
        {formatTimestamptoDate(training.createdAt, true)}
      </p>
    );
  }

  if (training.type === "PROMPT" || training.type === "FEEDBACK") {
    return (
      <p className="flex items-center gap-[4px] text-muted-foreground text-[12px] font-[500]">
        {training.trainingTitle} <span>from</span>
        <span className="text-foreground">{training.campaign}</span>
        <span>via</span>
        <span className="text-foreground">{training.prospect.name}</span>
        <span>by</span>
        {training.createdBy.name}
        <span className="w-[4px] h-[4px] bg-gray-400 rounded-full mx-1" />
        {formatTimestamptoDate(training.createdAt, true)}
      </p>
    );
  }

  if (training.type === "UPDATED_DATAPOINT") {
    return (
      <p className="flex items-center gap-[4px] text-muted-foreground text-[12px] font-[500]">
        {training.trainingTitle}
        <span className="w-[4px] h-[4px] bg-gray-400 rounded-full mx-1" />
        {formatTimestamptoDate(training.createdAt, true)}
      </p>
    );
  }
};

export const formatTrainingContent = (training: TrainingHistory) => {
  const isAccordionStyle =
    training.content.contentType !== "ADD_PERFORMANCE_TRACKERS";

  if (isAccordionStyle) {
    return (
      <Accordion type="single" collapsible>
        <AccordionItem
          value={training.id}
          className="relative w-[600px] px-4 bg-background border-2 min-h-fit last:border-b-2 border-gray-150 rounded-custom"
        >
          <AccordionTrigger className="hover:no-underline cursor-pointer">
            <Badge variant={"plain"}>
              {formatTrainingContentTitle(training)}
            </Badge>
          </AccordionTrigger>
          <AccordionContent className="relative overflow-auto">
            {training.content.contentText?.split("\n").map((line, idx) => (
              <span key={idx}>
                {line}
                <br />
              </span>
            ))}
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    );
  }

  return (
    <div className="max-w-[500px]">{formatTrainingContentTitle(training)}</div>
  );
};

export const formatTrainingContentTitle = (training: TrainingHistory) => {
  if (training.content.contentType === "TEXT") {
    return (
      <>
        {training.content.iconType && iconTypes[training.content.iconType]()}{" "}
        {training.content.contentTitle}
      </>
    );
  }

  if (training.content.contentType === "RATING") {
    return (
      <>
        {`${training.content.contentRating}/5`}{" "}
        {getRating(training.content.contentRating)}
      </>
    );
  }

  if (training.content.contentType === "ADD_PERFORMANCE_TRACKERS") {
    return (
      <span className="flex">
        {training.content.contentData?.map(({ name, avatar }) => {
          return (
            <Avatar key={name + avatar} className="h-9 w-9 -mr-2 last:mr-0">
              <AvatarImage src={avatar} alt="Profile Picture" />
              <AvatarFallback className="bg-primary/10 text-primary font-medium">
                {getInitials(name)}
              </AvatarFallback>
            </Avatar>
          );
        })}
      </span>
    );
  }
};

const getRating = (rating = 1) => {
  const stars = [];
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  for (let i = 0; i < fullStars; i++) {
    stars.push(<TbStarFilled key={i} size={12} fill="#7a7a7a" />);
  }
  if (hasHalfStar && stars.length < 5) {
    stars.push(<TbStarHalfFilled key="half" size={12} fill="#7a7a7a" />);
  }
  while (stars.length < 5) {
    stars.push(
      <TbStarFilled key={`empty-${stars.length}`} size={12} fill="#7a7a7a" />
    );
  }

  return <span className="flex gap-1.5">{stars}</span>;
};
