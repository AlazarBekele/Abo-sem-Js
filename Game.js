
        let Userinput = prompt ('እባኮት ስሞትን ያስገቡ!')
        let CounterUserInput = Userinput
        let UnderEnglish = document.getElementById('Under')
        let userName = document.getElementById('userName')

                console.log(CounterUserInput.length)
    let CounterLength = CounterUserInput.length

                // UnderEnglish.textContent = `ይምረጡ`
                
            if (CounterLength > 9) {
                    userName.textContent = `እባኮ የእርሶን ስም ብቻ ያስገቡ!`
        }else if (CounterLength < 3) {
                    userName.textContent = `ስሞ ከሶስት ፊደል በላይ መሆን አለበት!`
    }else { 
            userName.textContent = `እሺ ${CounterUserInput}, ለመጫወት አንዱን ምስል ይምረጡ!`
    }
            function Time () {
                let Call = document.getElementById('Ok')
            let massage = document.getElementById('massage')

            massage.textContent = `ስማ ሰውዬ ቀጥል እንጂ`
        // Call.textContent = `እሺ`
    } 
        const CallFunction = setTimeout(Time, 50000)

        function NotEat () {
            UnderEnglish.textContent = `😊👉 አንድ አይነትን መርጠዋል 👈😊`
    }
    function EatHand () {
        UnderEnglish.textContent = `😊👉 ልዩን መርጠዋል 👈😊`
}

        let English = document.getElementById('English')
        let Amharic = document.getElementById('amharic')

    function LanguageEnglish () {

        let headTitle = document.getElementById('headTitle').textContent = `Game play.`
        let userName = document.getElementById('userName')

            userName.textContent = `Ok ${CounterUserInput}, If You Want To Play Choose one Picture!`

        function NotEat () {
               UnderEnglish.textContent = ` `
}
    function EatHand () {
        let under = document.getElementById('Under')
                under.textContent = ` `
    }
}
    function Next() {
        if (UnderEnglish.textContent == `😊👉 ልዩን መርጠዋል 👈😊`) {
            massage.textContent = `😁 እኔ ደግሞ አንድ አይነትን 👈😁`
                let $AmharicLeyu = 'Main Computer አንድ አይነት'

                    console.log($AmharicLeyu)

        }else if (UnderEnglish.textContent == `😊👉 አንድ አይነትን መርጠዋል 👈😊`) {
            massage.textContent = `😁👉 እኔ ደግሞ ልዩ 👈😁`
                let $AmharicLeyuSeconde = 'Main Computer ልዩ'

                    console.log($AmharicLeyuSeconde)

        }
            let SceondDis = document.getElementById('SceondDis')
        SceondDis.textContent = `ጀምር`
    }

        function start () {

    SceondDis.textContent = '';
        SceondDis.textContent = `3 እድል አሎት \n መልካም እድል`
        let Choose = document.getElementById('Choose')
    
            Choose.textContent = `✋ ልዩ`
        let Choose2 = document.getElementById('Choose2')

            Choose2.textContent = `🤚🏿 አንድ አይነት`
        let ChooseTitle = document.getElementById('ChooseTitle')

            ChooseTitle.textContent = `የቱን መጣል ይፈልጋሉ`
}

        let Running = true
        let CounterTry = 0
        const DifferMin = 1
        const Differ = 10
        let computer = true
        const TheSame = 20

    let randomComputerLeyu = 1 // same
    let randomComputerAndeAynet = 2 //dif

        // main project
        // final project

    // while(Running) {
                
        // if click ልዩ Btn Check this functions

        function ChooseDiffer () { //ልዩን ሲጥል
            // console.log(Math.floor(Math.random() * Differ) + DifferMin)
            let massage = document.getElementById('massage')

            let $randomHand = Math.floor(Math.random() * randomComputerAndeAynet) + 1
        console.log(`This is RandomComupte ${$randomHand}`)

        let ChooseDif = Math.floor(Math.random() * Differ) + DifferMin // ልዩ Choose

            if (ChooseDif < 11) {
                console.log(ChooseDif)

                        let SecondChoose2 = document.getElementById('SecondChoose2')
                SecondChoose2.textContent = `✋`

                if ($randomHand == 2) {
                    let finalComput = document.getElementById('finalComput')

                        finalComput.textContent = `✋`
            }else if ($randomHand == 1) {
                        let finalComput = document.getElementById('finalComput')
                    finalComput.textContent = `🤚🏿`
        }
    }

        ////////////////////////////////////////////////////////////////////////////
        
            let black = $randomHand == 1
            let white = $randomHand == 2

        if (SecondChoose2.textContent == white) {
            
    }else if (SecondChoose2.textContent == black) {

        let massage = document.getElementById('massage')   
}

            let headTitle = document.getElementById('headTitle')
            
            if ($randomHand == black) {

                massage.textContent = `በሚገርም ሁኔታ ጨዋታውን አሸንፈዋል`
        }else {

            headTitle.textContent = `Lose`
            massage.textContent = `ተሸንፏል`
        }
    }
                function ChooseTheSame () {

        if (TheSame == 20) {
        console.log(TheSame)

    let $randomHand = Math.floor(Math.random() * randomComputerAndeAynet) + 1
                
            SecondChoose2.textContent = `🤚🏿`

            let black = $randomHand = 1
            let white = $randomHand = 2

            if ($randomHand == 2) {
                    let finalComput = document.getElementById('finalComput')

                        finalComput.textContent = `✋`
                }else if ($randomHand == 1) {
                        let finalComput = document.getElementById('finalComput')
                    finalComput.textContent = `🤚🏿`
                }
            }
         
            let black = $randomHand == 1
            let white = $randomHand == 2

            let massage = document.getElementById('massage')   
            let headTitle = document.getElementById('headTitle')
            
    /////////////////////////////////////////////////////////////////////////////

            if ($randomHand == black) {

                massage.textContent = `በሚገርም ሁኔታ ጨዋታውን አሸንፈዋል`
        }else if ($randomHand == white) {
            massage.textContent = `ተሸንፏል`
        }
    }
            function resultmark () {
            
}
// }