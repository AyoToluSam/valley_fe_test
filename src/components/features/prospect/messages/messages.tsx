import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import {
  TbCalendarTime,
  TbReload,
  TbMeteor,
  TbEditCircle,
  TbMail,
  TbChecks,
} from "react-icons/tb";
import { Brain, Check, ChevronDown, Target } from "lucide-react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import CustomMessageBar from "@/components/features/prospect/messages/custom-message-bar/custom-message-bar";
import { BsJustify } from "react-icons/bs";
import { useGetMessagesQuery } from "@/store/api/baseApi";
import Loading from "@/components/common/loading/loading";
import EmptyData from "@/components/common/empty-data/empty-data";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Card, CardContent } from "@/components/ui/card";

const Messages = () => {
  const { data: messages = [], isLoading } = useGetMessagesQuery();

  const mostRecent = messages[0]; // to save time, assumed sorted on api level

  const onSend = () => {};

  if (isLoading) {
    return <Loading />;
  }

  if (!messages.length) {
    return <EmptyData />;
  }

  return (
    <section className=" h-11/12 flex flex-col gap-2 justify-between pb-4">
      <div className="flex flex-col gap-2">
        <div className="flex items-center justify-between">
          <p className="text-[14px] font-[500] text-grey">
            {mostRecent?.title} - Most recent
          </p>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant={"outline"}
                className="border-2 border-gray-150 rounded-custom text-foreground text-[12px]"
              >
                <TbCalendarTime className="pb-[2px] -mr-1" /> Sequence version
                history <ChevronDown />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-full p-[2px]">
              <RadioGroup
                defaultValue={mostRecent?.id}
                className="flex flex-col gap-0"
              >
                {messages.map((version) => {
                  return (
                    <div className="flex items-center gap-2 p-2 rounded-custom cursor-pointer min-w-[196px] hover:bg-gray-100">
                      <RadioGroupItem value={version.id} id={version.id} />
                      <Label htmlFor={version.id}>{version.title}</Label>
                    </div>
                  );
                })}
              </RadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Card>
          <CardContent className="flex flex-col gap-4">
            <div className="flex items-center justify-between gap-2">
              <Badge variant={"plain"}>
                <TbMeteor /> Connect Message
              </Badge>
              <div className="flex items-center gap-2">
                <Badge variant={"plain"}>
                  <Target /> Justification
                </Badge>
                <Switch /> <DropdownMenuSeparator />{" "}
                <p className="text-[12px]">
                  Score:{" "}
                  <span className="text-red-custom">{mostRecent?.score}</span>
                </p>
              </div>
            </div>
            <p className="text-[14px]">
              {mostRecent?.content.split("\n").map((line, idx) => (
                <span key={idx}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="flex items-center justify-between gap-2">
              <Button variant={"outline"}>
                <TbEditCircle /> Edit
              </Button>
              <div className="flex items-center gap-4">
                <Button variant={"outline"}>
                  <TbMail /> Feedback
                </Button>
                <Button variant={"outline"}>
                  <TbReload /> Regenerate
                </Button>
                <Button>
                  <TbChecks /> Approve
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="flex flex-col gap-2">
        <CustomMessageBar onSend={onSend} />
        <div className="w-full flex items-center justify-center gap-4">
          <Button
            variant={"outline"}
            className="flex items-center gap-1.5 border-blue-custom rounded-3xl py-1 px-2 h-fit"
          >
            <BsJustify className="rotate-90 mb-[2px]" /> Custom Message{" "}
            <Check />
          </Button>
          <Button
            variant={"outline"}
            className="rounded-3xl py-1 px-2 h-fit shadow-2xl"
          >
            <TbReload /> Regenerate
          </Button>
          <Button
            variant={"outline"}
            className="rounded-3xl py-1 px-2 h-fit shadow-2xl"
          >
            <Brain /> Prompt
          </Button>
        </div>
      </div>
    </section>
  );
};
export default Messages;
