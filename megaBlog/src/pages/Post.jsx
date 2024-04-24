import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import { Button, Container } from "../component";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
    const [post, setPost] = useState(null);
    const { slug } = useParams();
    const navigate = useNavigate();

    const userData = useSelector((state) => state.auth.userData);

    const isAuthor = post && userData ? post.userId === userData.$id : false;

    useEffect(() => {
        if (slug) {
            service.getPost(slug).then((post) => {
                if (post) setPost(post);
                else navigate("/");
            });
        } else navigate("/");
    }, [slug, navigate]);

    const deletePost = () => {
        service.deletePost(post.$id).then((status) => {
            if (status) {
                service.deleteFile(post.featuredImage);
                navigate("/");
            }
        });
    };

    return post ? (
        <div className=" flex flex-col  mx-auto w-4/5  my-12 border-gray-500 shadow-md  border rounded-md h-[500px]">
           
                <div className="w-auto flex justify-center mb-4 relative  rounded-xl p-2 bg-white">
                    <img

                        src={service.getFilePreview(post.featuredImage)}
                        alt={post.title}
                        className="rounded-xl mt-2 aspect-auto max-h-[300px] max-w-[500px] object-contain"
                    />

                    {isAuthor && (
                        <div className="absolute right-6 top-6">
                            
                                <button className="mr-3 min-w-[86px] px-5 py-2 rounded-md bg-blue-500 text-white hover:bg-white hover:text-blue-500 hover:border hover:border-blue-500 duration-200 ">
                                <Link to={`/edit-post/${post.$id}`}> Edit</Link>
                                </button>
                            
                            <button onClick={deletePost} className="mr-3 min-w-[86px] px-5 py-2 rounded-md bg-red-500 text-white hover:bg-white hover:text-red-500 hover:border hover:border-red-500 duration-200 ">
                                Delete
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-auto mb-6  pl-5 border-gray-500 border-b-2">
                    <h1 className="text-4xl font-bold text-gray-600">Title {post.title}</h1>
                </div>
                <div className="text-lg text-gray-700 pl-5">
                    {parse(post.content)}
                </div>

        </div>
    ) : <div className="bg-red">No post Available</div>;
}
