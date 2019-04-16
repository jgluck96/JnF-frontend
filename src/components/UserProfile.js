import React, { Component } from 'react';
import BookFloat from './cssDiv'

// varian = () => {
//
//
//   class Circ {
//     constructor(l, t, w, h) {
//       this.l = l;
//       this.t = t;
//       this.w = w;
//       this.h = h;
//       this.finall = 0;
//       this.finalt = 0;
//     }
//   }
//
//
//   var time = 10000;
//   var arr = [];
//   function resizeCircles() {
//     var circHolder = document.getElementById("circleHolder"); var circHolderJQ = $("#circleHolder");
//     if (!circHolder.firstChild) return;
//
//     var currWidth = circHolderJQ.width();
//     var currHeight = circHolderJQ.height();
//     var currRatio = currWidth/currHeight;
//
//     for(var i = 0; i < arr.length; i++)
//     {
//       var m = arr[i].w*currRatio;
//       var x = m - arr[i].h;
//       arr[i].h = m.toFixed(2);
//       if(arr[i].finalt != 0) arr[i].finalt -= x;
//     }
//   }
//
//   function init_minis() {
//     if(arr.length != 0)
//     {
//       for(var c = 0; c < arr.length; c++)
//       {
//         delete arr[c];
//       }
//       arr = [];
//     }
//     var circ = $("#circleHolder");
//     var offset = circ.offset();
//
//     for(var i = 0; i < 25; i++)
//     {
//       initOneDiv(i);
//
//       // $("#circleHolder").children().last().css("background-color", "red");
//     }
//     circ.children().each(function () {
//       var o = Math.floor(Math.random()*60);
//       o = ((o/100)+0.3).toFixed(2);
//       $(this).animate({opacity: o}, 750); // "this" is the current element in the loop
//     });
//     return 1;
//   }
//
//   var starttime;
//
//   function initOneDiv(i) {
//     var circ = $("#circleHolder");
//     var iDiv = document.createElement('div');
//     iDiv.className = 'mini';
//
//     //opacity
//     var o = Math.floor(Math.random()*60);
//     o = ((o/100)+0.3).toFixed(2);
//     iDiv.style.opacity = 0;
//     // fadee(iDiv, o);
//     //height and width
//     var circHeight = circ.height();
//     var circWidth = circ.width();
//     var w = Math.floor(Math.random() * 5) + 5;
//
//     iDiv.style.height = 0;
//     iDiv.style.width = w + "%";
//     iDiv.style.paddingBottom = w + "%";
//
//     //left and top
//     var l = Math.floor(Math.random() * 100);
//     if(l + w > 100)
//     {
//       l = 100-(2*Math.trunc(w));
//     }
//
//     var t = Math.floor(Math.random() * 100);
//
//     var h = w*circ.width()/circ.height();
//     if(t + h > 100)
//     {
//       t = 100-(2*h);
//     }
//
//     iDiv.style.left = l + "%";
//     iDiv.style.top = t + "%";
//
//     document.getElementById("circleHolder").appendChild(iDiv);
//
//     var n = new Circ(l, t, w, h);
//     arr.push(n);
//
//     go(i);
//   }
//
//   function fadee(dis, o)
//   {
//     o = o.toFixed(2);
//     dis.animate({opacity: o}, 2000);
//   }
//
//   function go(i) {
//     var finall = 0;
//     var finalt = 0;
//
//     var h = arr[i].h;
//     var w = arr[i].w;
//     var l = arr[i].l;
//     var t = arr[i].t;
//
//     if(l<15)
//     {
//       var randie = Math.random();
//       if(t<10)
//       {
//         if(randie>0.5)
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//         }
//         else
//         {
//           finall = Math.floor(Math.random()*(100-w-10))+10;
//           finalt = 100-h;
//         }
//       }
//       else if(t>80)
//       {
//         if(randie>0.5)
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*(100-h-10));
//         }
//         else
//         {
//           finall = Math.floor(Math.random()*(100-w-10));
//           finalt = 0;
//         }
//       }
//       else
//       {
//         if(randie<0.33)
//         {
//           finall = Math.floor(Math.random()*(100-w-10))+10;
//           finalt = 0;
//         }
//         else if(randie<0.67)
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//         }
//         else
//         {
//           finall = Math.floor(Math.random()*(100-w-10))+10;
//           finalt = 100-h;
//         }
//       }
//     }
//     else if(t<15)
//     {
//       var randie = Math.random();
//       if(l<10)
//       {
//         if(randie>0.5)
//         {
//           finalt = 100-h;
//           finall = Math.floor(Math.random()*(100-w-10))+10;
//         }
//         else
//         {
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//           finall = 100-w;
//         }
//       }
//       else if(l>80)
//       {
//         if(randie>0.5)
//         {
//           finalt = 100-h;
//           finall = Math.floor(Math.random()*(100-w-10));
//         }
//         else
//         {
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//           finall = 0;
//         }
//       }
//       else
//       {
//         if(randie<0.33)
//         {
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//           finall = 0;
//         }
//         else if(randie<0.67)
//         {
//           finalt = 100-h;
//           finall = Math.floor(Math.random()*(100-w));
//         }
//         else
//         {
//           finalt = Math.floor(Math.random()*(100-h-10))+10;
//           finall = 100-w;
//         }
//       }
//     }
//     else if(l+w>=99)
//     {
//       var randie = Math.random();
//       if(t<10)
//       {
//         if(randie>0.5)
//         {
//           finalt = Math.floor(Math.random()*(100-h-10)) + 10;
//           finall = 0;
//         }
//         else
//         {
//           finalt = 100-w;
//           finall = Math.floor(Math.random()*(100-h-10)) + 10;
//         }
//       }
//       else if(t>80)
//       {
//
//         if(randie>0.5)
//         {
//           finalt = Math.floor(Math.random()*80);
//           finall = 0;
//         }
//         else
//         {
//           finalt = 0;
//           finall = Math.floor(Math.random()*80);
//         }
//       }
//       else
//       {
//         if(randie<0.33)
//         {
//           finalt = 0;
//           finall = Math.floor(Math.random()*(100-w));
//         }
//         else if(randie<0.67)
//         {
//           finalt = Math.floor(Math.random()*(100-h));
//           finall = 0;
//         }
//         else
//         {
//           finalt = 100-h;
//           finall = Math.floor(Math.random()*(100-w));
//         }
//       }
//     }
//     else if(t+h>=99)
//     {
//       var randie = Math.random();
//       if(l<10)
//       {
//         if(randie>0.5)
//         {
//           finall = Math.floor(Math.random()*80) + 10;
//           finalt = 0;
//         }
//         else
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*80) + 10;
//         }
//       }
//       else if(l>80)
//       {
//         if(randie>0.5)
//         {
//           finall = Math.floor(Math.random()*80);
//           finalt = 0;
//         }
//         else
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*80);
//         }
//       }
//       else
//       {
//         if(randie<0.33)
//         {
//           finall = 0;
//           finalt = Math.floor(Math.random()*(100-h));
//         }
//         else if(randie<0.67)
//         {
//           finall = Math.floor(Math.random()*(100-w));
//           finalt = 0;
//         }
//         else
//         {
//           finall = 100-w;
//           finalt = Math.floor(Math.random()*(100-h));
//         }
//       }
//     }
//     else
//     {
//       if(Math.random() > 0.5)
//       {
//         if(Math.random()>0.5)
//         {finall = (100-w);}
//         finalt = Math.floor(Math.random()*(100-h));
//       }
//       else
//       {
//         finall = Math.floor(Math.random()*(100-w));
//         if(Math.random()>0.5)
//         {finalt = (100-h);}
//       }
//     }
//
//     arr[i].finall = finall;
//     arr[i].finalt = finalt;
//
//     requestAnimationFrame(function(timestamp) {
//       starttime = timestamp || new Date().getTime(); //if browser doesn't support requestAnimationFrame, generate our own timestamp using Date
//       move(timestamp, i, time);
//     });
//   }
//
//   function move(timestamp, i, duration){
//     //if browser doesn't support requestAnimationFrame, generate our      own timestamp using Date:
//     var timestamp = timestamp || new Date().getTime();
//     var runtime = timestamp - starttime;
//     var progress = runtime / duration;
//     progress = Math.min(progress, 1);
//
//     //the following line does NOT work
//     var parent = document.getElementById("circleHolder");
//     var currDiv = parent.children[i];
//
//     var l = arr[i].l;
//     var t = arr[i].t;
//     var finall = arr[i].finall;
//     var finalt = arr[i].finalt;
//
//     var newL = l + ((finall-l)*progress);
//     newL = newL.toFixed(2);
//     var newT = t + ((finalt-t)*progress);
//     newT = newT.toFixed(2);
//
//     currDiv.style.left = newL + '%';
//     currDiv.style.top = newT + '%';
//
//     if (runtime < duration){ // if duration not met yet
//       requestAnimationFrame(function(timestamp){ // call requestAnimationFrame again with parameters
//         move(timestamp, i, duration)})
//       }
//       else {
//         arr[i].l = finall;
//         arr[i].t = finalt;
//         go(i);
//       }
//     }
//
//   }
const UserProfile = props => {

  class Circ {
  	constructor(l, t, w, h) {
  		this.l = l;
  		this.t = t;
  		this.w = w;
  		this.h = h;
  		this.finall = 0;
  		this.finalt = 0;
  	}
}

    return(
      <div id='circleHolder'>
      {props.cart.map(bookObj => {
        return <BookFloat img={bookObj.img_url} />
      })}
      </div>
    )
}

export default UserProfile
