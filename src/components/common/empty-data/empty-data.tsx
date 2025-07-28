import { Inbox } from "lucide-react";

const EmptyData = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 h-400px">
      <Inbox size={40} />
      <p>No items to display at this time.</p>
    </div>
  );
};

export default EmptyData;
