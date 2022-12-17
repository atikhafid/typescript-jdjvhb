let myNumber1, myNumber2, result: number;
myNumber1 = parseInt(prompt('اكتب الرقم الأول هنا'));
myNumber2 = parseInt(prompt('اكتب الرقم الثاني هنا'));
result = myNumber1 * myNumber2;
if (result > 0) {
  console.log('العدد موجب');
} else {
  console.log('العدد سالب');
}
