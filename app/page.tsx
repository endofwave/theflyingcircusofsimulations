import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-4xl font-bold mb-8">The Flying Circus of Simulations</h1>
      
      <div className="grid gap-4">
        {/* Dummy blog posts */}
        <article className="p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/problems/chalk-squeal" className="hover:text-blue-600">
              The Physics of Squealing Chalk
            </Link>
          </h2>
          <p className="text-gray-600">
            Explore the fascinating physics behind why chalk squeals on a blackboard...
          </p>
        </article>

        <article className="p-6 rounded-lg border">
          <h2 className="text-2xl font-semibold mb-2">
            <Link href="/problems/dummy-post" className="hover:text-blue-600">
              Dummy Physics Problem
            </Link>
          </h2>
          <p className="text-gray-600">
            This is a placeholder for future physics problems...
          </p>
        </article>
      </div>
    </main>
  )
}