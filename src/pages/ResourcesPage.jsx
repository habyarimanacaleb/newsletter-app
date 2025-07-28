import { Link } from 'react-router-dom';
import Header from '../components/layouts/Header.jsx';
import ResourcesCard from '../components/common/ResourcesCard.jsx';
import ResourcesData from '../assets/constants/ResourcesData.js';

const Article = () => {
  return (
    <>
    <Header />
    <section className='mb-8'>
        <header className='flex items-center justify-between px-12 py-2 bg-gray-100 '>
            <h1 className="text-3xl font-bold text-center my-12">🦾 Resources / Tools</h1>
        </header>
        <div className="articles-card px-12 py-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

        {ResourcesData.map(resource => (
          <Link to={`/resource/${resource.id}`} key={resource.id}>
            <ResourcesCard resource={resource} />
          </Link>
        ))}
        </div>
    </section>
    </>
  );
}

export default Article;