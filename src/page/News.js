import {useParams} from "react-router-dom";

function News(props){
    const {newsId}=useParams();
    const {articles}=props;
    const article= articles[newsId];
    const {title,urlToImage,content,publishedAt,source,author,url}=article;
    const {name} =source
    return(
        <>
        <a style={{marginTop:"15px"}} href="javascript: history.go(-1)" className="waves-effect waves-light btn red">Volver</a>
         <div class="col s12 m7">
            <h5 class="header">{title}</h5>
            <div class="card horizontal">
            <div class="card-image">
                <img src={urlToImage}/>
            </div>
            <div class="card-stacked">
                <div class="card-content">
                <p>{content}</p>
                </div>
                <div class="card-action">
                <a href={url} target="_blank">Ver</a>
                </div>
            </div>
            </div>
        </div>
        
        </>  
    );
}

export default News;