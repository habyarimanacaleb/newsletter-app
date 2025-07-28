import { Link } from 'react-router-dom';
import ArticleData from '../assets/constants/statics.jsx';
import ArticleCard from '../components/common/ArticleCard.jsx';
import Header from '../components/layouts/Header.jsx';

const Article = () => {
  return (
    <>
    <Header />
    <section className='mb-8'>
        <header className='flex items-center justify-between px-12 py-2 bg-gray-100 '>
            <h1 className="text-3xl font-bold text-center my-12">Articles / Newsletters</h1>
        </header>
        <div className="articles-card px-12 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {ArticleData.map(article => (
          <Link to={`/article/${article.id}`} key={article.id}>
            <ArticleCard article={article} />
          </Link>
        ))}
        </div>
    </section>
    </>
  );
}

export default Article;