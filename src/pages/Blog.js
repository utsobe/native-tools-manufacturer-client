import React, { useState } from 'react';
import Loading from '../shared/Loading';

const Blog = () => {
    const products = [
        { name: 'bycycle', price: 500 },
        { name: 'car', price: 5040 },
        { name: 'plane', price: 5400 },
    ];


    return (
        <div className='bg-white'>
            <div className=' lg:max-w-7xl mx-auto px-6 lg:px-28 py-20'>
                <div className='grid lg:grid-cols-2 gap-12'>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>How will you improve the performance of a React Application?</h2>
                        <li>Keeping component state local where necessary.</li>
                        <li>Memoizing React components to prevent unnecessary re-renders.</li>
                        <li>Code-splitting in React using dynamic import</li>
                        <li>Windowing or list virtualization in React.</li>
                        <li>Lazy loading images in React.</li>
                    </div>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>How does prototypical inheritance work?</h2>
                        <p>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>Why you do not set the state directly in React. For example, if you have const [products, setProducts] = useState([]). Why you do not set products = [...] instead, you use the setProducts</h2>
                        <p>From example If I set state directly as set products = [...] in react than it will return parsing error and the return value can't be read by the state. For this reason I'm not directly set the state.</p>
                    </div>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                        <p>
                            const search = 'car';<br />
                            const result = products.find('product =&#10148; product.name === search');<br />
                            console.log(result);
                        </p>
                    </div>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>What is a unit test? Why should write unit tests?</h2>
                        <p>Unit testing ensures that all code meets quality standards before it's deployed. This ensures a reliable engineering environment where quality is paramount. Over the course of the product development life cycle, unit testing saves time and money, and helps developers write better code, more efficiently.</p>
                    </div>
                    <div className='p-5 shadow-xl rounded-xl'>
                        <h2 className='text-xl font-bold mb-2'>What are the different ways to manage a state in a React application?</h2>
                        <ul>
                            <li>Local state.</li>
                            <li>Global state.</li>
                            <li>Server state.</li>
                            <li>URL state.</li>
                            <li>Communication State</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;