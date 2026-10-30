/*
 * ============================================================
 *  ALL SITE TEXT LIVES IN THIS FILE.
 *  Edit the text between the quotes, save, and push to GitHub.
 *  Rules: keep the quotes and commas; a list is written [ "a", "b" ].
 * ============================================================
 */
window.SITE = {
  config: {
    email: "rondeauxalexis17@gmail.com",
    linkedin: "https://www.linkedin.com/in/alexisrondeaux",
    cvFile: "assets/Alexis_RONDEAUX_CV.pdf",
    // Paste your Web3Forms access key here (see README.md, "Contact form").
    web3formsKey: "15a771b7-d928-42fd-8681-24fff6438020"
  },

  profile: {
    name: "Alexis Rondeaux",
    headline: "BBA Student at IE University | Applying to Master's Programs, Fall 2027",
    location: "Madrid, Spain | Paris, France",
    summary:
      "Fourth-year student at IE University (Madrid), with hands-on experience in FP&A and corporate finance. " +
      "Strong analytical and quantitative skills, with a solid understanding of financial reporting, budgeting, " +
      "forecasting and performance analysis. Currently applying to master's programs for the Fall 2027 intake.",
    photo: "assets/alexis-rondeaux.jpg",
    photo2x: "assets/alexis-rondeaux@2x.jpg",
    photoAlt: "Portrait of Alexis Rondeaux"
  },

  // Key figures shown under the header
  highlights: [
    { value: "8.75/10", label: "GPA, top 10%" },
    { value: "675", label: "GMAT Focus, 95th pct." },
    { value: "990", label: "TOEIC (English C1)" },
    { value: "Scholarship", label: "Academic Excellence, IE" }
  ],

  education: [
    {
      school: "IE University (IEU)",
      location: "Madrid, Spain",
      degree: "Bachelor in Business Administration",
      dates: "Expected: July 2027",
      points: [
        "Awarded Academic Excellence Scholarship. GPA: 8.75/10 (top 10%). GMAT Focus: 675 (95th percentile).",
        "Singapore Management University exchange semester: Entrepreneurial Finance, Derivative Securities and Financial Innovation."
      ]
    },
    {
      school: "Lycée Notre-Dame de Boulogne",
      location: "Boulogne-Billancourt, France",
      degree: "Baccalaureate with Honours « Mention Très Bien »: 16.43/20",
      dates: "Graduated: June 2023",
      points: ["Specialties: Mathematics, Economics & Geopolitics."]
    }
  ],

  experience: [
    {
      id: "evernex",
      page: "experience/evernex.html",
      role: "FP&A Intern",
      company: "Evernex Group",
      dates: "July - December 2026",
      location: "Courbevoie, France",
      summary: [
        "Prepared and consolidated monthly financial reports and performance analyses covering the group's 50 entities.",
        "Tracked budget vs. actuals to support budgeting, forecasting and monthly closing for a group operating across 165+ countries.",
        "Improved and streamlined financial models and Excel-based tools, reducing preparation time by 75% (from 2 hours to 30 minutes)."
      ],
      detail: {
        takeaways: [
          "Financial reporting, budgeting and forecasting for a group of 50 entities operating across 165+ countries.",
          "Cut preparation time by 75%, from 2 hours to 30 minutes, by streamlining financial models and Excel-based tools.",
          "Caught renewals booked as new contracts in commission figures before they reached leadership."
        ],
        context: [
          "Evernex is a global leader in third-party maintenance of IT infrastructure, supporting servers, storage and network equipment in data centers. The group operates across 165+ countries.",
          "I spent six months in the FP&A (Financial Planning & Analysis) department, whose financial reporting, budgeting, forecasting and KPI analysis covers the group's 50 entities and feeds directly into strategic decisions."
        ],
        responsibilities: [
          "Prepared and consolidated monthly financial reports and performance analyses for the FP&A team.",
          "Supported budgeting, forecasting and monthly closing by building and updating reporting files and tracking budget variances.",
          "Prepared the KPIs used by management for resource allocation.",
          "Validated commission and bonus provision figures across subsidiaries.",
          "Improved the team's Excel-based models, reports and analysis tools.",
          "Coordinated with finance, sales and operations teams to ensure the accuracy and consistency of financial information."
        ],
        results: [
          "Reduced preparation time by 75%, from 2 hours to 30 minutes, by improving and streamlining financial models, reports and Excel-based analysis tools.",
          "Corrected misbooked renewals and inconsistent calculation bases in commission and bonus provision figures across subsidiaries.",
          "Reviewing the sales team's commission figures, found renewed contracts booked as new ones, which inflated both commissions and new-contract growth, a key commercial indicator. Flagged it before it reached leadership and had the figures resubmitted."
        ],
        skills: ["Financial reporting", "Budgeting & forecasting", "Budget vs. actuals analysis", "KPI analysis", "Excel modeling", "Cross-team coordination"],
        learned: [
          "FP&A taught me precision and discipline: it leaves little room for approximation when every figure feeds into Board decisions. I learned to double check my work systematically, not out of habit, but because I understood the real cost of a mistake in front of senior management.",
          "It also taught me to communicate uncertainty honestly. When a forecast relied on assumptions I could not fully verify, I flagged them upfront rather than letting the final figure speak for itself.",
          "Tracing a number back to its source has become a reflex, not an extra step."
        ]
      }
    },
    {
      id: "hexagone",
      page: "experience/hexagone-finance.html",
      role: "Cross-Asset Sales Intern",
      company: "Hexagone Finance",
      dates: "June - July 2025",
      location: "Paris, France",
      summary: [
        "Analyzed and contacted ~100 corporate profiles, securing about 10 first-contact meetings.",
        "Backtested 5 distinct structured products and produced the client presentation materials.",
        "Designed and delivered a finance training session for a 15-person IT team."
      ],
      detail: {
        takeaways: [
          "Full client cycle in a sales team: ~100 corporate profiles analyzed, about 10 first-contact meetings secured.",
          "Backtested 5 structured products and produced the client presentation materials.",
          "Designed and delivered a finance training session for a 15-person IT team."
        ],
        context: [
          "Hexagone Finance is a boutique advisory firm that selects and structures investment products, across asset classes, for institutional clients.",
          "Clients choose among several options (deposit products, private equity funds, real estate or structured products) depending on their risk appetite and horizon. I worked across the full client cycle in the sales team, with a focus on structured products."
        ],
        responsibilities: [
          "Analyzed and contacted roughly 100 corporate profiles, assessing their investment potential before reaching out.",
          "Conducted backtests on 5 distinct structured products to analyze performance and support client recommendations.",
          "Developed the client-facing presentation materials showcasing tailored investment opportunities across asset classes.",
          "Designed and delivered a finance training session to help the IT team better understand the firm's products."
        ],
        results: [
          "Secured about 10 first-contact meetings from ~100 profiles, a roughly 10% conversion.",
          "Backtested 5 structured products to support client recommendations.",
          "Trained a 15-person IT team on the firm's products."
        ],
        skills: ["Backtesting", "Structured products", "Client prospecting", "Pitch materials", "Training delivery", "Private equity & real estate exposure"],
        learned: [
          "Backtesting taught me to separate a good idea from a statistically sound one, and to question results that looked too good rather than accept them at face value.",
          "Prospecting revealed a different rigor: qualifying a client's real potential before pitching anything. It was my first experience of building a case for a client with no obligation to listen. Producing client and training material made me translate technical analysis into something clear, credible and persuasive.",
          "This internship confirmed I enjoy the moment where analysis meets communication. Running the backtests felt like solving a problem for myself; writing the client and training material felt like solving it for someone else, and that second version was the one I looked forward to. I am drawn to roles where technical rigor needs to be defended and explained, not just produced."
        ]
      }
    },
    {
      id: "eleclerc",
      page: "experience/eleclerc.html",
      role: "Intern, Renewable Energy Department",
      company: "SIPLEC - E.Leclerc",
      dates: "June - July 2024",
      location: "Ivry, France",
      summary: [
        "Built a 20-year ROI model across 3 scenarios forecasting battery storage profitability for hypermarkets.",
        "Presented recommendations to store owners to guide in-store energy investment decisions.",
        "Contributed to mapping the geothermal potential of 700 stores nationwide."
      ],
      detail: {
        takeaways: [
          "Built a 20-year, 3-scenario ROI model on battery storage and presented it to store owners.",
          "Contributed to mapping the geothermal potential of 700 stores nationwide.",
          "Learned that a sound model also needs stakeholders willing to share its risk."
        ],
        context: [
          "SIPLEC is part of E.Leclerc. I joined its renewable energy department, which supports the group's energy transition across its stores, within its broader sustainability goals."
        ],
        responsibilities: [
          "Built a 20-year ROI model forecasting battery storage profitability across 3 scenarios.",
          "Presented the model and recommendations to store owners as part of their in-store energy investment decisions.",
          "Contributed to mapping the geothermal potential of 700 stores nationwide ahead of investing in this new technology.",
          "Explored the electricity market and renewable energy solutions across B2B and B2C segments."
        ],
        results: [
          "Delivered a 20-year, 3-scenario ROI model and presented it to store owners.",
          "Contributed to the geothermal mapping of 700 stores to accelerate E.Leclerc's energy transition in France."
        ],
        skills: ["Financial modeling", "ROI & scenario analysis", "Stakeholder presentations", "Energy markets"],
        learned: [
          "A good model does not win a decision on its own. The people signing off on it are not grading the math; they are weighing how much uncertainty they can live with. Getting them to share that risk is the real challenge.",
          "This role showed me how directly financial reasoning shapes investment decisions in the energy transition. The battery storage numbers were there, but the horizon was long and the returns uncertain: a risk profile that looked reasonable from my perspective, focused on the model, but not necessarily from the stakeholders', who judged the project too uncertain to go ahead.",
          "This experience made me realize I do not want to analyze finance in isolation. What pulled me was always the \"why\" behind the numbers: why renewable energy, why this technology, why now. Mapping the geothermal potential of 700 stores confirmed it: the real work was not the model, it was moving an entire organization toward a strategic goal. That is the bigger picture I want to develop through management studies."
        ]
      }
    }
  ],

  activities: [
    {
      id: "entraide",
      page: "activities/entraide-scolaire.html",
      role: "Volunteer Tutor & Mentor Recruiter",
      company: "Association « Entraide Scolaire Amicale »",
      dates: "Since 2022",
      summary: [
        "Weekly tutoring for children from low-income families.",
        "Developed the local branch: recruited and trained over 20 volunteer mentors and coordinated field operations."
      ],
      detail: {
        takeaways: [
          "Weekly tutoring for children from low-income families since 2022.",
          "Recruited and trained over 20 volunteer mentors by reaching out to local high schools.",
          "Learned to address the cause of a shortage rather than just compensate for it."
        ],
        context: [
          "Entraide Scolaire Amicale is an association supporting children from low-income families through educational support. The association was always short on mentors.",
          "High school students often need volunteer hours for their own record, so the two needs lined up almost perfectly once someone made the connection."
        ],
        responsibilities: [
          "Provide weekly tutoring to children from low-income families.",
          "Source new mentors by contacting local high schools.",
          "Cold contact schools with no obligation to respond, explain why the opportunity is worth their students' time, and follow up without being pushy.",
          "Train new volunteer mentors and coordinate field operations for the local branch."
        ],
        results: [
          "Recruited and trained over 20 volunteer mentors for the local branch, who went on to support students well beyond what I could have reached alone."
        ],
        skills: ["Outreach & cold contacting", "Persuasion", "Recruiting & training", "Coordination", "Persistence"],
        learned: [
          "Outreach taught me a lot about persistence and about framing a request so that it is clearly a win for the other side too, not just for the association.",
          "It also changed how I think about solving a shortage. My first instinct was to just tutor more myself; working on recruitment taught me to ask why the shortage existed in the first place and address that directly.",
          "This experience gave me a strong sense of purpose and humility: humility because a lot of the outreach did not work, and purpose because of the mentors who joined. It reinforced a principle I try to apply broadly: educate myself before forming opinions, stay consistent rather than look for shortcuts, and share what I have learned so others can benefit from it too."
        ]
      }
    },
    {
      id: "sports",
      page: "activities/sports.html",
      role: "Padel, Tennis & Alpine Skiing",
      company: "Sports",
      dates: "",
      summary: [
        "Competitive padel (3h/week training), including a few tournaments in Spain.",
        "Recreational tennis; alpine skiing in local competitions."
      ],
      detail: {
        takeaways: [
          "Competitive padel (3h/week training), with a few tournaments in Spain.",
          "Alpine skiing in local competitions; recreational tennis.",
          "Learned that real progress comes from patient, deliberate practice."
        ],
        context: [
          "Tennis and skiing have been long-standing personal activities for me. Over time, I have progressively replaced tennis with padel, eventually competing in a few tournaments in Spain."
        ],
        responsibilities: [
          "Competitive padel: 3 hours of training per week and a few tournaments in Spain.",
          "Recreational tennis.",
          "Alpine skiing, including local competitions."
        ],
        results: [
          "Took up padel as an adult and brought it to a competitive, tournament level."
        ],
        skills: ["Discipline", "Attention to detail", "Performing under pressure", "Adaptability"],
        learned: [
          "Both tennis and skiing taught me that real improvement rarely happens in a single day. It comes from repeated practice and close attention to detail, whether that is adjusting a serve toss by a few centimeters or refining how I carry my weight through a turn on a steep slope. Neither sport rewards impatience: the sessions where I tried to force quick progress were usually the ones where I regressed.",
          "Skiing taught me this most clearly in competition. Unlike tennis or padel, where a bad point is quickly followed by another chance, a single run leaves no room to correct a mistake midway. That forced me to take practice more seriously, knowing there would be no redoing it on the day that mattered.",
          "Switching to padel as an adult meant consciously unlearning tennis habits (grip, footwork, shot selection) that did not translate to padel's smaller court and different rhythm. I enjoy the discomfort of being a beginner again and pushing a new discipline to a competitive level, rather than staying comfortable with what I already know, even if it means losing more matches before I win any."
        ]
      }
    },
    {
      id: "tutoring",
      page: null, // summary card only; the detail below is kept in case you want the page back
      role: "Private Tutor for a high school student",
      company: "Tutoring",
      dates: "Since September 2023",
      summary: [
        "Tutor a high school student three times a week across all subjects.",
        "Help build confidence, productivity and performance, closer to mentoring than correcting."
      ],
      detail: {
        context: [
          "Since September 2023, I have been tutoring a high school student three times a week, helping him with his coursework and, just as importantly, helping build his confidence."
        ],
        responsibilities: [
          "Run sessions three times a week, going through exercises and correcting mistakes.",
          "Adapt my approach to how he learns best.",
          "Explain the same concept in several different ways until one of them clicks.",
          "Keep him motivated and stay calm when progress is slow."
        ],
        results: [
          "More than two years of consistent sessions, three times a week.",
          "The role grew from fairly mechanical exercise correction into mentoring focused on confidence and motivation."
        ],
        skills: ["Explaining complex ideas", "Active listening", "Empathy", "Patience", "Consistency"],
        learned: [
          "I noticed that his motivation moved more than his grades did, so my role shifted toward making him feel capable rather than just correct.",
          "Doing this for over two years revealed something about consistency that a one-off experience would not have. Progress was rarely visible week to week; it only became obvious looking back over months. That taught me to trust a process even when short-term feedback is limited.",
          "Sharing knowledge is not about proving what I know, it is about passing on expertise patiently enough that someone else can actually use it. I also learned about my own communication style: using listening and empathy to question and motivate, and finding a new explanation rather than repeating myself louder or more slowly."
        ]
      }
    },
    {
      id: "tradingview",
      page: null, // no detail page; set a path here if you add one later
      role: "Trading Simulation",
      company: "TradingView",
      dates: "January - May 2026",
      summary: [
        "Simulated trading using derivative instruments (options and futures) studied in class.",
        "Developed and tested trading strategies, tracking performance and risk exposure."
      ]
    }
  ],

  skills: [
    { group: "Finance", items: ["Financial modeling", "Budgeting & forecasting", "Budget vs. actuals analysis", "Financial reporting & KPIs", "Backtesting", "ROI & scenario analysis"] },
    { group: "Client & communication", items: ["Client prospecting", "Client presentation materials", "Training delivery", "Cross-team coordination"] },
    { group: "Tools", items: ["Excel", "PowerPoint", "Word", "Power BI", "VBA (Advanced)", "Google Suite", "Python (Basics)", "Bloomberg (Basics)"] }
  ],

  languages: [
    { name: "French", level: "Native" },
    { name: "English", level: "C1, TOEIC 990" },
    { name: "Spanish", level: "Intermediate, B1/B2" }
  ],

  interests: ["Personal investing and equity markets monitoring", "Theater-going"],

  // Research section (research/index.html). Each report lives in its own folder
  // research/<slug>/ with meta.json, report.md, charts/ and the PDF (see research/README.md).
  research: {
    title: "Research",
    series: "Sector Overview",
    intro:
      "Sector Overview is a weekly series of sector analyses. Each issue covers the market size, " +
      "market dynamics, the macro backdrop, the competitive landscape, valuation and the key themes to watch.",
    disclaimer: "Student research for educational purposes only. Not investment advice.",
    // Folder names of the reports. Add new ones here; the page sorts them newest first
    // and only shows a report from its "date" in meta.json onwards.
    reports: [
      "sector-overview-03-renewable-energy",
      "sector-overview-02-european-banks",
      "sector-overview-01-luxury-goods"
    ]
  }
};
