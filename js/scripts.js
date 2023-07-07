        const dynamic = document.getElementById("dynamic-text");
        const roles = ["Student...", "Front-End Developer...", "Back-End Developer...", "Android Developer..."];
        let roleIndex = 0;
        let letterIndex = 0;

        function printLetters(role){
            if(letterIndex == role.length){
                clearLetters();
            }
            else if(letterIndex < role.length){
                dynamic.textContent += role.charAt(letterIndex);
                letterIndex += 1;
                setTimeout(
                    function(){
                        printLetters(role)
                    }, 300
                );
            }
            
        }

        function clearLetters(){
            if(letterIndex == -1){
                roleIndex = (roleIndex+1) % roles.length;
                letterIndex = 0;
                printLetters(roles[roleIndex]);
            }
            else if(letterIndex > -1){
                let updated = "";
                for(let index = 0; index < letterIndex; index++){
                    updated += roles[roleIndex].charAt(index);
                }
                dynamic.textContent = updated;
                letterIndex -= 1;
                setTimeout(clearLetters, 100);
            }

        }
        printLetters(roles[roleIndex]);