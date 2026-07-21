import img1 from "../assets/tanktop.jpg";
import lips from "../assets/lips.jpg";
import video from "../assets/greenDress.mp4";
import img4 from "../assets/car.JPG";
import img6 from "../assets/ellaBright.JPG";
import video1 from "../assets/video1.mp4";
import img7 from "../assets/whiteDress.JPG";
import video8 from "../assets/hairs.mp4";
import image9 from "../assets/watermelon.JPG";
import image10 from "../assets/purple.JPG";
import image11 from "../assets/mirror.JPG";
import image13 from "../assets/tanktop2.JPG";
import video14 from "../assets/saaree2.mp4";
import image15 from "../assets/blue.JPG";
import black_saaree from "../assets/black_saaree.JPG";
import tankTopSong from "../assets/nasha.mp3";
import eyes from "../assets/eyes.mp3";
import watermelon from "../assets/watermelon.m4a";
import tikka from "../assets/tikka.mp3";
import gulaab from "../assets/gulaab.mp3";
import perfect from "../assets/perfect.mp3";
import tauba_tauba from "../assets/tauba_tauba.mp3";
import saaree from "../assets/saaree.mp3";
import kesariya from "../assets/kesariya.mp3";
import you from "../assets/you.mp3";
import proper_patola from "../assets/proper_patola.mp3";
import palat from "../assets/palat.mp3";
import desi_girl from "../assets/desi_girl.mp3";
import kya_baat_ay from "../assets/kya_baat_ay.mp3";
import enna_sona from "../assets/enna_sona.mp3";


const galleryData = [

{
    id:1,

    type:"image",

    song:tankTopSong,


    media:img1,

    title:"The Deadliest Combo 🖤🤍",

    compliment: "Tank tops and denims are already one of the hottest combinations anyone can wear... but when Kashish Saxena wears a black-and-white one, Mashallah... the competition ends right there. ❤️ Honestly, this picture has become my 'Nashe Si Chadh Gayi'. 🥹 I don't know what you've done, but I literally have a nasha of this photo. At least 10 times every week, I end up opening it just to look at you for a few seconds... and somehow, every single time, it makes my day a little better. ❤️ It's one of those pictures I'll probably never get tired of looking at."
},

{
    id:2,

    type:"image",
    song:eyes,


    media:lips,

    title:"The Face Card Never Declines ❤️",

    compliment:"I don't know if I've ever seen a prettier face than this one. ❤️ That little koka? Absolutely stealing the show. And those lips... they're straight outta fire. 🔥 Honestly, this picture should come with a warning because once someone starts looking at it, looking away becomes the difficult part. ❤️"
},
{
    id:3,

    type:"video",

    song:perfect,

    media:video,

    title:"Peak Hotness Alert 🚨❤️",

    compliment:"OMG... THIS is what peak hotness looks like. 😭❤️ That dress? 10/10. Your body is TEA ✨, the face card is absolutely insane, and your aura is just magnetic. Honestly, if confidence had a picture in the dictionary, this would be it. Looking at this photo for too long should honestly come with a warning because it's impossible not to admire it. 🔥❤️"
},

{
    id:4,

    type:"image",

    media:img4,
    song:tikka,

    title:"Excuse Me... 😮‍💨❤️",

    compliment:"Can we please talk about how unfairly good you look here? 😭 White tank top ✔️ Blue denims ✔️ Perfect smile ✔️. Honestly... every time this picture pops up, my attention span disappears completely. Mera dil to sch me a jata haiii iss foto pe. I could stare at it for hours and still find something new to admire. ❤️"
},

{
    id:5,

    type:"video",

    media:video1,

    song:kesariya,

    title:"How Is This Even Allowed? 🥹",

    compliment:"This video is unfair. 😭 One second you're watching it casually, and the next you're smiling for absolutely no reason. If cuteness had a face, a smile, and a personality... it'd probably just be you. ❤️"
},

{
    id:6,

    type:"image",

    song:kya_baat_ay,

    media:img6,

    title:"Absolutely Stunning 💙",

    compliment:"I'm convinced this dress found its perfect owner the moment you tried it on. 😭❤️ You look absolutely stunning here. That confidence, that smile, and the way you carried the outfit... chef's kiss. Ella Bright who??? You've completely stolen the spotlight. 🔥"
},

{
  id:7,

  type:"image",

  song:enna_sona,

  media:img7,

  title:"Real-Life Doll 🤍",

  compliment:"Okayyyy... this white dress is absolutely unreal on you. 🤍😭 You genuinely look like a real-life doll here. The way it hugs you, those elegant curves, and the confidence with which you're flaunting it... absolutely breathtaking. ✨ I swear, if I'd gone shopping with you that day, I would've spent the entire time just admiring you in every single dress you tried on because somehow every outfit looks like it was made especially for you. 🥹❤️"
},

{
  id:8,

  type:"video",

  media:video8,
  song: you,

  title:"Hair Goals ✨",

  compliment:"Can we take a moment to appreciate your hair? 😭✨ The way you're casually playing with those soft, silky strands is so effortlessly pretty. They look unbelievably smooth and healthy. Honestly, they look so soft that they deserve a proper pampering session by me. 🤍🥹❤️"
},

{
  id:9,

  type:"image",

  media:image9,
  song:watermelon,

  title:"Sweetest Watermelon 🍉",

  compliment:"Okay but can we talk about that tiny watermelon on cheeks? 🍉😭 Its  making this picture ten times cuter! If I had one last wish, I'd shamelessly ask for a bite of that adorable little watermelon because it looks way too tempting. 😂🤍 This has to be one of the cutest random picture ever—you somehow make even a silly filter look absolutely adorable. 🥹❤️"
},

{
  id:10,

  type:"image",
  song:gulaab,

  media:image10,

  title:"Purple Perfection 💜",

  compliment:"Okay... I genuinely didn't know purple could look *this* beautiful until I saw you wearing it. 💜😭 That suit was ridiculously cute, and somehow you made it look even prettier. The elegance, the smile, and the way you carried the whole look so effortlessly... absolutely stunning. ✨ Jaipur definitely got blessed with your presence that day. Whoever said purple is the color of royalty clearly hadn't seen you in it yet. 👑🥹❤️"
},

{
  id:11,

  type:"image",

  song:tauba_tauba,

  media:image11,

  title:"Mirror, Mirror... ✨",

  compliment:"First of all... that waist?? 😭✨ Absolutely unfair. You make every mirror selfie look like it belongs in a fashion campaign. The figure, the confidence, and the way you carry yourself... just wow. ❤️🔥 If I ever got the chance to stand beside you, I'd probably spend the whole time wondering how someone can look this effortlessly gorgeous. And that figureeee... absolutely breathtaking. 🤍🥹"
},
{
  id:12,

  type:"video",

  media:video14,

  song: desi_girl,

  title:"Moonlight Magic 🌙",

  compliment:"Okay, answer me one thing... 🤨 If you have ₹100 and I take ₹50 from you... how are you still this pretty? 😭❤️ I know, the math isn't mathing, but neither is the amount of cuteness in this video. 🌙✨ This random clip is beautiful, but somehow it's still competing with the brightest thing in the frame—you. 🥹🤍"
},

{
  id:13,

  type:"image",

  media:image13,
  song:proper_patola,

  title:"Tank Top Supremacy 🤍",

  compliment:"Okay... can we all agree that you and tank tops are an unbeatable combination? 😭🤍 This look is ridiculously gorgeous. The confidence, the effortless vibe, and the way you carry yourself... it's actually unfair. 🔥 I'm not even kidding-the number of times I'm going to come back and look at this picture is probably going to be unhealthy for me. 😂❤️ You somehow make 'casual' look absolutely breathtaking. ✨🥹"
},

{
  id: 14,

  type: "image",

  media: black_saaree,

  song: saaree,

  title: "Saree Elegance ❤️",

  compliment: "Hyeeee Sch btau... mere dil ko chain ni a ra tha 🥹❤️ Tu muje apni full saree look hi nhi bhej ri thi, aur meko chull thi k is website me teri saree wali foto to mai lgaunga hi lgaunga. 😭😂 Fir maine socha... chalo ek secret mission krte h. 🤫 Seedha teri best friend ko text kr dia... and she literally sent ur picture within seconds 😂❤️ Aur jab maine woh full look dekhi... I just had one reaction... 'WOWWWWW...' 🥹✨ I'm pretty sure half the people there would've been sneaking glances at you because looking that gorgeous should honestly be illegal. 😭 ❤️ And finally... mere dil ko chain aa gya hai. 😌❤️ Ab ek chota sa or kaam kr... Neeche play button dba... 🎵 Aur dua kijiye ki ab mere dil ko thoda aur chain aa jaye. 😂❤️🥹"
},

{
  id:15,

  type:"image",

  media:image15,

  song: palat,

  title:"Diva Energy 👑",

  compliment:"Okay... teri mummy ne kya cheeez banayi hai yaarrr. 😭❤️ That mirror pose, that confidence, and the way you're owning the whole look... absolute diva energy. ✨ The curves, the elegance, and the effortless confidence make this picture a solid 10/10. 🔥 Aur taareef sunegi??. 'dekha hai jbse tujkoooo haaye main toh hil gaya, haaaye mai to hil gya' ye line bilkul meri story lagti hai. 🥹❤️ Har baar tujhe dekhke bas yhi gaana yaad ata hai. Life can be so ewww sometimes... but at least I get to say that a certified 10/10 diva is my bestie. 😌❤️"
}

];

export default galleryData;