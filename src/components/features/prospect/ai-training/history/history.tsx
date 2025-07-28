import EmptyData from "@/components/common/empty-data/empty-data";
import Loading from "@/components/common/loading/loading";
import TrainingItem from "@/components/features/prospect/ai-training/history/training-item/training-item";
import PromptBar from "@/components/features/prospect/ai-training/prompt-bar/prompt-bar";
import { useGetAITrainingHistoryQuery } from "@/store/api/baseApi";

type TrainingHistoryProps = {
  filterParams: Record<string, string | number | boolean>;
};

const TrainingHistory = ({ filterParams }: TrainingHistoryProps) => {
  const { data: trainingHistory = [], isLoading } =
    useGetAITrainingHistoryQuery({ params: filterParams });

  const onPrompt = () => {};

  if (isLoading) {
    return <Loading />;
  }

  if (!trainingHistory.length) {
    return <EmptyData />;
  }

  return (
    <section className="h-full flex flex-col gap-2 justify-between pb-4">
      <div className="flex flex-col w-full max-h-[500px] overflow-y-auto overflow-x-hidden [&::-webkit-scrollbar]:hidden scrollbar-hide">
        {trainingHistory.map((training, index) => (
          <TrainingItem
            key={training.id}
            training={training}
            isLast={index + 1 === trainingHistory.length}
          />
        ))}
      </div>

      <PromptBar onPrompt={onPrompt} />
    </section>
  );
};

export default TrainingHistory;
