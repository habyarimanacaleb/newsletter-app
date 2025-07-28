// src/pages/ArticleDetail.jsx
import { useNavigate, useParams } from 'react-router-dom';
import articlesData from '../assets/constants/statics'; // Or fetch from API
import Header from '../components/layouts/Header';

const ArticleDetail = () => {
    const Navigate = useNavigate()
  const { id } = useParams();
  const article = articlesData.find((a) => a.id.toString() === id);

  if (!article) {
    return <p className="p-4 text-red-500">Article not found.</p>;
  }

  return (
    <>
    <Header />
    <article className="max-w-3xl mx-auto p-6">
      <header className='mb-6 flex flex-col items-start'>
        <div className="flex space-x-2 mb-4 text-gray-600 text-md">
            <h3 className='hover:text-blue-400 hover:underline cursor-pointer' role='button' aria-label='navigation' onClick={()=> Navigate('/articles')}>Articles</h3>
            <span>/</span>
            <h4 className='hover:text-blue-400 hover:underline cursor-pointer text-blue-500'>{article.title}</h4>
        </div>
        <h1 className="text-4xl font-bold mb-4">{article.title}</h1>
        <p className="text-gray-500 mb-6">{article.date}</p>
      </header>
        <figure>
            <img src={article.imageUrl} alt={article.title} className="w-full h-[600px] object-cover mb-4 rounded-md" />
        </figure>
      <h1 className="text-3xl font-bold mb-2">{article.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{article.date}</p>
      <p className="text-gray-700 leading-relaxed mb-2">{article.description}</p>
      <p className="text-gray-700 leading-relaxed">{article.content}</p>
    </article>
    </>
  );
};

export default ArticleDetail;
