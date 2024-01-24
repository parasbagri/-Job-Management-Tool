import React, { useState } from "react";
import { Modal } from "@mui/material";
import cancel from "../../assets/cancel.png";
import { useForm } from "react-hook-form";
import GreenTick from "../../assets/Vector.png";

const JobDesModal = ({
    open,
    Close,
    datas,
    setData,
    setThirdModalOpen,
    setFourthModalOpen,
    obj
}) => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const closeModal = () => {
        Close(); // Close the JobDesModal
    };

    const onSubmit = (data) => {
        const form2 = data;
        const dummy = { ...datas, form2 };
        setData(dummy);
        setFourthModalOpen(true);
        setThirdModalOpen(false);
    };

    return (
        <div>
            <Modal open={open} className="flex items-center justify-center ">
                <div className="w-[90%]  sm:w-[85%] md:w-[60%] xl:w-[50%] 2xl:w-[45%]  bg-white rounded-[1.875rem] shadow-md relative justify-center">
                    {/* Heading Section */}
                    <div>
                        <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.95rem] flex justify-center cursor-default">
                            Create a Job
                        </div>
                        <img
                            src={cancel}
                            className="w-5 h-5 absolute right-5 -mt-7 cursor-pointer"
                            onClick={closeModal}
                            alt="cancel"
                        />
                    </div>

                    {/* Bullets Section */}
                    <div className="flex justify-center sm:flex-row gap-6  ml-3 sm:ml-0 mt-[1.3rem]">
                        {/* ... (similar comments for Bullet 1 and Bullet 2) */}
                    </div>

                    {/* Grey Div1 */}
                    <div className="w-[90%] h-[4rem] ml-6 flex items-center justify-center mt-3 bg-slate-50 rounded-[1.875rem]">
                        <p className="w-[90%] h-[3rem]  text-center text-zinc-500 text-[0.73rem] font-medium font-Poppins cursor-default">
                            A job represents a new opening, an open position, or a vacancy
                            listing. Creating a job will allow you to add candidates to that
                            job and advertise it on your career page and job boards.
                        </p>
                    </div>

                    {/* Form Fields Section */}
                    <form className="flex flex-col w-3/4 left-12 mg:left-16 lg:left-24 justify-center mt-[2.56rem] relative" onSubmit={handleSubmit(onSubmit)}>
                        {/* 1st Part - Skill Required */}
                        <div className="flex flex-row justify-start">
                            <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem] cursor-default">
                                Skill Required
                            </p>
                            <button className="w-28 h-7 bg-indigo-600 rounded  ml-[1rem] mb-[1rem]">
                                <p className="text-white text-xs font-normal font-Poppins">
                                    Suggest with AI
                                </p>
                            </button>
                        </div>
                        {/* Textfield 1 */}
                        <input
                            placeholder="skills"
                            className="p-2 w-full h-12 bg-gray-100 rounded-lg text-neutral-400 "
                            {...register("skills")}
                        />

                        {/* 2nd Part - Intern's Responsibilities */}
                        <span className="flex flex-row justify-start mt-[1.44rem]">
                            <p className="text-black text-base font-semibold font-Poppins mt-[0.3rem] cursor-default">
                                Intern's Responsibilities
                            </p>
                            <button className="w-28 h-7 bg-indigo-600 rounded  ml-[1rem] mb-[1rem]">
                                <p className="text-white text-xs font-normal font-Poppins">
                                    Edit with AI
                                </p>
                            </button>
                        </span>
                        {/* Textarea */}
                        <div className="relative">
                            <textarea placeholder="selected intern day-to-day responsibility" className=" w-full h-[10.68rem] text-neutral-400 bg-gray-100 rounded-lg p-2 " {...register("intern_responsibility")} />
                        </div>

                        {/* Save Button */}
                        <div className="flex justify-center w-full">
                            <button
                                type="submit"
                                className="w-[50%] mg:w-[43%] sm:w-[35%]  h-12 bg-black rounded-lg mt-4 sm:mt-[2rem] ml-0 sm:ml-[2rem] mb-4 cursor-pointer"
                            >
                                <p className="text-white text-lg font-medium font-Poppins">
                                    Save & Next
                                </p>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default JobDesModal;
