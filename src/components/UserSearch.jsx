import { useRef } from 'react'
import { SearchIcon } from '@primer/octicons-react'
import fetchUser from '../lib/fetchUser'

const UserSearch = ({ setUser, setFetchError }) => {
  const input = useRef(null)

  const handleSubmit = async e => {
    e.preventDefault()
    if (input.current.value.trim() === '') return
    const { data, error } = await fetchUser(input.current.value)
    if (!error) {
      setUser(data)
    }
    setFetchError(error)
  }

  return (
    <div className="mb-10">
      <form onSubmit={handleSubmit}>
        <label htmlFor="input" className="sr-only">
          Search github user
        </label>
        <div className="bg-dark-light flex items-center rounded-lg overflow-hidden py-3 px-2 border border-dark-light focus-within:border-light-light">
          <SearchIcon size="32" className="text-primary" />
          <input
            type="text"
            className="outline-none block flex-grow w-full bg-dark-light mx-2"
            ref={input}
            placeholder="Search Github username..."
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

export default UserSearch
