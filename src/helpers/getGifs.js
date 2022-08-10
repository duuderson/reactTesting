
 export const getGifs = async(categories)=>{
    const url=`https://api.giphy.com/v1/gifs/search?api_key=t8Wr6NZcO2Ek0VGGX7BfryFkOmfb6yX1&q=${categories}&limit=10`;
    const resp = await fetch(url);
    const {data} = await resp.json();

    const gifs = data.map(img=>({
      id: img.id,
      title: img.title,
      url: img.images.downsized_medium.url
    }))
    return gifs;
}