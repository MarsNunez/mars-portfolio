import {
  AiFillGithub,
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillMessage,
} from "react-icons/ai";

import { BsStackOverflow } from "react-icons/bs";

const PersonalCard = () => {
  return (
    <div className="border border-[#454545] rounded-2xl py-8 px-8">
      <div>
        <h1 className="text-4xl">Mars Nunez</h1>
        <div>
          <h2 className="text-sm text-[#8e8e8e]">
            Software Developer <br />& Entrepeneur
          </h2>
        </div>
      </div>
      <figure className="w-64 mx-auto my-10">
        <img
          src="/img/mars.jpg"
          alt="face-image"
          className="w-full rounded-full"
        />
      </figure>

      <div className="flex items-center text-xl w-fit mx-auto">
        <h3>Hello New World</h3>
        <img
          src="/img/waving-hand.png"
          alt="waving-hand"
          className="w-7 ml-1"
        />
      </div>

      <div className="flex items-center text-xl w-fit mx-auto">
        <p>Greetings from Ireland </p>
        <img
          src="/img/ireland-flag.png"
          alt="ireland-flag"
          className="w-7 ml-1"
        />
      </div>

      <p className="text-sm text-center text-[#8e8e8e] mt-4 mb-7">
        © Mars Nunez. All Rights Reserved
      </p>

      <ul className="flex w-fit mx-auto gap-2">
        <li className="text-[#8e8e8e] border border-[#8e8e8e] p-2 text-xl rounded-full hover:text-[#2cec8c] hover:border-[#2cec8c] duration-200 ease-in-out">
          <AiFillGithub />
        </li>
        <li className="text-[#8e8e8e] border border-[#8e8e8e] p-2 text-xl rounded-full hover:text-[#2cec8c] hover:border-[#2cec8c] duration-200 ease-in-out">
          <AiFillInstagram />
        </li>
        <li className="text-[#8e8e8e] border border-[#8e8e8e] p-2 text-xl rounded-full hover:text-[#2cec8c] hover:border-[#2cec8c] duration-200 ease-in-out">
          <AiOutlineTwitter />
        </li>
        <li className="text-[#8e8e8e] border border-[#8e8e8e] p-2 text-xl rounded-full hover:text-[#2cec8c] hover:border-[#2cec8c] duration-200 ease-in-out">
          <BsStackOverflow />
        </li>
      </ul>

      <button className="flex items-center bg-[#2cec8c] text-[#262526] w-full justify-center gap-3 py-2 rounded-3xl mt-8 hover:text-[#2cec8c] hover:bg-[#262526] duration-150 ease-in-out border border-transparent hover:border hover:border-[#2cec8c]">
        <AiFillMessage /> Hit Me Up!
      </button>
    </div>
  );
};

export default PersonalCard;
