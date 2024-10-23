/* eslint-disable react/no-unescaped-entities */
interface WelcomeHeaderProps {
  name: string
}

export function WelcomeHeader({ name }: WelcomeHeaderProps) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold mb-2">Welcome back, {name}!</h1>
      <p className="text-gray-600">Here's what's happening with your sales today.</p>
    </div>
  )
}
