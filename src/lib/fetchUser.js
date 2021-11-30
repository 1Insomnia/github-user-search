const fetchUser = async username => {
  const API_URL = `https://api.github.com/users/${username}`

  try {
    const response = await fetch(API_URL)
    if (!response.ok) throw new Error("User doesn't exist")
    const data = await response.json()
    return {
      data: {
        login: data.login,
        url: data.url,
        blog: data.blog,
        location: data.location,
        bio: data.bio,
        twitter_username: data.twitter_username,
        public_repos: data.public_repos,
        followers: data.followers,
        following: data.following,
        created_at: data.created_at,
        avatar_url: data.avatar_url,
        html_url: data.html_url
      }
    }
  } catch (error) {
    return {
      error: error
    }
  }
}

export default fetchUser
