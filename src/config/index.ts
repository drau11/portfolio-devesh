import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Devesh Rana — Cyber Security Engineer",
  author: "Devesh Rana",
  description:
    "Cyber Security Engineer at Domain Group | Application Security | AWS Security Specialty, Solutions Architect, CompTIA Security+",
  lang: "en",
  siteLogo: "/me.jpg",
  navLinks: [
    { text: "About", href: "#about" },
    { text: "Experience", href: "#experience" },
    { text: "Certifications", href: "#certifications" },
    { text: "Contact", href: "#contact" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://www.linkedin.com/in/devesh-rana11" },
  ],
  socialImage: "/me.jpg",
  canonicalURL: "https://your-portfolio-url.com", // Replace with actual URL
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Devesh Rana",
    specialty: "Cyber Security Engineer",
    summary:
      "Security Engineer based in Sydney, Australia, helping teams embed security into the way software is designed and built.",
    email: "devesh_r99@icloud.com",
  },
  experience: [
    {
      company: "Domain Group",
      position: "Cyber Security Engineer",
      startDate: "July 2025",
      endDate: "Present",
      summary: [
        "Lead and manage the end-to-end vulnerability management lifecycle, from detection to triage, remediation tracking, and reporting.",
        "Drive uplift of container and Kubernetes security across the environment, ensuring standardized controls and improved cluster coverage.",
        "Collaborate with platform and DevOps teams to embed cloud security best practices into architecture, deployment pipelines, and CI/CD.",
      ],
    },
    {
      company: "Domain Group",
      position: "Associate Cyber Security Engineer",
      startDate: "November 2024",
      endDate: "July 2025",
      summary: [
        "Took ownership of the end-to-end vulnerability management process, from detection to remediation, working closely with product and engineering teams to ensure timely closure of risks.",
        "Streamlined the onboarding and integration of security tools into existing engineering workflows, enhancing visibility and automation across the environment.",
      ],
    },
    {
      company: "Domain Group",
      position: "Cyber Security Intern",
      startDate: "August 2024",
      endDate: "November 2024",
      summary: [
        "Contributed to Domain’s successful ISO 27001 certification, supporting critical compliance and ISMS documentation efforts.",
        "Prepared detailed reports and documentation outlining findings, evidence, and recommendations for remediation and prevention.",
      ],
    },
   ],
  certifications: [
    {
      name: "CompTIA Security+ ce Certification",
      link: "https://www.credly.com/badges/8f017b20-de62-49cf-bf93-43101796e561",
      logo: "/comptia-security-plus.png",
    },
    {
      name: "AWS Certified Security – Specialty",
      link: "https://www.credly.com/badges/07c7b5f1-e49e-4ad1-9146-13bcf1fffad5",
      logo: "/aws-security-specialty.png",
    },
    {
      name: "Microsoft Certified: Azure Fundamentals",
      link: "https://learn.microsoft.com/en-au/users/deveshrana-7073/credentials/30c4bd2e8e13ae9d?ref=https%3A%2F%2Fwww.linkedin.com%2F",
      logo: "/azure-fundamentals.png",
    },
    {
      name: "AWS Certified Solutions Architect – Associate",
      link: "https://www.credly.com/badges/fc165443-d1c5-427c-a4fa-145d63c9ea6b",
      logo: "/aws-security-specialty.png",
    },
    {
      name: "Certified in Cybersecurity",
      link: "https://www.credly.com/badges/b7a84e2a-05b4-4e8b-837f-9b43c0c831bb",
      logo: "https://images.credly.com/images/b7a84e2a-05b4-4e8b-837f-9b43c0c831bb/Certified_in_Cybersecurity_CC.png",
    },
  ],
  about: {
    description: `
      I'm passionate about securing digital landscapes and driving security automation. My focus lies in integrating security into the software development lifecycle, automating security scans (SCA, SAST, DAST, IaC), and ensuring compliance with industry standards.
    `,
    image: "/me.jpg",
  },
};
