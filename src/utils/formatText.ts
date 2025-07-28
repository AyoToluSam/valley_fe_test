export const getInitials = (name = "") => {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("");
};

export const truncateWithEllipsis = (text: string, maxLength = 18): string => {
  if (!text) return "";

  if (text.length <= maxLength) {
    return text;
  }
  return text.slice(0, maxLength) + "...";
};
