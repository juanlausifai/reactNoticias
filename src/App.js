
import './App.css';
import React,{useEffect,useState} from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./page/Home";
import News from "./page/News";
import { getNews } from "./services/newsApis";

function App() {
  //console.log(newsData);

  // Lista de noticias
  const [articles, setArticles] = useState([]);

  
  //Cantidad de noticias que ya vimos
  const [page, setPage] = useState(1);

  //Cargar noticias
  const [isLoading, setLoading] = useState(false);

  

  //Asincronico llamado a la API
  useEffect(() => {
    if (isLoading) {
      async function loadNews() {
        const res = await getNews(page,"");
        //console.log(res)
        setLoading(false);
        const newArticleList = [...articles, ...res.articles];
        setArticles(newArticleList);
        setPage(page + 1);
      }
      loadNews();
    }
  }, [isLoading, page ,articles]);

  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/news/:newsId">
            <News articles={articles}/>
          </Route>
          <Route path="/">
         

        
            <Home articles={articles}/>
            {isLoading && (  
          <div className="preloader-wrapper small active">
            <div className="spinner-layer spinner-red-only">
              <div className="circle-clipper left">
                <div className="circle"></div>
              </div><div className="gap-patch">
                <div className="circle"></div>
              </div><div className="circle-clipper right">
                <div className="circle"></div>
              </div>
            </div>
          </div>
         )}
         {!isLoading && (
            <button
            onClick={() => {
              setLoading(true);
            }}
            type="button"
            className="waves-effect waves-light btn red"
            style={{marginTop:"25px",marginBottom:"15px"}}
          >
          Más noticias
          </button>
        )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
