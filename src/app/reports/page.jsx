const Page = () => {
  return (
    <div>
      <div className="bg-[#fff] my-7 py-7 px-2 mx-2 lg:px-7 lg:mx-7 min-h-[calc(100vh-150px)] rounded-xl">
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="w-full">
            <label className="block text-[#000] text-[16px] font-[400] mb-2">
              User Name
            </label>
            <input
              type="text"
              placeholder="Type your name"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
            />

            <label className="block text-[#000] text-[16px] font-[400] mb-2  mt-[2rem]">
              Email Address
            </label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
            />

            <label className="block text-[#000] text-[16px] font-[400] mb-2 mt-[2rem]">
              End Date
            </label>
            <input
              type="date"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none text-[#000] text-opacity-[0.58]"
            />
          </div>

          <div className="w-full">
            <label className="block text-[#000] text-[16px] font-[400] mb-2">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Enter your phone number"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none "
            />

            <label className="block text-[#000] text-[16px] font-[400] mb-2 mt-[2rem]">
              Start Date
            </label>
            <input
              type="date"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none text-[#000] text-opacity-[0.58]"
            />

            <label className="block text-[#000] text-[16px] font-[400] mb-2 mt-[2rem]">
              Location
            </label>
            <select
              type="text"
              placeholder="Select Location"
              className="placeholder w-full h-[50px] py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none   text-[#000] text-opacity-[0.58] "
            >
              <option>Select Location</option>
              <option>Islamabad</option>
              <option>Rawalpindi</option>
            </select>
          </div>
        </div>

        <label className="block text-[#000] text-[16px] font-[400] mb-2 mt-[2rem]">
          Comments
        </label>
        <textarea
          placeholder="Write your comments here"
          className="placeholder w-full  py-2 px-3 bg-inputBG border border-borderColor border-opacity-[0.1] rounded shadow-none focus:outline-none min-h-[175px]"
        />
        <button
          className={`w-[149px] h-[42px] bg-btnBGColor text-white text-16 font-normal rounded-[5px] border-none mt-8`}
        >
          Save{" "}
        </button>
      </div>
    </div>
  );
};

export default Page;
