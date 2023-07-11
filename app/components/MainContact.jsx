import Badge from "./Badge";
import { BsChatDotsFill } from "react-icons/bs";

const MainContact = () => {
  return (
    <section className="pt-24 pb-8">
      <Badge name={"contact"} icon={<BsChatDotsFill />} />
      <h2 className="mt-12 mb-10 text-4xl">
        Let's Work <span className="text-[#2cec8c]">Together!</span>
      </h2>
      <p className="text-red-500 text-sm">
        * Marked fields are required to fill.
      </p>
      <div className="max-w-[35rem] mt-7 grid grid-cols-2 gap-y-4 gap-x-6">
        <div>
          <label htmlFor="name" className="uppercase text-sm">
            Full name <span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="text"
            id="name"
            placeholder="Your full name"
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 w-full placeholder:text-[#8e8e8e]"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="email" className="uppercase text-sm">
            Email <span className="text-red-500">*</span>
          </label>
          <br />
          <input
            type="text"
            id="email"
            placeholder="Your email adress"
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 w-full placeholder:text-[#8e8e8e]"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="phone" className="uppercase text-sm">
            Phone{" "}
            <span className="text-[#8e8e8e] text-xs capitalize">
              (optional)
            </span>
          </label>
          <br />
          <input
            type="text"
            id="phone"
            placeholder="Your phone number"
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 w-full placeholder:text-[#8e8e8e]"
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="subject" className="uppercase text-sm">
            Subject <span className="text-red-500">*</span>
          </label>
          <br />
          <select
            name="options"
            id="subject"
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 pb-3 w-full placeholder:text-[#8e8e8e]"
          >
            <option defaultValue className="text-black">
              Select a Subject
            </option>
            <option value="1" className="text-black">
              Option 01
            </option>
            <option value="2" className="text-black">
              Option 02
            </option>
            <option value="3" className="text-black">
              Option 03
            </option>
          </select>
        </div>
        <div className="col-span-2">
          <label htmlFor="budget" className="uppercase text-sm">
            Your Budget{" "}
            <span className="text-[#8e8e8e] text-xs capitalize">
              (optional)
            </span>
          </label>
          <br />
          <input
            type="text"
            id="budget"
            placeholder="A range budget for your project"
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 w-full placeholder:text-[#8e8e8e]"
            autoComplete="off"
          />
        </div>
        <div className="col-span-2">
          <label htmlFor="message" className="uppercase text-sm">
            Message
          </label>
          <br />
          <textarea
            id="message"
            placeholder="Write your message here..."
            className="outline-none bg-transparent border-b-2 border-[#8e8e8e] focus:border-[#2cec8c] py-2 w-full placeholder:text-[#8e8e8e] h-28 resize-none"
          ></textarea>
        </div>
        <button className="w-fit px-5 bg-[#2cec8c] text-[#262526] py-2 rounded-3xl mt-8 hover:text-[#2cec8c] hover:bg-[#262526] duration-150 ease-in-out border border-transparent hover:border hover:border-[#2cec8c]">
          Send Message
        </button>
      </div>
    </section>
  );
};

export default MainContact;
