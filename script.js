// static/script.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('registrationForm');
    const tableBody = document.getElementById('tableBody');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nama = document.getElementById('nama').value;
        const email = document.getElementById('email').value;

        const row = `<tr><td>${nama}</td><td>${email}</td><td><button class="delete-btn">Delete</button></td></tr>`;
        tableBody.innerHTML += row;

        form.reset();
    });

    tableBody.addEventListener('click', function (event) {
        if (event.target.classList.contains('delete-btn')) {
            const row = event.target.closest('tr');
            row.remove();
        }
    });
});
