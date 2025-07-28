import { X } from "lucide-react";
import { useRef, useState } from "react";
import { IoMdSend } from "react-icons/io";

const CustomMessageBar = ({
  onSend,
}: {
  onSend: (message: string) => void;
}) => {
  const [message, setMessage] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    setMessage("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={
        "relative flex items-center gap-2 border border-border rounded-xl px-4 py-3 pr-1 w-full"
      }
    >
      <input
        ref={inputRef}
        type="text"
        value={message || ""}
        placeholder={"Write a custom message..."}
        onChange={(e) => setMessage(e.target.value)}
        className="border-r-1 border-border outline-none text-[13px] text-foreground bg-transparent flex-1 placeholder:text-muted-foreground"
      />
      <IoMdSend
        onClick={() => message && onSend(message)}
        size={16}
        className="flex text-grey w-[28px]"
      />

      {message && (
        <X
          size={16}
          className="absolute right-8 text-muted-foreground cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};
export default CustomMessageBar;
