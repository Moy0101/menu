let currentPage = 1;
const totalPages = 2;

function showPage(page) {
    for (let i = 1; i <= totalPages; i++) {
        document.getElementById(`page${i}`).style.display = 'none';
    }
    document.getElementById(`page${page}`).style.display = 'block';
    updateButtons();
}

function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        showPage(currentPage);
    }
}

function previousPage() {
    if (currentPage > 1) {
        currentPage--;
        showPage(currentPage);
    }
}

function updateButtons() {
    const prevButton = document.querySelector('button[onclick="previousPage()"]');
    const nextButton = document.querySelector('button[onclick="nextPage()"]');
    
    if (currentPage === 1) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }
    
    if (currentPage === totalPages) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

// Mostrar la primera página al cargar
showPage(currentPage);
