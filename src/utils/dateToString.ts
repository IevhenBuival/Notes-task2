export function dateToString(data: Date | boolean | string | number): string {
  if (data instanceof Date)
    return data.toLocaleString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
    });

  return String(data);
}
