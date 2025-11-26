import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Components } from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { ChatMessage, ChatMessageType, RoleType } from '../types';

/**
 * MessageItem 组件的属性接口
 */
interface MessageItemProps {
  /** 消息对象 */
  message: ChatMessage;
}

/**
 * MessageItem 组件
 * 显示单条消息
 */
const MessageItem: React.FC<MessageItemProps> = ({ message }) => {
  const isUser = message.role.type === RoleType.USER;
  const isAssistantMarkdown =
    message.role.type === RoleType.ASSISTANT &&
    message.type === ChatMessageType.TEXT;

  const renderContent = () => {
    if (isAssistantMarkdown) {
      const markdownComponents: Components = {
        code: ({ className, children, ...props }: any) => {
          const isInline = !className;

          if (isInline) {
            return (
              <code
                className="bg-gray-200 rounded px-1 py-0.5 text-xs font-mono"
                {...props}
              >
                {children}
              </code>
            );
          }

          return (
            <pre
              className="bg-gray-900 text-gray-100 rounded-lg p-3 overflow-auto text-xs"
              {...props}
            >
              <code className={className}>{children}</code>
            </pre>
          );
        },
        ul: ({ children }) => (
          <ul className="list-disc pl-5 space-y-1">{children}</ul>
        ),
        ol: ({ children }) => (
          <ol className="list-decimal pl-5 space-y-1">{children}</ol>
        ),
      };

      return (
        <div className="text-sm leading-relaxed space-y-2 markdown-body">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            rehypePlugins={[rehypeHighlight]}
            components={markdownComponents}
          >
            {message.content}
          </ReactMarkdown>
        </div>
      );
    }

    return (
      <p className="text-sm whitespace-pre-wrap break-words leading-relaxed">
        {message.content}
      </p>
    );
  };

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
      <div
        className={`max-w-[80%] rounded-lg px-4 py-2 ${
          isUser
            ? 'bg-blue-500 text-white'
            : 'bg-gray-100 text-gray-800'
        }`}
      >
        {renderContent()}
      </div>
    </div>
  );
};

export default MessageItem;
