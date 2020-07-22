for (i = 0; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  } else {
    continue;
  }
}

for (i = 0; i <= 10; i++) {
  if (i <= 8) {
    console.log(i);
  } else {
    break;
  }
}
