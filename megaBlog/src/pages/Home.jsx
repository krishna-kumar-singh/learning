import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import service from '../appwrite/config';
import { PostCard } from '../component';

function Home() {
    const userData = useSelector((state) => state.auth.userData);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        if (userData) {
            service.getPosts().then((value) => {
                if (value) {
                    setPosts(value.documents);
                }
            });
        }
    }, [userData]);

    if (!userData || posts.length === 0) {
        return (
            <div className="w-full h-[500px] flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-3xl font-bold mb-4">Welcome to Tech-Trends</h1>
                    <p className="text-lg mb-8">Stay up to date with the latest tech trends and insights!</p>
                    <p className="text-lg">To explore more, please log in and start sharing your tech knowledge.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="w-full py-8">
            <div className="flex flex-wrap">
                {posts.map((post) => (
                    <div key={post.$id} className="p-2 w-1/4">
                        <PostCard {...post} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Home;
