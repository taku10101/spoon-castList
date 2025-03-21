import { Heart, MessageCircle } from "lucide-react";
import React from "react";
import { SharedLink } from "../SharedLink";

interface CastCardFooterProps {
  title: string;
  likeCount: number;
  commentCount: number;
  castId: string;
}

export function CastCardFooter({
  title,
  likeCount,
  commentCount,
  castId,
}: CastCardFooterProps) {
  const footerContainerStyle = {
    position: "absolute" as const,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(0, 0, 0, 0.7)",
    color: "white",
    padding: "1rem",
  };

  const titleStyle = {
    fontSize: "1.125rem",
    fontWeight: "bold",
    marginBottom: "0.75rem",
    display: "-webkit-box",
    WebkitLineClamp: 1,
    WebkitBoxOrient: "vertical" as const,
    overflow: "hidden",
  };

  const statsContainerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  };

  const statItemStyle = {
    display: "flex",
    alignItems: "center",
  };

  const statValueStyle = {
    fontSize: "0.875rem",
    marginLeft: "0.25rem",
  };

  const bottomRowStyle = {
    marginTop: "1rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  };

  const castLogoStyle = {
    fontSize: "1.5rem",
    fontWeight: "bold",
  };

  return (
    <div style={footerContainerStyle}>
      <div style={titleStyle}>{title}</div>

      <div style={statsContainerStyle}>
        <div style={statItemStyle}>
          <Heart size={16} />
          <span style={statValueStyle}>{likeCount}</span>
        </div>

        <div style={statItemStyle}>
          <MessageCircle size={16} />
          <span style={statValueStyle}>{commentCount}</span>
        </div>
      </div>

      <div style={bottomRowStyle}>
        <span style={castLogoStyle}>CAST</span>
        <SharedLink castId={castId} />
      </div>
    </div>
  );
}
