
import img1 from '../../assets/Saved Pictures/Screenshot (383).png';
import img2 from '../../assets/Saved Pictures/Screenshot (380).png';
import img3 from '../../assets/Saved Pictures/Screenshot (381).png';
import img4 from '../../assets/Saved Pictures/Screenshot (382).png';
import img5 from '../../assets/Saved Pictures/Screenshot (384).png';
import img6 from '../../assets/Saved Pictures/Screenshot (385).png';
import img7 from '../../assets/Saved Pictures/Screenshot (386).png';
import img8 from '../../assets/Saved Pictures/Screenshot (376).png';
import img10 from '../../assets/Saved Pictures/Screenshot (377).png';
import img11 from '../../assets/Saved Pictures/Screenshot (378).png';
import { GrFormNextLink } from 'react-icons/gr';

const Projects = () => {
    return (
        <div>
            <h2 className="text-5xl text-center mb-5 mt-5 text-sky-500 font-extrabold">My Projects</h2>

            <div className="grid grid-cols-2 gap-2 mb-10 mt-10">
                <div className="col-span-1">
                    <h1 className="text-5xl text-center p-5 bg-white text-cyan-500 font-serif hover:scale-100 hover:text-7xl">ToysStore</h1>
                    <p className='mt-5 mb-5'>
                        ToysStore is a toy marketplace website where a user can sell and buy a wide variety of toys.The platform provides a seamless experience for users to browse, search, and interact with toys listed on the marketplace. Users can also add their own toys to sell and manage their toy inventory.

                    </p>
                    <p>
                        <a href="https://assignment-eleven-dff48.web.app/" className="href text-blue-500"> <GrFormNextLink></GrFormNextLink>
                            ToysStore
                        </a>
                    </p>
                    <ul>
                        <li><a href="https://github.com/priyab99/toy-marketplace" className="href text-blue-500">Client Side Link</a></li>
                        <li><a href="https://github.com/priyab99/toy-marketplace-server" className="href text-blue-500">Server Side Link</a></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <div className="carousel">
                        <div id="slide1" className="carousel-item relative w-full">
                            <img src={img4} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide4" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide2" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide2" className="carousel-item relative w-full">
                            <img src={img2} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide1" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide3" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide3" className="carousel-item relative w-full">
                            <img src={img3} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide2" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide4" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide4" className="carousel-item relative w-full">
                            <img src={img1} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide3" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide1" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-10 mt-10">


                <div className="col-span-1">
                    <div className="carousel">
                        <div id="slide13" className="carousel-item relative w-full">
                            <img src={img5} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide15" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide14" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide14" className="carousel-item relative w-full">
                            <img src={img6} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide13" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide15" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide15" className="carousel-item relative w-full">
                            <img src={img7} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide14" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide13" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-span-1">
                    <h1 className="text-5xl text-center p-5 bg-white text-orange-600 font-serif hover:scale-100 hover:text-7xl">Hello Foodies</h1>
                    <p className='mt-5 mb-5'>
                        This is a website that provides users with access to a collection of Indian recipes. Users can browse through a variety of dishes and view recipes and details of ingredients required to make the dish. The website also includes details about the chefs who created the recipes, providing users with an opportunity to learn about the creators behind their favorite recipes.

                    </p>
                    <p>
                        <a href="https://assignment-ten-6a2ed.web.app/" className="href text-blue-500"> <GrFormNextLink></GrFormNextLink>
                            Hello Foodies
                        </a>
                    </p>
                    <ul>
                        <li><a href="https://github.com/priyab99/chef-recipe-hunter" className="href text-blue-500">Client Side Link</a></li>
                        <li><a href="https://github.com/priyab99/chef-hunter-server" className="href text-blue-500">Server Side Link</a></li>
                    </ul>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-10 mt-10">
                <div className="col-span-1">
                    <h1 className="text-5xl text-center p-5 bg-white text-emerald-400 font-serif hover:scale-100 hover:text-7xl">SportsZone Academy</h1>
                    <p className='mt-5 mb-5'>
                        SportsZone Academy is a summer camp school website that offers various classes for students to enroll in. The website provides different roles for users, including admin, instructor, and student. Students can browse and enroll in classes by paying the respective prices, instructors can add new classes, and admins have the ability to manage users and classes.

                    </p>
                    <p>
                        <a href="https://assignment-twelve-f4bbd.web.app/" className="href text-blue-500"> <GrFormNextLink></GrFormNextLink>
                            SportsZone Academy
                        </a>
                    </p>
                    <ul>
                        <li><a href="https://github.com/priyab99/Summer-Camp-Client" className="href text-blue-500">Client Side Link</a></li>
                        <li><a href="https://github.com/priyab99/Summer-camp-server" className="href text-blue-500">Server Side Link</a></li>
                    </ul>
                </div>

                <div className="col-span-1">
                    <div className="carousel">
                        <div id="slide8" className="carousel-item relative w-full">
                            <img src={img8} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide11" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide10" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide10" className="carousel-item relative w-full">
                            <img src={img10} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide8" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide11" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>
                        <div id="slide11" className="carousel-item relative w-full">
                            <img src={img11} className="w-full" />
                            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                                <a href="#slide10" className="btn btn-circle">
                                    ❮
                                </a>
                                <a href="#slide8" className="btn btn-circle">
                                    ❯
                                </a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
