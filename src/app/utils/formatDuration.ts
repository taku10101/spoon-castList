export function formatDuration(duration: number): string {
  const durationHours = Math.floor(duration / 3600);
  const durationMinutes = Math.floor(duration / 60) % 60;
  const durationSeconds = duration % 60;
  return `${
    durationHours ? durationHours + ":" : ""
  }${durationMinutes}:${durationSeconds.toString().padStart(2, "0")}`;
}
