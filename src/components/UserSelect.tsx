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
    return window.location.reload();
  };
  const users = userList;
  return (
    <Select onValueChange={handleSelectChange}>
      <SelectTrigger className='w-[180px]'>
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
