import React, { ReactNode, } from 'react';
import { Tooltip as ReactTooltip } from 'react-tooltip';

interface TooltipProps {
  children: ReactNode;
  id: string;
  content:string;
}

export const Tooltip: React.FC<TooltipProps> = ({ children, id, content }) => {
  return (
    <div>
        <div data-tooltip-id={id}>
            {children}
        </div>
        <ReactTooltip id={id}>
         {content}
        </ReactTooltip>
    </div>
  );
};