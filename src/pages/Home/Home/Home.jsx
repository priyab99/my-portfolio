import image from '../../../assets/Saved Pictures/img1.jpg'

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl ml-10" />
                    <div>
                        <h1 className="text-5xl font-bold">Hi, I am Priya Barua</h1>
                        <p className="py-6">I am a dedicated MERN Stack Web Developer. <br/> I am a hard-wroking and passionate person. <br/> Growing and improving day by day</p>
                        <button className="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;