import { useState } from "react";

import { useFilters } from "@/hooks/useFilters";
import TrainingHeader from "@/components/features/prospect/ai-training/header/header";
import TrainingHistory from "@/components/features/prospect/ai-training/history/history";

const AITraining = () => {
  const [activeTab, setActiveTab] = useState("included");
  const [search, setSearch] = useState("");

  const { toggle, selectedFilters, filterParams } = useFilters();

  return (
    <div className="flex flex-col gap-4 h-11/12">
      <TrainingHeader
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        search={search}
        setSearch={setSearch}
        toggle={toggle}
        selectedFilters={selectedFilters}
      />
      <TrainingHistory filterParams={filterParams} />
    </div>
  );
};
export default AITraining;
