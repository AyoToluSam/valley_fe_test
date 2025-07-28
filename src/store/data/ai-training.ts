import { avatar1, avatar2, avatar3, avatar4, avatar5, user } from "@/assets";
import type { IconType } from "@/constants/common";

export type TrainingType = (typeof filterTypes)[number]["value"];

export type TrainingHistory = {
  id: string;
  type: string;
  status?: "included" | "excluded";
  isIncluded: boolean;
  trainingTitle: string;
  campaign: string;
  prospect: {
    id: string;
    name: string;
    avatar: string;
  };
  createdAt: string;
  createdBy: {
    id: string;
    name: string;
  };
  content: {
    contentType: string;
    contentTitle?: string;
    iconType?: IconType;
    contentText?: string;
    contentRating?: number;
    contentData?: Record<string, string>[];
  };
};

export const mockTrainingHistory: TrainingHistory[] = [
  {
    id: "1",
    type: "EDIT",
    // status: "included",
    isIncluded: true,
    trainingTitle: "Writing Style Updated",
    campaign: "Early Stage Founders",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: avatar5,
    },
    createdAt: "2025-07-27T09:14:32Z",
    createdBy: {
      id: "000",
      name: "Valley",
    },
    content: {
      contentType: "TEXT",
      contentTitle: "Manual Changes",
      iconType: "EDIT",
      contentText:
        "Hey Crew,\n\nTop of the day to you! 😊 We've got some exciting reads for you about self-custody and shaking off the chains of traditional finance. Check it out.\n\nBest regards,\nAndrew",
    },
  },
  {
    id: "2",
    type: "CUSTOM",
    // status: "included",
    isIncluded: true,
    trainingTitle: "Writing Style Updated",
    campaign: "Early Stage Founders",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: "",
    },
    createdAt: "2025-07-25T09:14:00Z",
    createdBy: {
      id: "000",
      name: "Valley",
    },
    content: {
      contentType: "TEXT",
      contentTitle: "Custom Message",
      iconType: "SEND",
      contentText:
        "Hey Crew,\n\nHope you're having a great week so far! 😊 We've got some juicy reads for you about self-custody and shaking off the chains of traditional finance. Check it out.\n\nBest regards,\nAndrew",
    },
  },
  {
    id: "3",
    type: "PROMPT",
    // status: "included",
    isIncluded: true,
    trainingTitle: "Message generated", //Title most likely won't be given like this from the API in a real scenario, but I'm saving time here.
    campaign: "Early Stage Founders",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: "",
    },
    createdAt: "2025-07-19T12:00:00Z",
    createdBy: {
      id: "000",
      name: "Valley",
    },
    content: {
      contentType: "TEXT",
      contentTitle: "Generated Message",
      contentText:
        "Hey [name],\n\nTop of the day to you! 😊 We've got some exciting reads for you about self-custody and shaking off the chains of traditional finance. Check it out.\n\nBest regards,\n[your name]",

      iconType: "BRAIN",
    },
  },
  {
    id: "4",
    type: "FEEDBACK",
    // status: "included",
    isIncluded: true,
    trainingTitle: "Message rated", //Title most likely won't be given like this from the API in a real scenario, but I'm saving time here.
    campaign: "Early Stage Founders",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: "",
    },
    createdAt: "2025-07-19T12:00:00Z",
    createdBy: {
      id: "1",
      name: "You",
      // name: "Zayd Ali", // Intended to setup current user check against this id to get "You" but I ran out of time.
    },
    content: {
      contentType: "RATING",
      contentTitle: "Message rated",
      contentRating: 4.5,
    },
  },
  {
    id: "5",
    type: "UPDATED_DATAPOINT",
    // status: "included",
    isIncluded: true,
    trainingTitle:
      "James Laurensky and 45 others have been added to Performance tracking", //Title most likely won't be given like this from the API in a real scenario, but I'm saving time here.
    campaign: "Early Stage Founders",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: "",
    },
    createdAt: "2025-07-19T12:00:00Z",
    createdBy: {
      id: "000",
      name: "Valley",
    },
    content: {
      contentType: "ADD_PERFORMANCE_TRACKERS",
      contentData: [
        { userId: "001", name: "James Laurensky", avatar: avatar1 },
        { userId: "002", name: "Jane Doe", avatar: avatar2 },
        { userId: "003", name: "Xi Jon", avatar: avatar3 },
        { userId: "004", name: "James Tarp", avatar: avatar4 },
        { userId: "005", name: "John Cena", avatar: user },
      ],
    },
  },
];

export const filterTypes = [
  { label: "Custom messages", value: "CUSTOM", count: 36 },
  { label: "Prompt", value: "PROMPT", count: 33 },
  { label: "Regenerated messaging", value: "REGENERATED", count: 31 },
  { label: "Human Edits", value: "EDIT", count: 31 },
  { label: "Feedback", value: "FEEDBACK", count: 31 },
  { label: "Prospect Added", value: "PROSPECT_ADDED", count: 31 },
  { label: "Updated datapoint", value: "UPDATED_DATAPOINT", count: 31 },
];
