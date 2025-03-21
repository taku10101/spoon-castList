import type { Media } from "@/types/cast";
import Image from "next/image";
import { CastCardFooter } from "./CastCardFooter";
import React from "react";

interface CastCardProps {
  cast: Media;
  backgroundColor: string;
}

export function CastCard({ cast, backgroundColor }: CastCardProps) {
  const cardContainerStyle = {
    backgroundColor: backgroundColor,
    borderRadius: "1.5rem",
    overflow: "hidden",
    boxShadow:
      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  };

  const cardContentStyle = {
    position: "relative" as const,
    aspectRatio: "3 / 4",
  };

  const imageStyle = {
    objectFit: "cover" as const,
  };

  return (
    <div style={cardContainerStyle}>
      <div style={cardContentStyle}>
        <Image
          src={
            cast.contentData.media[0] || "/placeholder.svg?height=400&width=300"
          }
          alt={cast.contentData.title || "キャスト画像"}
          fill
          style={imageStyle}
        />

        {/* キャスト情報 */}
        <CastCardFooter
          title={cast.contentData.title}
          likeCount={cast.contentData.likeCount || 0}
          commentCount={cast.contentData.commentCount || 0}
          castId={cast.id}
        />
      </div>
    </div>
  );
}
