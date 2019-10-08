class Progressbar{
  constructor (value, maxvalue){
    initial.value = value
    initial.maxvalue = maxvalue
  }
  increment (){
    value++;
    update()
  }
  decrement (){
    value--;
    update()
  }
  render(){
    element= document.createElement("div")
    element.getElementById("app").innerHTML={
      <div id="app">
    <div id="label" class="label">
      <span id="initial.value">4</span>/<span id="maximum">10</span>
    </div>
    <div class="progress">
      <div id="minus" class="btn-minus"></div>
      <div class="bar">
        <div id="knob" class="knob"></div>
      </div>
      <div id="plus" class="btn-plus"></div>
    </div>
    }
  }
  update(){
    
  }
  mount
}

