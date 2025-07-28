import {
  formatTrainingContent,
  formatTrainingTitle,
} from "@/components/features/prospect/ai-training/history/training-item/_utils";
import { DropdownMenuSeparator } from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

import type { TrainingHistory } from "@/store/data/ai-training";
import { Check } from "lucide-react";

type TrainingItemProps = {
  training: TrainingHistory;
  isLast: boolean;
};

const TrainingItem = ({ training, isLast }: TrainingItemProps) => {
  return (
    <div className="flex gap-4 min-w-full">
      <div className="flex flex-col items-center pt-[2px]">
        <span className="bg-blue-custom flex items-center justify-center p-[1px] rounded-[5px]">
          <Check size={10} className="text-white" />
        </span>
        <DropdownMenuSeparator
          className={cn("w-[1px] h-full m-0", isLast ? "opacity-0 hidden" : "")}
        />
      </div>
      <div className="flex-1 flex flex-col gap-3 pb-4">
        {formatTrainingTitle(training)}
        {formatTrainingContent(training)}
      </div>
    </div>
  );
};

export default TrainingItem;
