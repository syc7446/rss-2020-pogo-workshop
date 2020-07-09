var ul = document.querySelectorAll('ul.pioneers');
for (var i = ul[0].children.length; i >= 0; i--) {
    ul[0].appendChild(ul[0].children[Math.random() * i | 0]);
}
for (var i = ul[1].children.length; i >= 0; i--) {
    ul[1].appendChild(ul[1].children[Math.random() * i | 0]);
}