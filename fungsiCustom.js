// TODO: import module bila dibutuhkan di sini

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3
const bacaData = (fnCallBack) => {
  const fs = require("fs");
  const arrData = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) {
      fnCallBack(err, null);
    } else {
      const hasil = JSON.parse(data);
      const kata = hasil.message;
      const arrKata = kata.split(" ");
      arrData.push(arrKata[1]);
    }
  });
  fnCallBack(null, arrData);
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
