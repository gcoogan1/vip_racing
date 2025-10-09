import { useEffect, useState } from "react";

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
};

export const useYouTubeStreams = (streamers: Streamer[]) => {
  const [videos, setVideos] = useState<Video[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        setLoading(true);
        const results = await Promise.all(
          streamers.map(async (s) => {
            // Check for live stream first
            const liveRes = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${s.channelId}&eventType=live&type=video&key=${apiKey}`
            );
            const liveData = await liveRes.json();
            if (liveData.items && liveData.items.length > 0) {
              const liveItem = liveData.items[0];
              return {
                id: liveItem.id.videoId,
                title: liveItem.snippet.title,
                thumbnail: liveItem.snippet.thumbnails.high.url,
                channelTitle: liveItem.snippet.channelTitle,
                publishedAt: liveItem.snippet.publishedAt,
                username: s.username || liveItem.snippet.channelTitle,
              };
            }

            // If not live, fetch the latest video
            const res = await fetch(
              `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${s.channelId}&maxResults=1&order=date&type=video&key=${apiKey}`
            );
            const data = await res.json();
            const item = data.items?.[0];
            return {
              id: item?.id?.videoId,
              title: item?.snippet?.title,
              thumbnail: item?.snippet?.thumbnails?.high?.url,
              channelTitle: item?.snippet?.channelTitle,
              publishedAt: item?.snippet?.publishedAt,
              username: s.username || item?.snippet?.channelTitle,
            };
          })
        );

        setVideos(results.filter(Boolean));
      } catch (err) {
        console.error(err);
        setError("Failed to fetch videos");
      } finally {
        setLoading(false);
      }
    };

    fetchVideos();
  }, [streamers, apiKey]);

  return { videos, loading, error };
};
