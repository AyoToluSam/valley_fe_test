import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import SearchBar from "@/components/common/search/search-bar";
import { filterTypes } from "@/store/data/ai-training";
import type { Filters } from "@/hooks/useFilters";
import { TbCopy, TbEdit, TbFilter, TbSignature } from "react-icons/tb";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

type TrainingHeaderProps = {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  selectedFilters: Filters[];
  toggle: (filter: Filters, isChecked: boolean) => void;
  setIncluded: React.Dispatch<React.SetStateAction<boolean>>;
};

const TrainingHeader = ({
  activeTab,
  setActiveTab,
  search,
  setSearch,
  selectedFilters,
  toggle,
  setIncluded,
}: TrainingHeaderProps) => {
  return (
    <div className="flex items-center justify-between gap-2">
      <div className="flex gap-2">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList className="rounded-custom p-0.5">
            <TabsTrigger
              value="included"
              className="rounded-custom text-muted-foreground data-[state=active]:text-foreground text-[12px] px-2.5"
              onClick={() => setIncluded(true)}
            >
              Included
            </TabsTrigger>
            <TabsTrigger
              value="excluded"
              className="rounded-custom text-muted-foreground data-[state=active]:text-foreground text-[12px] px-2.5"
              onClick={() => setIncluded(false)}
            >
              Excluded
            </TabsTrigger>
          </TabsList>
        </Tabs>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Badge
              variant="outline"
              className="bg-background px-3 rounded-custom border-2 border-gray-100"
            >
              <TbFilter />
              Types
            </Badge>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-fit p-0">
            <DropdownMenuLabel className="p-0">
              <SearchBar
                search={search}
                onSearch={setSearch}
                placeholder="Search types"
              />
            </DropdownMenuLabel>
            <div className="p-0.5">
              {filterTypes.map((type) => {
                const isChecked = selectedFilters.some(
                  (filter) => filter.value === type.value
                );
                return (
                  <DropdownMenuItem
                    key={type.value}
                    className="flex gap-8 justify-between"
                  >
                    <div className="flex items-center gap-1">
                      <Checkbox
                        className="w-[12px] h-[12px]"
                        checked={isChecked}
                        onCheckedChange={(checked) => toggle(type, !checked)}
                      />
                      <Label className="text-[12px] text-foreground">
                        {type.label}
                      </Label>
                    </div>
                    <span className="text-[10px] text-alt">{type.count}</span>
                  </DropdownMenuItem>
                );
              })}
            </div>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant={"outline"}
            className="border-2 border-gray-150 rounded-custom text-foreground text-[12px]"
          >
            <TbSignature className="-mr-1" /> Zayd's Writing Style{" "}
            <ChevronDown />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className="min-w-[180px] p-[2px]">
          <DropdownMenuItem className="text-[12px] font-[500] text-foreground">
            <TbEdit /> Edit
          </DropdownMenuItem>
          <DropdownMenuItem className="text-[12px] font-[500] text-foreground">
            <TbCopy /> Duplicate
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default TrainingHeader;
