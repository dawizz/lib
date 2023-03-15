"use strict";
module.exports = validate14;
module.exports.default = validate14;
const schema16 = {"$id":"https://github.com/data-fair/lib/session-state","type":"object","title":"session state","properties":{"user":{"$ref":"#/definitions/user"},"organization":{"$ref":"#/definitions/organizationMembership"},"account":{"$ref":"#/definitions/account"},"accountRole":{"type":"string"},"lang":{"type":"string"},"dark":{"type":"boolean"}},"definitions":{"organizationMembership":{"type":"object","additionalProperties":false,"required":["id","name","role"],"properties":{"id":{"type":"string"},"name":{"type":"string"},"role":{"type":"string"},"department":{"type":"string"},"departmentName":{"type":"string"},"dflt":{"type":"boolean"}}},"userRef":{"type":"object","additionalProperties":false,"required":["id","name"],"properties":{"id":{"type":"string"},"name":{"type":"string"}}},"user":{"type":"object","additionalProperties":false,"required":["email","id","name","organizations"],"properties":{"email":{"type":"string","format":"email"},"id":{"type":"string"},"name":{"type":"string"},"organizations":{"type":"array","items":{"$ref":"#/definitions/organizationMembership"}},"isAdmin":{"type":"integer","enum":[0,1]},"adminMode":{"type":"integer","enum":[0,1]},"asAdmin":{"$ref":"#/definitions/userRef"},"pd":{"type":"string","format":"date"},"ipa":{"type":"integer","enum":[0,1]}}},"account":{"type":"object","additionalProperties":false,"required":["type","id","name"],"properties":{"type":{"type":"string","enum":["user","organization"]},"id":{"type":"string"},"name":{"type":"string"},"department":{"type":"string"},"departmentName":{"type":"string"}}}}};
const schema18 = {"type":"object","additionalProperties":false,"required":["id","name","role"],"properties":{"id":{"type":"string"},"name":{"type":"string"},"role":{"type":"string"},"department":{"type":"string"},"departmentName":{"type":"string"},"dflt":{"type":"boolean"}}};
const schema21 = {"type":"object","additionalProperties":false,"required":["type","id","name"],"properties":{"type":{"type":"string","enum":["user","organization"]},"id":{"type":"string"},"name":{"type":"string"},"department":{"type":"string"},"departmentName":{"type":"string"}}};
const schema17 = {"type":"object","additionalProperties":false,"required":["email","id","name","organizations"],"properties":{"email":{"type":"string","format":"email"},"id":{"type":"string"},"name":{"type":"string"},"organizations":{"type":"array","items":{"$ref":"#/definitions/organizationMembership"}},"isAdmin":{"type":"integer","enum":[0,1]},"adminMode":{"type":"integer","enum":[0,1]},"asAdmin":{"$ref":"#/definitions/userRef"},"pd":{"type":"string","format":"date"},"ipa":{"type":"integer","enum":[0,1]}}};
const schema19 = {"type":"object","additionalProperties":false,"required":["id","name"],"properties":{"id":{"type":"string"},"name":{"type":"string"}}};
const func2 = Object.prototype.hasOwnProperty;
const formats0 = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/i;
const formats2 = require("ajv-formats/dist/formats").fullFormats.date;

function validate15(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.email === undefined){
const err0 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "email"},message:"must have required property '"+"email"+"'"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data.id === undefined){
const err1 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data.name === undefined){
const err2 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
if(data.organizations === undefined){
const err3 = {instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: "organizations"},message:"must have required property '"+"organizations"+"'"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
for(const key0 in data){
if(!(func2.call(schema17.properties, key0))){
const err4 = {instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(data.email !== undefined){
let data0 = data.email;
if(typeof data0 !== "string"){
let dataType0 = typeof data0;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data0) && data0.length == 1){
data0 = data0[0];
dataType0 = typeof data0;
if(typeof data0 === "string"){
coerced0 = data0;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data0;
}
else if(data0 === null){
coerced0 = "";
}
else {
const err5 = {instancePath:instancePath+"/email",schemaPath:"#/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(coerced0 !== undefined){
data0 = coerced0;
if(data !== undefined){
data["email"] = coerced0;
}
}
}
if(typeof data0 === "string"){
if(!(formats0.test(data0))){
const err6 = {instancePath:instancePath+"/email",schemaPath:"#/properties/email/format",keyword:"format",params:{format: "email"},message:"must match format \""+"email"+"\""};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
}
if(data.id !== undefined){
let data1 = data.id;
if(typeof data1 !== "string"){
let dataType1 = typeof data1;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data1) && data1.length == 1){
data1 = data1[0];
dataType1 = typeof data1;
if(typeof data1 === "string"){
coerced1 = data1;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data1;
}
else if(data1 === null){
coerced1 = "";
}
else {
const err7 = {instancePath:instancePath+"/id",schemaPath:"#/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(coerced1 !== undefined){
data1 = coerced1;
if(data !== undefined){
data["id"] = coerced1;
}
}
}
}
if(data.name !== undefined){
let data2 = data.name;
if(typeof data2 !== "string"){
let dataType2 = typeof data2;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType2 = typeof data2;
if(typeof data2 === "string"){
coerced2 = data2;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "number" || dataType2 == "boolean"){
coerced2 = "" + data2;
}
else if(data2 === null){
coerced2 = "";
}
else {
const err8 = {instancePath:instancePath+"/name",schemaPath:"#/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(coerced2 !== undefined){
data2 = coerced2;
if(data !== undefined){
data["name"] = coerced2;
}
}
}
}
if(data.organizations !== undefined){
let data3 = data.organizations;
if(!(Array.isArray(data3))){
let dataType3 = typeof data3;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType3 = typeof data3;
if(Array.isArray(data3)){
coerced3 = data3;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 === "string" || dataType3 === "number"
              || dataType3 === "boolean" || data3 === null){
coerced3 = [data3];
}
else {
const err9 = {instancePath:instancePath+"/organizations",schemaPath:"#/properties/organizations/type",keyword:"type",params:{type: "array"},message:"must be array"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(coerced3 !== undefined){
data3 = coerced3;
if(data !== undefined){
data["organizations"] = coerced3;
}
}
}
if(Array.isArray(data3)){
const len0 = data3.length;
for(let i0=0; i0<len0; i0++){
let data4 = data3[i0];
if(data4 && typeof data4 == "object" && !Array.isArray(data4)){
if(data4.id === undefined){
const err10 = {instancePath:instancePath+"/organizations/" + i0,schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
if(data4.name === undefined){
const err11 = {instancePath:instancePath+"/organizations/" + i0,schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(data4.role === undefined){
const err12 = {instancePath:instancePath+"/organizations/" + i0,schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
for(const key1 in data4){
if(!((((((key1 === "id") || (key1 === "name")) || (key1 === "role")) || (key1 === "department")) || (key1 === "departmentName")) || (key1 === "dflt"))){
const err13 = {instancePath:instancePath+"/organizations/" + i0,schemaPath:"#/definitions/organizationMembership/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
}
if(data4.id !== undefined){
let data5 = data4.id;
if(typeof data5 !== "string"){
let dataType4 = typeof data5;
let coerced4 = undefined;
if(dataType4 == 'object' && Array.isArray(data5) && data5.length == 1){
data5 = data5[0];
dataType4 = typeof data5;
if(typeof data5 === "string"){
coerced4 = data5;
}
}
if(!(coerced4 !== undefined)){
if(dataType4 == "number" || dataType4 == "boolean"){
coerced4 = "" + data5;
}
else if(data5 === null){
coerced4 = "";
}
else {
const err14 = {instancePath:instancePath+"/organizations/" + i0+"/id",schemaPath:"#/definitions/organizationMembership/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
if(coerced4 !== undefined){
data5 = coerced4;
if(data4 !== undefined){
data4["id"] = coerced4;
}
}
}
}
if(data4.name !== undefined){
let data6 = data4.name;
if(typeof data6 !== "string"){
let dataType5 = typeof data6;
let coerced5 = undefined;
if(dataType5 == 'object' && Array.isArray(data6) && data6.length == 1){
data6 = data6[0];
dataType5 = typeof data6;
if(typeof data6 === "string"){
coerced5 = data6;
}
}
if(!(coerced5 !== undefined)){
if(dataType5 == "number" || dataType5 == "boolean"){
coerced5 = "" + data6;
}
else if(data6 === null){
coerced5 = "";
}
else {
const err15 = {instancePath:instancePath+"/organizations/" + i0+"/name",schemaPath:"#/definitions/organizationMembership/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(coerced5 !== undefined){
data6 = coerced5;
if(data4 !== undefined){
data4["name"] = coerced5;
}
}
}
}
if(data4.role !== undefined){
let data7 = data4.role;
if(typeof data7 !== "string"){
let dataType6 = typeof data7;
let coerced6 = undefined;
if(dataType6 == 'object' && Array.isArray(data7) && data7.length == 1){
data7 = data7[0];
dataType6 = typeof data7;
if(typeof data7 === "string"){
coerced6 = data7;
}
}
if(!(coerced6 !== undefined)){
if(dataType6 == "number" || dataType6 == "boolean"){
coerced6 = "" + data7;
}
else if(data7 === null){
coerced6 = "";
}
else {
const err16 = {instancePath:instancePath+"/organizations/" + i0+"/role",schemaPath:"#/definitions/organizationMembership/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(coerced6 !== undefined){
data7 = coerced6;
if(data4 !== undefined){
data4["role"] = coerced6;
}
}
}
}
if(data4.department !== undefined){
let data8 = data4.department;
if(typeof data8 !== "string"){
let dataType7 = typeof data8;
let coerced7 = undefined;
if(dataType7 == 'object' && Array.isArray(data8) && data8.length == 1){
data8 = data8[0];
dataType7 = typeof data8;
if(typeof data8 === "string"){
coerced7 = data8;
}
}
if(!(coerced7 !== undefined)){
if(dataType7 == "number" || dataType7 == "boolean"){
coerced7 = "" + data8;
}
else if(data8 === null){
coerced7 = "";
}
else {
const err17 = {instancePath:instancePath+"/organizations/" + i0+"/department",schemaPath:"#/definitions/organizationMembership/properties/department/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
if(coerced7 !== undefined){
data8 = coerced7;
if(data4 !== undefined){
data4["department"] = coerced7;
}
}
}
}
if(data4.departmentName !== undefined){
let data9 = data4.departmentName;
if(typeof data9 !== "string"){
let dataType8 = typeof data9;
let coerced8 = undefined;
if(dataType8 == 'object' && Array.isArray(data9) && data9.length == 1){
data9 = data9[0];
dataType8 = typeof data9;
if(typeof data9 === "string"){
coerced8 = data9;
}
}
if(!(coerced8 !== undefined)){
if(dataType8 == "number" || dataType8 == "boolean"){
coerced8 = "" + data9;
}
else if(data9 === null){
coerced8 = "";
}
else {
const err18 = {instancePath:instancePath+"/organizations/" + i0+"/departmentName",schemaPath:"#/definitions/organizationMembership/properties/departmentName/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(coerced8 !== undefined){
data9 = coerced8;
if(data4 !== undefined){
data4["departmentName"] = coerced8;
}
}
}
}
if(data4.dflt !== undefined){
let data10 = data4.dflt;
if(typeof data10 !== "boolean"){
let dataType9 = typeof data10;
let coerced9 = undefined;
if(dataType9 == 'object' && Array.isArray(data10) && data10.length == 1){
data10 = data10[0];
dataType9 = typeof data10;
if(typeof data10 === "boolean"){
coerced9 = data10;
}
}
if(!(coerced9 !== undefined)){
if(data10 === "false" || data10 === 0 || data10 === null){
coerced9 = false;
}
else if(data10 === "true" || data10 === 1){
coerced9 = true;
}
else {
const err19 = {instancePath:instancePath+"/organizations/" + i0+"/dflt",schemaPath:"#/definitions/organizationMembership/properties/dflt/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(coerced9 !== undefined){
data10 = coerced9;
if(data4 !== undefined){
data4["dflt"] = coerced9;
}
}
}
}
}
else {
const err20 = {instancePath:instancePath+"/organizations/" + i0,schemaPath:"#/definitions/organizationMembership/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
}
}
if(data.isAdmin !== undefined){
let data11 = data.isAdmin;
if(!((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11)))){
let dataType10 = typeof data11;
let coerced10 = undefined;
if(dataType10 == 'object' && Array.isArray(data11) && data11.length == 1){
data11 = data11[0];
dataType10 = typeof data11;
if((typeof data11 == "number") && (!(data11 % 1) && !isNaN(data11))){
coerced10 = data11;
}
}
if(!(coerced10 !== undefined)){
if(dataType10 === "boolean" || data11 === null
              || (dataType10 === "string" && data11 && data11 == +data11 && !(data11 % 1))){
coerced10 = +data11;
}
else {
const err21 = {instancePath:instancePath+"/isAdmin",schemaPath:"#/properties/isAdmin/type",keyword:"type",params:{type: "integer"},message:"must be integer"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
if(coerced10 !== undefined){
data11 = coerced10;
if(data !== undefined){
data["isAdmin"] = coerced10;
}
}
}
if(!((data11 === 0) || (data11 === 1))){
const err22 = {instancePath:instancePath+"/isAdmin",schemaPath:"#/properties/isAdmin/enum",keyword:"enum",params:{allowedValues: schema17.properties.isAdmin.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
if(data.adminMode !== undefined){
let data12 = data.adminMode;
if(!((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12)))){
let dataType11 = typeof data12;
let coerced11 = undefined;
if(dataType11 == 'object' && Array.isArray(data12) && data12.length == 1){
data12 = data12[0];
dataType11 = typeof data12;
if((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))){
coerced11 = data12;
}
}
if(!(coerced11 !== undefined)){
if(dataType11 === "boolean" || data12 === null
              || (dataType11 === "string" && data12 && data12 == +data12 && !(data12 % 1))){
coerced11 = +data12;
}
else {
const err23 = {instancePath:instancePath+"/adminMode",schemaPath:"#/properties/adminMode/type",keyword:"type",params:{type: "integer"},message:"must be integer"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(coerced11 !== undefined){
data12 = coerced11;
if(data !== undefined){
data["adminMode"] = coerced11;
}
}
}
if(!((data12 === 0) || (data12 === 1))){
const err24 = {instancePath:instancePath+"/adminMode",schemaPath:"#/properties/adminMode/enum",keyword:"enum",params:{allowedValues: schema17.properties.adminMode.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
}
if(data.asAdmin !== undefined){
let data13 = data.asAdmin;
if(data13 && typeof data13 == "object" && !Array.isArray(data13)){
if(data13.id === undefined){
const err25 = {instancePath:instancePath+"/asAdmin",schemaPath:"#/definitions/userRef/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
if(data13.name === undefined){
const err26 = {instancePath:instancePath+"/asAdmin",schemaPath:"#/definitions/userRef/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err26];
}
else {
vErrors.push(err26);
}
errors++;
}
for(const key2 in data13){
if(!((key2 === "id") || (key2 === "name"))){
const err27 = {instancePath:instancePath+"/asAdmin",schemaPath:"#/definitions/userRef/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key2},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err27];
}
else {
vErrors.push(err27);
}
errors++;
}
}
if(data13.id !== undefined){
let data14 = data13.id;
if(typeof data14 !== "string"){
let dataType12 = typeof data14;
let coerced12 = undefined;
if(dataType12 == 'object' && Array.isArray(data14) && data14.length == 1){
data14 = data14[0];
dataType12 = typeof data14;
if(typeof data14 === "string"){
coerced12 = data14;
}
}
if(!(coerced12 !== undefined)){
if(dataType12 == "number" || dataType12 == "boolean"){
coerced12 = "" + data14;
}
else if(data14 === null){
coerced12 = "";
}
else {
const err28 = {instancePath:instancePath+"/asAdmin/id",schemaPath:"#/definitions/userRef/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err28];
}
else {
vErrors.push(err28);
}
errors++;
}
}
if(coerced12 !== undefined){
data14 = coerced12;
if(data13 !== undefined){
data13["id"] = coerced12;
}
}
}
}
if(data13.name !== undefined){
let data15 = data13.name;
if(typeof data15 !== "string"){
let dataType13 = typeof data15;
let coerced13 = undefined;
if(dataType13 == 'object' && Array.isArray(data15) && data15.length == 1){
data15 = data15[0];
dataType13 = typeof data15;
if(typeof data15 === "string"){
coerced13 = data15;
}
}
if(!(coerced13 !== undefined)){
if(dataType13 == "number" || dataType13 == "boolean"){
coerced13 = "" + data15;
}
else if(data15 === null){
coerced13 = "";
}
else {
const err29 = {instancePath:instancePath+"/asAdmin/name",schemaPath:"#/definitions/userRef/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err29];
}
else {
vErrors.push(err29);
}
errors++;
}
}
if(coerced13 !== undefined){
data15 = coerced13;
if(data13 !== undefined){
data13["name"] = coerced13;
}
}
}
}
}
else {
const err30 = {instancePath:instancePath+"/asAdmin",schemaPath:"#/definitions/userRef/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err30];
}
else {
vErrors.push(err30);
}
errors++;
}
}
if(data.pd !== undefined){
let data16 = data.pd;
if(typeof data16 !== "string"){
let dataType14 = typeof data16;
let coerced14 = undefined;
if(dataType14 == 'object' && Array.isArray(data16) && data16.length == 1){
data16 = data16[0];
dataType14 = typeof data16;
if(typeof data16 === "string"){
coerced14 = data16;
}
}
if(!(coerced14 !== undefined)){
if(dataType14 == "number" || dataType14 == "boolean"){
coerced14 = "" + data16;
}
else if(data16 === null){
coerced14 = "";
}
else {
const err31 = {instancePath:instancePath+"/pd",schemaPath:"#/properties/pd/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err31];
}
else {
vErrors.push(err31);
}
errors++;
}
}
if(coerced14 !== undefined){
data16 = coerced14;
if(data !== undefined){
data["pd"] = coerced14;
}
}
}
if(typeof data16 === "string"){
if(!(formats2.validate(data16))){
const err32 = {instancePath:instancePath+"/pd",schemaPath:"#/properties/pd/format",keyword:"format",params:{format: "date"},message:"must match format \""+"date"+"\""};
if(vErrors === null){
vErrors = [err32];
}
else {
vErrors.push(err32);
}
errors++;
}
}
}
if(data.ipa !== undefined){
let data17 = data.ipa;
if(!((typeof data17 == "number") && (!(data17 % 1) && !isNaN(data17)))){
let dataType15 = typeof data17;
let coerced15 = undefined;
if(dataType15 == 'object' && Array.isArray(data17) && data17.length == 1){
data17 = data17[0];
dataType15 = typeof data17;
if((typeof data17 == "number") && (!(data17 % 1) && !isNaN(data17))){
coerced15 = data17;
}
}
if(!(coerced15 !== undefined)){
if(dataType15 === "boolean" || data17 === null
              || (dataType15 === "string" && data17 && data17 == +data17 && !(data17 % 1))){
coerced15 = +data17;
}
else {
const err33 = {instancePath:instancePath+"/ipa",schemaPath:"#/properties/ipa/type",keyword:"type",params:{type: "integer"},message:"must be integer"};
if(vErrors === null){
vErrors = [err33];
}
else {
vErrors.push(err33);
}
errors++;
}
}
if(coerced15 !== undefined){
data17 = coerced15;
if(data !== undefined){
data["ipa"] = coerced15;
}
}
}
if(!((data17 === 0) || (data17 === 1))){
const err34 = {instancePath:instancePath+"/ipa",schemaPath:"#/properties/ipa/enum",keyword:"enum",params:{allowedValues: schema17.properties.ipa.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err34];
}
else {
vErrors.push(err34);
}
errors++;
}
}
}
else {
const err35 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err35];
}
else {
vErrors.push(err35);
}
errors++;
}
validate15.errors = vErrors;
return errors === 0;
}


function validate14(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){
/*# sourceURL="https://github.com/data-fair/lib/session-state" */;
let vErrors = null;
let errors = 0;
if(data && typeof data == "object" && !Array.isArray(data)){
if(data.user !== undefined){
if(!(validate15(data.user, {instancePath:instancePath+"/user",parentData:data,parentDataProperty:"user",rootData}))){
vErrors = vErrors === null ? validate15.errors : vErrors.concat(validate15.errors);
errors = vErrors.length;
}
}
if(data.organization !== undefined){
let data1 = data.organization;
if(data1 && typeof data1 == "object" && !Array.isArray(data1)){
if(data1.id === undefined){
const err0 = {instancePath:instancePath+"/organization",schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err0];
}
else {
vErrors.push(err0);
}
errors++;
}
if(data1.name === undefined){
const err1 = {instancePath:instancePath+"/organization",schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err1];
}
else {
vErrors.push(err1);
}
errors++;
}
if(data1.role === undefined){
const err2 = {instancePath:instancePath+"/organization",schemaPath:"#/definitions/organizationMembership/required",keyword:"required",params:{missingProperty: "role"},message:"must have required property '"+"role"+"'"};
if(vErrors === null){
vErrors = [err2];
}
else {
vErrors.push(err2);
}
errors++;
}
for(const key0 in data1){
if(!((((((key0 === "id") || (key0 === "name")) || (key0 === "role")) || (key0 === "department")) || (key0 === "departmentName")) || (key0 === "dflt"))){
const err3 = {instancePath:instancePath+"/organization",schemaPath:"#/definitions/organizationMembership/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err3];
}
else {
vErrors.push(err3);
}
errors++;
}
}
if(data1.id !== undefined){
let data2 = data1.id;
if(typeof data2 !== "string"){
let dataType0 = typeof data2;
let coerced0 = undefined;
if(dataType0 == 'object' && Array.isArray(data2) && data2.length == 1){
data2 = data2[0];
dataType0 = typeof data2;
if(typeof data2 === "string"){
coerced0 = data2;
}
}
if(!(coerced0 !== undefined)){
if(dataType0 == "number" || dataType0 == "boolean"){
coerced0 = "" + data2;
}
else if(data2 === null){
coerced0 = "";
}
else {
const err4 = {instancePath:instancePath+"/organization/id",schemaPath:"#/definitions/organizationMembership/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err4];
}
else {
vErrors.push(err4);
}
errors++;
}
}
if(coerced0 !== undefined){
data2 = coerced0;
if(data1 !== undefined){
data1["id"] = coerced0;
}
}
}
}
if(data1.name !== undefined){
let data3 = data1.name;
if(typeof data3 !== "string"){
let dataType1 = typeof data3;
let coerced1 = undefined;
if(dataType1 == 'object' && Array.isArray(data3) && data3.length == 1){
data3 = data3[0];
dataType1 = typeof data3;
if(typeof data3 === "string"){
coerced1 = data3;
}
}
if(!(coerced1 !== undefined)){
if(dataType1 == "number" || dataType1 == "boolean"){
coerced1 = "" + data3;
}
else if(data3 === null){
coerced1 = "";
}
else {
const err5 = {instancePath:instancePath+"/organization/name",schemaPath:"#/definitions/organizationMembership/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err5];
}
else {
vErrors.push(err5);
}
errors++;
}
}
if(coerced1 !== undefined){
data3 = coerced1;
if(data1 !== undefined){
data1["name"] = coerced1;
}
}
}
}
if(data1.role !== undefined){
let data4 = data1.role;
if(typeof data4 !== "string"){
let dataType2 = typeof data4;
let coerced2 = undefined;
if(dataType2 == 'object' && Array.isArray(data4) && data4.length == 1){
data4 = data4[0];
dataType2 = typeof data4;
if(typeof data4 === "string"){
coerced2 = data4;
}
}
if(!(coerced2 !== undefined)){
if(dataType2 == "number" || dataType2 == "boolean"){
coerced2 = "" + data4;
}
else if(data4 === null){
coerced2 = "";
}
else {
const err6 = {instancePath:instancePath+"/organization/role",schemaPath:"#/definitions/organizationMembership/properties/role/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err6];
}
else {
vErrors.push(err6);
}
errors++;
}
}
if(coerced2 !== undefined){
data4 = coerced2;
if(data1 !== undefined){
data1["role"] = coerced2;
}
}
}
}
if(data1.department !== undefined){
let data5 = data1.department;
if(typeof data5 !== "string"){
let dataType3 = typeof data5;
let coerced3 = undefined;
if(dataType3 == 'object' && Array.isArray(data5) && data5.length == 1){
data5 = data5[0];
dataType3 = typeof data5;
if(typeof data5 === "string"){
coerced3 = data5;
}
}
if(!(coerced3 !== undefined)){
if(dataType3 == "number" || dataType3 == "boolean"){
coerced3 = "" + data5;
}
else if(data5 === null){
coerced3 = "";
}
else {
const err7 = {instancePath:instancePath+"/organization/department",schemaPath:"#/definitions/organizationMembership/properties/department/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err7];
}
else {
vErrors.push(err7);
}
errors++;
}
}
if(coerced3 !== undefined){
data5 = coerced3;
if(data1 !== undefined){
data1["department"] = coerced3;
}
}
}
}
if(data1.departmentName !== undefined){
let data6 = data1.departmentName;
if(typeof data6 !== "string"){
let dataType4 = typeof data6;
let coerced4 = undefined;
if(dataType4 == 'object' && Array.isArray(data6) && data6.length == 1){
data6 = data6[0];
dataType4 = typeof data6;
if(typeof data6 === "string"){
coerced4 = data6;
}
}
if(!(coerced4 !== undefined)){
if(dataType4 == "number" || dataType4 == "boolean"){
coerced4 = "" + data6;
}
else if(data6 === null){
coerced4 = "";
}
else {
const err8 = {instancePath:instancePath+"/organization/departmentName",schemaPath:"#/definitions/organizationMembership/properties/departmentName/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err8];
}
else {
vErrors.push(err8);
}
errors++;
}
}
if(coerced4 !== undefined){
data6 = coerced4;
if(data1 !== undefined){
data1["departmentName"] = coerced4;
}
}
}
}
if(data1.dflt !== undefined){
let data7 = data1.dflt;
if(typeof data7 !== "boolean"){
let dataType5 = typeof data7;
let coerced5 = undefined;
if(dataType5 == 'object' && Array.isArray(data7) && data7.length == 1){
data7 = data7[0];
dataType5 = typeof data7;
if(typeof data7 === "boolean"){
coerced5 = data7;
}
}
if(!(coerced5 !== undefined)){
if(data7 === "false" || data7 === 0 || data7 === null){
coerced5 = false;
}
else if(data7 === "true" || data7 === 1){
coerced5 = true;
}
else {
const err9 = {instancePath:instancePath+"/organization/dflt",schemaPath:"#/definitions/organizationMembership/properties/dflt/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"};
if(vErrors === null){
vErrors = [err9];
}
else {
vErrors.push(err9);
}
errors++;
}
}
if(coerced5 !== undefined){
data7 = coerced5;
if(data1 !== undefined){
data1["dflt"] = coerced5;
}
}
}
}
}
else {
const err10 = {instancePath:instancePath+"/organization",schemaPath:"#/definitions/organizationMembership/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err10];
}
else {
vErrors.push(err10);
}
errors++;
}
}
if(data.account !== undefined){
let data8 = data.account;
if(data8 && typeof data8 == "object" && !Array.isArray(data8)){
if(data8.type === undefined){
const err11 = {instancePath:instancePath+"/account",schemaPath:"#/definitions/account/required",keyword:"required",params:{missingProperty: "type"},message:"must have required property '"+"type"+"'"};
if(vErrors === null){
vErrors = [err11];
}
else {
vErrors.push(err11);
}
errors++;
}
if(data8.id === undefined){
const err12 = {instancePath:instancePath+"/account",schemaPath:"#/definitions/account/required",keyword:"required",params:{missingProperty: "id"},message:"must have required property '"+"id"+"'"};
if(vErrors === null){
vErrors = [err12];
}
else {
vErrors.push(err12);
}
errors++;
}
if(data8.name === undefined){
const err13 = {instancePath:instancePath+"/account",schemaPath:"#/definitions/account/required",keyword:"required",params:{missingProperty: "name"},message:"must have required property '"+"name"+"'"};
if(vErrors === null){
vErrors = [err13];
}
else {
vErrors.push(err13);
}
errors++;
}
for(const key1 in data8){
if(!(((((key1 === "type") || (key1 === "id")) || (key1 === "name")) || (key1 === "department")) || (key1 === "departmentName"))){
const err14 = {instancePath:instancePath+"/account",schemaPath:"#/definitions/account/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key1},message:"must NOT have additional properties"};
if(vErrors === null){
vErrors = [err14];
}
else {
vErrors.push(err14);
}
errors++;
}
}
if(data8.type !== undefined){
let data9 = data8.type;
if(typeof data9 !== "string"){
let dataType6 = typeof data9;
let coerced6 = undefined;
if(dataType6 == 'object' && Array.isArray(data9) && data9.length == 1){
data9 = data9[0];
dataType6 = typeof data9;
if(typeof data9 === "string"){
coerced6 = data9;
}
}
if(!(coerced6 !== undefined)){
if(dataType6 == "number" || dataType6 == "boolean"){
coerced6 = "" + data9;
}
else if(data9 === null){
coerced6 = "";
}
else {
const err15 = {instancePath:instancePath+"/account/type",schemaPath:"#/definitions/account/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err15];
}
else {
vErrors.push(err15);
}
errors++;
}
}
if(coerced6 !== undefined){
data9 = coerced6;
if(data8 !== undefined){
data8["type"] = coerced6;
}
}
}
if(!((data9 === "user") || (data9 === "organization"))){
const err16 = {instancePath:instancePath+"/account/type",schemaPath:"#/definitions/account/properties/type/enum",keyword:"enum",params:{allowedValues: schema21.properties.type.enum},message:"must be equal to one of the allowed values"};
if(vErrors === null){
vErrors = [err16];
}
else {
vErrors.push(err16);
}
errors++;
}
}
if(data8.id !== undefined){
let data10 = data8.id;
if(typeof data10 !== "string"){
let dataType7 = typeof data10;
let coerced7 = undefined;
if(dataType7 == 'object' && Array.isArray(data10) && data10.length == 1){
data10 = data10[0];
dataType7 = typeof data10;
if(typeof data10 === "string"){
coerced7 = data10;
}
}
if(!(coerced7 !== undefined)){
if(dataType7 == "number" || dataType7 == "boolean"){
coerced7 = "" + data10;
}
else if(data10 === null){
coerced7 = "";
}
else {
const err17 = {instancePath:instancePath+"/account/id",schemaPath:"#/definitions/account/properties/id/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err17];
}
else {
vErrors.push(err17);
}
errors++;
}
}
if(coerced7 !== undefined){
data10 = coerced7;
if(data8 !== undefined){
data8["id"] = coerced7;
}
}
}
}
if(data8.name !== undefined){
let data11 = data8.name;
if(typeof data11 !== "string"){
let dataType8 = typeof data11;
let coerced8 = undefined;
if(dataType8 == 'object' && Array.isArray(data11) && data11.length == 1){
data11 = data11[0];
dataType8 = typeof data11;
if(typeof data11 === "string"){
coerced8 = data11;
}
}
if(!(coerced8 !== undefined)){
if(dataType8 == "number" || dataType8 == "boolean"){
coerced8 = "" + data11;
}
else if(data11 === null){
coerced8 = "";
}
else {
const err18 = {instancePath:instancePath+"/account/name",schemaPath:"#/definitions/account/properties/name/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err18];
}
else {
vErrors.push(err18);
}
errors++;
}
}
if(coerced8 !== undefined){
data11 = coerced8;
if(data8 !== undefined){
data8["name"] = coerced8;
}
}
}
}
if(data8.department !== undefined){
let data12 = data8.department;
if(typeof data12 !== "string"){
let dataType9 = typeof data12;
let coerced9 = undefined;
if(dataType9 == 'object' && Array.isArray(data12) && data12.length == 1){
data12 = data12[0];
dataType9 = typeof data12;
if(typeof data12 === "string"){
coerced9 = data12;
}
}
if(!(coerced9 !== undefined)){
if(dataType9 == "number" || dataType9 == "boolean"){
coerced9 = "" + data12;
}
else if(data12 === null){
coerced9 = "";
}
else {
const err19 = {instancePath:instancePath+"/account/department",schemaPath:"#/definitions/account/properties/department/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err19];
}
else {
vErrors.push(err19);
}
errors++;
}
}
if(coerced9 !== undefined){
data12 = coerced9;
if(data8 !== undefined){
data8["department"] = coerced9;
}
}
}
}
if(data8.departmentName !== undefined){
let data13 = data8.departmentName;
if(typeof data13 !== "string"){
let dataType10 = typeof data13;
let coerced10 = undefined;
if(dataType10 == 'object' && Array.isArray(data13) && data13.length == 1){
data13 = data13[0];
dataType10 = typeof data13;
if(typeof data13 === "string"){
coerced10 = data13;
}
}
if(!(coerced10 !== undefined)){
if(dataType10 == "number" || dataType10 == "boolean"){
coerced10 = "" + data13;
}
else if(data13 === null){
coerced10 = "";
}
else {
const err20 = {instancePath:instancePath+"/account/departmentName",schemaPath:"#/definitions/account/properties/departmentName/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err20];
}
else {
vErrors.push(err20);
}
errors++;
}
}
if(coerced10 !== undefined){
data13 = coerced10;
if(data8 !== undefined){
data8["departmentName"] = coerced10;
}
}
}
}
}
else {
const err21 = {instancePath:instancePath+"/account",schemaPath:"#/definitions/account/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err21];
}
else {
vErrors.push(err21);
}
errors++;
}
}
if(data.accountRole !== undefined){
let data14 = data.accountRole;
if(typeof data14 !== "string"){
let dataType11 = typeof data14;
let coerced11 = undefined;
if(dataType11 == 'object' && Array.isArray(data14) && data14.length == 1){
data14 = data14[0];
dataType11 = typeof data14;
if(typeof data14 === "string"){
coerced11 = data14;
}
}
if(!(coerced11 !== undefined)){
if(dataType11 == "number" || dataType11 == "boolean"){
coerced11 = "" + data14;
}
else if(data14 === null){
coerced11 = "";
}
else {
const err22 = {instancePath:instancePath+"/accountRole",schemaPath:"#/properties/accountRole/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err22];
}
else {
vErrors.push(err22);
}
errors++;
}
}
if(coerced11 !== undefined){
data14 = coerced11;
if(data !== undefined){
data["accountRole"] = coerced11;
}
}
}
}
if(data.lang !== undefined){
let data15 = data.lang;
if(typeof data15 !== "string"){
let dataType12 = typeof data15;
let coerced12 = undefined;
if(dataType12 == 'object' && Array.isArray(data15) && data15.length == 1){
data15 = data15[0];
dataType12 = typeof data15;
if(typeof data15 === "string"){
coerced12 = data15;
}
}
if(!(coerced12 !== undefined)){
if(dataType12 == "number" || dataType12 == "boolean"){
coerced12 = "" + data15;
}
else if(data15 === null){
coerced12 = "";
}
else {
const err23 = {instancePath:instancePath+"/lang",schemaPath:"#/properties/lang/type",keyword:"type",params:{type: "string"},message:"must be string"};
if(vErrors === null){
vErrors = [err23];
}
else {
vErrors.push(err23);
}
errors++;
}
}
if(coerced12 !== undefined){
data15 = coerced12;
if(data !== undefined){
data["lang"] = coerced12;
}
}
}
}
if(data.dark !== undefined){
let data16 = data.dark;
if(typeof data16 !== "boolean"){
let dataType13 = typeof data16;
let coerced13 = undefined;
if(dataType13 == 'object' && Array.isArray(data16) && data16.length == 1){
data16 = data16[0];
dataType13 = typeof data16;
if(typeof data16 === "boolean"){
coerced13 = data16;
}
}
if(!(coerced13 !== undefined)){
if(data16 === "false" || data16 === 0 || data16 === null){
coerced13 = false;
}
else if(data16 === "true" || data16 === 1){
coerced13 = true;
}
else {
const err24 = {instancePath:instancePath+"/dark",schemaPath:"#/properties/dark/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"};
if(vErrors === null){
vErrors = [err24];
}
else {
vErrors.push(err24);
}
errors++;
}
}
if(coerced13 !== undefined){
data16 = coerced13;
if(data !== undefined){
data["dark"] = coerced13;
}
}
}
}
}
else {
const err25 = {instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"};
if(vErrors === null){
vErrors = [err25];
}
else {
vErrors.push(err25);
}
errors++;
}
validate14.errors = vErrors;
return errors === 0;
}
