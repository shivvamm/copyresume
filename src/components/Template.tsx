import React, { useState } from 'react';
import TemplateData from '../constants/templates'; // Assuming you have a templates.js file in the assets folder
import TemplateCard from './TemplateCard'; // Import the TemplateCard component
import '../App.css';

function Gallery() {
    const [searchQuery, setSearchQuery] = useState('');

    // Filter templates based on search query
    const filteredTemplates = TemplateData.filter(template =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="text-white h-auto overflow-hidden">
            <div className="flex flex-col items-center justify-center h-full">
                <div className="w-full px-4 mt-4">
                    <input
                        type="text"
                        placeholder="Search templates..."
                        className="w-full bg-gray-800 text-white px-4 py-2 rounded-md mb-4"
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-4">
                    {filteredTemplates.map(template => (
                        <TemplateCard key={template.id} template={template} />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Gallery;
