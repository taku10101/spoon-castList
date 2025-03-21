"use client";
import {
  Pagination,
  PaginationContent,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { userList } from "@/data/userList";
import { useState, useEffect } from "react";

export function PaginationComponent() {
  const [selectedOffset, setSelectedOffset] = useState<number | null>(-1);
  const [userIdFromUrl, setUserIdFromUrl] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const offsetFromUrl = new URLSearchParams(window.location.search).get(
        "offset"
      );
      const userIdFromUrl = new URLSearchParams(window.location.search).get(
        "userId"
      );
      setUserIdFromUrl(userIdFromUrl);
      setSelectedOffset(Number(offsetFromUrl) || 0);
    }
  }, []);

  const user = userList.find((user) => user.userId === userIdFromUrl);
  const offset: string[] = user?.offsets || [];
  const offsetLength = offset.length;
  const handleSelectChange = (offset: number) => {
    setSelectedOffset(offset);
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("userId", userIdFromUrl || "");
    newUrl.searchParams.set("offset", offset.toString());
    window.history.pushState(null, "", newUrl.toString());
    window.location.reload();
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          onClick={async () => {
            await handleSelectChange(selectedOffset ? selectedOffset - 1 : 0);
          }}
          //eslint-disable-next-line
          //@ts-ignore
          disabled={selectedOffset === 0 ? true : false}
        >
          戻る
        </PaginationPrevious>

        <PaginationNext
          onClick={() => {
            //eslint-disable-next-line
            //@ts-ignore
            handleSelectChange(selectedOffset + 1);
          }}
          //eslint-disable-next-line
          //@ts-ignore
          disabled={selectedOffset == offsetLength - 1 ? true : false}
        >
          次へ
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  );
}
