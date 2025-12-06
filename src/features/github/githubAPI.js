export const fetchGithubUser = async(username) => {
    const res = await fetch(`https://api.github.com/users/${username}`)
    return res.json();
}