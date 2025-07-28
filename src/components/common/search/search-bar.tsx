import { useRef } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

type SearchBarProps = {
  placeholder?: string;
  search?: string;
  onSearch: (value: string) => void;
  className?: string;
};

const SearchBar = ({
  search,
  onSearch,
  placeholder = "Search...",
  className,
}: SearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClear = () => {
    onSearch("");
    inputRef.current?.focus();
  };

  return (
    <div
      className={cn(
        "relative flex items-center gap-3 border border-border rounded-sm px-1 py-1 w-full hover:border-gray-400",
        className
      )}
    >
      <Search size={14} className="text-muted-foreground" />
      <input
        ref={inputRef}
        type="text"
        value={search || ""}
        placeholder={placeholder}
        aria-label="Search input"
        onChange={(e) => onSearch(e.target.value)}
        className="border-none outline-none text-sm text-muted-foreground bg-transparent flex-1 text-[12px] placeholder:text-muted-foreground placeholder:font-[400] "
      />
      {search && (
        <X
          size={16}
          className="absolute right-8 text-muted-foreground cursor-pointer"
          onClick={handleClear}
        />
      )}
    </div>
  );
};

export default SearchBar;
