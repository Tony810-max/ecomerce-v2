import React from "react";

interface ITitle {
  title: string;
  className?: string;
}

const Title: React.FC<ITitle> = ({ title, className }) => {
  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <span className="block w-5 h-10 bg-[#db4444]  rounded-md" />
      <span className="font-sans text-red-600 font-semibold">{`${title}`}</span>
    </div>
  );
};

export default Title;
