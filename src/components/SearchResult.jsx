import { format, parseISO } from 'date-fns'
import React from 'react'
import { LocationIcon, LinkIcon, MarkGithubIcon } from '@primer/octicons-react'

const SearchResult = ({
  login,
  created_at,
  bio,
  public_repos,
  followers,
  following,
  location,
  blog,
  avatar_url,
  html_url,
  twitter_username
}) => {
  return (
    <div className="p-4 bg-dark-light rounded-lg md:p-8">
      <div className="md:flex md:gap-12">
        <div className="mb-8 md:w-1/4 md:mb-0">
          <img
            src={avatar_url}
            alt={`Avatar of ${login}`}
            className="w-32 h-32 rounded-full object-cover object-center mx-auto"
          />
        </div>
        <div className="space-y-8 md:w-3/4">
          <div className="">
            <div className="sm:flex sm:items-center sm:justify-between mb-1">
              <h3 className="text-3xl font-bold tracking-tight mb-1">
                {login}
              </h3>
              <p className="text-sm">
                Joined - {format(parseISO(created_at), 'dd MMMM yyyy')}
              </p>
            </div>

            {twitter_username && (
              <a
                href={`https://www.twitter.com/${twitter_username}`}
                target="_blank"
                rel="noreferrer"
                className="text-primary text-sm"
              >
                @twitter
              </a>
            )}
          </div>
          <div>
            {bio ? (
              <p className="text-sm">{bio}</p>
            ) : (
              "This user doesn't have a bio"
            )}
          </div>
          <div className="bg-dark p-4 rounded-lg flex items-center justify-between text-center">
            <div>
              <h4 className="capitalize text-sm">Repos</h4>
              <p className="text-light-light font-bold tracking-tight text-lg">
                {public_repos}
              </p>
            </div>
            <div>
              <h4 className="capitalize text-sm">Followers</h4>
              <p className="text-light-light font-bold tracking-tight text-lg">
                {followers}
              </p>
            </div>
            <div>
              <h4 className="capitalize text-sm">Following</h4>
              <p className="text-light-light font-bold tracking-tight text-lg">
                {following}
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between text-center sm:text-left">
            {location && (
              <div className="sm:flex sm:items-center">
                <LocationIcon size={16} className="text-light sm:mr-2" />
                <p className="text-sm">{location}</p>
              </div>
            )}
            {blog && (
              <a
                href={blog}
                rel="noreferrer"
                target="_blank"
                className="block sm:flex sm:items-center"
              >
                <LinkIcon size={16} className="text-light sm:mr-2" />
                <p className="text-sm truncate">{blog}</p>
              </a>
            )}
            <a
              href={html_url}
              target="_blank"
              rel="noreferrer"
              className="block sm:flex sm:items-center"
            >
              <MarkGithubIcon size={16} className="text-light sm:mr-2" />
              <p className="text-sm capitalize">profile</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchResult
