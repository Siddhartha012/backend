require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const githubdata = {

          login: "mojombo",
          id: 1,
          node_id: "MDQ6VXNlcjE=",
          avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
          gravatar_id: "",
          url: "https://api.github.com/users/mojombo",
          html_url: "https://github.com/mojombo",
          followers_url: "https://api.github.com/users/mojombo/followers",
          following_url: "https://api.github.com/users/mojombo/following{/other_user}",
          gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
          starred_url: "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
          subscriptions_url: "https://api.github.com/users/mojombo/subscriptions",
          organizations_url: "https://api.github.com/users/mojombo/orgs",
          repos_url: "https://api.github.com/users/mojombo/repos",
          events_url: "https://api.github.com/users/mojombo/events{/privacy}",
          received_events_url: "https://api.github.com/users/mojombo/received_events",
          type: "User",
          site_admin: false
};

app.get('/', (req, res) => {
  res.send('My  name is Siddhartha Maity!')
})
app.get('/youtube', (req,res) =>{
    res.send('<h2>ullu banaya bara maza aya</h2>')
})
app.get('/githubdata', (req,res)=>{
    res.json(githubdata);
})
app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${port}`)
})