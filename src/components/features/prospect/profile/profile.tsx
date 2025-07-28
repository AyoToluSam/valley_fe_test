import ErrorFallback from "@/components/common/error-fallback/error-fallback";
import Loading from "@/components/common/loading/loading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { iconTypes } from "@/constants/common";
import { useGetProspectQuery } from "@/store/api/baseApi";
import { getInitials, truncateWithEllipsis } from "@/utils/formatText";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GraduationCap, Mail, Plus, Tag, X } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import {
  TbChartArrowsVertical,
  TbUserScan,
  TbTargetArrow,
  TbBrandLinkedin,
  TbLockQuestion,
  TbScanEye,
  TbCrown,
  TbMap,
} from "react-icons/tb";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type ProfileProps = {
  prospectId: string;
};

const Profile = ({ prospectId }: ProfileProps) => {
  const {
    data: prospect,
    isLoading,
    isError,
  } = useGetProspectQuery({ id: prospectId });

  if (isLoading) {
    return <Loading />;
  }

  if (isError || !prospect) {
    return <ErrorFallback />;
  }

  return (
    <Card className="w-80 h-11/12 flex flex-col gap-8 rounded-sm">
      <CardHeader className="flex items-center gap-3">
        <div className="relative max-w-fit">
          <Avatar className="h-11 w-11">
            <AvatarImage src={prospect.avatar} alt="Profile Picture" />
            <AvatarFallback className="bg-primary/10 text-primary font-medium">
              {getInitials(prospect.name)}
            </AvatarFallback>
          </Avatar>
          <Badge className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-green-custom text-[11px] text-white w-[30px] h-[18px] rounded-4xl pt-[4px]">
            {prospect.icpFit}
          </Badge>
        </div>
        <div>
          <h4 className="font-[500] leading-tight">{prospect.name}</h4>
          <p className="text-gray-500 text-[13px]">{prospect.title}</p>
        </div>
      </CardHeader>
      <CardContent className="overflow-y-auto overflow-x-hidden p-0 [&::-webkit-scrollbar]:hidden scrollbar-hide">
        <div className="flex flex-col gap-3.5 px-6">
          <div className="flex items-center justify-between">
            <Badge variant={"plain"}>
              <TbUserScan /> ICP-Fit
            </Badge>
            <Badge
              variant={"secondary"}
              className="border-1 border-dashed bg-gray-50 border-gray-300 rounded-custom"
            >
              <TbUserScan />
              {prospect.icpFit > 80
                ? "High"
                : prospect.icpFit > 50
                ? "Medium"
                : "Low"}
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant={"plain"}>
              <TbTargetArrow /> Campaign
            </Badge>
            <Badge
              variant={"secondary"}
              className="px-3 border-1 bg-gray-custom border-gray-200 rounded-custom"
            >
              <span className="w-[5px] h-[5px]  bg-gray-500 rounded-full" />
              Early Stage Founders
            </Badge>
          </div>
          <div className="flex items-center justify-between">
            <Badge variant={"plain"}>
              <TbChartArrowsVertical className="pb-[2px]" /> Status
            </Badge>
            <Badge
              variant={"destructive"}
              className="bg-red-50 text-red-custom border-1 border-red-200 px-3 rounded-custom"
            >
              <span className="w-[5px] h-[5px] bg-red-custom rounded-full" />
              Approval Required
            </Badge>
          </div>
          <DropdownMenuSeparator className="mb-0" />
          <div>
            <div className="flex items-center justify-between">
              <Badge variant={"plain"}>
                <Tag /> Tags
              </Badge>
              <X
                size={16}
                className="text-alt cursor-pointer hover:text-red-700"
              />
            </div>
            <div className="flex justify-center flex-wrap gap-1 mt-2 px-4 py-2 border-2 border-dashed border-gray-300 rounded-custom">
              {prospect.tags
                .map(({ title, iconType }, index) => {
                  return (
                    <Badge
                      key={title + index.toString()}
                      variant={"outline"}
                      className={cn(
                        "rounded-custom text-alt text-[10px] bg-gradient-border [&>svg]:size-3",
                        iconType === "PLUS"
                          ? "rounded-custom bg-gray-200 px-1 bg-gradient-border-2 cursor-pointer"
                          : ""
                      )}
                    >
                      {iconTypes[iconType]()} {title}
                    </Badge>
                  );
                })
                .concat(
                  <Popover>
                    <PopoverTrigger asChild>
                      <Badge
                        key={"plus"}
                        variant={"outline"}
                        className={
                          "rounded-custom text-alt text-[10px] [&>svg]:size-3 px-1 bg-gradient-border cursor-pointer"
                        }
                      >
                        <Plus />
                      </Badge>
                    </PopoverTrigger>
                    <PopoverContent align="end" className="flex flex-col gap-2">
                      <div className="flex flex-col gap-1">
                        <Label htmlFor="tag" className="text-[12px]">
                          Tag Name
                        </Label>
                        <Input
                          id="tag"
                          placeholder="Enter tag name..."
                          required
                          className="text-[12px] placeholder:text-[12px]"
                        />
                      </div>
                      <div className="flex flex-col gap-1">
                        <Label htmlFor="icon" className="text-[12px]">
                          Icon Type
                        </Label>
                        <Select name="icon" required>
                          <SelectTrigger
                            id="icon"
                            className="text-[12px] w-full"
                          >
                            <SelectValue placeholder="Choose icon..." />
                          </SelectTrigger>
                          <SelectContent>
                            {Object.entries(iconTypes).map(
                              ([key, getValue], index) => {
                                return (
                                  <SelectItem
                                    key={key + index.toString()}
                                    value="key"
                                    className="capitalize"
                                  >
                                    {getValue()}
                                    {key.toLowerCase()}
                                  </SelectItem>
                                );
                              }
                            )}
                          </SelectContent>
                        </Select>
                      </div>
                      <Button className="w-full mt-[2px]">Save</Button>
                    </PopoverContent>
                  </Popover>
                )}
            </div>
          </div>
          <DropdownMenuSeparator className="mt-0" />
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <Badge variant={"plain"}>
              <TbLockQuestion /> Privacy
            </Badge>
            <Badge variant={"plain"} className="justify-start text-alt">
              {prospect.privacy}
            </Badge>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <Badge variant={"plain"}>
              <TbBrandLinkedin /> Linkedin
            </Badge>
            <Badge
              variant={"secondary"}
              className="justify-start w-full py-0 text-alt border-1 border-gray-200"
              title={prospect.linkedinUrl}
            >
              {truncateWithEllipsis(prospect.linkedinUrl, 23)}
            </Badge>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <Badge variant={"plain"}>
              <Mail /> Email
            </Badge>
            <Badge
              variant={"secondary"}
              className="justify-start border-1 text-alt  border-gray-200 py-0 w-full"
            >
              {prospect.email}
            </Badge>
          </div>
          <div className="grid grid-cols-[1fr_2fr] gap-2 items-center">
            <Badge variant={"plain"}>
              <TbMap /> Address
            </Badge>
            <Badge variant={"plain"} className="justify-start text-alt w-full">
              {truncateWithEllipsis(prospect.address, 30)}
            </Badge>
          </div>
        </div>
        <DropdownMenuSeparator className="bg-gray-100 mt-4" />
        <Accordion type="multiple">
          <AccordionItem value="intent">
            <AccordionTrigger className="px-6 py-2.75 hover:no-underline cursor-pointer">
              <Badge variant={"plain"}>
                <TbScanEye /> Intent Data
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="px-12 text-[12px] pb-2.75">
              {prospect.intentData}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="experience">
            <AccordionTrigger className="px-6  py-2.75  hover:no-underline cursor-pointer">
              <Badge variant={"plain"}>
                <TbCrown /> Experience
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="px-12 text-[12px] pb-2.75">
              {prospect.experience}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="education">
            <AccordionTrigger className="px-6  py-2.75  hover:no-underline cursor-pointer">
              <Badge variant={"plain"}>
                <GraduationCap /> Education
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="px-12 text-[12px] pb-2.75">
              {prospect.education}
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="linkedinBio">
            <AccordionTrigger className="px-6  py-2.75 border-b rounded-b-none hover:no-underline cursor-pointer">
              <Badge variant={"plain"}>
                <TbBrandLinkedin /> LinkedIn Bio
              </Badge>
            </AccordionTrigger>
            <AccordionContent className="px-12 text-[12px] pb-2.75">
              {prospect.linkedinBio}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <CardFooter className="flex flex-col items-center justify-center gap-4 mt-4 pt-4">
          <span className="text-[12px] text-muted-foreground">
            Added on {prospect.addedDate}
          </span>
          <Badge variant={"secondary"} className="text-foreground py-0">
            Report Information
          </Badge>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default Profile;
