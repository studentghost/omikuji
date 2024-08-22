document.addEventListener("DOMContentLoaded", function(){
    //おみくじを引く
    var omikujiBtn = document.getElementById("omikuji_btn");
    if (omikujiBtn){
        omikujiBtn.onclick = function omikuji(){
            //運勢+願望、健康、恋愛、金運、学問(大吉～大凶)
            let omikuji = ["大吉","中吉","小吉","凶","大凶"];
            let Ganbou = ["叶う","近い","努力","難しい","無理"];
            let Kenkou = ["絶好調","良好","普通","注意","不調"];
            let Renai = ["恋順調","良縁","注意","無理","前方後円墳"];
            let Kinun = ["豊か","安定","少し","不安","悪化"];
            let Gakumon = ["成功","進歩","頑張れ","努力","困難"];
            //ランダムに変数をとる
            var rnd = Math.floor(Math.random() * omikuji.length);
            //運勢～学問を表示
            document.getElementById("UN").textContent ="運勢:" + omikuji[rnd];
            document.getElementById("GB").textContent ="願望:" + Ganbou[rnd];
            document.getElementById("KK").textContent ="健康:" + Kenkou[rnd];
            document.getElementById("RI").textContent ="恋愛:" + Renai[rnd];
            document.getElementById("KU").textContent ="金運:" + Kinun[rnd];
            document.getElementById("GM").textContent ="学問:" + Gakumon[rnd];
        };
    }

    var seizaBtn = document.getElementById("seiza_btn");
    if (seizaBtn) {
        seizaBtn.onclick = function Seiza() {
            var birthdayInput = document.getElementById("birthday").value;
            var birthday = new Date(birthdayInput);
            var month = birthday.getMonth() + 1;
            var day = birthday.getDate();
            var seiza;
            //カレンダーが未入力の場合
            if (!birthdayInput) {
                alert("誕生日を入力してください。");
                return;
            }
            //星座の判断     
            switch (month) {
                case 1: seiza = (day <= 19) ? '山羊座' : '水瓶座'; break;
                case 2: seiza = (day <= 18) ? '水瓶座' : '魚座'; break;
                case 3: seiza = (day <= 20) ? '魚座' : '牡羊座'; break;
                case 4: seiza = (day <= 19) ? '牡羊座' : '牡牛座'; break;
                case 5: seiza = (day <= 20) ? '牡牛座' : '双子座'; break;
                case 6: seiza = (day <= 21) ? '双子座' : '蟹座'; break;
                case 7: seiza = (day <= 22) ? '蟹座' : '獅子座'; break;
                case 8: seiza = (day <= 22) ? '獅子座' : '乙女座'; break;
                case 9: seiza = (day <= 22) ? '乙女座' : '天秤座'; break;
                case 10: seiza = (day <= 23) ? '天秤座' : '蠍座'; break;
                case 11: seiza = (day <= 22) ? '蠍座' : '射手座'; break;
                case 12: seiza = (day <= 21) ? '射手座' : '山羊座'; break;
            }
            var star = ["★","★★","★★★","★★★★","★★★★★"];
            var GB = Math.floor(Math.random() * star.length);
            var KK = Math.floor(Math.random() * star.length);
            var RI = Math.floor(Math.random() * star.length);
            var KU = Math.floor(Math.random() * star.length);
            var GM = Math.floor(Math.random() * star.length);

            //運勢の表示
            document.getElementById("SZ").textContent ="星座:" + seiza;
            document.getElementById("GB").textContent ="願望:" + star[GB];
            document.getElementById("KK").textContent ="健康:" + star[KK];
            document.getElementById("RI").textContent ="恋愛:" + star[RI];
            document.getElementById("KU").textContent ="金運:" + star[KU];
            document.getElementById("GM").textContent ="学問:" + star[GM];
        };
    }
});
