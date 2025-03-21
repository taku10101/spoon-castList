import { fetchCastDataByUserId } from "@/data/cast";
import { CastGrid } from "@/components/cast/CastGrid";
import React from "react";
import { userList } from "@/data/userList";

export default async function Page(props: {
  searchParams: Promise<{ userId?: string; offset?: number }>;
}) {
  const searchParams = await props.searchParams;
  const userId = searchParams.userId;
  const offset = searchParams.offset || 0;
  const user = userList.find((user) => user.userId === userId);

  const offsets = user?.offsets;
  if (!userId) {
    return null;
  }
  const data = await fetchCastDataByUserId(
    userId || userList[0].userId,
    offsets ? offsets[offset] : ""
  );

  const casts = data?.results || [];

  return (
    <div style={pageContainerStyle}>
      <CastGrid casts={casts} />
    </div>
  );
}
const pageContainerStyle = {
  margin: "0 auto",
  padding: "1.5rem 5rem",
  minHeight: "100vh",
};
