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
