
export const FetchGifs = async(category) => {
    const apiKey = 'VRt5Q8IbTb6JnOUX2KbVW6CSjob0IDl0'
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=${10}`;
    const response = await fetch(url);
    const {data} = await response.json();
    const gifs = data.map(gif => ({
        id:gif.id,
        title:gif.title,
        image:gif.images.downsized_medium.url
    }));
    return gifs;
}
