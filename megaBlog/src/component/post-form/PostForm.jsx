import React, { useCallback } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, RTE, Select } from "..";
import appwriteService from "../../appwrite/config";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function PostForm({ post }) {
    const { register, handleSubmit, watch, setValue, control, getValues } = useForm({
        defaultValues: {
            title: post?.title || "",
            slug: post?.$id || "",
            content: post?.content || "",
            status: post?.status || "active",
        },
    });

    const navigate = useNavigate();
    const userData = useSelector((state) => state.auth.userData);

    const submit = async (data) => {
        if (post) {
            const file = data.image[0] ? await appwriteService.uploadFile(data.image[0]) : null;

            if (file) {
                appwriteService.deleteFile(post.featuredImage);
            }

            const dbPost = await appwriteService.updatePost(post.$id, {
                ...data,
                featuredImage: file ? file.$id : undefined,
            });

            if (dbPost) {
                navigate(`/post/${dbPost.$id}`);
            }
        } else {
            const file = await appwriteService.uploadFile(data.image[0]);

            if (file) {
                const fileId = file.$id;
                data.featuredImage = fileId;
                const dbPost = await appwriteService.createPost({ ...data, userId: userData ? userData.$id : null });
                
                if (dbPost) {
                    navigate(`/post/${dbPost.$id}`);
                }
            }
        }
    };

    const slugTransform = useCallback((value) => {
        if (value && typeof value === "string")
            return value
                .trim()
                .toLowerCase()
                .replace(/[^a-zA-Z\d\s]+/g, "-")
                .replace(/\s/g, "-");

        return "";
    }, []);

    React.useEffect(() => {
        const subscription = watch((value, { name }) => {
            if (name === "title") {
                setValue("slug", slugTransform(value.title), { shouldValidate: true });
            }
        });

        return () => subscription.unsubscribe();
    }, [watch, slugTransform, setValue]);

    return (
        <form onSubmit={handleSubmit(submit)} className="flex flex-col justify-center items-center  w-full my-8 py-3">
            <h1 className="text-4xl underline font-bold">{post ?"Update":"Submit"} Blog</h1>
            <div className="flex flex-row gap-3 w-4/5   justify-center mx-20">
                <div className="flex-1 flex flex-col justify-center md:w-2/3 px-4">
                    <Input
                        label="Title"
                        placeholder="Enter title"
                        className="mb-4 p-2 border rounded-md focus:outline-8 focus:border-black "
                        {...register("title", { required: true })}
                    />
                    <Input
                        label="Slug"
                        placeholder="Auto-generated slug"
                        className="mb-4 p-2 border rounded-md focus:outline-8 focus:border-black4"
                        readOnly
                        value={getValues("slug")}
                    />
                    <Input
                        label="Featured Image"
                        type="file"
                        className="mb-4 p-2 border rounded-md focus:outline-8 focus:border-black"
                        accept="image/png, image/jpg, image/jpeg, image/gif"
                        {...register("image", { required: !post })}
                    />
                    {post && (
                        <div className="mb-4">
                            <img
                                src={appwriteService.getFilePreview(post.featuredImage)}
                                alt={post.title}
                                className="w-4/5 h-auto rounded-lg"
                            />
                        </div>
                    )}
                    <Select
                        options={["active", "inactive"]}
                        label="Status"
                        className="mb-4 w-28"
                        {...register("status", { required: true })}
                    />
                    <Button type="submit" textColor="white"  className="w-[90px]">{post ?"Update":"Submit"}</Button>
                </div>

                <div className="flex-1">
                <RTE label="Content" name="content" control={control} defaultValue={getValues("content")} />
                </div>
            </div>
           
        </form>
    );
}
