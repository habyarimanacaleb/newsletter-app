import { Link, useNavigate } from 'react-router-dom';
import ResourcesData from '../../assets/constants/ResourcesData.js';
import ResourcesCard from './ResourcesCard.jsx';
import Button from './Button.jsx';

const Resource = () => {
  const navigate = useNavigate(); // fix typo: useNavigate should be a hook outside JSX

  // Duplicate the list to allow seamless infinite scroll
  const scrollItems = ResourcesData.concat(ResourcesData);

  return (
    <section className="bg-white py-6">
      <header className='flex items-center justify-center px-4 lg:px-12 py-12 bg-gray-100'>
        <h1 className="text-6xl font-bold text-center">Popular Resources</h1>
      </header>

      <div className="scroll-wrapper px-4 lg:px-12 mt-4">
        <div className="animate-infinite-scroll">
          {scrollItems.slice(0, 10).map((resource, index) => (
            <Link to={`/resource/${resource.id}`} key={index}>
              <ResourcesCard resource={resource} />
            </Link>
          ))}
        </div>
      </div>

      <div className="flex justify-center my-12">
        <Button label="Discover all free resources >>>" onClick={() => navigate('/resources')} />
      </div>
    </section>
  );
};

export default Resource;
