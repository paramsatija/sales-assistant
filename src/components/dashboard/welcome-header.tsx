/* eslint-disable react/no-unescaped-entities */
export function WelcomeHeader({ name }: { name: string }) {
  return (
    <div className="mb-8">
      <h1 className="text-2xl font-bold text-gray-900">
        Welcome back, {name}! 👋
      </h1>
      <p className="text-gray-600 mt-1">
        Here's what's happening with your sales today.
      </p>
    </div>
  )
}
