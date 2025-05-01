"use client";
import React, { useEffect } from "react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Copy, Keyboard, Link2, Plus, Video } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { v4 as uuidv4 } from "uuid";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import Loader from "@/app/components/Loader";

const MeetingAction = () => {
  const { data: session } = useSession();
  const [isLoading, setIsLoading] = useState();
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [baseUrl, setBaseUrl] = useState("");
  const route = useRouter();
  const [generatedMeetingLink, setGeneratedMeetingLink] = useState("");
  const [meetingLink, setMeetingLink] = useState("");

  useEffect(() => {
    setBaseUrl(window.location.origin);
  }, []);

  const handleCreateMeetingForLater = () => {
    const roomId = uuidv4();
    const url = `${baseUrl}/video-meeting/${roomId}`;
    setGeneratedMeetingLink(url);
    setIsDialogOpen(true);
    toast.success("Meeting link generated successfully");
  };

  const handleJoinMeeting = () => {
    if (meetingLink) {
      setIsLoading(true);
      const formattedLink = meetingLink.includes("http")
        ? meetingLink
        : `${baseUrl}/video-meeting/${meetingLink}`;
      route.push(formattedLink);
      toast.info("Joining meeting...");
    } else {
      toast.error("Please enter a valid meeting link or code");
    }
  };

  const handleStartMeeting = () => {
    setIsLoading(true);
    const roomId = uuidv4();
    const Meetingurl = `${baseUrl}/video-meeting/${roomId}`;
    route.push(Meetingurl);
    toast.info("Starting meeting...");
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(generatedMeetingLink);
    toast.info("Meeting link copied to clipboard");
  };
  return (
    <>
      {isLoading && <Loader/>}
      <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-7">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button
              className="w-full sm:w-auto rounded-full cursor-pointer"
              size="lg"
            >
              <Video className="w-5 h-5 mr-2" />
              New Meeting
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem
              className={"cursor-pointer"}
              onClick={handleCreateMeetingForLater}
            >
              <Link2 className="w-4 h-4 mr-2" />
              Create a meeting for later
            </DropdownMenuItem>
            <DropdownMenuItem
              className={"cursor-pointer"}
              onClick={handleStartMeeting}
            >
              <Plus className="w-4 h-4 mr-2" />
              Create an instant meeting
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <div className="flex w-full sm:w-auto relative">
          <span className="absolute left-2 top-1/2 transform -translate-y-1/2">
            <Keyboard className="w-4 h-4 text-gray-500" />
          </span>
          <Input
            placeholder="Enter a code or link"
            className={"pl-8 rounded-r-none pr-10"}
            value={meetingLink}
            onChange={(e) => setMeetingLink(e.target.value)}
          />
          <Button
            variant={"secondary"}
            className="rounded-l-none cursor-pointer bg-black hover:bg-gray-800 text-white dark:bg-white dark:text-black dark:hover:bg-gray-200"
            onClick={handleJoinMeeting}
          >
            Join Meeting
          </Button>
        </div>
      </div>
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className={"max-w-sm rounded-lg p-4"}>
          <DialogHeader>
            <DialogTitle className={"text-3xl font-normal"}>
              Here's your meeting link
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col space-y-4">
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Send this to people that you want to meet with. Make sure that you
              save it so that you can use it later, too.
            </p>
            <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 p-4 rounded-lg">
              <span className="text-gray-700 dark:text-gray-200 break-all">
                {generatedMeetingLink.slice(0, 30)}...
              </span>
              <Button
                className={"hover:bg-gray-200 "}
                onClick={copyToClipboard}
              >
                <Copy className="w-3 h-4 text-gray-500 cursor-pointer" />
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MeetingAction;
