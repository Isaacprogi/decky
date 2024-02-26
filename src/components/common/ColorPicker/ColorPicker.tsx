import React, { useState } from 'react';

const colors = [
    'red-500',
    'green-500',
    'blue-500',
    'yellow-500',
    'pink-500',
    'blue-600',
  ];

interface colorPickerProps {
     value:string;
     onSelectColor:React.Dispatch<React.SetStateAction<string>>
}
const ColorPicker = ({value,onSelectColor}:colorPickerProps) => {
  return (
    <div className="flex gap-2 p-2">
      {colors.map(color => (
        <button
          key={color}
          className={`h-10 w-10 rounded-full bg-${color} ${value === color?'border border-black border-2':""}`}
          onClick={() => onSelectColor(color)}
        />
      ))}
    </div>
  );
};

export default ColorPicker;
