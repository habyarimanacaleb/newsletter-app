import { Link, useNavigate } from 'react-router-dom';
import ArticleData from '../../assets/constants/statics.jsx';
import ArticleCard from './ArticleCard.jsx';

const Article = () => {
  const Navigate = useNavigate();
  return (
    <section>
        <header className='flex items-center justify-between px-4 lg:px-12 py-2 bg-gray-100 '>
            <h1 className="text-4xl font-bold text-center my-8">Article Details</h1>
            <p role='button' aria-label='see more ariticles' onClick={()=> 
              {
                console.log('See more articles clicked');
                Navigate('/articles')
              }
              } className="flex items-center justify-center text-blue-500 cursor-pointer font-semibold text-sm text transition-all"><span className='hover:underline'>See more</span> <span className=' pl-2'>→</span></p>
        </header>
        <div className="articles-card px-12 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {ArticleData.slice(0,3).map(article => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticleCard article={article} />
          </Link>
        ))}
        </div>
    </section>
  );
}

export default Article;