import React from 'react';
import { Link } from 'react-router-dom';
import service from '../appwrite/config';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="block mb-6">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
                <img className="w-full h-48 object-cover" src={service.getFilePreview(featuredImage)} alt={title} />
                <div className="p-4">
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-sm text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed gravida enim vel vehicula convallis.</p>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
