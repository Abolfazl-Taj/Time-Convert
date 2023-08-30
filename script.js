let demo = document.getElementById("demo");
let s = 1000;
let m = 60 * s;
let h = 60 * m;
let d = 24 * h;
let w = d * 7;
let mont = w * 4;
let y = mont * 12;
let sen = y*100;
let date = new Date();
let pass = Date.parse(date);
let Timepass = (adad, parameter) => {
  pass = pass + adad * parameter;
  let Dif = new Date(pass);
  demo.innerHTML = Dif;
};
Timepass(5, sen);
