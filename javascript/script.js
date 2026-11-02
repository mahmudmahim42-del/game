let p1 = document.querySelector('.p-one');
let p2 = document.querySelector('.p-two');

let p1input = document.querySelector('#p1input');
let p1btn = document.querySelector('#p1btn');

// ১. এখানে ডট (.) এর জায়গায় হ্যাশ (#) ব্যবহার করা হয়েছে (যদি HTML এ ID থাকে)
let p2input = document.querySelector('.p2input');
let p2btn = document.querySelector('.p2btn');

// ২. প্লেয়ার ১ এর নাম্বারটি মনে রাখার জন্য একটি ভেরিয়েবল
let playerOneNumber;

let h3 = document.createElement('h3');

// --- প্লেয়ার ১ এর কাজ ---
p1btn.addEventListener('click', function () {
  let inputValue = p1input.value;

  if (inputValue == '') {
    h3.innerHTML = 'kisu lekh vii';
    p1.append(h3);
  } else if (inputValue < 0 || inputValue > 9) {
    h3.innerHTML = '0-9 er modhe kisu deo';
    p1.append(h3);
  } else {
    playerOneNumber = inputValue; // প্লেয়ার ১ এর নাম্বার সেভ করে রাখা হলো
    h3.remove(); // আগের এরর মেসেজ মুছে ফেলা
    p2.style.display = 'block';
    p1.style.display = 'none';
  }
});

// --- প্লেয়ার ২ এর কাজ ---
p2btn.addEventListener('click', function () {
  let inputValue = p2input.value;

  if (inputValue == '') {
    h3.innerHTML = 'kisu lekh vii';
    p2.append(h3); // ৩. এখানে p1 এর জায়গায় p2 হবে
  } else if (inputValue < 0 || inputValue > 9) {
    h3.innerHTML = '0-9 er modhe kisu deo';
    p2.append(h3); // ৩. এখানে p1 এর জায়গায় p2 হবে
  } else {
    // ৪. প্লেয়ার ১ এবং প্লেয়ার ২ এর নাম্বার মিলিয়ে দেখার লজিক
    if (inputValue === playerOneNumber) {
      h3.innerHTML = 'Player 2 Wins! 🎉';
      h3.style.color = 'green';
      p2.append(h3);
    } else {
      h3.innerHTML = 'Wrong Guess! Player 1 Wins! 🏆';
      h3.style.color = 'red';
      p2.append(h3);
    }
  }
});
