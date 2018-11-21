import jsx from "./../jsx-transform/jsx";
import Modular from "modular-ui";

Object.defineProperty(window, "Modular", {
  value: Modular,
  enumerable: false,
  configurable: false
});

window.addEventListener("load", () => {
  const scriptElements = Array.from(document.querySelectorAll("script[type='modular/jsx']"))
    .filter(el => el.src || el.innerHTML.trim());

  function getScripts() {
    return Promise.all(scriptElements.map(el => {
      el.remove();

      if (el.src) {
        return fetch(el.src)
          .then(res => res.text());
      } else {
        return el.innerHTML;
      }
    }));
  }

  getScripts().then(scripts => scripts.map(script => {
    const el = document.createElement("script");

    el.innerHTML = jsx.fromString(script, {
      factory: "Modular.el"
    });

    document.body.appendChild(el);
  }));
});