import axios from 'axios';
import React, { useEffect, useState } from 'react';
import SingleTool from './SingleTool';

const Tools = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/tool').then(res => setTools(res.data));
    }, [tools])

    return (
        <div className='lg:max-w-7xl mx-auto lg:px-12'>
            <h2 className='text-secondary text-4xl font-bold my-12 text-center'>Latest Tools</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 px-4'>
                {
                    tools.map(tool => <SingleTool key={tool._id} tool={tool}></SingleTool>)
                }
            </div>
        </div>
    );
};

export default Tools;