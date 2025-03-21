import { fetchCastDataByUserId } from "@/data/cast";
import { CastGrid } from "@/components/cast/CastGrid";
import React from "react";
import { Media } from "@/types/cast";
import { UserSelect } from "@/components/UserSelect";
import { userList } from "@/data/userList";
import { PaginationComponent } from "@/components/cast/PaginationComponent";

export default async function Page(props: {
  searchParams: Promise<{ userId?: string; offset?: number }>;
}) {
  const searchParams = await props.searchParams;
  const userId = searchParams.userId;
  const offset = searchParams.offset || undefined;
  const user = userList.find((user) => user.userId === userId);

  const data: Media[] = [];
  if (userId && offset) {
    const data = await fetchCastDataByUserId(userId, user?.offsets[offset]);
    return { data };
  } else if (userId) {
    const data = await fetchCastDataByUserId(userId);
    return { data };
  }

  const pageContainerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
  };

  return (
    <div style={pageContainerStyle}>
      <PaginationComponent />

      <CastGrid casts={data} />
    </div>
  );
}
