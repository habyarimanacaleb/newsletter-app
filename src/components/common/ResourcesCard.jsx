const ResourcesCard = ({ resource }) => {
    return (
        <article className="border-1 border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <figure>
                <img src={resource.imageUrl} alt={resource.title} className="w-full h-48 object-cover rounded-t-lg mb-4" />
                <figcaption className="text-sm text-gray-500">{resource.date}</figcaption>
            </figure>
            <h2 className="text-xl font-semibold mb-2">{resource.title.slice(0, 30)}...</h2>
            <p className="text-gray-700 mb-4">{resource.description.slice(0, 100)}...</p>
        </article>
    );
}


export default ResourcesCard;