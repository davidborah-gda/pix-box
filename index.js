const App = {

    enlargeSrc:"",

    init() {
        this.cacheDom();
        this.bindEventListeners();
        this.render();
    },
    cacheDom() {
        this.root = document.querySelector('#app');
        this.selectors = this.root.querySelectorAll(".selection");
        this.enlarge = this.root.querySelector(".dest");
    },
    bindEventListeners() {
        this.selectors.forEach(element => {
            element.addEventListener('click', this.selectIMG.bind(this));
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