import Loader from "@/components/ui/loader";
import React, { Suspense } from "react";

const DefaultLayout = React.lazy(() => import("@/layouts/DefaultLayout"));
const ListJob = React.lazy(() => import("@/pages/listJob"));
const CertificateManager = React.lazy(
  () => import("@/pages/certificateManager")
);
const ChangePassword = React.lazy(() => import("@/pages/changePassword"));
const CVManager = React.lazy(() => import("@/pages/cvManager"));
const InterviewBooking = React.lazy(() => import("@/pages/interviewBooking"));
const JobDetail = React.lazy(() => import("@/pages/jobDetail"));
const Profile = React.lazy(() => import("@/pages/profile"));
const ProfileLayout = React.lazy(() => import("@/layouts/ProfileLayout"));
const AboutUs = React.lazy(() => import("@/pages/about"));
const Contact = React.lazy(() => import("@/pages/contact"));

const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<Loader />}>{children}</Suspense>;
};

const userRoutes = [
  {
    path: "/",
    element: <LazyLoader children={<DefaultLayout />} />,
    children: [
      {
        path: "jobs",
        element: <ListJob />,
      },
      {
        path: "jobs/:id",
        element: <JobDetail />,
      },
      {
        path: "job-saved",
        element: <JobDetail />,
      },
      {
        path: "profile",
        element: <ProfileLayout />,
        children: [
          {
            index: true,
            element: <Profile />,
          },
          {
            path: "cv-manager",
            element: <CVManager />,
          },
          {
            path: "certificate-manager",
            element: <CertificateManager />,
          },
          {
            path: "interview-booking",
            element: <InterviewBooking />,
          },
          {
            path: "change-password",
            element: <ChangePassword />,
          },
        ],
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
];

export default userRoutes;
