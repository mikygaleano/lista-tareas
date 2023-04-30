

class newTarea {
    constructor(title, descrip) {
        this.title = title;
        this.descrip = descrip;
    };
};

class metodos {
    newElement () {
        const divContiner = document.querySelector('.new-list');
        const pestaña = document.createElement('article');
        pestaña.classList.add('card')

        const title = document.getElementById('title');
        const descrip = document.getElementById('descrip');


        const tarea = new newTarea(title.value, descrip.value);


        pestaña.innerHTML = `
            <span>${tarea.title}</span>
            <p>${tarea.descrip}</p>
            <button class="eliminar">❌</button>
        `;

        divContiner.append(pestaña);
    
    };

    newList (e) {
        this.newElement();
        e.preventDefault();
        this.formReset();
    };

    formReset () {
        document.querySelector('form').reset()
    };
    

    removeLista (element) {
        if (element.matches('.eliminar')) {
            element.parentElement.remove();
        };
    };


};

const pintar = new metodos();


document.addEventListener('submit', (e) => {
    pintar.newList(e);
});
document.addEventListener('click', (e)=> {
    pintar.removeLista(e.target);
});