

export const renderList = (arr) => {
    const ul = document.querySelector('.nav__list')
    ul.innerHTML = ''

    arr.forEach(item => {
        const li = document.createElement('li')
        const link = document.createElement('a')        

        if(item.id === 1){
            li.classList = 'active'
            
        }

        link.innerText = item.tittle
        link.href = '#'

        li.append(link)

        ul.appendChild(li)
        
        
    });
    
    

}

export const renderServices = (arr) => {
    const sectionServices = document.querySelector('.section-services')

    arr.forEach(item => {
        const service = document.createElement('div')
        service.classList = 'section-service'

        const img = document.createElement('img')
        img.src = item.img
        img.alt = item.tittle

        const title = document.createElement('h4')
        title.innerText = item.tittle

        const desc = document.createElement('p')
        desc.innerText = item.desc

        service.append(img, title, desc)
        sectionServices.appendChild(service)

    })

    
}


