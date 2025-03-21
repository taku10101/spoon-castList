import { fetchCastDataByUserId } from "@/data/cast";
import { CastGrid } from "@/components/cast/CastGrid";
import React from "react";
import { Media } from "@/types/cast";

export default async function Page() {
  const userId = "315436729";
  const offsetList = [
    "00170793865200005875732",
    "00170533693500005805397",
    "00170309558900005751546",
    "00170139233000005708434",
    "00169973991200005665881",
    "00169514809800005545887",
    "00169342561100005497889",
    "00169230028700005467023",
    "00169100332600005431401",
    "00168830121300005345183",
    "00168413768600005211341",
  ];

  // Fetch data directly in the component

  // const firstData = await fetchCastDataByUserId(userId);
  const datas = await Promise.all(
    offsetList.map((offset) => fetchCastDataByUserId(userId, offset))
  );
  const data: Media[] = datas.reduce(
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    (acc, cur) => acc.concat(cur.results as Media[]),
    []
  );
  // console.log(data);
  // console.log(datas);
  // console.log(firstData);

  const pageContainerStyle = {
    maxWidth: "1280px",
    margin: "0 auto",
    padding: "1.5rem 1rem",
    backgroundColor: "#f3f4f6",
    minHeight: "100vh",
  };

  return (
    <div style={pageContainerStyle}>
      <CastGrid casts={data} />
    </div>
  );
}
