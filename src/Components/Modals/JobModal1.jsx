// JobModal1.jsx
import React from "react";
import cancelIcon from "../../assets/cancel.png";
import formIcon from "../../assets/form.png";
import { Modal } from "@mui/material";

const JobModal1 = ({
  open,
  closeModal,
  setSecondModalOpen,
  setFirstModalOpen,
  setData,
}) => {

  // Close the current modal
  const handleClose = () => {
    closeModal();
  };

  // Move to the next modal when clicking on the inner div
  const handleNextModalClick = () => {
    setSecondModalOpen(true);
    setFirstModalOpen(false);
  };

  return (
    <>
      <Modal open={open} className="flex items-center justify-center">
        <div className="w-[50rem] h-[25rem] sm:w-[85%] md:w-[60%] xl:w-[50%] 2xl:w-[45%] bg-white rounded-[1.875rem] shadow-md relative justify-center items-center">
          {/* Modal Heading */}
          <div className="h-[5rem] text-black text-xl font-Poppins mt-[1rem] flex justify-center items-center">
            Create a Job
          </div>

          {/* Cancel Button */}
          <img
            src={cancelIcon}
            className="w-5 h-5 absolute right-3 top-4 cursor-pointer"
            onClick={handleClose}
            alt="cancel"
          />

          {/* Inner Content */}
          <div className="w-[30rem] h-[15rem] sm:w-[24rem] md:w-[27rem] xl:w-[41.2rem] rounded-3xl m-2 bg-slate-200  flex justify-center items-center m-6 sm:m-4 ">
            {/* Next Modal Button */}
            <div
              id='inner-div'
              onClick={handleNextModalClick}
              className="w-28 h-[7.5rem] bg-white rounded-xl border border-indigo-600 flex flex-col items-center justify-center cursor-pointer"
            >
              <img
                src={formIcon}
                className="w-8 h-8 relative mb-[1.06rem]"
                alt="form"
              />
              <p className="text-indigo-600 text-xs font-Poppins">
                Post Job With AI
              </p>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default JobModal1;
