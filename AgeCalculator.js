let today = new Date();
console.log(today);

let DD = today.getDate();
console.log(DD);

let MM = today.getMonth() + 1;
console.log(MM);

let YYYY = today.getFullYear();
console.log(YYYY)

let personsdate = document.getElementById("date");
let personsmonth = document.getElementById("month");
let personsyear = document.getElementById("year");

let calculateddays = document.getElementById("Days");
let calculatedmonths = document.getElementById("Months");
let calculatedyears = document.getElementById("Years");


let caldate;
let calmonth;
let calyear;

let valDD;
let valMM;

let wishes = document.getElementById("wishes");

function calculate(){

    if((DD > parseInt(personsdate.value)) && (MM > parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD- parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        calmonth = MM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = YYYY - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;
    }

    else if((DD < parseInt(personsdate.value)) && (MM < parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        valDD = DD+30;
        caldate = valDD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        valMM = ((MM-1)+ 12);
        calmonth = valMM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;
       
        calyear = ((YYYY-1)-parseInt(personsyear.value));
        calculatedyears.textContent = calyear;
    }

    else if((DD > parseInt(personsdate.value)) && (MM < parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        valMM = ((MM)+12);
        calmonth = valMM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = ((YYYY - 1) - parseInt(personsyear.value));
        calculatedyears.textContent = calyear;
    }

    else if((DD < parseInt(personsdate.value)) && (MM > parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        valDD = DD + 30;
        caldate = valDD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        valMM = (MM-1);

        if(valMM >= parseInt(personsmonth.value)){
            calmonth = valMM - parseInt(personsmonth.value);
            calculatedmonths.textContent = calmonth;

            calyear = YYYY - parseInt(personsyear.value);
            calculatedyears.textContent = calyear;
        }

        else{
            calmonth = (valMM + 12) - parseInt(personsmonth.value);
            calculatedmonths.textContent = calmonth;

            calyear = (YYYY-1) - parseInt(personsyear.value);
            calculatedyears.textContent = calyear;
        }
    }

    else if((DD == parseInt(personsdate.value)) && (MM > parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        calmonth = MM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = YYYY - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;
    }

    else if((DD == parseInt(personsdate.value)) && (MM < parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        valMM = MM + 12;
        calmonth = valMM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = (YYYY-1) - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;
    }

    else if((DD > parseInt(personsdate.value)) && (MM == parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        calmonth = MM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = YYYY - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;
    }

    else if((DD < parseInt(personsdate.value)) && (MM == parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        valDD = DD + 30;
        caldate = valDD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        valMM = ((MM-1) + 12);
        calmonth = valMM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = (YYYY-1) - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;
    }

    else if((DD ==  parseInt(personsdate.value)) && (MM == parseInt(personsmonth.value)) && (YYYY == parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        calmonth = MM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = YYYY - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;

        wishes.textContent = "Welcome to the world :)";
        wishes.style.backgroundColor = "green";
        wishes.style.width = "400px";
        wishes.style.borderRadius = "10px";
        wishes.style.textContent = "center";

    }

    else if((DD ==  parseInt(personsdate.value)) && (MM == parseInt(personsmonth.value)) && (YYYY > parseInt(personsyear.value)) && (parseInt(personsdate.value) >= 1) && (parseInt(personsdate.value) <= 31) && ( parseInt(personsmonth.value) >= 1) && (parseInt(personsmonth.value) <= 12) &&  (parseInt(personsyear.value) > 1950)){
        caldate = DD - parseInt(personsdate.value);
        calculateddays.textContent = caldate;

        calmonth = MM - parseInt(personsmonth.value);
        calculatedmonths.textContent = calmonth;

        calyear = YYYY - parseInt(personsyear.value);
        calculatedyears.textContent = calyear;


        
        wishes.textContent = "I WISH YOU A MANY MORE HAPPY RETURNS OF THE DAY :)";
        wishes.style.width =  "300px";
        wishes.style.borderRadius = "10px";
        wishes.style.textContent = "center";
    }

    else{
        wishes.textContent = "INVALID";
        wishes.style.color = "red";
    }








}