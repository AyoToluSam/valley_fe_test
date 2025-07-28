import { useState } from "react";

import { useFilters } from "@/hooks/useFilters";
import TrainingHeader from "@/components/features/prospect/ai-training/header/header";
import TrainingHistory from "@/components/features/prospect/ai-training/history/history";

const AITraining = () => {
  const [activeTab, setActiveTab] = useState("included");
  const [search, setSearch] = useState("");

  const { toggle, selectedFilters, filterParams } = useFilters();

  const [included, setIncluded] = useState(true);

  return (
    <div className="flex flex-col gap-4 h-11/12">
      <TrainingHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        search={search}
        setSearch={setSearch}
        toggle={toggle}
        selectedFilters={selectedFilters}
        setIncluded={setIncluded}
      />
      <TrainingHistory
        filterParams={{ ...filterParams, isIncluded: included }}
      />
    </div>
  );
};
export default AITraining;
