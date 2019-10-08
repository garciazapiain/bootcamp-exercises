class Timer {
  constructor(value) {
    this.value = value;
    this.timer = null;
  }

  increment() {
    if (this.value >= 0) {
      this.value++;
      this.update();
    }
  }

  decrement() {
    if (this.value > 0) {
      this.value--;
      this.update();
    }
  }

  start() {
    this.timer = setInterval (()=>{
      if(this.value>0){
        this.value--
        this.update()
      }
      else {
        this.clear()
      }
    },1000)
  }

  clear(){
    clearInterval(this.timer);
    this.timer = null;
    this.update;
  }

  reset(){
    this.value=0;
    this.update();
  }
  
  render() {
    this.element = document.createElement('div');
    this.element.className = 'timer';
    this.element.innerHTML = 
      `<div id="timer" class="timer">
        <div id ="arrowup" class="arrowup">UP</div>
        <div class="middle">
          <div id ="reset" class="reset">Reset</div>
          <div id ="counter" class="counter"></div>
          <div id ="start" class="start">Start</div>
        </div>
        <div id="arrowdown" class="arrowdown">DOWN</div>
       </div>`;

    const upBtn = this.element.querySelector('#arrowup');
    upBtn.addEventListener('click', () => {
      this.increment();
    });

    const downBtn = this.element.querySelector('#arrowdown');
    downBtn.addEventListener('click', () => {
      this.decrement();
    });

    const startBtn = this.element.querySelector('#start');
    startBtn.addEventListener('click', () => {
      if (this.timer==null){
        const start = document.querySelector('#start');
        start.textContent = 'Stop'
        this.start ();
      }
      else{
        const start = document.querySelector('#start');
        start.textContent = 'Start'
        this.clear()
      }
    });

    const resetBtn = this.element.querySelector('#reset');
    resetBtn.addEventListener('click', () => {
      this.reset();
    });
    
    this.update();
    return this.element;
  }

  mount(parent) {
    const component = this.render();
    parent.appendChild(component);
  }

  update() {
    const counter = this.element.querySelector('#counter');
    counter.textContent = `${this.value}`;
  }
}
