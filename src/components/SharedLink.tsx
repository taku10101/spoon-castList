import Link from "next/link";
import React from "react";
import { Share } from "lucide-react";
export const SharedLink = (props: { castId: string }) => {
  const { castId } = props;
  return (
    <Link
      href={`https://spooncast.net/jp/cast/${castId}?utm_source=spoon_share&utm_medium=referral&utm_campaign=cast_share&utm_content=${castId}&utm_term=-1`}
    >
      <Share size={24} />
    </Link>
  );
};
