
document.addEventListener("click",(e)=>{
    e.preventDefault();
})

let btn1=document.getElementById("b_1");
let a1=document.getElementById("a_1");
let img1="https://c.saavncdn.com/776/El-Dorado-English-2021-20210322233939-500x500.jpg";

let btn2=document.getElementById("b_2");
let a2=document.getElementById("a_2");
let img2="https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/ybzaEv6oW2/size_m_1747364632.jpg";


let btn3=document.getElementById("b_3");
let a3=document.getElementById("a_3");
let img3="https://m.media-amazon.com/images/M/MV5BOTZjNzVhYjEtOTIxNC00ZDgwLWEwZmMtZDkxNTE4NTcyMjRlXkEyXkFqcGc@._V1_.jpg";

let btn4=document.getElementById("b_4");
let a4=document.getElementById("a_4");
let img4="https://i1.sndcdn.com/artworks-000106721153-lwh3jo-t500x500.jpg";

let btn5=document.getElementById("b_5");
let a5=document.getElementById("a_5");
let img5="https://i.scdn.co/image/ab67616d0000b273c556f3920f6a81c7696fb06e";

let btn6=document.getElementById("b_6");
let a6=document.getElementById("a_6");
let img6="https://i.scdn.co/image/ab67616d0000b273d9a129c4a656a55afff2ca02";

let btn7=document.getElementById("b_7");
let a7=document.getElementById("a_7");
let img7="https://c.saavncdn.com/367/Kedarnath-Hindi-2019-20190219-500x500.jpg";

let btn8=document.getElementById("b_8");
let a8=document.getElementById("a_8");
let img8="https://i.scdn.co/image/ab67616d0000b273aad3f4b601ae8763b3fc4e88";

let btn9=document.getElementById("b_9");
let a9=document.getElementById("a_9");
let img9="https://i.scdn.co/image/ab67616d0000b273c556f3920f6a81c7696fb06e";

let btn10=document.getElementById("b_10");
let a10=document.getElementById("a_10");
let img10="https://i.scdn.co/image/ab67616d0000b27383141000ee8ce3b893a0b425";

let btn11=document.getElementById("b_11");
let a11=document.getElementById("a_11");
let img11="https://a10.gaanacdn.com/gn_img/albums/XYybzrb2gz/ybzaEv6oW2/size_m_1747364632.jpg";

let btn12=document.getElementById("b_12");
let a12=document.getElementById("a_12");
let img12="https://m.media-amazon.com/images/M/MV5BOTZjNzVhYjEtOTIxNC00ZDgwLWEwZmMtZDkxNTE4NTcyMjRlXkEyXkFqcGc@._V1_.jpg";

let btn13=document.getElementById("b_13");
let a13=document.getElementById("a_13");
let img13="https://i.scdn.co/image/ab67616d0000b27358ad3c6d598cb14b31c334dc";

let btn14=document.getElementById("b_14");
let a14=document.getElementById("a_14");
let img14="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrT2cAeiwyPRXnYAgGmPkmBmhZKmzzJ6wahQ&s";

let btn15=document.getElementById("b_15");
let a15=document.getElementById("a_15");
let img15="https://i.scdn.co/image/ab67616d0000b2731344800458a38197bfc721f3";

let btn16=document.getElementById("b_16");
let a16=document.getElementById("a_16");
let img16="https://c.saavncdn.com/018/Summer-High-English-2022-20220802184652-500x500.jpg";

let btn17=document.getElementById("b_17");
let a17=document.getElementById("a_17");
let img17="https://i.scdn.co/image/ab67616d00001e02e84b3698ce963764ad9478f8";

let btn18=document.getElementById("b_18");
let a18=document.getElementById("a_18");
let img18="data:image/jpeg;base64,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";


let audios = [
    a1, a2, a3, a4, a5, a6, a7, a8, a9, a10,
    a11, a12, a13, a14, a15, a16, a17, a18
];

let images = [
    img1, img2, img3, img4, img5, img6, img7, img8, img9, img10,
    img11, img12, img13, img14, img15, img16, img17, img18
];

let names = [
    "Mood", "Haseen", "Tera Ghata", "Six Days", "Tu", "Brown Munde",
    "Namo Namo", "Payal", "Tu", "Finding Her", "Haseen", "Tera Ghata",
    "Jalebi Baby", "Kashish", "Jhol", "Summer High", "For a Reason", "Paro"
];



let play=document.getElementById("play");
let pause=document.getElementById("pause");

let left_btn=document.getElementById("left_button");
let right_btn=document.getElementById("right_button");

let current_audio=null;
let i=null;

let left_img=document.getElementById("bottom_left_img");
let right_img=document.getElementById("right_img");

let left_name=document.getElementById("left_name");
let right_name=document.getElementById("right_name");

let progress_bar=document.getElementById("progress_bar");
let volume_bar=document.getElementById("volume_bar");

let right_gif=document.getElementById("right_gif");

// let start_time=document.getElementById("start_time");
// let end_time=document.getElementById("end_time");


play.addEventListener("click",()=>{
    if(current_audio){
        current_audio.play();
        pause.classList.remove("invisible");
        play.classList.add("invisible");
        right_gif.style.opacity=1;
    }
})

pause.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
        pause.classList.add("invisible");
        play.classList.remove("invisible");
        right_gif.style.opacity=0;
    }
})

left_btn.addEventListener("click",()=>{
    
    if(i!=null){
        current_audio.pause();
        if(i==0){
            i=17;
        }
        else{
            i=i-1;
        }
        current_audio=audios[i];
        current_audio.currentTime=0;
        current_audio.play();
        pause.classList.remove("invisible");
        play.classList.add("invisible");
        left_img.src=images[i];
        right_img.src=images[i];

        left_name.innerHTML=names[i];
        right_name.innerHTML=names[i];

        current_audio.addEventListener("timeupdate",()=>{
        let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
        progress_bar.value=progress;
        })
        right_gif.style.opacity=1;

    }

})
right_btn.addEventListener("click",()=>{
    
    if(i!=null){
        current_audio.pause();
        if(i==17){
            i=0;
        }
        else{
            i=i+1;
        }

        current_audio=audios[i];
        current_audio.currentTime=0;
        current_audio.play();
        pause.classList.remove("invisible");
        play.classList.add("invisible");
        left_img.src=images[i];
        right_img.src=images[i];

        left_name.innerHTML=names[i];
        right_name.innerHTML=names[i];

        current_audio.addEventListener("timeupdate",()=>{
        let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
        progress_bar.value=progress;
        })
        right_gif.style.opacity=1;

    }

})




progress_bar.addEventListener("change",()=>{
    current_audio.currentTime=parseInt((progress_bar.value*current_audio.duration)/100);
})

volume_bar.addEventListener("input",()=>{
    current_audio.volume=parseFloat(volume_bar.value/100);
})



btn1.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=0;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];
    right_gif.style.opacity=1;

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })


})
btn2.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=1;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn3.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=2;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })


})
btn4.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=3;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn5.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=4;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn6.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=5;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn7.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=6;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn8.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=7;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn9.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=8;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn10.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=9;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn11.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=10;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

    

})
btn12.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=11;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })


})
btn13.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=12;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn14.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=13;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn15.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=14;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })


})
btn16.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=15;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn17.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=16;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

   

})
btn18.addEventListener("click",()=>{
    if(current_audio){
        current_audio.pause();
    }
    right_gif.style.opacity=1;
    i=17;
    current_audio=audios[i];
    current_audio.currentTime=0;
    current_audio.play();
    pause.classList.remove("invisible");
    play.classList.add("invisible");
    left_img.src=images[i];
    right_img.src=images[i];

    left_name.innerHTML=names[i];
    right_name.innerHTML=names[i];

    current_audio.addEventListener("timeupdate",()=>{
    let progress=parseInt((current_audio.currentTime/current_audio.duration)*100 );
    progress_bar.value=progress;
    })

  
})


// current_audio.addEventListener("ended",()=>{
//         if(i==17){
//             i=0;
//         }
//         else{
//             i=i+1;
//         }

//         current_audio=audios[i];
//         current_audio.currentTime=0;
//         current_audio.play();
//         pause.classList.remove("invisible");
//         play.classList.add("invisible");
//         left_img.src=images[i];
//         right_img.src=images[i];

//         left_name.innerHTML=names[i];
//         right_name.innerHTML=names[i];
//     })




