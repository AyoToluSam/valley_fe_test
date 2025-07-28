export type Tag = {
  iconType: string;
  title: string;
};

export type Prospect = {
  id: string;
  name: string;
  avatar: string;
  title: string;
  icpFit: number;
  campaign: string;
  status: string;
  tags: Tag[];
  privacy: string;
  linkedinUrl: string;
  email: string;
  address: string;
  intentData: string;
  experience: string;
  education: string;
  linkedinBio: string;
  addedDate: string;
};

export const mockProspects: Prospect[] = [
  {
    id: "1",
    name: "Keshav Ketan Saini",
    avatar: "",
    title: "Senior Software Engineer",
    icpFit: 94,
    campaign: "Early-Stage Founders",
    status: "Approval Required",
    tags: [
      { iconType: "STOP", title: "Stop Outreach" },
      { iconType: "MEETING", title: "Meeting Scheduled" },
      { iconType: "HEART_HANDSHAKE", title: "Human Handover" },
      { iconType: "FIRE", title: "Interested" },
    ],
    privacy: "Public Profile",
    linkedinUrl: "linkedin.com/company/qoyopncbdvhs",
    email: "skeshav6296@gmail.com",
    address: "California, United States of America",
    intentData: "No intent data available at the moment.",
    experience:
      "Google (Senior SWE, 2023-Present), Meta (Software Engineer, 2021-2023)",
    education: "IIT Kharagpur (B.Tech Computer Science, 2021)",
    linkedinBio:
      "Software Engineer with 4+ years of experience building scalable systems...",
    addedDate: "Dec 3, 2018",
  },
];
