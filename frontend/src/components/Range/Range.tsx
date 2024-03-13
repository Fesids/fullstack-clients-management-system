import React from "react";
import { RangeProps } from "../FilterComponentWrapper/types";

const Range: React.FC<RangeProps> = (props) => {
  const { value, onChange, name } = props;
  return (
    <div className="flex items-center">
      <input
        name={name}
        type="range"
        min="0"
        max="1000"
        step="10"
        value={value as string}
        onChange={onChange}
        className="p-2 mr-2 rounded accent-orange-500"
      />
      <span className="mr-2 text-gray-900">R${value}</span>
    </div>
  );
};

export default Range;
