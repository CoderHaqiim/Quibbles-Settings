const tabs = [...document.querySelectorAll('.tab')]
const sections = [...document.querySelectorAll('section')]
const accountSettingsItems = [...document.querySelectorAll('.info-option')]
const hidden = [...document.querySelectorAll('.hidden')]
const imageFile = document.querySelector('.file1')
const avatarBtn = document.querySelector('.avatar-btn')
const avatarImg = document.querySelector('#avatar-img')
const myAvatar = document.querySelector('.my-avatar')
const cover = document.querySelector('.cover')
const closeBtn = document.querySelector('.close')
const content = document.querySelector('.content')

avatarBtn.onclick = () => {
    imageFile.click()
}

closeBtn.onclick = () => {
    cover.style.display = 'none'
}

imageFile.onchange = () => {
    const file = imageFile.files[0]
    if(file){
        const objectURL = URL.createObjectURL(file);
        myAvatar.style.padding = "0px"
        avatarImg.style.borderRadius = 'inherit'
        avatarImg.src = objectURL;
    }else{
        return
    }
}

tabs.forEach(tab => {
    tab.onclick = () => {
        tabs.forEach(item => {
            if(item.classList.contains('selected-tab')){
                item.classList.remove('selected-tab')
            }
        })
        tab.classList.add('selected-tab') 

        let id = Number(tab.id)
        sections.forEach(section => {
            section.style.display = "none"
        })

        sections[id].style.display = 'flex'
    }
})

accountSettingsItems.forEach(item => {
    item.onclick = () => {
        cover.style.display ="flex"
        const id = Number(item.id)
        
        while(content.firstChild){
            content.firstChild.remove()
        }

        hidden[id].style.display ="flex"
        content.append(hidden[id])
    }
})
