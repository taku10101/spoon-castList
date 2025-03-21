import { fetchCastDataByUserId } from "@/data/cast";
import { CastGrid } from "@/components/cast/CastGrid";
import React from "react";
import { Media } from "@/types/cast";
import { UserSelect } from "@/components/UserSelect";
import { userList } from "@/data/userList";

export default async function Page({
  searchParams,
}: {
  searchParams: { userId?: string };
}) {
  const userId = searchParams.userId;
  const user = userList.find((user) => user.userId === userId);

  let data: Media[] = [];

  if (user) {
    const datas = await Promise.all(
      user.offset.map((offset) =>
        fetchCastDataByUserId(userId as string, offset)
      )
    );
    data = datas.flatMap((result) => result.results as Media[]);
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
      <UserSelect />
      <CastGrid casts={data} />
    </div>
  );
}
