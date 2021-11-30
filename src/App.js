import { useState } from 'react'
import { UserSearch, SearchResult } from './components'

function App() {
  const [user, setUser] = useState(null)
  const [fetchError, setFetchError] = useState(null)

  return (
    <div className="text-light bg-dark min-h-screen py-5">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl text-light font-bold tracking-tighter mb-12">
          devfinder
        </h1>
        <UserSearch setUser={setUser} setFetchError={setFetchError} />
        {fetchError ? (
          <div>User not found</div>
        ) : (
          user && <SearchResult {...user} />
        )}
      </div>
    </div>
  )
}

export default App
