// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

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
  const arrData = [];
  fs.readFile(file1, "utf8", (err, data) => {
    if (err) return fnCallBack(err, null);
    const hasil1 = JSON.parse(data).message.split(" ");
    arrData.push(hasil1[1]);
    fs.readFile(file2, "utf-8", (err, data) => {
      if (err) return fnCallBack(err, null);
      const hasil2 = JSON.parse(data)[0].message.split(" ");
      arrData.push(hasil2[1]);
      fs.readFile(file3, "utf-8", (err, data) => {
        if (err) return fnCallBack(err, null);
        const hasil3 = JSON.parse(data)[0].data.message.split(" ");
        arrData.push(hasil3[1]);
        fnCallBack(null, arrData);
      });
    });
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
