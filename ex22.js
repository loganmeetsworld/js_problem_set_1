var values = [8, 5, 3, 10, 14, 2]

for (var i = 0; i < values.length; i++){
  if (values[i] === 10)
    console.log("Special case!");
  else
    console.log("Regular values like " + values[i]);
}
