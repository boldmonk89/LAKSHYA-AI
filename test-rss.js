async function test() {
  const CHANNEL_ID = "UCx5IVi4ELn5Wt60RiT-HvBA";
  const RSS_URL = `https://www.youtube.com/feeds/videos.xml?channel_id=${CHANNEL_ID}`;
  
  const response = await fetch(RSS_URL, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; Bot/1.0)' },
  });
  const xml = await response.text();
  
  const videos = [];
  const entries = xml.match(/<entry>([\s\S]*?)<\/entry>/g) || [];

  for (const entry of entries.slice(0, 6)) {
    const titleMatch = entry.match(/<title>(.*?)<\/title>/);
    const videoIdMatch = entry.match(/<yt:videoId>(.*?)<\/yt:videoId>/);
    
    console.log("Entry found:");
    console.log("Title Match:", titleMatch?.[1]);
    console.log("VideoId Match:", videoIdMatch?.[1]);
  }
}

test();
