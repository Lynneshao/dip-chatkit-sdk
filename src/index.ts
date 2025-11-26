/**
 * ChatKit - AI 对话组件
 *
 * @module chatkit
 */

export { ChatKitBase } from './components/ChatKitBase';
export type { ChatKitBaseProps, ChatKitBaseState } from './components/ChatKitBase';

export { ChatKitCoze } from './components/ChatKitCoze';
export type { ChatKitCozeProps } from './components/ChatKitCoze';

export { RoleType, ChatMessageType } from './types';
export type {
  Role,
  ChatMessage,
  ApplicationContext,
  ChatKitInterface,
  EventStreamMessage,
} from './types';
