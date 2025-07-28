import Subscribeform from "./SubscribeForm";

const Hero = () => {
    return (
        <div className="hero flex flex-col items-center justify-center py-20 border-b border-gray-200">
            <section className="text-center max-w-4xl mx-auto px-4">
                <h1 className="text-6xl lg:text-8xl text-center font-bold">Explore with <span className="underline underline-offset-2">ETBnews</span></h1>
                <p className="text-lg text-center w-full  lg:w-[600px] py-6 mx-auto">We are a community of wanderers, storytellers and culture-seekers sharing tales and inspiring others to explore the world's uncharted corners.</p>
            </section>

            <div className="py-6">
                <Subscribeform />
            </div>
        </div>
    );
}


export default Hero;