!function(e){var t={};function i(n){if(t[n])return t[n].exports;var a=t[n]={i:n,l:!1,exports:{}};return e[n].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.m=e,i.c=t,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)i.d(n,a,function(t){return e[t]}.bind(null,a));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="",i(i.s=0)}([function(e,t){const i=()=>{let e=document.createElement("p");return e.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam et congue velit. Aenean nec viverra elit. Donec vitae mi pulvinar, lacinia nulla sed, eleifend felis. In sagittis tortor non dui venenatis eleifend. Cras placerat, libero nec dignissim euismod, est mi convallis erat, non congue justo leo eget dui. Proin congue quam vitae tristique fringilla. Donec sit amet cursus sapien. Curabitur ut dictum orci. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Ut vitae quam dui. Integer ac mi tincidunt elit lobortis varius. Ut varius iaculis mi sit amet posuere. Proin sit amet sem lacus. Integer posuere, magna vel convallis laoreet, nunc velit volutpat enim, ut lacinia nunc libero vitae velit. Etiam aliquet libero sit amet purus luctus egestas.\n\n    Fusce venenatis nisi vitae erat mollis, a facilisis orci vulputate. Nam lectus felis, ornare consectetur nisi et, convallis bibendum leo. Vestibulum et posuere enim. Phasellus facilisis eros arcu, vitae suscipit magna semper nec. Donec ornare placerat mattis. Proin eget ultricies risus. Nam libero mi, venenatis commodo vehicula euismod, tristique ac odio. Maecenas felis lorem, tempor fringilla feugiat eu, faucibus et nunc. Vestibulum dignissim sem quis lectus rutrum bibendum. Praesent turpis ex, feugiat vitae aliquam hendrerit, viverra at tellus. Quisque lacinia dictum quam nec pretium.\n    \n    Vestibulum quis orci et velit viverra malesuada in at justo. Integer pharetra tempor mauris in mattis. Vivamus ornare magna quis turpis varius hendrerit. Vestibulum dui magna, gravida eget iaculis ultricies, congue sed mi. Praesent dictum euismod metus, ac feugiat mauris. Aliquam pharetra est ipsum, in semper magna porttitor nec. Nulla ac magna vel lorem aliquam suscipit. Donec quis dolor eu ante sollicitudin fermentum. Fusce varius vulputate justo, non ornare ligula scelerisque nec.",e},n=()=>{const e=document.createElement("div"),t=document.createElement("img"),i=document.createElement("div"),n=document.createElement("div"),a=document.createElement("h1"),u=document.createElement("p");return e.classList.add("food"),t.classList.add("food-image"),i.classList.add("food-view"),a.classList.add("food-name"),u.classList.add("food-description"),n.classList.add("food-name-container"),t.src="https://www.thelocal.de/userdata/images/1542281122_110147217.jpg",t.width=300,a.innerText="Food Name",u.innerText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras rutrum enim ut dolor aliquet fermentum. Nam eget maximus diam. Curabitur et consectetur justo. Nunc convallis nibh ac nulla euismod, quis molestie ligula sollicitudin. Donec scelerisque dapibus justo quis auctor. Duis scelerisque aliquam consequat. Phasellus lobortis nulla sit amet mauris tristique rutrum.",i.appendChild(t),n.appendChild(a),e.appendChild(i),e.appendChild(n),e.appendChild(u),e},a=e=>{e.removeChild(e.lastChild)},u=(e,t)=>{t.classList.add("fade-in"),e.appendChild(t)};(()=>{document.body.appendChild((()=>{let e=document.createElement("div"),t=document.createElement("button"),i=document.createElement("button"),n=document.createElement("button");return e.classList.add("menu"),t.classList.add("menu-button1"),i.classList.add("menu-button2"),n.classList.add("menu-button3"),t.id="home",i.id="menu",n.id="contact",t.innerHTML="Home",i.innerText="Menu",n.innerText="Contact",e.appendChild(t),e.appendChild(i),e.appendChild(n),e})());const e=(e=>{let t=document.createElement("div"),i=document.createElement("div");return i.classList.add("logo"),t.classList.add("container"),t.appendChild(i),t.appendChild(e),t})(i()),t=document.querySelector("#home"),r=document.querySelector("#menu"),s=document.querySelector("#contact");document.body.appendChild(e),t.addEventListener("click",()=>{a(e),u(e,i())}),r.addEventListener("click",()=>{a(e),u(e,(()=>{const e=document.createElement("div");return e.classList.add("food-container"),e.appendChild(n()),e.appendChild(n()),e.appendChild(n()),e})())}),s.addEventListener("click",()=>{a(e),u(e,(()=>{const e=document.createElement("i"),t=document.createElement("i"),i=document.createElement("div"),n=document.createElement("div"),a=document.createElement("div"),u=document.createElement("h1"),r=document.createElement("h1"),s=document.createElement("p"),l=document.createElement("p"),c=document.createElement("p"),d=document.createElement("p");return i.classList.add("location"),n.classList.add("contact"),a.classList.add("contact-container"),e.classList.add("material-icons"),e.innerHTML="navigation",t.classList.add("material-icons"),t.innerHTML="phone",s.append("396 Single Street, Needham City, MA 02192"),l.append("Opening Hours: 12:00 PM - 11:00 PM"),c.append("email: theburgerplace@email.com"),d.append("tel: 123-456-7890"),u.appendChild(e),u.append("Location"),r.appendChild(t),r.append("Contact"),i.appendChild(u),i.appendChild(s),i.appendChild(l),n.appendChild(r),n.appendChild(c),n.appendChild(d),a.appendChild(i),a.appendChild(n),a})())})})()}]);