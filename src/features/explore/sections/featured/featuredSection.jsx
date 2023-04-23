import React, { Component } from "react";
import Slider from "react-slick";
import "./featuredSection.scss"
import featuredIMG1 from "../../../../assets/imgs/featuredIMG1.png"
import featuredIMG2 from "../../../../assets/imgs/featuredIMG2.png"
import featuredIMG3 from "../../../../assets/imgs/featuredIMG3.jpg"
import featuredIMG4 from "../../../../assets/imgs/featuredIMG4.png"
import featuredIMG5 from "../../../../assets/imgs/featuredIMG5.png"
import featuredIMG6 from "../../../../assets/imgs/featuredIMG6.jpg"
import featuredIMG7 from "../../../../assets/imgs/featuredIMG7.png"
import featuredIMG8 from "../../../../assets/imgs/featuredIMG8.png"
import featuredIMG9 from "../../../../assets/imgs/featuredIMG9.png"
import featuredIMG10 from "../../../../assets/imgs/featuredIMG10.jpg"
import featuredIMG11 from "../../../../assets/imgs/featuredIMG11.jpg"

export default class FeaturedSection extends Component {
    render() {
        const settings = {
            // "dots": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "arrows": true,
            "draggable": true,
            "prevArrow":
                <button type='button' className='slick-prev slick-arrow cursor-pointer'>
                    <i className="text-white bg-[#ccc] px-4 py-10 font-black text-base rounded-2xl fa-solid fa-chevron-left text-[1.5rem] hover:bg-[#aaa]"></i>
                </button>,
            "nextArrow":
                <button type='button' className='slick-next slick-arrow cursor-pointer'>
                    <i className="text-white bg-[#ccc] px-4 py-10 font-black text-base rounded-2xl fa-solid fa-chevron-right text-[1.5rem] hover:bg-[#aaa]"></i>
                </button>,
            "autoplay": true,
            "autoSpeed": 500,
        };
        return (
            <div>
                <Slider {...settings} className="featured-section mt-20 h-full relative">
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG1} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <span className="absolute top-0 left-0 text-white text-5xl font-medium mt-5 pl-7 drop-shadow-xl leading-[3.6rem]">
                            {"The LeetCode Beginer's Guide"}
                        </span>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG2} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"LeetCode's Interview Crash Course"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Data Structures and Algorithms"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"13"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"144"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG3} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Easy Collection"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Top Interview Questions"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"9"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"48"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG4} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Detailed Explanation of"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Dynamic Programming"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"6"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"55"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem]">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG5} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Introduction to Data Structure"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Arrays 101"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"6"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"31"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG6} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Get Well Prepared for"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Good Interview"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG7} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Detailed Explanation of"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"SQL Language"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG8} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Detailed Explanation of"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Graph"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG9} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Detailed Explanation of"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Heap"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG10} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Introduction to Algorithms"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Recursion I"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[28.4rem] relative">
                        <div className="featured-item-img h-[20rem] w-[28.1rem] relative">
                            <img src={featuredIMG11} alt="" className="absolute h-full w-full rounded-t-[2rem]" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[1.4rem] font-medium drop-shadow-xl mb-4">
                                {"Basic Concepts in ML"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[3.6rem]">
                                {"Machine Learning 101"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[8.4rem] relative">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium leading-[4rem]">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center relative">
                                <span className="featured-play-btn absolute top-[-40%]">
                                    <a href="/" className="featured-link block border-5 border-[#ccc] rounded-full overflow-hidden hover:shadow-xl duration-500">
                                        <i class="fa-solid fa-play text-[2rem] py-[2rem] px-[2.2rem] bg-white hover:text-[aqua] duration-500"></i>
                                    </a>
                                </span>
                                <span className="text-3xl text-[#939393] mt-16">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        );
    }
}