
function array_average (a) {
  let sum = 0;
  for (let i = 0; i < a.length; i++) {
    sum += a[i];
  }
  return ("" + (sum/a.length)).substring(0, 4);
}

function array_random_element (a) {
  const random_index = get_random_number(a.length);
  return a[random_index];
}

function array_find (a, test_function) {

  let i = 0;
  while (i < a.length) {
    if (test_function(a[i])) {
      return a[i];
    } 
    i = i + 1;
  }

}

function array_filter (a, test_function) {
  let i = 0;
  let result = [];
  while (i < a.length) {
    if (test_function(a[i])) {
      result.push(a[i]);
    } 
    i = i + 1;
  }
  return result;

}

function array_each (a, callback) { 
  let i = 0;
  while (i < a.length) {
    callback(a[i]); 
    i = i + 1;
  } 

}

function array_map (a, transform_function) {

  let result = [];
  for (let i = 0; i < a.length; i++) {
    result.push(transform_function(a[i]));
  }
  return result;
}
