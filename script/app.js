const $articles = document.querySelector("#articles");

function loadDate() {
    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
        .then(response => {
            if (!response.ok) {
                throw new Error('Network no response');
            }
            return response.json();
        })
        .then(data => {
            console.log(data); 
            renderArticles(data);
        })
        .catch(error => {
            console.error('Problem with the fetch operation:', error);
        });
}
loadDate();

const renderArticles = (data) => {
   
    const articles = data.data || data; 
    articles.forEach(element => {
        const $div = document.createElement("div");
        $div.className = "card";
        $div.innerHTML = `
            <img src="${element.image}" alt="${element.title}"/>
            <h3>${element.title}</h3>
            <p>${element.description}</p>
            <div class="avatar-wrapper">
                <img class="card__logo" src="./images/Ellipse.svg" alt="Author">
                <div style="display: flex; flex-direction: column;">
                    <strong>Ibrokhim Jalalov</strong>
                    <p>Author</p>
                </div>        
            </div>
        `;
        $articles.appendChild($div);
    });
};
