const wordlist = ["apple", "banana", "coin", "dog", "elephant", "fish", "grape", "hat", "itch" , "jacket", "hello", "kite", "lion", "monkey", "nose", "orange", "pear", "queen", "rose", "snake", "tiger", "umbrella", "vase", "watermelon"];
const definitions = ["Quả táo", "Quả chuối", "Tiền xu", "Con Chó", "Con voi", "Cá", "Quả nho", "Cái mũ", "Cảm giác ngứa", "Áo khoác", "Xin chào", "Con diều", "Sư tử", "Khỉ", "Mũi", "Quả cam", "Quả lê", "Nữ hoàng", "Hoa hồng", "Rắn", "Hổ", "Ô dù", "Bình hoa", "Dưa hấu"];

function search(id) {
    const input = document.getElementById(id);
    const result = document.getElementById("definition");
    const word = input.value.toLowerCase();
    const index = wordlist.indexOf(word);

    if (index !== -1) {
        result.innerHTML = `<strong>${definitions[index]}</strong>`;
    } else {
        result.innerHTML = "Không tìm thấy từ trong từ điển.";
        result.style.color = "red";
    }
    input.value = ""; // Clear the input field after search
}