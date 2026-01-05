import React from 'react';

/**
 * 停止图标组件
 */
export const StopIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      className="w-4 h-4 text-white"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <rect x="6" y="6" width="12" height="12" />
    </svg>
  );
};

export default StopIcon;
