import react,{useState,useEffect} from 'react'
import Header from "./Header";
function ENTAPI(){
  const defaultImageUrl = 'https://www.themediaant.com/blog/wp-content/uploads/2022/09/Inshorts-Logo-StartupTalky-1024x576.png';
        const[data , newdata] = useState([]);

        const [loading,setloading] = useState(6);
          const load =()=>{
          setloading(loading+5);}
            async function getAPI(){
                const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=4d69eea6e2c244fd8361e6e240d27cfc');
                try{
                    const data = await response.json();
                    newdata(data.articles)
                }catch(error){
                    console.log(error)     
                }
            };

useEffect(()=>{
    getAPI();
},[])        
    return(
        <div>
          <h1 className="heading">Entertainment News</h1>
      {data.slice(0,loading).map((article, index) => (
        <div key={article.title || index}>
          {/* Pass the relevant data as props to the Header component */}
          <Header author={article.author} description={article.description} imgURL={article.urlToImage || defaultImageUrl} title={article.title} publishedAt={article.publishedAt
} url={article.url}
/>
        </div>
      ))}
       <div class="butn5">
  <button onClick={load} class="button5">load more</button>
</div>
    </div>
  );
}
export default ENTAPI;