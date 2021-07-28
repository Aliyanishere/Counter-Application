var a = 0;
var input2 = document.getElementById("input2");
function plus() {
  var input1 = document.getElementById("input1");
  if (input2.value >= 1) {
    var result = parseInt(input1.value) + parseInt(input2.value);
    input1.value = result;
    // input2.value = " ";
  }
  else{
    a++;
    input1.value = a;
  }
}

function minus() {
  var input1 = document.getElementById("input1");
  if (input2.value >= 1) {
    var result = parseInt(input1.value) - parseInt(input2.value);
    input1.value = result;
    // input2.value = " ";
  }
  else{
    a--;
    input1.value = a;
  }
}
