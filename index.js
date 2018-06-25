const App = {
    count: 0,
    colors: ['red', 'green', 'blue'],

    init(){
      this.cacheDom();
      this.bindEventListeners();
      this.render();
    },
    cacheDom(){
      this.root = document.querySelector('#app');
      this.forwardBtn = this.root.querySelector('.forward');
      this.backBtn = this.root.querySelector('.back');
      this.display = this.root.querySelector('.color-box');
    },
    bindEventListeners(){
      this.forwardBtn.addEventListener('click', this.goForward.bind(this));
      this.backBtn.addEventListener('click', this.goBack.bind(this));
    },

    goForward(){
      this.count = (this.count + 1 + this.colors.length) % this.colors.length;
      this.render();
    },

    goBack(){
      this.count = (this.count - 1 + this.colors.length) % this.colors.length;
      this.render();

    },

    render(){
      this.display.style.backgroundColor = this.colors[this.count];

    }
  };
  
  App.init();
  window.App = App;