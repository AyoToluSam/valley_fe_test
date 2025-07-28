import Profile from "@/components/features/prospect/profile/profile";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, FileText } from "lucide-react";
import { TbInbox } from "react-icons/tb";

type ProspectProps = {
  prospectId: string;
};

const Prospect = ({ prospectId }: ProspectProps) => {
  return (
    <div className="flex gap-10 px-8 pt-8 rounded-[5px] h-full max-h-full">
      <div className="flex-1 flex flex-col">
        <Tabs defaultValue="training" className="flex-1 flex flex-col">
          <TabsList className="w-full justify-start bg-transparent px-0 py-0 h-fit border-b border-border rounded-none">
            <TabsTrigger
              value="training"
              className="w-fit max-w-fit text-muted-foreground border-b-1 data-[state=active]:[&>svg]:text-foreground data-[state=active]:border-b-foreground data-[state=active]:bg-transparent rounded-none p-3 text-sm font-medium"
            >
              <Brain className="pb-[2px]" />
              AI Training
            </TabsTrigger>
            <TabsTrigger
              value="messages"
              className="w-fit max-w-fit text-muted-foreground border-b-1 data-[state=active]:[&>svg]:text-foreground data-[state=active]:border-b-foreground data-[state=active]:bg-transparent rounded-none p-3 text-sm font-medium "
            >
              <TbInbox className="pb-[1px]" />
              Messages
            </TabsTrigger>
            <TabsTrigger
              value="research"
              className="w-fit max-w-fit text-muted-foreground border-b-1 data-[state=active]:[&>svg]:text-foreground data-[state=active]:border-b-foreground data-[state=active]:bg-transparent rounded-none p-3 text-sm font-medium"
            >
              <FileText className="pb-[2px]" />
              Research
            </TabsTrigger>
          </TabsList>

          <TabsContent value="training" className="flex-1 m-0">
            AI Training
          </TabsContent>

          <TabsContent value="messages" className="flex-1 m-0">
            Messages
          </TabsContent>

          <TabsContent value="research" className="flex-1 m-0">
            Research
          </TabsContent>
        </Tabs>
      </div>

      <Profile prospectId={prospectId} />
    </div>
  );
};
export default Prospect;
