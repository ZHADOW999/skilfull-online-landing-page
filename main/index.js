const hamMenu = document.querySelector(".ham-menu");

const offScreenMenu = document.querySelector(".nav-list");

hamMenu.addEventListener("click", () => {
    hamMenu.classList.toggle("active2");
    offScreenMenu.classList.toggle("active2");
    
});

  (function (s, e, n, d, er) {
    s['Sender'] = er;
    s[er] = s[er] || function () {
      (s[er].q = s[er].q || []).push(arguments)
    }, s[er].l = 1 * new Date();
    var a = e.createElement(n),
        m = e.getElementsByTagName(n)[0];
    a.async = 1;
    a.src = d;
    m.parentNode.insertBefore(a, m)
  })(window, document, 'script', 'https://cdn.sender.net/accounts_resources/universal.js', 'sender');
  sender('3f5ed176993699')

