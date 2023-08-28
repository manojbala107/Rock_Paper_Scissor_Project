let score= JSON.parse(localStorage.getItem('score'))||
         {
          wins:0,
          loss:0,
          ties:0
         };
         updatescoreelement();
         function playgame(pmove)
        {
          const cmove=pickcmove();
          let Result='';
          if(pmove==='Rock')
          {
            if(cmove==='Rock'){Result='Its a TIE.'};
            if(cmove==='Paper'){Result='You LOSE.'};
            if(cmove==='Scissors'){Result='You WIN.'};
          }
          if(pmove==='Paper')
          {
            if(cmove==='Rock'){Result='You WIN.'};
            if(cmove==='Paper'){Result='Its a TIE.'};
            if(cmove==='Scissors'){Result='You LOSE.'};
          }
          if(pmove==='Scissors')
          {
            if(cmove==='Rock'){Result='You LOSE.'};
            if(cmove==='Paper'){Result='You WIN.'};
            if(cmove==='Scissors'){Result='Its a TIE.'};
          }
          if(Result==='You WIN.'){score.wins+=1;}
          else if(Result==='You LOSE.'){score.loss+=1;}
          else if(Result==='Its a TIE.'){score.tie+=1;}
          localStorage.setItem('score',JSON.stringify(score));
          updatescoreelement();
          document.querySelector('.js-result').innerHTML=Result;
          document.querySelector('.js-moves').innerHTML=`You<img src="${pmove}-emoji.png" class="move-logo">
          v/s<img src="${cmove}-emoji.png" class="move-logo"> Computer`;
        }
        function updatescoreelement(){
          document.querySelector('.js-score').
          innerHTML=`Wins:${score.wins},Losses:${score.loss},Tie:${score.tie}`;
        }
         function pickcmove()
         {
            const random=Math.random();
            let cmove='';
            if(random>=0&&random<1/3)
            {
              cmove='Rock';
            }
            else if(random>=1/3 &&  random<2/3)
            {
              cmove='Paper';
            }
            else if(random>=2/3 &&  random<1)
            {
              cmove='Scissors';
            }
            return cmove;
          }
      