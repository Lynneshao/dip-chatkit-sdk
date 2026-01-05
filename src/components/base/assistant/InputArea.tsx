import React from 'react';
import { ApplicationContext } from '../../../types';

/**
 * InputArea 组件的属性接口
 */
interface InputAreaProps {
  /** 输入框的值 */
  value: string;

  /** 输入框值变化的回调 */
  onChange: (value: string) => void;

  /** 发送消息的回调 */
  onSend: () => void;

  /** 当前的应用上下文 */
  context?: ApplicationContext;

  /** 移除上下文的回调 */
  onRemoveContext: () => void;

  /** 是否禁用输入 */
  disabled?: boolean;

  /** 是否正在接收 AI 助手的流式响应 */
  isStreaming?: boolean;

  /** 停止当前流式响应的回调 */
  onStop?: () => void;
}

/**
 * InputArea 组件
 * 用户输入区域，包括上下文显示和输入框
 */
const InputArea: React.FC<InputAreaProps> = ({
  value,
  onChange,
  onSend,
  context,
  onRemoveContext,
  disabled = false,
  isStreaming = false,
  onStop,
}) => {
  /**
   * 处理键盘事件
   */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="w-full px-5 pb-6">
      {/* 上下文标签 */}
      {context && context.title && (
        <div className="mb-2 bg-[rgba(18,110,227,0.04)] rounded-lg px-4 py-2 flex items-center">
          <p className="text-[12px] leading-6 text-[rgba(0,0,0,0.85)] truncate" style={{ fontFamily: 'Noto Sans SC' }}>
            {context.title}
          </p>
          <button
            onClick={onRemoveContext}
            className="ml-auto text-[rgba(0,0,0,0.45)] hover:text-[rgba(0,0,0,0.85)] transition-colors flex-shrink-0"
            title="移除上下文"
          >
            <svg
              className="w-3 h-3"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      )}

      {/* 输入框容器 */}
      <div className="relative bg-white border-[1.5px] border-solid border-[#3b9be0] rounded-[12px] overflow-hidden">
        {/* 输入框 */}
        <textarea
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="请输入要查找的内容"
          disabled={disabled}
          className="w-full h-[56px] resize-none px-4 py-3 text-[14px] leading-[22px] text-black placeholder:text-[rgba(0,0,0,0.3)] focus:outline-none disabled:bg-gray-50 disabled:cursor-not-allowed"
          style={{ fontFamily: 'Noto Sans SC' }}
          maxLength={4000}
        />

        {/* 发送按钮 / 停止按钮 */}
        {isStreaming ? (
          // 停止按钮：在接收 AI 流式响应时显示
          <button
            onClick={onStop}
            className="absolute bottom-3 right-4 w-8 h-8 flex items-center justify-center bg-red-500 hover:bg-red-600 rounded transition-colors"
            title="停止响应"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <rect x="6" y="6" width="12" height="12" />
            </svg>
          </button>
        ) : (
          // 发送按钮：正常状态下显示
          <button
            onClick={onSend}
            disabled={disabled || !value.trim()}
            className="absolute bottom-3 right-4 w-8 h-8 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed transition-opacity"
            title={disabled ? '正在发送...' : '发送消息'}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="16" r="16" fill="#1890ff" opacity={disabled || !value.trim() ? "0.3" : "1"} />
              <path d="M22 16L14 12V20L22 16Z" fill="white" />
            </svg>
          </button>
        )}
      </div>

      {/* 底部提示文字 */}
      <p className="mt-2 text-center text-[12px] leading-[18px] text-[rgba(0,0,0,0.55)]" style={{ fontFamily: 'Noto Sans SC' }}>
        回答的内容由 AI 生成，不能保证完全真实准确，请仔细甄别
      </p>
    </div>
  );
};

export default InputArea;
