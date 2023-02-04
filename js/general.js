/* blog date start */
const blogDate = document.getElementById("blogDate");

const newDate = new Date();

blogDate.innerText = newDate.toLocaleDateString().replaceAll("/", ".");

/* blog date end */

/* JS Algoritma Çalışma */

/* 
    1. Parametre olarak verilen string bir ifadeyi
    tersten yazan bir fonksiyon yazınız.
*/
function reverseString(param) {
  /* String ifadeler bütün programlama dillerinde
    bir dizi olarak algılanır
    */
  if (typeof param !== "string") {
    console.log("Parametre olarak String bir ifade girin");
    return;
  }
  let temp = "";
  for (let i = param.length - 1; i >= 0; i--) {
    temp = temp + param[i];
  }
  console.log(temp);
}
//reverseString('okul')
/* 
    2. Parametre olarak tarih (date) objesi alan
    ve bu date objesini ay yıl şeklinde döndüren
    bir fonksiyon yazın. Ör: Aralık 2022
*/
const getDateWithMonthName = (param) => {
  let months = [
    "Ocak",
    "Şubat",
    "Mart",
    "Nisan",
    "Mayıs",
    "Haziran",
    "Temmuz",
    "Ağustos",
    "Eylül",
    "Ekim",
    "Kasım",
    "Aralık",
  ];

  let date = new Date(param);
  let temp=`${months[date.getMonth()]} ${date.getFullYear()}`
  return temp
};

const myDate=getDateWithMonthName(new Date());
//console.log(myDate);


/* 
    3. Elinizde objelerden oluşan bir dizi var.
    bu dizi içerisinde bulunan objelerden name alanının
    fonksiyona parametre olarak verilen dizi ve değerle aynı olan
    objeleri bulup dizi halinde döndüren bir 
    fonksiyon yazın

*/

const objects=[
    {
        name:'emre',
        surname:'harman'
    },
    {
        name:'emre',
        surname:'kılıç'
    },
    {
        name:'ahmet',
        surname:'kılıç'
    },
    {
        name:'mehmet',
        surname:'harman'
    },
    {
        name:'veli',
        surname:'turgut'
    },
]

const findByName=(dizi,name)=>{
    let temp=[]
    for(let i=0;i<dizi.length;i++){
        if(dizi[i].name === name){
            temp.push(dizi[i])
        }
    }
    return temp
}

console.log(findByName(objects,'ayşe'));