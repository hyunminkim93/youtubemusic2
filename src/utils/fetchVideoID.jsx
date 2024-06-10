const API_KEY = 'AIzaSyD4T3BJpx0Bjm6P9ZPuqKT2iSpcGbzgWCU';


export const fetchVideoID = async (query) => {
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(query)}&type=video&maxResults=5&key=${API_KEY}`);
    const data = await response.json();
    if (data.items && data.items.length > 0) {
        return data.items.map(item => ({
            videoID: item.id.videoId,
            title: item.snippet.title,
            artist: item.snippet.channelTitle,
            imageURL: item.snippet.thumbnails.default.url,
        }));
    }
    return [];
};