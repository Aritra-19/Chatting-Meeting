"use client";
import { useSession } from "next-auth/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";
import { ZegoUIKitPrebuilt } from "@zegocloud/zego-uikit-prebuilt";
import { toast } from "react-toastify";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const page = () => {
  const params = useParams();
  const roomID = params.roomid;
  const { data: session, status } = useSession();
  const router = useRouter();
  const containerRef = useRef(null);
  const hasJoinedRef = useRef(false);
  const [zp, setZp] = useState(null);
  const [isMeeting, setIsMeeting] = useState(false);

  useEffect(() => {
  if (status === "authenticated") {
    if (!session?.user?.name) {
      toast.error("Please provide a name to join the meeting");
    } else if (containerRef.current && !hasJoinedRef.current) {
      hasJoinedRef.current = true; // prevent duplicate joins
      joinMeeting(containerRef.current);
    }
  } else if (status === "unauthenticated") {
    toast.error("Please login to join the meeting");
  }
}, [session, status]);


  useEffect(() => {
    return () => {
      if (zp) {
        zp.destroy();
      }
    };
  }, [zp]);

  const joinMeeting = async (element) => {
    if (!containerRef.current) {
      console.error("Container reference not available");
      return;
    }
    // generate Kit Token
    const appID = Number(process.env.NEXT_PUBLIC_ZEGOAPP_ID); // Fill in your AppID here.
    const serverSecret = process.env.NEXT_PUBLIC_ZEGO_SERVER_SECRET; // Fill in your ServerSecret here.
    if (!appID && !serverSecret) {
      throw new Error("Please provide AppID and ServerSecret");
    }
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      session?.user?.id || Date.now().toString(),
      session?.user?.name || "Guest"
    );

    // Create instance object from Kit Token.
    const zegoInstance = ZegoUIKitPrebuilt.create(kitToken);
    setZp(zegoInstance);
    // start the call
    zegoInstance.joinRoom({
      container: containerRef.current,
      sharedLinks: [
        {
          name: "join via this link",
          url: `${window.location.origin}/video-meeting/${roomID}`,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      showAudioVideoSettingsButton: true,
      showScreenSharingButton: true,
      showTurnOffRemoteCameraButton: true,
      showTurnOffRemoteMicrophoneButton: true,
      showRemoveUserButton: true,
      onJoinRoom: () => {
        toast.success('Join meeting successfully');
        setIsMeeting(true);
      },
      onLeaveRoom: () => {
        endMeeting();
      },
    });
  };
  const endMeeting = () => {
    if (zp) {
      zp.destroy();
    }
    toast.success("Meeting ended");
    hasJoinedRef.current = false;
    setZp(null);
    setIsMeeting(false);
    router.push("/");
  };
  return (
    <div className="flex flex-col min-h-screen bg-gray-100 dark:bg-gray-900">
      <div
        className={`flex-grow flex flex-col md:flex-row relative ${
          isMeeting ? "h-screen" : ""
        }`}
      >
        <div
          ref={containerRef}
          className="video-container flex-grow"
          style={{ height: isMeeting ? "100%" : "calc(100vh - 4rem)" }}
        ></div>
      </div>
      {!isMeeting && (
        <div className="flex flex-col">
          <div className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-800 dark:text-white">
              Meeting Information
            </h2>
            <p className="text-sm mb-4 text-gray-600 dark:text-gray-300">
              Participant - {session?.user?.name || "Guest"}
            </p>
            <Button onClick={endMeeting} className={"w-full bg-red-500 hover:bg-red-700 text-white"}>
              End Meeting
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-gray-200 dark:bg-gray-800">
            <div className="text-center">
              <Image
                src='/images/videoQuality.jpg'
                alt="video quality"
                width={150}
                height={150}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                HD Video Quality
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Experience crystal clear video quality
              </p>
            </div>
            <div className="text-center">
              <Image
                src='/images/screenShare.jpg'
                alt="screen sharing"
                width={150}
                height={150}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                Screen Sharing
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Experience seamless screen sharing capabilities
              </p>
            </div>
            <div className="text-center">
              <Image
                src='/images/videoSecure.jpg'
                alt="video secure"
                width={150}
                height={150}
                className="mx-auto mb-2 rounded-full"
              />
              <h3 className="text-lg font-semibold mb-1 text-gray-800 dark:text-white">
                Secure Video Call
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">
                Meetings are secured with end-to-end encryption
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default page;
