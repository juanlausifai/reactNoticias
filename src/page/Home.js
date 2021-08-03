import CardNews from "../components/CardNews";


function Home(props){
    return(
        <>
        <div className="row">
        <h1>News API</h1>
        </div>
        <div className="row">
        {props.articles.map((e,index)=>{
          return (
           <div key={e.url}> 
            <CardNews index={index} description={e.description} urlToImage={e.urlToImage} title={e.title}/>
           </div>  
          );
        })
        }
     </div>
     </>  
    );
}

export default Home;