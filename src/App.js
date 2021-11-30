import { useState } from 'react'
import { UserSearch } from './components'

function App() {
  const [search, setSearch] = useState('')

  return (
    <div className="text-light bg-dark h-screen">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl text-light font-bold tracking-tighter mb-8">
          devfinder
        </h1>
        <div>{search}</div>
        <UserSearch setSearch={setSearch} />
      </div>
    </div>
  )
}

export default App
