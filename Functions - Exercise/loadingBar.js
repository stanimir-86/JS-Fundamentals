function showLoadingBar(percent) {
  const barLength = 10;
  const numChars = Math.floor(percent / 10);
  let bar = '[' + '%'.repeat(numChars) + '.'.repeat(barLength - numChars) + ']';

  if (percent < 100) {
    console.log(percent + '% ' + bar);
    console.log('Still loading...');
  } else {
    console.log(percent + '% ' + 'Complete');
  }
}
showLoadingBar(30);
showLoadingBar(50);
showLoadingBar(100);