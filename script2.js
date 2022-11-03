function init() {
  console.log("hapus");
  if (form.bangun.value == "luasbalok") {
    form.angka1.type = "text";
    form.angka2.type = "text";
    form.angka3.type = "text";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "panjang";
    form.angka2.placeholder = "lebar";
    form.total.placeholder = "luas";
  }
  if (form.bangun.value == "luaspersegi") {
    form.angka1.type = "text";
    form.angka3.type = "hidden";
    form.angka2.type = "text";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "panjang";
    form.angka2.placeholder = "lebar";
    form.angka3.placeholder = "tinggi";
    form.total.placeholder = "luas";
  }
  if (form.bangun.value == "luassg") {
    form.angka1.type = "text";
    form.angka3.type = "hidden";
    form.angka2.type = "text";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "alas";
    form.total.placeholder = "luas";
    form.angka2.placeholder = "tinggi";
  }

  if (form.bangun.value == "volumeps") {
    form.angka1.type = "text";
    form.angka2.type = "text";
    form.angka3.type = "text";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "alas";
    form.angka2.placeholder = "tinggi";
    form.angka3.placeholder = "tinggi prisma";
    form.total.placeholder = "volume";
  }
  if (form.bangun.value == "volumel") {
    form.angka1.type = "text";
    form.angka2.type = "text";
    form.angka3.type = "hidden";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "luas alas";
    form.angka2.placeholder = "tinggi";
    form.angka3.placeholder = "tinggi prisma";
    form.total.placeholder = "volume";
  }
  if (form.bangun.value == "volumekbs") {
    form.angka1.type = "text";
    form.angka2.type = "hidden";
    form.angka3.type = "hidden";
    form.submit.type = "button";
    form.total.type = "text";
    form.angka1.placeholder = "sisi";
    form.angka2.placeholder = "tinggi";
    form.angka3.placeholder = "tinggi prisma";
    form.total.placeholder = "volume";
  }
}
function proses() {
  if (form.bangun.value == "luasbalok") {
    a = eval(form.angka1.value);
    c = eval(form.angka3.value);
    b = eval(form.angka2.value);
    h = 2 * (a * b + b * c + c * a);
    form.total.value = h;
  }
  if (form.bangun.value == "luaspersegi") {
    a = eval(form.angka1.value);
    b = eval(form.angka2.value);
    h = a * b;
    form.total.value = h;
  }
  if (form.bangun.value == "luassg") {
    a = eval(form.angka1.value);
    b = eval(form.angka2.value);
    h = 0.5 * (a * b);
    form.total.value = h;
  }
  if (form.bangun.value == "volumeps") {
    a = eval(form.angka1.value);
    b = eval(form.angka2.value);sss
    c = eval(form.angka3.value);
    h = (0.5 * a * b)*c;
    form.total.value = h;
    }
  if (form.bangun.value == "volumel") {
        a = eval(form.angka1.value);
        b = eval(form.angka2.value);
        h = (a * b / 3);
        form.total.value = h;
  }
  if (form.bangun.value == "volumekbs") {
        a = eval(form.angka1.value);
        h = a*a*a;
        form.total.value = h;
  }
}
