import React, { useEffect, useState } from "react";
import { BsPlus } from "react-icons/bs";
import { BiMinus } from "react-icons/bi";
import axios from "axios";

const Questions = () => {
  const [openAns, setOpenAns] = useState(null);
  const [questions, setQuestions] = useState([]);

  const fetchData = () => {
    axios
      .get("/faq.json")
      .then((response) => {
        setQuestions(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleOpenAns = (open) => {
    setOpenAns((prevOpen) => (prevOpen === open ? null : open));
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-8">Frequently asked questions</h2>
      {questions.map((question, index) => (
        <div key={question._id} className="border border-gray-200 bg-white hover:border-gray-300 shadow-sm p-5 rounded-[5px] mt-4">
          <div onClick={() => handleOpenAns(index)} type="button" className="cursor-pointer w-full flex justify-between">
            <h2 className="text-[16px] font-semibold">{question.question}</h2>
            <span>{openAns === index ? <BiMinus className="text-2xl" /> : <BsPlus className="text-2xl" />}</span>
          </div>
          <p className={openAns === index ? "mt-2 text-gray-900 h-auto duration-300 transition-all" : "hidden"}>{question.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default Questions;
