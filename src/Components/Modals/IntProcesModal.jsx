import React, { useState } from 'react';
import { Modal } from '@mui/material';
import cancel from '../../assets/cancel.png';
import { useForm } from "react-hook-form";
import GreenTick from '../../assets/Vector.png';
import arrow from '../../assets/downArrow.png'
import axios from 'axios';

const IntProcesModal = ({ open, Close, datas, setData, setFourthModalOpen, SetSubmitted }) => {

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const closeModal = () => {
        Close(); 
    };

    const onSubmit = async (data) => {
        setData({ ...datas, form3: data })
        SetSubmitted(true)
        setFourthModalOpen(false);
    };

    const [rounds, setRounds] = useState([
        { id: 1, },
        { id: 2, },
        { id: 3, },
        { id: 4, },
    ]);

    const handleCancelRound = (id) => {
        setRounds((prevRounds) => prevRounds.filter((round) => round.id !== id));
    };

    const handleAddRound = () => {
        const newRound = {
            id: rounds.length + 1,
            name: `Round ${rounds.length + 1}`,
            description: 'Default Description',
        };
        setRounds((prevRounds) => [...prevRounds, newRound]);
    };

    return (
        <div>
            <Modal open={open} className='flex items-center justify-center '>
                <div className="w-[90%]  sm:w-[85%] md:w-[70%] lg:w-[60%] xl:w-[50%] 2xl:w-[45%]  bg-white rounded-[1.875rem] shadow-md relative justify-center items-center">

                    {/* Heading Section */}
                    <div>
                        <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.95rem] flex justify-center cursor-default">Create a Job</div>
                        <img src={cancel} className="w-5 h-5 absolute right-5 -mt-7 cursor-pointer" onClick={closeModal} alt="cancel" />
                    </div>

                    {/* Bullets Section */}
                    <div className='flex justify-center sm:flex-row gap-6  ml-3 sm:ml-0 mt-[1.3rem]'>
                        {/* ... (similar comments for Bullet 1 and Bullet 2) */}
                    </div>

                    {/* Grey Div1 */}
                    {/* ... (similar comments for Grey Div1) */}

                    {/* Interview Rounds List Section */}
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='w-full  flex flex-col gap-y-[0.25rem] justify-center items-center mt-[2.5rem] sm:mt-[1.5rem]'>
                            {/* Rounds Mapping Section */}
                            {rounds.map((round) => (
                                <div key={round.id} className='flex gap-2 relative w-3/4  items-center justify-center'>
                                    {/* ... (similar comments for Round Inputs) */}
                                </div>
                            ))}
                            {/* Add Round Button */}
                            <button className="w-20 h-9 mr-[60%] ml-[22%] lg:ml-[27%] mt-[0.25rem]  bg-black rounded-lg" type='button' onClick={handleAddRound}>
                                <p className="text-white text-[0.75rem] font-medium font-Inter">Add Round</p>
                            </button>
                        </div>

                        {/* Last Part Section */}
                        {/* ... (similar comments for Skills, Qualification, Finalize Questioner, Share Availability) */}

                        {/* Save Button Section */}
                        <div className='flex justify-center items-center'>
                            <button type='submit' className="w-[23%] h-9 mb-2 bg-black rounded-lg mt-[1rem] flex justify-center items-center  ">
                                <p className="text-white text-[0.875rem] font-medium font-Poppins" >Submit</p>
                            </button>
                        </div>
                    </form>
                </div>
            </Modal>
        </div>
    );
};

export default IntProcesModal;
