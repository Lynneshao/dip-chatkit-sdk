import React from 'react';

/**
 * 时钟图标组件（用于预设问题）
 */
export const ClockIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1.5 flex-shrink-0" {...props}>
      <circle cx="6" cy="6" r="5" stroke="#1890ff" strokeWidth="1.5" fill="none" />
      <path d="M6 3V6L8 8" stroke="#1890ff" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

export default ClockIcon;
