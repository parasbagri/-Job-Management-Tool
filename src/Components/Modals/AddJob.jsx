import React, { useState, useEffect } from "react";
import { Modal } from "@mui/material";
import cancel from "../../assets/cancel.png";
import GreenTick from '../../assets/Vector.png'
import { useForm } from "react-hook-form";

const AddJob = ({ open, Close, setThirdModalOpen, setSecondModalOpen, datas, setData, obj }) => {

  // Destructuring properties from useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const closeModal = () => {
    Close();
  };

  // Handling form submission
  const onSubmit = (data) => {
    setData({ form1: data })
    setSecondModalOpen(false);
    setThirdModalOpen(true);
  };

  // Field configuration for the form
  const fields = [
    { label: "Position Name", value: "position_name" },
    { label: "Company Name", value: "company_name" },
    { label: "Job Pipeline", value: "JobPipeline" },
    { label: "Add Location", value: "Location" },
    { label: "Contract Details", value: "ContractDetails" },
    { label: "Minimum Salary", value: "minimumSalary" },
    { label: "Maximum Salary", value: "maximumSalary" },
    { label: "Currency", value: "Currency" },
    { label: "Select Frequency", value: "Frequency" },
  ];

  // Reusable form field component
  const FormField = ({ label, value }) => {
    return (
      <div className="mb-4 sm:mb-2 w-full">
        <p className="text-black text-xs md:text-[0.75rem] font-semibold font-Poppins mb-2 cursor-default">
          {label}
        </p>
        <input
          className="w-full h-9 bg-gray-100 rounded-lg text-gray-500 p-3"
          {...register(value)}
        />
      </div>
    );
  };

  return (
    <div>
      <Modal open={open} className="flex items-center justify-center">
        <div className="w-[90%] sm:w-[85%] md:w-[60%] xl:w-[50%] 2xl:w-[45%] bg-white rounded-[1.875rem] shadow-md relative justify-center">

          {/* Heading Section */}
          <div>
            <div className="text-black text-[1.15rem] font-600 font-Poppins mt-[1.95rem] flex justify-center cursor-default">Create a Job</div>
            <img src={cancel} className="w-5 h-5 absolute right-5 -mt-7 cursor-pointer" onClick={closeModal} alt="cancel" />
          </div>

          {/* Bullets Section */}
          <div className="flex justify-center sm:flex-row gap-6 ml-3 sm:ml-0 mt-[1.3rem] ">
            {/* Bullet 1 */}
            {/* ... (similar comments for Bullet 2 and Bullet 3) */}
          </div>

          {/* Grey Div1 */}
          {/* ... (similar comments for Grey Div1) */}

          {/* Form Section */}
          <form className="mt-5 sm:mt-9 w-4/4 pl-6 pr-6 sm:pl-10 sm:pr-10 lg:pl-16 lg:pr-16 xl:pl-24 xl:pr-24 2xl:pl-32 2xl:pr-32 " onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-2 gap-x-11 w-[100%] ">
              {/* Mapping over form fields */}
              {fields.map((item) => (
                <FormField key={item.label} label={item.label} value={item.value} />
              ))}
            </div>

            {/* Save & Next Button */}
            <div className="flex justify-center w-full">
              <button
                className="w-[40%] h-12 bg-black rounded-lg mt-4 sm:mt-[2rem] ml-0 sm:ml-[2rem] mb-4 cursor-pointer"
              >
                <p className="text-white text-lg font-medium font-Poppins">Save & Next</p>
              </button>
            </div>

          </form>
        </div>
      </Modal>
    </div>
  );
};

export default AddJob;
