import { Link } from "react-router-dom";

function CardNews(props){
    //console.log(props.urlToImage)
    if (props.urlToImage!=null) {
        
    
    return (
    <div className="col s12 m4" style={{height:"400px",marginTop:"5px"}}>
        <div className="card">
            <div className="card-image">
                <img src={props.urlToImage} style={{opacity: 0.5}}/>
                <span className="card-title" style={{fontWeight:700,color:"black",fontSize:"1.5em"}}>{props.title}</span>
                <Link to={`/news/${props.index}`} className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></Link>
            </div>
            <div className="card-content">
                <p>{props.description}</p>
            </div>
        </div>
    </div>
    );
    }else{
        return(null);
    }
}    


export default CardNews;