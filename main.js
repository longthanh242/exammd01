let users = JSON.parse(localStorage.getItem('users')) || [];
function addUser() {
    let codeInput = document.querySelector('#code').value;
    let nameInput = document.querySelector('#name').value;
    let emailInput = document.querySelector('#email').value;
    let user = {
        id: Math.floor(Math.random() * 1000),
        code: codeInput,
        name: nameInput,
        email: emailInput
    };
    if (!emailInput) {
        alert("Email không được để trống");
        return;
    }
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === emailInput || users[i].code === codeInput) {
            alert("Mã nhân viên hoặc email không được trùng");
            return false;
        }
    }
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
    renderUser();
}


function renderUser() {
    text = '';
    for (let i = 0; i < users.length; i++) {
        text += `
                <tr>
                    <td>${i + 1}</td>
                    <td>${users[i].code}</td>
                    <td>${users[i].name}</td>
                    <td>${users[i].email}</td>
                    <td>
                        <button onclick = "changeUser(${users[i].id})" 
                        style = "color: #fff; background-color: orange; border: none; border-radius: 5px; padding: 5px;
                        cursor: pointer"
                        >Sửa</button> 
                        <button onclick = "deleteUser(${users[i].id})"
                        style = "color: #fff; background-color: red; border: none; border-radius: 5px; padding: 5px;
                        cursor: pointer"
                        >Xoá</button> 
                    </td>
                </tr>
                `
    }
    document.getElementById('tbodyEle').innerHTML = text;
    document.querySelector('#code').value = "";
    document.querySelector('#name').value = "";
    document.querySelector('#email').value = "";
}
renderUser();

function deleteUser(id) {
    if (confirm("Bạn muốn xoá chứ")) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].id == id) {
                users.splice(i, 1);
                localStorage.setItem('users', JSON.stringify(users));
                renderUser();
                break;
            }
        }
    }
}

function changeUser(id) {
    let findUser = users.filter(item => item.id == id);
    console.log(findUser);
    let newCode = document.querySelector('#code').value = findUser[0].code;
    let newName = document.querySelector('#name').value = findUser[0].name;
    let newEmail = document.querySelector('#email').value = findUser[0].email;
    document.getElementsByTagName('h3')[0].innerHTML = 'Update Employee';
    document.getElementById('btn').innerHTML = 'Update Employee';
//     if (users[i].id === id) {
//         document.querySelector('#code').value;
//         document.querySelector('#name').value;
//         document.querySelector('#email').value;
//     }
//     localStorage.setItem('users', JSON.stringify(users));
//     renderUser();
}