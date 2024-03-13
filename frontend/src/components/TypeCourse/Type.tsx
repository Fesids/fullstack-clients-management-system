import React from "react";
import { useFilterHooks } from "../../hooks/useFilterHooks";

const TypeItem: React.FC<{ option: string }> = ({ option }) => {
  const { selectModality, selectedModality } = useFilterHooks();
  return (
    <div
      key={option}
      className=""
      style={
        {
          //alignItems: "center",
        }
      }
    >
      <input
        id={`filter-mobile-${option}`}
        name={option}
        defaultValue={option}
        onChange={selectModality}
        type="checkbox"
        checked={selectedModality.includes(option)}
        className="h-4 w-4 rounded border-gray-300 text-orange-500 focus:ring-orange-500"
      />
      <label
        htmlFor={`filter-mobile-${option}`}
        className="ml-3 min-w-0 flex-1 text-gray-500 text-md font-semibold"
      >
        {option}
      </label>
    </div>
  );
};

export const Type = React.memo(TypeItem);
