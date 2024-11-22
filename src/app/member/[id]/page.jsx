"use client";
import { base_img } from "@/app/api/image_url";
import useFetch from "@/utils/useFetch";
import { useParams } from "next/navigation";
import React from "react";



function MemberDetails() {
    const {id}=useParams();
    const {data,loading} = useFetch(`/member_details/78/${id}`);
    console.log(data)
    return (<><div className="py-5 my-10 bg-gray-100 max-w-screen-xl mx-auto px-2 flex items-center justify-center flex-col">
            <div className="h-[290px] object-cover ">
                <img className="max-w-full max-h-full" src={base_img+data?.data?.image} alt="profile_picture" />
            </div>
        <div className="text-center mt-3">
            <p className="text-lg mb-2 font-bold">{data?.data?.name}</p>
           
        </div>
        <div className="details mt-3 px-4">
            <p className="text-lg">{data?.data?.text}</p>
        </div>
        </div></>)
}

export default MemberDetails;