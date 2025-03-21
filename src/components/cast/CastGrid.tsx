import type { Media } from "@/types/cast";
import { CastCard } from "./CastCard";
import React from "react";
import styles from "./CastGrid.module.css";

// カードの背景色
const cardColors = [
  "#f1faff", // sky-500
  "#94dcfd",
];

interface CastGridProps {
  casts: Media[];
}

export function CastGrid({ casts }: CastGridProps) {
  return (
    <div className={styles.grid}>
      {casts.map((cast, index) => (
        <CastCard
          key={`${cast.id}-${index}`} // インデックスを追加して一意のキーを生成
          cast={cast}
          backgroundColor={cardColors[index % cardColors.length]}
        />
      ))}
    </div>
  );
}
