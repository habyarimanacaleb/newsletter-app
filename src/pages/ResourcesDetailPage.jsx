// src/pages/ArticleDetail.jsx
import { useNavigate, useParams } from 'react-router-dom';
import ResourcesData from '../assets/constants/ResourcesData';
import Header from '../components/layouts/Header';

const ArticleDetail = () => {
    const Navigate = useNavigate()
  const { id } = useParams();
  const resource = ResourcesData.find((r) => r.id.toString() === id);

  if (!resource) {
    return <p className="p-4 text-red-500">Resource not found.</p>;
  }

  return (

    <>
    <Header />
    <article className="max-w-3xl mx-auto p-6">
      <header className='mb-6 flex flex-col items-start'>
        <div className="flex space-x-2 mb-4 text-gray-600 text-md">
            <h3 className='hover:text-blue-400 hover:underline cursor-pointer' role='button' aria-label='navigation' onClick={()=> Navigate('/resources')}>Resources</h3>
            <span>/</span>
            <h4 className='hover:text-blue-400 hover:underline text-blue-500 cursor-pointer'>{resource.title}</h4>
        </div>
        <h1 className="text-4xl font-bold mb-4">{resource.title}</h1>
        <p className="text-gray-500 mb-6">{resource.date}</p>
      </header>
        <figure>
            <img src={resource.imageUrl} alt={resource.title} className="w-full h-[600px] object-cover mb-4 rounded-md" />
        </figure>
      <h1 className="text-3xl font-bold mb-2">{resource.title}</h1>
      <p className="text-sm text-gray-500 mb-6">{resource.date}</p>
      <p className="text-gray-700 leading-relaxed mb-2">{resource.description}</p>
      <p className="text-gray-700 leading-relaxed">{resource.content}</p>
    </article>
    </>
  );
};

export default ArticleDetail;
