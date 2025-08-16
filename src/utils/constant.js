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
    packageId: 2,
    packageName: "Startup",
    packagePrice: "₹ 3999",
    monthlyPackagePrice: "₹ 10,000",
    yearlyDiscountedPrice: "₹ 1,00,000",
    yearlyPackagePrice: "₹ 1,20,000",
    saving: "(2 months off)",
    description: "For small teams just getting started.",
    userType: "For small teams just getting started.",
    features: features,
    support:
      "Dedicated email and contact support (Response time upto 24- 48 hours)",
  },
  {
    packageId: 3,
    packageName: "Growth",
    packagePrice: "₹ 6999",
    monthlyPackagePrice: "₹ 25,000",
    yearlyDiscountedPrice: "₹ 2,25,000",
    yearlyPackagePrice: "₹ 3,00,000",
    saving: "(3 months off)",
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
    packageId: 4,
    packageName: "Enterprise",
    monthlyPackagePrice: "₹ 50,000",
    yearlyDiscountedPrice: "₹ 4,00,000",
    yearlyPackagePrice: "₹ 6,00,000",
    saving: "(4 months off)",
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
export const studentFaqs = [
  {
    question: "How do I find my institution on EduZenix?",
    answer:
      "You can use the search bar on the student portal to find your college or university. If your institution uses EduZenix, it will appear in the search results.",
  },
  {
    question: "What can I do through the student portal?",
    answer:
      "The student portal allows you to manage your entire academic journey. You can apply for admission, check your timetable, view your grades and attendance, access library resources, and receive important announcements from your institution.",
  },
  {
    question: "Is the platform mobile-friendly?",
    answer:
      "Yes, EduZeniz is fully responsive and designed to work seamlessly on all devices, including your smartphone, so you can access your information on the go.",
  },
  {
    question: "How do I get help if I have a problem?",
    answer:
      "For any platform-related issues, you can access support resources through the portal. For institution-specific questions, you should contact your college or university's administration office directly.",
  },
];
export const demoBenifits = [
  "See key features in action",
  "Get your questions answered by an expert",
  "Explore how EduZenix can be tailored to your needs",
];
export const freeTrialBenifits = [
  "Full access to all Pro features for 15 days",
  "Dedicated support to answer all your questions",
  "No credit card required to start",
  "Experience the platform with your own data",
];
export const MASTER_OTP = "1234";

export const masterInsitutions = [
  {
    id: "2f6b69d6-16b2-4d6f-8e89-0f2f847dff49",
    name: "Sandip university",
    location: "Madhubani, Bihar",
    slug: "sandip-university",
    rating: "2.0",
    reviews: "1.7K",
    AboutCollege: {
      about:
        "Sandip University is a premier educational institution located in the heart of Bihar. We are dedicated to providing a world-class education and fostering an environment of innovation and research. Our sprawling campus provides a vibrant and enriching experience for all students.",
      vision:
        "To be a world-class university that imparts knowledge, skills, and values to students, enabling them to become leaders and innovators in their chosen fields.",
      mission:
        "To provide a dynamic and challenging learning environment, foster research and innovation, and create a community of scholars who are committed to making a difference in the world.",
    },
  },
  {
    id: "8d9a48b7-7d4b-45c3-bc9a-2b5a58e69b19",
    name: "Amity University",
    location: "Noida, UP",
    slug: "amity-university",
    slug: "sandip-university",
    rating: "4.5",
    reviews: "1.5K",
  },
  {
    id: "4b6f9f77-9982-46c3-81d2-3d9f26359c56",
    name: "Galgotia Univeristy",
    location: "Noida, UP",
    slug: "galgotia-university",
    rating: "4.0",
    reviews: "2.5K",
  },
  {
    id: "1acdb3e4-62ef-4d3d-91f1-67b8d8e9c201",
    name: "Sharda Univeristy",
    location: "North region, Delhi",
    slug: "sharda-university",
    rating: "3.2",
    reviews: "1.2K",
  },
  {
    id: "9e77a9bb-3e5a-46a0-bf59-b1b2d9ebf94a",
    name: "Chandigarh university",
    location: "Chandigarh, Punjab",
    slug: "chandigarh-university",
    rating: "4.8",
    reviews: "2.6K",
  },
];
