
const NewsArticleTemplate=document.querySelector('[NewsArticleTemplate]')
const NewsArticleContainer=document.querySelector('[NewsArticleContainer]')
const searchInput = document.querySelector("[data-search]")
let Articles=[]
searchInput.addEventListener('input', e => {
    const value = e.target.value.toLowerCase()
    Articles.forEach(article => {
        const isVisible =article.title.toLowerCase().includes(value) //|| article.description.toLowerCase().includes(value) || article.source.toLowerCase().includes(value)
        article.element.classList.toggle("hide", !isVisible)
    })
})
fetch('https://thedigitalnewsfeederapi.p.rapidapi.com/',{
        method: 'GET',
        headers: {
            'X-RapidAPI-Host': 'thedigitalnewsfeederapi1.p.rapidapi.com',
            'X-RapidAPI-Key': '0117d26a6fmsh76f72332664f68ep1c41b2jsn8f0cf1caffec'
        }}).then(response => response.json())
        .then(data=>{
            Articles=data.map(article=>{
                const list=NewsArticleTemplate.content.cloneNode(true).children[0]
                const title=list.querySelector("[NewsTitle]")
                const description=list.querySelector("[NewsDescription]")
                const source=list.querySelector("[NewsSource]")
                const url=list.querySelector("[NewsUrl]")
                title.textContent=article.title
                description.textContent=article.description
                source.textContent=article.source
                url.textContent=article.url
                NewsArticleContainer.append(list)
                return {
                    title: article.title,
                    description: article.description,
                    source: article.source,
                    url: article.url,
                    element: list
                }
            })
        })
        .catch(err => console.error(err))