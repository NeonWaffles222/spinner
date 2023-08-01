const spinner = () => {
  const animation = "|/-\\|/-\\|";
  let delay = 100;
  for (let char of animation) {
    setTimeout(() => {
      process.stdout.write(`\r${char}   `);
    }, delay);
    delay += 200;
  }
  setTimeout(() => console.log(), delay);
};

spinner();