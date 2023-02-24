const {createUser} = require ('./../services/user.services');


createUser({
    username:"kenzinho",
    email: "kenzinho@mail.com",
    password:"123456" ,
    avatar: "https://imgs.search.brave.com/dmNsyBvLmS4jetkOvFsxVmpaniEqqxT8BaNBAI-_7jM/rs:fit:416:416:1/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2ljb24tb2YtYS1i/dXNpbmVzc21hbi1h/dmF0YXItb3ItcHJv/ZmlsZS1waWMtcGlj/dHVyZS1pZDQ3NDAw/MTg5Mj9rPTYmbT00/NzQwMDE4OTImcz0x/NzA2NjdhJnc9MCZo/PWF0cVpzV0YtVWNM/QkQ1dTJCTVpqcE11/cjZKOW56aVFyclBh/aXFaaDU3S1k9"
}
)

