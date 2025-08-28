import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: Smart Contract Auditor AI',
  description: '[
  {
    "title": "Community-Driven Smart Contract Feedback Loop",
    "one_liner": "An AI platform that allows users to crowdsource security reviews of smart contracts through a marketplace model.",
    "why_now": "With increasing investments in blockchain, ensuring security is urgent as hacks become more prevalent.",
    "novel_mechanism": "Utilizes decentralized voting and feedback from blockchain experts to rate and review smart contracts, with AI summarizing findings.",
    "ai_stack": [
      "Claude/GPT",
      "RAG"
    ],
    "edge_use_cases": [
      "Bounty-based security assessments",
      "Gamified contract review competitions"
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "Build user interface for submissions",
        "Develop feedback collection mechanism",
        "Integrate AI for summarization"
      ],
      "tools": [
        "React",
        "Firebase",
        "Node.js",
        "Web3.js"
      ],
      "data_bootstrap": [
        "publicly available smart contract repositories",
        "user-generated review data"
      ],
      "risk": [
        "user fraud in submissions",
        "data bias in reviews"
      ],
      "mitigation": [
        "Implement user verification processes",
        "Diverse panel for reviewing submissions"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Engaging smart contract creators with success stories",
        "Showcasing review outcomes through testimonials"
      ],
      "channels": [
        "Telegram",
        "Discord",
        "Crypto-focused forums"
      ],
      "pricing": {
        "free": "Basic reviews",
        "pro": "Detailed audits",
        "business": "Custom review packages"
      }
    },
    "moat": [
      "Active community engagement",
      "Unique review processes create a database of knowledge",
      "Partnerships with blockchain education platforms"
    ],
    "scores": {
      "novelty": 9,
      "72h_feasibility": 8,
      "revenue_potential": 7,
      "defensibility": 8
    },
    "total_score": 32,
    "reasoning": "This concept taps into community expertise and gamifies auditing, offering more than traditional audit firms while fostering a collaborative security-first culture."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}