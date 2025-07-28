import Prospect from "@/components/features/prospect/prospect";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Archive,
  ChevronDown,
  ChevronUp,
  EllipsisVertical,
  Trash2,
  X,
} from "lucide-react";
import { useState } from "react";
import { TbHandStop } from "react-icons/tb";

const App = () => {
  const [prospectId, setProspectId] = useState<string | null>("1");
  // Set initialState with a value so the drawer is open by default, given that's the main task to see.
  // Ideally, initial state will be null, and the value is set when a prospect is selected on the list table.

  const pageCount = 540;
  const [page, setPage] = useState(1);

  return (
    <div className="flex min-h-svh flex-col items-center justify-center">
      <Drawer
        direction="right"
        open={!!prospectId}
        onOpenChange={(open) =>
          open ? setProspectId("1") : setProspectId(null)
        }
        onClose={() => setProspectId(null)}
      >
        <DrawerTrigger asChild>
          <Button variant={"outline"}>Open Drawer</Button>
        </DrawerTrigger>

        <DrawerContent className="min-w-[1090px] max-h-full p-2.5 bg-gray-50">
          <DrawerHeader className="flex flex-row items-center justify-between py-2">
            <div className="flex flex-row items-center gap-2">
              <DrawerClose>
                <X
                  size={14}
                  className="cursor-pointer transition-transform hover:scale-110"
                />
              </DrawerClose>
              <ChevronUp
                onClick={() =>
                  setPage((prev) => (prev < pageCount ? prev + 1 : prev))
                }
                size={26}
                className="text-muted-foreground p-[4px] border-1 border-border rounded-[4px] cursor-pointer transition-transform hover:scale-110"
              />
              <ChevronDown
                onClick={() => setPage((prev) => (prev > 1 ? prev - 1 : prev))}
                size={26}
                className="text-muted-foreground p-[4px] border-1 border-border rounded-[4px] cursor-pointer transition-transform hover:scale-110"
              />
              <DrawerTitle className="font-[500] text-[12px]">
                {page} of 540 in{" "}
                <span className="underline">Valley Sales Strategy</span>
              </DrawerTitle>
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <EllipsisVertical
                  size={26}
                  className="text-gray-500 p-[4px] border-1 border-transparent hover:border-border rounded-[4px] cursor-pointer"
                />
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="min-w-[180px] p-[2px]"
              >
                <DropdownMenuItem className="text-[12px] font-[500] text-foreground cursor-pointer [&_svg:not([class*='size-'])]:size-3.5">
                  <Archive className="pb-[1px]" /> Archive
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[12px] font-[500] text-foreground cursor-pointer [&_svg:not([class*='size-'])]:size-3.5">
                  <Trash2 className="pb-[1px]" /> Delete
                </DropdownMenuItem>
                <DropdownMenuItem className="text-[12px] font-[500] text-foreground cursor-pointer [&_svg:not([class*='size-'])]:size-3.5">
                  <TbHandStop className="pb-[1px]" /> Do Not Contact
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </DrawerHeader>

          <Prospect prospectId={prospectId!} />
        </DrawerContent>
      </Drawer>
    </div>
  );
};

export default App;
