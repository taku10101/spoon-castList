import type { Media } from "@/types/cast";
import { CastCard } from "./CastCard";
import React from "react";
import styles from "./CastGrid.module.css";

interface CastGridProps {
  casts: Media[];
}

export function CastGrid({ casts }: CastGridProps) {
  return (
    <div className={styles.grid}>
      {casts.map((cast, index) => (
        <CastCard key={`${cast.id}-${index}`} cast={cast} />
      ))}
    </div>
  );
}
