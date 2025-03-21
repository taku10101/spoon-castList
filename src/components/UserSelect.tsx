"use client";
import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { userList } from "@/data/userList";

export const UserSelect = () => {
  const handleSelectChange = (userId: string) => {
    window.history.pushState(null, "", `?userId=${userId}`);
    window.location.reload();
  };

  const users = userList;
  const userId =
    new URLSearchParams(window.location.search).get("userId") ||
    users[0]?.userId;

  return (
    <Select onValueChange={handleSelectChange} defaultValue={userId}>
      <SelectTrigger className='w-[280px]'>
        <SelectValue placeholder='Select a user' />
      </SelectTrigger>
      <SelectContent>
        {users.map((user) => (
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
