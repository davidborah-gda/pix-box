const App = {
  enlargeSrc: "http://celebwallpapers.net/wp-content/uploads/2018/02/free-christmas-birds-wallpaper-best-of-cardinal-bird-wallpaper-of-free-christmas-birds-wallpaper-350x150.jpg",

  init() {
    this.cacheDom();
    this.bindEventListeners();
    this.render();
  },
  cacheDom() {
    this.root = document.querySelector("#app");
    this.selectors = this.root.querySelectorAll(".selection");
    this.enlarge = this.root.querySelector(".destination");
  },
  bindEventListeners() {
    this.selectors.forEach(element => {
      element.addEventListener("click", this.selectIMG.bind(this));
    });
  },

  selectIMG(e) {
    this.enlargeSrc = e.target.currentSrc;
    this.render();
  },

  render() {
    this.enlarge.src = this.enlargeSrc;
  }
};

App.init();
window.App = App;
