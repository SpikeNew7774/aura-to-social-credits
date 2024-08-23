const def = {
    scripts: [
        {
            src: "./src/script.js",
            defer: true,
            type: "module"
        }
    ],
    links: [
        {
            src: "./src/style.css",
            rel: "stylesheet"
        },
        {
            src: "/favicon.ico",
            rel: "shortcut icon",
            type: "image/x-icon",
        }
    ]
}

if (window.location.pathname === "/skipverif") {
    def.scripts = def.scripts.map(script => {
        return {
            ...script,
            src: script.src + "?verification=skip"
        };
    });

    def.links = def.links.map(link => {
        return {
            ...link,
            src: link.src + "?verification=skip"
        };
    });
}

document.addEventListener("DOMContentLoaded", () => {
    def.scripts.forEach(scrdef => {
        const script = document.createElement("script");
        script.src = scrdef.src;
        scrdef.defer ? script.setAttribute("defer", "true") : null
        scrdef.async ? script.setAttribute("async", "true") : null
        scrdef.type ? script.type = scrdef.type : null
        document.head.appendChild(script);
    })

    def.links.forEach(stydef => {
        const link = document.createElement("link");
        link.href = stydef.src;
        stydef.rel ? link.rel = stydef.rel : null
        stydef.type ? link.type = stydef.type : null
        document.head.appendChild(link)
    })
})