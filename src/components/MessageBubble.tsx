interface MessageBubbleProps {
  role: 'user' | 'assistant'
  content: string
}

export default function MessageBubble({ role, content }: MessageBubbleProps) {
  const isUser = role === 'user'

  return (
    <div className={`p-3 rounded-xl max-w-[80%] ${isUser ? 'bg-blue-100 self-end text-right' : 'bg-gray-100 self-start'}`}>
      <p className="text-sm text-gray-800 whitespace-pre-wrap">{content}</p>
    </div>
  )
}
