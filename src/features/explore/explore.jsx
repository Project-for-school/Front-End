import { Fragment } from "react";
import "./explore.scss"
import FeaturedSection from "./sections/featuredSection";

const ExplorePage = () => {
    return (
        <Fragment>
            <div className="content-wrapper w-full h-full">
                <div className="navigation-base w-[1100px] flex justify-between items-end ml-auto mr-auto mt-14">
                    <div className="page-heading inline-block">
                        <h3 className="text-2xl font-medium text-[#B0B0B0]">
                            {"Welcome to"}
                        </h3>
                        <h1 className="font-medium text-5xl text-[#585858] mt-3">
                            {"Leetcode Explore"}
                        </h1>
                    </div>
                    <div className="toll-set-base inline-block">
                        <ul className="list-tool flex">
                            <li className="tool-item text-4xl text-[#B0B0B0] cursor-pointer hover:text-[#0D6EFD] duration-500 relative">
                                <i class="fa-regular fa-star"></i>
                                <span className="text-xl text-[#303030] rounded-2xl bg-white shadow-md px-3 py-2 absolute left-[-18px] bottom-[-30px] hidden">
                                    {"Favorite"}
                                </span>
                            </li>
                            <li className="tool-item text-4xl text-[#B0B0B0] cursor-pointer ml-10 hover:text-[#0D6EFD] duration-500 relative">
                                <i class="fa-solid fa-clock"></i>
                                <span className="text-xl text-[#303030] rounded-2xl bg-white shadow-md px-3 py-2 absolute left-[-18px] bottom-[-30px] hidden">
                                    {"History"}
                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="popular-section w-[1100px] mx-auto mt-[100px]">
                    <div className="category-title flex justify-between">
                        <h1 className="font-medium text-5xl text-[#585858]">
                            {"Featured"}
                        </h1>
                        <button className="text-[#2194FF] text-xl font-semibold shadow-lg rounded-3xl">
                            <a href="/" className="py-3 px-4">{"More"}</a>
                        </button>
                    </div>
                    <FeaturedSection />
                </div>
            </div>
        </Fragment>
    );
}

export default ExplorePage;