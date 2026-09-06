export interface GrantResult {
  id: number;
  name: string;
  funder: string;
  matchScore: number;
  amount: string;
  deadline: string;
  location: string;
  focusAreas: string[];
  description: string;
  whyMatch: string;
}

export const mockResults: GrantResult[] = [
  {
    id: 1,
    name: "Community Development Grant",
    funder: "Chicago Community Foundation",
    matchScore: 94,
    amount: "$50,000",
    deadline: "October 15, 2026",
    location: "Chicago, IL",
    focusAreas: [
      "Community Development",
      "Education",
      "Economic Opportunity",
    ],
    description:
      "Supports nonprofit organizations creating measurable improvements in local communities.",
    whyMatch:
      "Your organization's focus on community development and local impact closely aligns with this funder's priorities.",
  },
  {
    id: 2,
    name: "Neighborhood Impact Fund",
    funder: "Civic Impact Foundation",
    matchScore: 89,
    amount: "$25,000",
    deadline: "November 2, 2026",
    location: "Illinois",
    focusAreas: [
      "Community",
      "Social Impact",
    ],
    description:
      "Funding for organizations working to strengthen underserved communities.",
    whyMatch:
      "Your nonprofit's community-focused programs align strongly with this fund's target population.",
  },
  {
    id: 3,
    name: "Local Innovation Grant",
    funder: "Future Communities Initiative",
    matchScore: 84,
    amount: "$15,000",
    deadline: "November 20, 2026",
    location: "United States",
    focusAreas: [
      "Innovation",
      "Technology",
      "Community",
    ],
    description:
      "Supports innovative approaches to solving community challenges.",
    whyMatch:
      "Your organization's use of technology to improve community services makes this a potential match.",
  },
  {
    id: 4,
    name: "Community Opportunity Fund",
    funder: "United Impact Foundation",
    matchScore: 78,
    amount: "$10,000",
    deadline: "December 5, 2026",
    location: "United States",
    focusAreas: [
      "Economic Opportunity",
      "Community",
    ],
    description:
      "Provides funding for programs that create economic and social opportunities.",
    whyMatch:
      "Your organization's community programs overlap with several of this funder's priorities.",
  },
];