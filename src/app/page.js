"use client";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import Loader from "@/app/components/Loader";
import Header from "@/app/components/Header";
import { useRouter } from "next/navigation";
import MeetingAction from "./components/MeetingAction";
import MeetingFeature from "./components/MeetingFeature";
import { toast } from "react-toastify";

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "authenticated") {
      setIsLoading(false);
      const hasShownWelcome = localStorage.getItem("hasShownWelcome");
      if (!hasShownWelcome) {
        toast.success(`Welcome back ${session.user.name}`);
        localStorage.setItem("hasShownWelcome", true);
      }
    } else if (status === "unauthenticated") {
      setIsLoading(false);
      router.replace("/user-auth");
    } else {
      setIsLoading(true);
    }
  }, [status, session, router]);

  if (status === "loading" || isLoading) {
    return <Loader />;
  }

  if (status === "unauthenticated") {
    return null;
  }
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900">
      <Header />
      <main className="flex-grow p-8 pt-32">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h1 className="text-5xl font-bold mb-6 text-gray-900 dark:text-white">
                Video calls and Meetings made easy for everyone
              </h1>
              <p className="text-3xl text-gray-600 dark:text-gray-300">
                Connect, collaborate, and celebrate from anywhere with Chatting-Meeting
              </p>
              <MeetingAction />
            </div>
            <div className="md:w-1/2">
              <MeetingFeature />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
