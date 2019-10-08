document.addEventListener('DOMContentLoaded', () => {
  const app = document.querySelector('#app');
  const timer1 = new Timer (10);
  timer1.mount(app);
  const timer2 = new Timer (4);
  timer2.mount(app);
  const timer3 = new Timer (3);
  timer3.mount(app);
});

