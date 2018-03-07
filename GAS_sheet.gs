var ss = SpreadsheetApp.getActiveSpreadsheet(),
sheet1 = ss.getSheetByName("sheet1"); // "sheet1" 改成你的工作表名稱
var range = sheet1.getDataRange();
var values = range.getValues();

function doPost(e) {
var para = e.parameter, // 存放 post 所有傳送的參數
method = para.method;
var ret;
if (method == "write") {
ret = write_data(para);
}
if (method == "read") {
// 這裡放讀取資料的語法 下一篇說明
}
return ret;
}

function write_data(para) {
var temp = [];
var addList = [];
var date = new Date();
addList.push(date);
addList.push(para['docId']);
addList.push(para['token']);
addList.push(para['chName']);
addList.push(para['enName']);
addList.push(para['gender']);
addList.push(para['docPic']);
addList.push(para['specialist']);
addList.push(para['serviceProduct']);
addList.push(para['certificate']);
addList.push(para['language']);
addList.push(para['hospital']);
addList.push(para['phoneNum']);
addList.push(para['phone']);
addList.push(para['fax']);
addList.push(para['call']);
addList.push(para['email']);
addList.push(para['facebook']);
addList.push(para['ticket']);
addList.push(para['night']);
addList.push(para['ps']);

var base64 = para['docPic'];

if(para['docId'] == '' || para['chName']==''||para['enName']==''||para['gender']==''||para['specialist']==''){
return ContentService.createTextOutput('Missing information!');
}

var num = 0;
var serPrice = '';
while(para['service-'+num] != null){
serPrice += para['service-' + num] ;
serPrice += ' : ' ;
serPrice += para['price-' + num];
serPrice += '\n';
num++;
}
addList.push(serPrice);

num = 0;
var articleUrl = '';
while(para['docArticleurl-'+num] !=null){
articleUrl += para['docArticleurl-'+num];
articleUrl += ';';
num++;
}
addList.push(articleUrl);

num = 0;
var vaccine = '';
while(para['vaccine-'+num] != null){
vaccine += para['vaccine-'+num];
vaccine += ' : ';
vaccine += para['vaccinePrice-'+num];
vaccine += '\n';
num++;
}
addList.push(vaccine);

num = 0;
var clinic = '';
while(para['clinicName-'+num] != null){
clinic = '';
clinic += para['clinicName-'+num];
clinic += '\n';
clinic += para['address-'+num];
clinic += '\n';
clinic += para['clinicTime-'+num];
clinic += '\n';
clinic += para['clinicHoliday-'+num];
clinic += '\n';
clinic += para['clinicPhone-'+num];
clinic += '\n';
clinic += para['enquiry-'+num];
clinic += '\n';
clinic += para['clinicUrl-'+num];
clinic += '\n';
clinic += para['clinicEmail-'+num];
clinic += '\n';
clinic += para['clinicPic-'+num];
clinic += '\n';
clinic += para['clinicIntro-'+num];
clinic += '\n';
num++;
addList.push(clinic);
}


var append = false;
for(var i = 0; i < values.length; i ++){
if(values[i][1] == addList[1]){

for(var j = 2; j < addList.length; j ++){
var temp = String(values[i][j]);
if(temp.split("(改)")[0] != addList[j] && String(addList[j]).indexOf("(改)") < 0){

var temp = addList[j];
addList[j] = temp + "(改)";
}
}

//sheet1.deleteRow(i+1);
//sheet1.appendRow(addList); // 插入一列新的資料 
//var lastRow = sheet1.getLastRow();
//var lastColumn = sheet1.getLastColumn();
//var rowSpec = sheet1.getRange(lastRow,1,1,lastColumn);
//if(lastRow != i+1){
//sheet1.moveRows(rowSpec,i+1);
////var blob = Utilities.newBlob(Utilities.base64Decode(base64.split('base64,')[1].split("(改)")[0], Utilities.Charset.UTF_8),  base64.split(';')[0].split(':')[1], 'MyImageName');
////sheet1.insertImage(blob, i+1, 5);
//}
//append = true;
}
}

//if(!append){
//for(var j = 0; j < addList.length; j ++){
//if(j!=0){
//var temp = addList[j];
//addList[j] = temp + "(新增)";
//}
//}
sheet1.appendRow(addList); // 插入一列新的資料
////var blob = Utilities.newBlob(Utilities.base64Decode(base64.split('base64,')[1].split("(新增)")[0], Utilities.Charset.UTF_8),  base64.split(';')[0].split(':')[1], 'MyImageName');
////sheet1.insertImage(blob, lastRow, 5);
//}

return ContentService.createTextOutput('Update success!');
}

function doGet(e){
 var params = JSON.stringify(e);
  return HtmlService.createHtmlOutput(params);
}

function myFunction() {
var date = new Date();
Logger.log(date);
// work
//Logger.log(base64);
//Logger.log(base64.split('base64,')[1].split("(改)")[0]);
//var blob = Utilities.newBlob(Utilities.base64Decode(base64.split('base64,')[1].split("(改)")[0], Utilities.Charset.UTF_8),  'image/png', 'MyImageName');
////sheet1.insertImage("https://www.google.com/images/srpr/logo3w.png", 1, 1);
//sheet1.insertImage(blob, 1, 1);
}
