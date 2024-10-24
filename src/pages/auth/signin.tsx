import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { useRouter } from 'next/navigation'
import { auth } from '@/lib/firebase'

export default function SignIn() {
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleGoogleSignIn = async () => {
    const provider = new GoogleAuthProvider()
    try {
      await signInWithPopup(auth, provider)
      router.push('/dashboard')
    } catch (err) {
      setError('Failed to sign in with Google')
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Welcome Back</h1>
        {error && <p className="text-red-600 mb-4 text-center">{error}</p>}
        <button
          onClick={handleGoogleSignIn}
          className="w-full py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Sign in with Google
        </button>
      </div>
    </div>
  )
}
