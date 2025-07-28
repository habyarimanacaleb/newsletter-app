const Subscribeform = ( {subscribehandler}) => {
    return (
        <form className="subscribe-form border-1 border-gray-200 p-1 rounded-lg ">
        <input type="email" placeholder="Enter your email" className="subscribe-input" />
        <button type="submit" onClick={subscribehandler} className="subscribe-button hover:bg-blue-700">Subscribe</button>
        </form>
    );
    }

export default Subscribeform;