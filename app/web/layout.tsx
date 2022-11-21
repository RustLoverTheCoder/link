import { Suspense } from "react";
import Loading from "./loading";
import "./page.css";

import { login } from "../../services/auth";

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const res = await login();
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
