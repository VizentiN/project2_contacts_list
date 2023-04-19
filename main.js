const form = document.getElementById("form_register_contatcs");
const names = [];
const numbers = [];

let lines = '';

form.addEventListener('submit', function (e) {
    e.preventDefault();

    addLine();
    updateTable();
});

function addLine() {
    const inputName = document.getElementById('full_name');
    const inputNumber = document.getElementById('tel_number');

    if (numbers.includes(inputNumber.value)) {
        alert(`This number: ${inputNumber.value} is already saved in your list!`)
    } else {
        names.push(inputName.value);
        numbers.push(inputNumber.value);

        let line = '<tr>';
        line += `<td>${inputName.value}</td>`;
        line += `<td>${inputNumber.value}</td>`;
        line += '</tr>';

        lines += line
    }

    inputName.value = ''
    inputNumber.value = ''
}

function updateTable() {
    const tableBody = document.querySelector('tbody');
    tableBody.innerHTML = lines;
}