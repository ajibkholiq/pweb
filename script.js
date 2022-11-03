
   function Cek() {
    if (form.angka1.value == "" || form.angka2.value == "") {
      alert("anda belum memasukan angka");
      exit;
    }
  }
  function proses() {
    Cek();
    a = eval(form.angka1.value);
    b = eval(form.angka2.value);
    if (form.oprator.value == "+") {
      c = a + b;
      console.log(c);
      form.total.value = c;
    } else if (form.oprator.value == "-") {
      c = a - b;
      form.total.value = c;
    } else if (form.oprator.value == "/") {
      c = a / b;
      form.total.value = c;
    } else if (form.oprator.value == "*" || form.oprator.value == "x") {
      c = a * b;
      form.total.value = c;
    }
  }
  function coba() {
      console.log("ajib");
      form.total.type = "hidden";
  }
