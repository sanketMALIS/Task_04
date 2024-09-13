function changeBackground() {
    const colors = ['#ff5733', '#33ff57', '#3357ff', '#ff33a1', '#33fff6'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
}
