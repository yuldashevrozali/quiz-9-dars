import React from "react";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: any;
  questionNr: number;
  totalQuestions: number;
};
const Questioncard: React.FC<Props> = ({ question,
  answers,
  callback,
  userAnswer,
  questionNr,
  totalQuestions
}) => {
  return (
    <div>
      <p className='number'>
        Question: {questionNr} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div>
        {answers.map((answer) => (
          <button disabled={userAnswer} onClick={callback}>
            <span dangerouslySetInnerHTML={{ __html: answer }} />
          </button>
        ))}
      </div>
    </div>
  )
}

export default Questioncard
