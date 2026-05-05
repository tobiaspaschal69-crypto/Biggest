// Go to dashboard
function goDashboard() {
    window.location.href = "dashboard.html";
}

// Save selected plan
function selectPlan(plan) {
    localStorage.setItem("plan", plan);
    alert(plan + " plan selected!");
}

// Load plan on dashboard
window.onload = function() {
    let savedPlan = localStorage.getItem("plan");
    if (savedPlan && document.getElementById("plan")) {
        document.getElementById("plan").innerText = savedPlan;
    }
}

// Fake deposit
function deposit() {
    let balance = localStorage.getItem("balance") || 0;
    balance = Number(balance) + 1000;
    localStorage.setItem("balance", balance);
    updateBalance();
}

// Fake withdraw
function withdraw() {
    let balance = localStorage.getItem("balance") || 0;

    if (balance >= 500) {
        balance = Number(balance) - 500;
        localStorage.setItem("balance", balance);
        updateBalance();
    } else {
        alert("Not enough balance");
    }
}

// Update balance display
function updateBalance() {
    let balance = localStorage.getItem("balance") || 0;
    if (document.getElementById("balance")) {
        document.getElementById("balance").innerText = "$" + balance;
    }
}

// Run when page loads
window.onload = function() {
    updateBalance();

    let savedPlan = localStorage.getItem("plan");
    if (savedPlan && document.getElementById("plan")) {
        document.getElementById("plan").innerText = savedPlan;
    }
};