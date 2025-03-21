import type { Media } from "@/types/cast";
import { CastCard } from "./CastCard";
import React from "react";
import styles from "./CastGrid.module.css";

// カードの背景色
const cardColors = [
  "#f43f5e", // rose-500
  "#4f46e5", // indigo-600
  "#10b981", // emerald-500
  "#f59e0b", // amber-500
  "#0ea5e9", // sky-500
  "#d946ef", // fuchsia-500
];

interface CastGridProps {
  casts: Media[];
}

export function CastGrid({ casts }: CastGridProps) {
  return (
    <div className={styles.grid}>
      {casts.map((cast, index) => (
        <CastCard
          key={cast.id}
          cast={cast}
          backgroundColor={cardColors[index % cardColors.length]}
        />
      ))}
    </div>
  );
}
