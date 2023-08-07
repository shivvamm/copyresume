import { Link } from 'react-router-dom';
import React from 'react';

function TemplateCard({ template }) {
    return (
        <Link to="/edittemplate">
            <div className="bg-gray-800 p-3 rounded-md">
                <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-auto mb-2"
                />
                <p className="text-lg font-semibold">{template.name}</p>
                <p>{template.description}</p>
            </div>
        </Link>
    );
}

export default TemplateCard;
