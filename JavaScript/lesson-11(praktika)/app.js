const postsContent = document.querySelector("#posts-content")

const posts = [
    {
        id: 1,
        title: "Lorem ipsum dolar sit amit!",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quoaccusantiumipsam? Saepe, facilisobcaecati?",
        likes: 5,
        image: "https://picsum.photos/400"
    },

    {
        id: 2,
        title: " What is Lorem ipsum?",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quoaccusantiumipsam? Saepe, facilisobcaecati?",
        likes: 0,
        image: "https://picsum.photos/401"
    },

    {
        id: 3,
        title: "Switching to boxicons is easy and can be done in 2 steps.",
        description:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nisi quoaccusantiumipsam? Saepe, facilisobcaecati?",
        likes: 0,
        image: "https://picsum.photos/403"
    },
]

function renderPosts(postsArr) {
    postsContent.innerHTML = ""
    postsArr.map(item => {
        postsContent.innerHTML += `
        <div class='p-4 rounded-md shadow-md'>
            <img class='w-full rounded-md object-cover min-h-[400px]' src="${item.image}" height='400'
            alt="Nature wallpaper">
            <div>
                <div class='flex items-center gap-2 my-2 mt-4'>
                    <i onclick = "likePost(${item.id})" class="bx bx-heart text-2xl text-slate-800  cursor-pointer"></i>
                    <span><b>${item.likes}</b> likes</span>
                </div>
            <h1 class='text-2xl text-slate-600'>${item.title}</h1>
            <p class='text-slate-400 text-sm mt-2'>${item.description}</p>
            </div>
        </div>`
    })
}

function likePost(id) {
    const index = posts.findIndex(item => item.id === id)
    posts[index].likes += 1
    renderPosts(posts)
}

renderPosts(posts)



