import { fetchCastDataByUserId } from "@/data/cast";
import { CastGrid } from "@/components/cast/CastGrid";
import React from "react";
import { UserSelect } from "@/components/UserSelect";
import { userList } from "@/data/userList";
import { PaginationComponent } from "@/components/cast/PaginationComponent";

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
    userId,
    offsets ? offsets[offset] : ""
  );

  const casts = data?.results || [];

  return (
    <div style={pageContainerStyle}>
      <div style={headerStyle}>
        <UserSelect />
        <PaginationComponent />
      </div>
      <CastGrid casts={casts} />
    </div>
  );
}
const pageContainerStyle = {
  margin: "0 auto",
  padding: "1.5rem 5rem",
  minHeight: "100vh",
};

const headerStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "1.5rem",
};
