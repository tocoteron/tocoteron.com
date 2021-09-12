import WorkExperience from "../types/WorkExperience";

const workExperiences: WorkExperience[] = [
  {
    company: {
      text: "Progmate",
      links: ["https://biz.progmate.jp/"],
    },
    employmentStatus: "part-time employee",
    period: {
      since: {
        year: 2020,
        month: 12,
        day: 20,
      },
    },
    roles: ["Engineer"],
    domains: ["Mobile", "iOS app", "Android app", "Backend"],
  },
  {
    company: {
      text: "VOYAGE GROUP",
      links: ["https://voyagegroup.com/"],
    },
    employmentStatus: "internship",
    period: {
      since: {
        year: 2020,
        month: 8,
        day: 1,
      },
      until: {
        year: 2020,
        month: 8,
        day: 28,
      },
    },
    roles: ["Engineer"],
    domains: ["Web backend", "Web frontend"],
    notes: [
      {
        text: "Treasure",
        links: ["https://techlog.voyagegroup.com/entry/2020/09/08/184336"],
      },
    ],
  },
  {
    company: {
      text: "Media Do",
      links: ["https://mediado.jp/"],
    },
    employmentStatus: "internship",
    period: {
      since: {
        year: 2020,
        month: 9,
        day: 7,
      },
      until: {
        year: 2020,
        month: 9,
        day: 18,
      },
    },
    roles: ["Engineer"],
    domains: ["Web frontend"],
    notes: [
      {
        text: "MediaDo Tech Internship",
        links: ["https://techdo.mediado.jp/entry/2020/12/01/090000"],
      },
    ],
  },
  {
    company: {
      text: "Visional (BizReach)",
      links: [
        "https://www.visional.inc/ja/index.html",
        "https://www.bizreach.co.jp/",
      ],
    },
    employmentStatus: "internship",
    period: {
      since: {
        year: 2020,
        month: 9,
        day: 23,
      },
      until: {
        year: 2020,
        month: 10,
        day: 2,
      },
    },
    roles: ["Engineer"],
    domains: ["Web backend", "Web frontend"],
    notes: [],
  },
  {
    company: {
      text: "JapanMonoBundle",
      links: ["https://monobundle.com/"],
    },
    employmentStatus: "part-time employee",
    period: {
      since: {
        year: 2021,
        month: 9,
        day: 1,
      },
      until: {
        year: 2020,
        month: 10,
        day: 2,
      },
    },
    roles: ["Engineer"],
    domains: ["Web backend"],
    notes: [{ text: "Hokusai", links: ["https://hokusai.app/"] }],
  },
];

export default workExperiences;
