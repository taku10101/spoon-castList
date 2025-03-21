"use client";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userList } from "@/data/userList";

export const UserSelect = () => {
  const [selectedUserId, setSelectedUserId] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    const userIdFromUrl = new URLSearchParams(window.location.search).get(
      "userId"
    );
    setSelectedUserId(userIdFromUrl || userList[0]?.userId);
  }, []);

  const handleSelectChange = (userId: string) => {
    const newUrl = new URL(window.location.href);
    newUrl.searchParams.set("userId", userId);
    newUrl.searchParams.set("offset", "0");
    window.history.pushState(null, "", newUrl.toString());
    window.location.reload();
    window.location.reload();
  };

  return (
    <Select onValueChange={handleSelectChange} defaultValue={selectedUserId}>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a user' />
      </SelectTrigger>
      <SelectContent>
        {userList.map((user) => (
          <SelectItem key={user.userId} value={user.userId}>
            <div>
              <span>{user.name}</span>
            </div>
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};
