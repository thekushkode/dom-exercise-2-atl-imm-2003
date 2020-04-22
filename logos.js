// logos.js

const sites = [
    {
        "address": "https://apple.com",
        "logo": "https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg"
    },
    {
        "address": "https://google.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/8tLchaDMIEDNzUD3mYQ7v1ZQL84=/0x0:2012x1341/920x613/filters:focal(0x0:2012x1341):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/47070706/google2.0.0.jpg"
    },
    {
        "address": "https://microsoft.com",
        "logo": "https://cdn.vox-cdn.com/thumbor/drG69iSTSbsYDNcckVzB3x97pDA=/7x0:633x417/920x613/filters:focal(7x0:633x417):format(webp)/cdn.vox-cdn.com/assets/1311169/mslogo.jpg"
    },

];
// console.log(sites[0]["address"]); //prints https://apple.com
// console.log(sites[0]["logo"]);  //prints https://www.logodesignlove.com/images/classic/apple-logo-rob-janoff-01.jpg


const divHolder= document.querySelector(".js-divholder");
divHolder.style.display = "flex";
divHolder.style.flexDirection = "column";

for (let i = 0; i < sites.length; i++) {
    console.log(i);
    const address = sites[i]["address"];
    const logo = sites[i]["logo"];
    const div = document.createElement("div");
    div.style.display = "flex";
    div.style.flexDirection = "column";
    const linkItem = document.createElement("a");
    linkItem.setAttribute("href", address);
    linkItem.textContent = address;
    const imgItem = document.createElement("img");
    imgItem.setAttribute("src", logo);
    imgItem.style.maxWidth = "100px";
    imgItem.style.maxHeight = "100px";
    div.appendChild(linkItem);
    div.appendChild(imgItem);
    divHolder.appendChild(div)
};

// Long code works. wrote this to help me make sense of the shorter function version above.
// const divHolder= document.querySelector(".js-divholder");
// divHolder.style.display = "flex";
// divHolder.style.flexDirection = "column";

// const div1 = document.createElement("div");
// div1.style.display = "flex";
// div1.style.flexDirection = "column";
// div1.style.margin = "20px";
// divHolder.appendChild(div1);

// const link1 = document.createElement("a");
// link1.setAttribute("href", sites[0]["address"]);
// link1.textContent = "Visit Apple.com";
// div1.appendChild(link1);

// const img1 = document.createElement("img");
// img1.setAttribute("src", sites[0]["logo"]);
// img1.style.maxHeight = "200px";
// img1.style.maxWidth = "200px";
// div1.appendChild(img1);

// const div2 = document.createElement("div");
// div2.style.display = "flex";
// div2.style.flexDirection = "column";
// div2.style.margin = "20px";
// divHolder.appendChild(div2);

// const link2 = document.createElement("a");
// link2.setAttribute("href", sites[1]["address"]);
// link2.textContent = "Visit Google.com";
// div2.appendChild(link2);

// const img2 = document.createElement("img");
// img2.setAttribute("src", sites[1]["logo"]);
// img2.style.maxHeight = "200px";
// img2.style.maxWidth = "200px";
// div2.appendChild(img2);

// const div3 = document.createElement("div");
// div3.style.display = "flex";
// div3.style.flexDirection = "column";
// div3.style.margin = "20px";
// divHolder.appendChild(div3);

// const link3 = document.createElement("a");
// link3.setAttribute("href", sites[2]["address"]);
// link3.textContent = "Visit Microsoft.com";
// div3.appendChild(link3);

// const img3 = document.createElement("img");
// img3.setAttribute("src", sites[2]["logo"]);
// img3.style.maxHeight = "200px";
// img3.style.maxWidth = "200px";
// div3.appendChild(img3);



