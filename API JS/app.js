


async function getUser(username){
    const apiurl = `https://api.github.com/users/${username}`
     const respone = await fetch(apiurl,

    )
     // store your response in a variable

     const data = await respone.json()
     document.querySelector('.name').innerHTML = data.name
     document.querySelector('#fellowers').innerHTML = data.followers
     document.querySelector('#respisotry').innerHTML = data.public_repos
     document.querySelector('.bio').innerHTML = data.bio
    document.querySelector('.images img').src= data.avatar_url
    console.log(data)

    }

    const inputValue = document.querySelector('.search');
    const button = document.querySelector('.button')
    button.addEventListener('click',()=>{
        getUser(inputValue.value)
    })

document.addEventListener('keyup', function(e){
    if(e.key === 'Enter'){
        button.click()
    }
})


