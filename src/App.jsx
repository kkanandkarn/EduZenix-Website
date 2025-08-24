import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import StudentPage from "./Pages/StudentPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import TermsOfService from "./Pages/TermsOfService";
import PrivacyPolicy from "./Pages/PrivacyPolicy";
import CollegeDetailsPage from "./Pages/CollegeDetailsPage";
import ApplyInstitution from "./Pages/ApplyInstitution";

function App() {
  const routes = [
    { path: "/", element: <HomePage /> },
    { path: "/about", element: <AboutPage /> },
    { path: "/contact", element: <ContactPage /> },
    { path: "/terms", element: <TermsOfService /> },
    { path: "/privacy", element: <PrivacyPolicy /> },
    { path: "/student", element: <StudentPage /> },
    {
      path: "/student/institution",
      element: <CollegeDetailsPage />,
    },
    {
      path: "/student/institution/apply",
      element: <ApplyInstitution />,
    },
  ];

  return (
    <>
      <Routes>
        {routes.map((route, index) => (
          <Route path={route.path} element={route.element} key={index} />
        ))}
      </Routes>
    </>
  );
}

export default App;
