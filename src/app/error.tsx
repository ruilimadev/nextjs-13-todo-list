'use client'

import Link from "next/link"

const error = ({ error, reset }: { error: Error, reset: () => void}) => {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-white  dark:text-emerald-500">
          There was a problem
        </p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-white">
          { error.message || 'Something went wrong'}
        </h1>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <button className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none"
            onClick={reset}>Try again</button>
          <Link href="/" className="border border-slate-300 text-slate-300 px-2 py-1 rounded hover:bg-slate-700 focus-within:bg-slate-700 outline-none">Go back home</Link>
        </div>
      </div>
    </main>
  )
}

export default error