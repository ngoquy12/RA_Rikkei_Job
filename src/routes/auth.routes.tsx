import React, { lazy, Suspense } from "react";

const LoginPage = lazy(() => import("@/pages/auth/Login"));
const RegisterPage = lazy(() => import("@/pages/auth/Register"));

const LazyLoader = ({ children }: { children: React.ReactNode }) => {
  return <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>;
};

const authRouters = [
  {
    path: "/login",
    element: <LazyLoader children={<LoginPage />} />,
  },
  {
    path: "/register",
    element: <LazyLoader children={<RegisterPage />} />,
  },
];

export default authRouters;
