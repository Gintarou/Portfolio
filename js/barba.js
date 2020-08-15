barba.use(barbaPrefetch);

barba.init({
  transitions: [
    {
      async leave() {
        mask.classList.add('active');
        await new Promise(resolve => {
          return setTimeout(resolve, 1000);
        });
      },
      afterEnter() {
        mask.classList.remove('active');
      }
    }
  ]
});
