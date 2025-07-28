import { X } from "lucide-react";
import { useRef, useState } from "react";
import { TbSparkles } from "react-icons/tb";

const PromptBar = ({ onPrompt }: { onPrompt: (prompt: string) => void }) => {
  const [prompt, setPrompt] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setPrompt("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={
        "relative flex items-center gap-2 border border-border rounded-4xl px-4 py-[4px] pr-1 w-full"
      }
    >
      <input
        ref={inputRef}
        type="text"
        value={prompt || ""}
        placeholder={"Prompt to train messaging style..."}
        onChange={(e) => setPrompt(e.target.value)}
        className="border-none outline-none text-[13px] text-foreground bg-transparent flex-1 placeholder:text-muted-foreground"
      />
      <TbSparkles
        onClick={() => prompt && onPrompt(prompt)}
        size={28}
        className="text-muted-foreground rounded-full bg-background p-1.5 border-1 border-border shadow-lg"
      />

      {prompt && (
        <X
          size={16}
          className="absolute right-8 text-muted-foreground cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};
export default PromptBar;
