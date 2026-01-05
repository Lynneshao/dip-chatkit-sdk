import React from 'react';

/**
 * Prologue 组件的属性接口
 */
interface PrologueProps {
  /** 点击推荐问题时的回调函数 */
  onQuestionClick?: (question: string) => void;

  /** 开场白文案 */
  prologue?: string;

  /** 预置问题列表 */
  predefinedQuestions?: string[];
}

/**
 * Prologue 组件
 * Assistant 的欢迎界面，显示开场白和预设问题
 */
const Prologue: React.FC<PrologueProps> = ({
  onQuestionClick,
  prologue,
  predefinedQuestions
}) => {
  const questions = predefinedQuestions || [];

  /**
   * 处理问题点击
   */
  const handleQuestionClick = (question: string) => {
    if (onQuestionClick) {
      onQuestionClick(question);
    }
  };

  return (
    <div className="w-full px-5 py-8">
      {/* 开场白 */}
      {prologue && (
        <p className="text-[20px] leading-normal text-[rgba(0,0,0,0.85)] font-normal mb-10" style={{ fontFamily: 'Noto Sans SC' }}>
          {prologue}
        </p>
      )}

      {/* 预设问题网格 */}
      {questions.length > 0 && (
        <div className="grid grid-cols-4 gap-3">
          {questions.map((question, index) => (
            <button
              key={index}
              onClick={() => handleQuestionClick(question)}
              className="bg-white border border-[rgba(0,0,0,0.1)] rounded-[6px] px-4 py-3 text-left text-[14px] leading-[22px] text-[rgba(0,0,0,0.85)] hover:border-[#3b9be0] hover:bg-[rgba(18,110,227,0.04)] transition-all flex items-start gap-2"
              style={{ fontFamily: 'Noto Sans SC' }}
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="mt-1.5 flex-shrink-0">
                <circle cx="6" cy="6" r="5" stroke="#1890ff" strokeWidth="1.5" fill="none" />
                <path d="M6 3V6L8 8" stroke="#1890ff" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span>{question}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prologue;
