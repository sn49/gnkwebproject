var number=[];
var mode="ban";
var pick=0;
var finalmap=[];
var second=40;
var team=1;
var player=1;
function map_banpick(){
    var music2=new Audio("Forget Me Not - Patrick Patrikios.mp3")
    music2.loop=true;
    music2.play()

    var x=setInterval(function(){
        second=Math.round((second-0.01)*100)/100;
        document.getElementById("start").style.visibility="hidden";
        if(mode==="ban"||mode==="pick"){
            turn=document.getElementById("team"+team+"p"+player).value;
            document.getElementById("timer").innerHTML=turn+" : "+team+"팀 "+"플레이어 "+player+"의 "+mode+" 남은시간 : "+second+"초";

        }
        else
            document.getElementById("timer").innerHTML=mode;

        console.log(pick+"   "+mode)
        
        if(mode==="종료"){
            document.body.style.background='#FAEC85';
            document.body.style.color='black';
        }
        else if(team===1){
            document.body.style.background='#04E5F6';
            document.body.style.color='black';
        }
        else{
            document.body.style.background='#E65053';
            document.body.style.color='white';
        }


        if (second<=0||(pick===2&&mode==="ban")||(pick===1&&mode==="pick")){
            if(mode==="ban"){
                if (team===1)
                    team=2;
                else{
                    if(player!=4){
                        team=1;
                        player++;
                    }
                    else{
                        mode="pick"
                    }
                }
            }
            else{
                if (team===2)
                    team=1;
                else{
                    if(player!=1){
                        team=2;
                        player--;
                    }
                    else{
                        mode="종료";
                        for(var i=0; i<3; i++){
                            console.log("number.length"+number.length)
                            var result=Math.floor(Math.random()*number.length);
                            console.log(number[result])
                            document.getElementById("pick").innerHTML+="<br> 랜덤픽 "+document.getElementById(`${number[result]}`).innerHTML;
                            document.getElementById(`${number[result]}`).style.visibility="hidden";
                            number.splice(result,1);
                        }
                        clearInterval(x)
                    }
                }
            }

            pick=0;
            second=40;
        }    
    },10)

    
}

function picked(number1){
    var includeplayer=`<br> ${team}팀 플레이어${player} ${turn}`
    var map=`${(document.getElementById(number1).innerHTML)}`;   
    if(document.getElementById("ban").innerHTML.includes(map)){
        return
    }
    if(document.getElementById("pick").innerHTML.includes(map)){
        return
    }

    pick++;
    var idx=number.indexOf(number1)
    number.splice(idx,1);
    console.log(number)

    
    document.getElementById(mode).innerHTML+=includeplayer+map;
}