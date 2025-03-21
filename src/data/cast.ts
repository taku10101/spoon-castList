import { SpoonCastResponse } from "../types/cast";

export async function fetchCastDataByUserId(
  userId: string,
  offset: string = ""
): Promise<SpoonCastResponse> {
  const url = offset
    ? `https://jp-gw.spooncast.net/feed/${userId}/DJ?contentType=CAST&contentSource=FROMLIVE&excludeContentType=TALK&offset=${offset}`
    : `https://jp-gw.spooncast.net/feed/${userId}/DJ?contentType=CAST&contentSource=FROMLIVE&excludeContentType=TALK`;

  const res = await fetch(url, { cache: "force-cache" });
  return res.json();
}
