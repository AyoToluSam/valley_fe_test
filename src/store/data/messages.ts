export type Message = {
  id: string;
  type: string;
  content: string;
  timestamp: string;
  prospectId: string;
  campaignName?: string;
  status?: string;
  rating?: number;
};

export const mockMessages: Message[] = [
  {
    id: "1",
    type: "custom",
    content:
      "Hey Drew,\n\nHope you're having a great week so far! 😊 We've got some juicy reads for you about self-custody and shaking off the chains of traditional finance. Check it out.\n\nBest regards,\nAndrew",
    timestamp: "Tue, May 12 9:14 AM",
    prospectId: "1",
    campaignName: "Campaign name",
    status: "draft",
  },
  {
    id: "2",
    type: "generated",
    content: "Generated message content here...",
    timestamp: "8 days ago",
    prospectId: "1",
    campaignName: "Campaign name",
    rating: 4.5,
  },
];
