import React from 'react';

/**
 * 发送图标组件的属性接口
 */
interface SendIconProps extends React.SVGProps<SVGSVGElement> {
  /** 是否禁用状态 */
  disabled?: boolean;
}

/**
 * 发送图标组件
 */
export const SendIcon: React.FC<SendIconProps> = ({ disabled = false, ...props }) => {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" {...props}>
      <circle cx="16" cy="16" r="16" fill="#1890ff" opacity={disabled ? "0.3" : "1"} />
      <path d="M22 16L14 12V20L22 16Z" fill="white" />
    </svg>
  );
};

export default SendIcon;
