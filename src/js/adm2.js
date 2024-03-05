document.addEventListener("DOMContentLoaded", function () {
    const userList = document.getElementById('userList');
    const nameInput = document.getElementById('name');
    const addBtn = document.getElementById('addBtn');

    const users = [];

    function renderUsers() {
        userList.innerHTML = '';
        users.forEach((user, index) => {
            const li = document.createElement('li');
            li.innerHTML = `
                <span>${user}</span>
                <span class="delete-btn" onclick="deleteUser(${index})">Excluir</span>
            `;
            userList.appendChild(li);
        });
    }

    function addUser() {
        const name = nameInput.value;
        if (name) {
            users.push(name);
            nameInput.value = '';
            renderUsers();
        } else {
            alert('Por favor, insira um nome.');
        }
    }

    window.deleteUser = function (index) {
        users.splice(index, 1);
        renderUsers();
    };

    addBtn.addEventListener('click', addUser);
});

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "/home/carlos/Gerencia_de_Projeto/src/img/menu_white_36dp.svg";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "/home/carlos/Gerencia_de_Projeto/src/img/close_white_36dp.svg";
    }
}