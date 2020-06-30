
let count = 50;


for (let i = 1; i < 12; i++) {
  count += 50;
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, count);
  count += 50;
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, count);
  count += 50;
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, count);
  count += 50;
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, count);
}