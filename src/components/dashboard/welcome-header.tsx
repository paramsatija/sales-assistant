/* eslint-disable react/no-unescaped-entities */
export function WelcomeHeader({ name }: { name: string }) {
    return (
      <div className="mb-8">
        <h1 className="text-2xl font-semibold">Good morning, {name}</h1>
        <p className="text-gray-600">Here's what's happening with your sales today.</p>
      </div>
    )
  }
