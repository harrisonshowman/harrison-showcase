document.addEventListener('DOMContentLoaded', () => {
    // Example: Show a greeting modal on page load
    const modal = document.createElement('div');
    modal.style.position = 'fixed';
    modal.style.top = '0';
    modal.style.left = '0';
    modal.style.width = '100vw';
    modal.style.height = '100vh';
    modal.style.background = 'rgba(0,0,0,0.5)';
    modal.style.display = 'flex';
    modal.style.alignItems = 'center';
    modal.style.justifyContent = 'center';
    modal.style.zIndex = '1000';

    const box = document.createElement('div');
    box.style.background = '#fff';
    box.style.padding = '30px 40px';
    box.style.borderRadius = '8px';
    box.style.boxShadow = '0 2px 16px rgba(0,0,0,0.2)';
    box.innerHTML = `
        <h2>Welcome!</h2>
        <p>Thanks for visiting my website.</p>
        <button id="closeModalBtn">Close</button>
    `;

    modal.appendChild(box);
    document.body.appendChild(modal);

    document.getElementById('closeModalBtn').addEventListener('click', () => {
        modal.remove();
    });
});