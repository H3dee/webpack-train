const start = async () =>
  new Promise((resolve) =>
    setTimeout(() => resolve("Async is correctly working"), 0)
  );

start().then((response) => console.log("\n", response));

