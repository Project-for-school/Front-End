import React, { Component } from "react";
import Slider from "react-slick";
import "./featuredSection.scss"
import featuredIMG1 from "../../../assets/imgs/featuredIMG1.png"
import featuredIMG2 from "../../../assets/imgs/featuredIMG2.png"
import featuredIMG3 from "../../../assets/imgs/featuredIMG3.jpg"
import featuredIMG4 from "../../../assets/imgs/featuredIMG4.png"
import featuredIMG5 from "../../../assets/imgs/featuredIMG5.png"

export default class featuredSection extends Component {
    render() {
        const settings = {
            "dots": true,
            "infinite": true,
            "speed": 500,
            "slidesToShow": 4,
            "slidesToScroll": 1,
            "arrows": true,
            "draggable": true,
        };
        return (
            <div>
                <Slider {...settings} className="featured-section mt-20 h-[284px]">
                    <div className="featured-item h-[284px] relative">
                        <div className="featured-item-img h-[200px] relative">
                            <img src={featuredIMG1} alt="" className="absolute h-full" />
                        </div>
                        <span className="absolute top-0 left-0 text-white text-5xl font-medium mt-5 pl-7 drop-shadow-xl leading-[36px]">
                            {"The LeetCode Beginer's Guide"}
                        </span>
                        <div className="bot-base flex justify-around w-full h-[84px]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex items-center">
                                <span className="text-4xl text-[#939393]">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[284px] relative">
                        <div className="featured-item-img h-[200px] relative">
                            <img src={featuredIMG2} alt="" className="absolute h-full" />
                        </div>
                        <div className="featured-title absolute flex flex-col flex-wrap top-0 left-0 mt-4 px-7">
                            <span className="text-white text-[14px] font-medium drop-shadow-xl mb-4">
                                {"LeetCode's Interview Crash Course"}
                            </span>
                            <span className="text-white text-5xl font-medium drop-shadow-xl leading-[36px]">
                                {"Data Structures and Algorithms"}
                            </span>
                        </div>
                        <div className="bot-base flex justify-around w-full h-[84px]">
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"4"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Chapters"}
                                </span>
                            </div>
                            <div className="bot-item flex flex-col justify-center items-center">
                                <span className="text-5xl font-medium">{"17"}</span>
                                <span className="text-lg text-[#939393]">
                                    {"Items"}
                                </span>
                            </div>
                            <div className="bot-item flex items-center">
                                <span className="text-4xl text-[#939393]">
                                    {"0%"}
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="featured-item h-[284px]">
                        <div className="featured-item-img h-[200px] relative">
                            <img src={featuredIMG3} alt="" className="absolute h-full" />
                        </div>
                    </div>
                    <div className="featured-item h-[284px]">
                        <div className="featured-item-img h-[200px] relative">
                            <img src={featuredIMG4} alt="" className="absolute h-full" />
                        </div>
                    </div>
                    <div className="featured-item h-[284px]">
                        <div className="featured-item-img h-[200px] relative">
                            <img src={featuredIMG5} alt="" className="absolute h-full" />
                        </div>
                    </div>

                </Slider>
            </div>
        );
    }
}