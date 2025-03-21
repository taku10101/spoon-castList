"use client";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { userList } from "@/data/userList";
import { useState, useEffect } from "react";

export function PaginationComponent() {
  const [selectedOffset, setSelectedOffset] = useState<number>();

  useEffect(() => {
    const offsetFromUrl = new URLSearchParams(window.location.search).get(
      "offset"
    );
    setSelectedOffset(Number(offsetFromUrl) || 0);
  }, []);
  const userIdFromUrl = new URLSearchParams(window.location.search).get(
    "userId"
  );
  const user = userList.find((user) => user.userId === userIdFromUrl);
  const offset: string[] = user?.offsets || [];
  const offsetLength = offset.length;
  const handleSelectChange = (offset: number) => {
    window.history.pushState(
      null,
      `?userId=${userIdFromUrl}`,
      `?offset=${offset}`
    );
    window.location.reload();
  };
  return (
    <Pagination>
      <PaginationContent>
        <PaginationPrevious
          onClick={() => {
            handleSelectChange(selectedOffset - 1);
          }}
          disabled={selectedOffset === 0}
        >
          Previous
        </PaginationPrevious>
        {offset.map((offset, index) => {
          if (offsetLength < 10) {
            return (
              <PaginationItem
                key={offset}
                onClick={() => {
                  handleSelectChange(index);
                }}
                active={selectedOffset === index}
              >
                <PaginationLink>{offset}</PaginationLink>
              </PaginationItem>
            );
          } else if (selectedOffset < 5) {
            if (index < 5) {
              return (
                <PaginationItem
                  key={offset}
                  onClick={() => {
                    handleSelectChange(index);
                  }}
                  active={selectedOffset === index}
                >
                  <PaginationLink>{offset}</PaginationLink>
                </PaginationItem>
              );
            } else if (index === 5) {
              return <PaginationEllipsis key={offset}>...</PaginationEllipsis>;
            }
          } else if (selectedOffset > 5) {
            if (index === 0) {
              return <PaginationEllipsis key={offset}>...</PaginationEllipsis>;
            } else if (
              index > selectedOffset - 3 &&
              index < selectedOffset + 3
            ) {
              return (
                <PaginationItem
                  key={offset}
                  onClick={() => {
                    handleSelectChange(index);
                  }}
                  active={selectedOffset === index}
                >
                  <PaginationLink>{offset}</PaginationLink>
                </PaginationItem>
              );
            } else if (index === offsetLength - 1) {
              return <PaginationEllipsis key={offset}>...</PaginationEllipsis>;
            }
          }
        })}
        <PaginationNext
          onClick={() => {
            handleSelectChange(selectedOffset + 1);
          }}
          disabled={selectedOffset === offsetLength - 1}
        >
          Next
        </PaginationNext>
      </PaginationContent>
    </Pagination>
  );
}
