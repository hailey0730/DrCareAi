var ss = SpreadsheetApp.getActiveSpreadsheet(),
sheet1 = ss.getSheetByName("sheet1"); // "sheet1" 改成你的工作表名稱
var range = sheet1.getDataRange();
var values = range.getValues();

function doPost(e) {
var para = e.parameter, // 存放 post 所有傳送的參數
method = para.method;

if (method == "write") {
write_data(para);
}
if (method == "read") {
// 這裡放讀取資料的語法 下一篇說明
}
return;

}

function write_data(para) {
var temp = [];
var addList = [];
addList.push(para['docId']);
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
if(values[i][0] == addList[0]){

for(var j = 0; j < addList.length; j ++){
if(values[i][j] != addList[j]){
var temp = addList[j];
addList[j] = temp + "(改)";
}
}

sheet1.deleteRow(i+1);
sheet1.appendRow(addList); // 插入一列新的資料 
var lastRow = sheet1.getLastRow();
var lastColumn = sheet1.getLastColumn();
var rowSpec = sheet1.getRange(lastRow,1,1,lastColumn);
sheet1.moveRows(rowSpec,i+1);
append = true;
}
}
if(!append){
for(var j = 0; j < addList.length; j ++){
var temp = addList[j];
addList[j] = temp + "(新增)";
}
sheet1.appendRow(addList); // 插入一列新的資料
}
}

function doGet(e){}

function myFunction() {

}
