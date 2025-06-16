export const handleAnchorClick = (e) => {
  let target = e.target;
  while (target && target !== document) {
    if (target.tagName === "A") {
      const href = target.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          window.scrollTo({
            top: element.getBoundingClientRect().top + window.pageYOffset - 80,
            behavior: "smooth",
          });
        }
        break;
      }
    }
    target = target.parentElement;
  }
};

export const addAnchorClickListener = () => {
  document.addEventListener("click", handleAnchorClick);
};

export const removeAnchorClickListener = () => {
  document.removeEventListener("click", handleAnchorClick);
};

export const initAnchorClickHandler = () => {
  addAnchorClickListener();
  return () => {
    removeAnchorClickListener();
  };
};

export default {
  handleAnchorClick,
  addAnchorClickListener,
  removeAnchorClickListener,
  initAnchorClickHandler,
};
