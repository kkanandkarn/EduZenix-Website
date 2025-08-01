import Testimonial1 from "../assets/Testimonial1.png";
import Testimonial2 from "../assets/Testimonial2.png";
import Testimonial3 from "../assets/Testimonial3.png";

const features = [
  "Roles and Users Access Control",
  "Human Resource Management System (HRMS)",
  "Student Admission Counselling Services",
  "Fee & Billing Management",
  "Hostel & Accommodation Management",
  "Faculty & Staff Management",
  "Academic Operations or Curriculum Management",
  "Examination & Assessment System",
  "Academic Leave & Attendance Management",
  "Cafeteria & Meal Management",
  "Transport & Fleet Management",
  "Library & Resource Center",
  "Announcements & Notice Board",
  "Email and Notification Alerts",
];
export const packages = [
  {
    packageName: "Startup",
    packagePrice: "Pay-as-you-go",
    description: "For small teams just getting started.",
    userType: "For small teams just getting started.",
    features: features,
    support:
      "Dedicated email and contact support (Response time upto 24- 48 hours)",
  },
  {
    packageName: "Growth",
    packagePrice: "Pay-as-you-go",
    description: "For small teams just getting started.",
    userType: "For growing institutions that need more flexibility.",
    features: [
      "AI Search",
      "AI-Enhanced Campus Operations",
      "IP Whitelisting for Secure Module Access",
      ...features,
    ],
    support:
      "Dedicated email and contact support (Response time upto 12 hours)",
  },
  {
    packageName: "Enterprise",
    packagePrice: "Pay-as-you-go",
    description: "For small teams just getting started.",
    userType: "For large campuses or groups with custom needs.",
    features: [
      "AI Search",
      "AI-Enhanced Campus Operations",
      "AI Insights & Analytics",
      "IP Whitelisting for Secure Module Access",
      "Customized Dashboard Design",
      "Institution-Branded ERP & Website",
      "Mobile App Development (iOS & Android)",
      "Advanced Marketing & SEO Services",
      "Priority Onboarding & Training",
      "Dedicated Account Manager",
      ...features,
    ],
    support:
      "Dedicated email, contact, and priority support with 24/7 response availability and guaranteed resolution SLAs",
  },
];
export const testimonials = [
  {
    name: "Dr. Anita Verma",
    position: "Principal, Greenfield University",
    review:
      "EduZenix transformed our administrative processes. Its automation features have saved us countless hours, enabling our team to focus more on student success and academic excellence.",
    ratings: 5,
    image: Testimonial1,
  },
  {
    name: "Rahul Mehra",
    position: "Principal, Greenfield University",
    review:
      "From admissions to results, everything is streamlined and well-organized. Our staff and students truly enjoy the seamless experience. EduZenix is highly recommended!",
    ratings: 5,
    image: Testimonial3,
  },
  {
    name: "Jessica Hartley",
    position: "Principal, Greenfield University",
    review:
      "The platform is incredibly user-friendly, and the support team is outstanding. Implementing EduZenix has been one of the best decisions we’ve made for the growth and efficiency of our college.",
    ratings: 5,
    image: Testimonial2,
  },
];

export const faqs = [
  {
    question: "What is EduZenix?",
    answer:
      "EduZenix  is a comprehensive cloud-based ERP platform designed to streamline and automate all aspects of an educational institution's operations, from admissions and academics to finance and hostel management.",
  },
  {
    question: "What does the implementation and onboarding process look like?",
    answer:
      "Our dedicated onboarding team works closely with your institution to ensure a smooth transition. The process includes data migration, system configuration to your specific needs, and comprehensive training for your staff to get you up and running efficiently.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Absolutely. We prioritize data security with state-of-the-art encryption, regular security audits, and robust cloud infrastructure. Your institution's and student's data is always protected.",
  },
  {
    question:
      "Can EduZenix be customized for our institution's specific needs?",
    answer:
      "Yes. EduZenix is highly scalable and customizable. We work with you to adapt the platform to your unique processes and requirements, ensuring a perfect fit for your institution.",
  },
  {
    question: "What kind of support do you offer?",
    answer:
      "We offer comprehensive support including onboarding, training, and ongoing technical assistance. Our Gwowth and Enterprise plans include priority support and dedicated account managers to ensure you get the most out of our platform.",
  },
];
