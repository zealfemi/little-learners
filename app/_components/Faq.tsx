import { FaMinus, FaPlus } from "react-icons/fa6";

export default function Faq({
  question,
  answer,
  onClick,
  isOpen,
}: {
  question: string;
  answer: string;
  onClick: () => void;
  isOpen: boolean;
}) {
  return (
    <div
      className={`border-2 border-secondary-800 rounded-lg py-6 px-7 lg:py-8 lg:px-9 ${isOpen && "bg-primary-100"} transition-all duration-300 ease-in-out`}>
      <div className="w-full">
        <button
          className="lg:text-lg font-semibold text-secondary-800 flex justify-between items-center gap-6 lg:gap-7.5 w-full"
          onClick={() => onClick()}>
          <span className="text-left">{question}</span>
          <span className="border-2 rounded-md w-6 h-6 text-sm grid place-items-center bg-primary-300 cursor-pointer shrink-0">
            {!isOpen ? <FaPlus /> : <FaMinus />}
          </span>
        </button>

        <div
          className={`md:max-w-5/6 grid transition-all duration-300 ease-in-out overflow-hidden ${
            isOpen
              ? "grid-rows-[1fr] opacity-100"
              : "grid-rows-[0fr] opacity-0 mt-0"
          }`}>
          <div className="min-h-0">
            <div className="border-t-2 border-secondary-800 my-5 lg:my-6"></div>
            <p>{answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
