import React, { useRef } from 'react';
import { Assistant, type AssistantProps } from '@dip/chatkit';
import { DATA_AGENT_CONFIG } from './config';

/**
 * DIP Assistant Demo
 * 演示 AISHU DIP 平台的 Assistant 主对话入口
 * 布局：主区域（Assistant 组件）+ 右侧边栏（历史对话和新对话按钮）
 */
export const DIPAssistantDemo: React.FC = () => {
  const chatKitRef = useRef<Assistant>(null);

  /**
   * 模拟刷新 token 的方法
   * 实际项目中应该调用真实的 token 刷新接口
   */
  const refreshToken = async (): Promise<string> => {
    console.log('正在刷新 token...');
    // TODO: 在实际项目中，这里应该调用真实的 token 刷新接口
    // 这里仅作演示，返回原 token
    return DATA_AGENT_CONFIG.token;
  };

  /**
   * 处理查看历史对话
   */
  const handleHistory = () => {
    console.log('查看历史对话');
    // TODO: 实现历史对话功能
  };

  /**
   * 处理新建对话
   */
  const handleNewChat = () => {
    console.log('新建对话');
    chatKitRef.current?.createConversation();
  };

  return (
    <div className="flex h-full bg-white">
      {/* 主区域 - Assistant 组件 */}
      <div className="flex-1">
        {React.createElement(Assistant as any, {
          ref: chatKitRef,
          title: 'DIP Assistant',
          visible: true,
          baseUrl: DATA_AGENT_CONFIG.baseUrl,
          agentId: DATA_AGENT_CONFIG.agentId,
          token: DATA_AGENT_CONFIG.token,
          refreshToken: refreshToken,
          businessDomain: DATA_AGENT_CONFIG.businessDomain,
        } as AssistantProps)}
      </div>

      {/* 右侧边栏 - 历史对话和新对话按钮 */}
      <div className="w-[466px] bg-white border-l border-gray-100 flex flex-col">
        <div className="px-6 pt-6 flex flex-col gap-4">
          {/* 相关历史对话按钮 */}
          <button
            onClick={handleHistory}
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

          {/* 新对话按钮 */}
          <button
            onClick={handleNewChat}
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
        </div>
      </div>
    </div>
  );
};
