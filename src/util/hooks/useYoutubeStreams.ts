import { useState, useEffect } from "react";
import { toCamelCase } from "../helper/helperFunctions";

type Streamer = {
  name: string;
  channelId: string;
  username?: string;
};

type Video = {
  id: string;
  title: string;
  thumbnail: string;
  channelTitle: string;
  publishedAt: string;
  username?: string;
  channelId: string;
};

type DatabaseVideo = {
  id: string;
  title: string;
  thumbnail: string;
  channel_title: string;
  published_at: string;
  username?: string;
  channel_id: string;
};


export const useYouTubeStreams = (streamers: Streamer[]) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!streamers || streamers.length === 0) return;

    const fetchVideos = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `${import.meta.env.VITE_SUPABASE_FUNCTIONS_URL}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY}`,
            },
            body: JSON.stringify({ streamers }),
          }
        );

        if (!res.ok) throw new Error("Failed to fetch from Edge Function");

        const data: DatabaseVideo[] = await res.json();

        // Map each object from snake_case to camelCase
        const camelData: Video[] = data.map(toCamelCase) as Video[];

        setVideos(camelData);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [streamers]);

  return { videos, loading, error };
};
