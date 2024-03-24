import { useState } from "react";
import { demoPrompts } from "@/data/llmData";

export function DemoCard({ title, prompt, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`border border-gray-600/50 rounded-lg py-2 px-4 cursor-pointer transition duration-300 ease-in-out ${
        hovered ? "bg-gray-600/50" : ""
      }`}
      onClick={() => {
        onClick(prompt);
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <h3 className="text-left text-md font-semibold text-gray-400">{title}</h3>
      <p className="text-left text-sm">{prompt}</p>
    </div>
  );
}

export function DemoCards({ onCardClick }) {
  const prompts = demoPrompts.slice(0, 4);

  return (
    <div className="items-center w-full text-gray-500  text-center py-1  mx-auto">
      <div className="grid grid-cols-2 gap-2">
        {prompts.map((prompt, index) => (
          <DemoCard
            key={index}
            title={prompt.name}
            prompt={prompt.prompt}
            onClick={onCardClick}
          />
        ))}
      </div>
    </div>
  );
}
