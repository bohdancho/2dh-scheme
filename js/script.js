const processBtns = document.querySelectorAll('.js-process-btn');
const detailedDataTitle = document.querySelector('.js-detailed-data-title');
Array.prototype.forEach.call (processBtns, function (btn) {
    btn.addEventListener('click', function() { 
        detailedDataTitle.textContent = btn.dataset.text
    });
});