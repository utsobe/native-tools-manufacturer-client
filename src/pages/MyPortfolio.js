import React from 'react';

const MyPortfolio = () => {
    return (
        <div className='bg-white'>
            <div className=' lg:max-w-7xl mx-auto px-6 lg:px-28 py-20'>
                <div className='mb-8'>
                    <h2 className='text-3xl font-bold'>MD MEHEDI HASAN UTSOBE</h2>
                    <p className='text-xl'>mmhutsobe01@gmail.com</p>
                    <p className='text-xl'>Diploma in Software Technology | Shaanxi Polytechnic Institute, Shaanxi, China</p>
                </div>
                <div className='mb-8'>
                    <h2 className='text-2xl mb-2 font-bold'>SKILLS</h2>
                    <p><span className='font-bold'>Expertise:</span>  ES6, Rest API, React, React Router,
                        React Hook, SPA, HTML5, CSS3, Tailwind,
                        Bootstrap, Daisy UI, JavaScript</p>

                    <p><span className='font-bold'>Comfortable:</span> Express JS, MongoDB, Context
                        API, JWT Auth, React Query</p>

                    <p><span className='font-bold'>Familiar:</span> Node JS, Mongoose, Material-
                        UI, Payment Getaways</p>

                    <p><span className='font-bold'>Tools:</span> VS Code, Github, Chrome Dev
                        Tool, Firebase, Heroku, Netlify,
                        Photoshop, Figma</p>
                </div>
                <div className='mb-8'>
                    <h2 className='text-2xl mb-2 font-bold'>PROJECTS</h2>
                    <div className='mb-4'>
                        <h2 className='font-bold'>CARGHOOR | <a href="https://car-ghoor.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a></h2>
                        <p>• Using email/password or social account login, you can enjoy managing your car inventory/stock by
                            reduce or add quantity and delete or add inventory item.</p>
                        <p><span className='font-bold'>• Technologies:</span> React, React Router, React Firebase Hooks, Firebase, JWT Auth, Express JS, Node JS,
                            MongoDB, React Bootstrap.</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-bold'>The Fitness Folk | <a href="https://the-fitness-folk.web.app/" target="_blank" rel="noopener noreferrer">Live Site</a></h2>
                        <p>• With this website you can book services of a personal trainer. To book services you have to login or
                            register with email/password or any of social logins.</p>
                        <p><span className='font-bold'>• Technologies:</span> React, React Router, React Firebase Hooks, Firebase, Bootstrap.</p>
                    </div>
                    <div className='mb-4'>
                        <h2 className='font-bold'>T-Shirt Shop | <a href="https://product-analysis-web-tshirt-shop.netlify.app/" target="_blank" rel="noopener noreferrer">Live Site</a></h2>
                        <p>• This is a product analysis website and it also show the reviews of customers.</p>
                        <p><span className='font-bold'>• Technologies:</span> React, React Router, JSON, Recharts, Axios, Tailwind</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;