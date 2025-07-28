export const formatTimestamptoDate = (
  timestamp: string,
  includeAgo = false
) => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
    hour12: true,
  };

  if (includeAgo) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffSec = Math.floor(diffMs / 1000);
    const diffMin = Math.floor(diffSec / 60);
    const diffHour = Math.floor(diffMin / 60);
    const diffDay = Math.floor(diffHour / 24);
    const diffWeek = Math.floor(diffDay / 7);
    const diffMonth = Math.floor(diffDay / 30);
    const diffYear = Math.floor(diffDay / 365);

    if (diffYear > 0) {
      return `${diffYear} year${diffYear > 1 ? "s" : ""} ago`;
    } else if (diffMonth > 0) {
      return `${diffMonth} month${diffMonth > 1 ? "s" : ""} ago`;
    } else if (diffWeek > 0) {
      // return `${diffWeek} week${diffWeek > 1 ? "s" : ""} ago`;
      return `${diffDay} day${diffDay > 1 ? "s" : ""} ago`;
    } else if (diffDay > 0) {
      return `${date.toLocaleString("en-US", options)} (${diffDay} day${
        diffDay > 1 ? "s" : ""
      } ago)`;
    } else if (diffHour > 0) {
      return `${date.toLocaleString("en-US", options)} (${diffHour} hour${
        diffHour > 1 ? "s" : ""
      } ago)`;
    } else if (diffMin > 0) {
      return `${date.toLocaleString("en-US", options)} (${diffMin} minute${
        diffMin > 1 ? "s" : ""
      } ago)`;
    } else {
      return "Just now";
    }
  }

  return date.toLocaleString("en-US", options);
};
