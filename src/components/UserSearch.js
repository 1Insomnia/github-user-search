import { useRef } from 'react'
import { SearchIcon } from '@primer/octicons-react'

export const UserSearch = ({ setSearch }) => {
  const input = useRef(null)

  const handleSubmit = e => {
    e.preventDefault()
    if (input.current.value.trim() === '') return
    setSearch(input.current.value)
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="input" className="sr-only">
          Search github user
        </label>
        <div className="bg-dark-light flex items-center rounded-lg overflow-hidden py-3 px-2">
          <SearchIcon size="32" />
          <input
            type="text"
            className="outline-none block flex-grow w-full bg-dark-light mx-2"
            ref={input}
            placeholder="Search a user..."
          />
          <button
            type="submit"
            className="outline-none border border-primary bg-primary text-light px-4 py-2 rounded-md text-sm capitalize hover:opacity-80"
          >
            Search
          </button>
        </div>
      </form>
    </div>
  )
}
