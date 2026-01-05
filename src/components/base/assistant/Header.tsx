import React from 'react';

/**
 * Header 组件的属性接口
 */
interface HeaderProps {
  /** 组件标题 */
  title?: string;

  /** 关闭组件的回调函数 */
  onClose?: () => void;

  /** 新建会话的回调函数 */
  onNewChat?: () => void;

  /** 查看历史对话的回调函数 */
  onHistory?: () => void;
}

/**
 * Header 组件
 * Assistant 的头部组件，右侧显示历史对话和新对话按钮
 */
const Header: React.FC<HeaderProps> = ({
  onNewChat,
  onHistory,
}) => {
  return (
    <div className="w-full h-[76px] bg-white flex items-center justify-end px-6 border-b border-gray-100">
      {/* 右侧操作区 */}
      <div className="flex items-center gap-4">
        {/* 相关历史对话 */}
        {onHistory && (
          <button
            onClick={onHistory}
            className="flex items-center gap-2 text-[14px] text-[rgba(0,0,0,0.85)] hover:text-[#1890ff] transition-colors"
            style={{ fontFamily: 'Noto Sans SC' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
              />
              <path
                d="M8 5V8L10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="leading-[30px]">相关历史对话</span>
          </button>
        )}

        {/* 新对话 */}
        {onNewChat && (
          <button
            onClick={onNewChat}
            className="flex items-center gap-2 text-[14px] text-[rgba(0,0,0,0.85)] hover:text-[#1890ff] transition-colors"
            style={{ fontFamily: 'Noto Sans SC' }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path
                d="M14 9H9V14H7V9H2V7H7V2H9V7H14V9Z"
                fill="currentColor"
              />
            </svg>
            <span className="leading-[30px]">新对话</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
