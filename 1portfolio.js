function copyToClipboard() {
    const email = document.getElementById("email").innerText;
    const phone = document.getElementById("phone").innerText;
    const text = `Email: ${email}\nPhone: ${phone}`;
    navigator.clipboard.writeText(text).then(() => {
        alert("Contact info copied!");
    });
}