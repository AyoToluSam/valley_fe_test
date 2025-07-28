import { avatar5 } from "@/assets";

export type Message = {
  id: string;
  type: string;
  title: string;
  prompt?: string;
  content: string;
  score?: number;
  prospect: {
    id: string;
    name: string;
    avatar: string;
  };
  campaignName?: string;
  generatedBy: {
    id: string;
    name: string;
  };
  createdAt: string;
  status?: string;
  rating?: number;
};

export const mockMessages: Message[] = [
  {
    id: "2",
    type: "PROMPT",
    prompt: "Make it more cheerful",
    title: "Version 2",
    score: 24,
    content:
      "Hey Crew,\n\nHope you're having a great week so far! 😊 We've got some juicy reads for you about self-custody and shaking off the chains of traditional finance. Check it out.\n\nBest regards,\nAndrew",
    createdAt: "2025-07-27T12:00:00Z",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: avatar5,
    },
    campaignName: "Campaign name",
    generatedBy: {
      id: "1",
      name: "You",
    },
    status: "PENDING",
    rating: 1.5,
  },
  {
    id: "1",
    type: "CUSTOM",
    title: "Version 1",
    content:
      "Hey Crew,\n\n We've got some wonderful reads for you about self-custody, to shaking off the chains of traditional finance. Check it out.\n\nBest regards,\nAndrew",
    createdAt: "2025-07-25T09:14:00Z",
    prospect: {
      id: "1",
      name: "Keshav Ketan Saini",
      avatar: avatar5,
    },
    campaignName: "Campaign name",
    generatedBy: {
      id: "000",
      name: "Valley",
    },
    status: "DRAFT",
  },
];
