export async function getNews(page = 1, searchText = "") {
    /*let postFix = "";
    if (searchText) {
      postFix = `&q=${searchText}`;
    }*/
  
    return fetch(
      `https://newsapi.org/v2/top-headlines?country=ar&apiKey=27941fa8fe6147d48254a64341db462f&sortBy=popularity&pageSize=20&page=${page}`
    )
      .then((data) => {
        //console.log(data);
        return data.json();
      })
      .catch((e) => console.error(e));
  }