//for first part

tailwind.config = {
    theme: {
            extend: {
            colors: {
                primary: '#ef4444',
                secondary: '#f43f5e'
            }
        }
    }
}

//for the second part

const grid = document.getElementById('numberGrid');
const totalValueEl = document.getElementById('totalValue');
const pricePerNumber = 1000;
let selectedNumbers = new Set();


// Generate 1–100 grid
for (let i = 1; i <= 100; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;
    cell.dataset.value = i;
    cell.addEventListener('click', () => {
        if (selectedNumbers.has(i)) {
        selectedNumbers.delete(i);
        cell.classList.remove('selected');
        } else {
        selectedNumbers.add(i);
        cell.classList.add('selected');
        }
        totalValueEl.textContent = selectedNumbers.size * pricePerNumber;
    });
    grid.appendChild(cell);
}
    

//for the third part

document.addEventListener('alpine:init', () => {

    Alpine.data('app', () => ({
        selectedNumbers: {
            main: [],
            daily: [],
            weekly: [],
            monthly: []
        },
        showSelections: false,
                
        toggleMainNumber(num) {
            const index = this.selectedNumbers.main.indexOf(num);
            if (index === -1) {
                this.selectedNumbers.main.push(num);
            } else {
                this.selectedNumbers.main.splice(index, 1);
            }
        },
                
        toggleDailyNumber(num) {
            const index = this.selectedNumbers.daily.indexOf(num);
            if (index === -1) {
                this.selectedNumbers.daily.push(num);
            } else {
                this.selectedNumbers.daily.splice(index, 1);
            }
        },
                
        toggleWeeklyNumber(num) {
            const index = this.selectedNumbers.weekly.indexOf(num);
            if (index === -1) {
                this.selectedNumbers.weekly.push(num);
            } else {
                this.selectedNumbers.weekly.splice(index, 1);
            }
        },
                
        toggleMonthlyNumber(num) {
            const index = this.selectedNumbers.monthly.indexOf(num);
            if (index === -1) {
                this.selectedNumbers.monthly.push(num);
            } else {
                this.selectedNumbers.monthly.splice(index, 1);
            }
        }
    }));
});

//the last part

document.addEventListener('DOMContentLoaded', () => {
    feather.replace();
});
