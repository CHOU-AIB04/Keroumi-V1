import{r as s,u as C,j as e}from"./index-y_CoQI1P.js";import{s as l,D as a,_ as i,P as y}from"./App-ram9DW2t.js";const I=({onload:c})=>{s.useEffect(()=>{(async()=>{c&&c()})()},[]);let d=C(),{card:o}=s.useContext(l),{setcard:b}=s.useContext(l),[x,h]=s.useState(()=>{let t="",r="";return window.innerWidth>=900?(t="visible",r="hidden"):(t="hidden",r="visible"),{big_table:t,medium_table:r}});s.useEffect(()=>{addEventListener("resize",()=>{console.log(window.innerWidth),window.innerWidth>=900?h(t=>({...t,big_table:"visible",medium_table:"hidden"})):h(t=>({...t,big_table:"hidden",medium_table:"visible"}))})},[window.innerWidth]);let{cardtot:n}=s.useContext(l),{setcardtot:j}=s.useContext(l);function m(t){let r=t-1,g=+window.localStorage.getItem("total"),v=a[t-1].price,u=g-v,p=JSON.parse(window.localStorage.getItem("arr")).filter(_=>_!==r);window.localStorage.setItem("arr",JSON.stringify(p)),b(p),window.localStorage.setItem("total",u),j(u),i.success("Removed from the Card")}let{promocode:w}=s.useContext(l),{setpromocode:f}=s.useContext(l);function N(){let t=document.getElementById("Codeinput").value;if(t==="")i.error("Promo Code input is empty");else if(y.includes(t)){let r=n-n*.1;f(r),i.success("promo Code Applied")}else i.error("Invalid Promo Code")}return e.jsxs("section",{className:"w-full h-auto storecolor top-[423px] relative flex flex-col items-center mt-8",children:[o.length>0?e.jsxs("table",{className:`w-[95%] ${x.big_table}`,children:[e.jsxs("tr",{className:"text-[19px] text-center text-white card_color",children:[e.jsx("td",{className:"border-2 border-zinc-800 w-[50%] h-[60px] uppercase",colSpan:3,children:"Produit"}),e.jsx("td",{className:"w-[160px] h-[60px]  border-2 border-zinc-800 uppercase",children:"Prix"}),e.jsx("td",{className:"w-[160px] h-[60px]  border-2 border-zinc-800 uppercase",children:"quantité"}),e.jsx("td",{className:"w-[160px] h-[60px]  border-2 border-zinc-800 uppercase",children:"Sous-Total"})]}),o.map(function(t){let r=a[t];return e.jsxs("tr",{className:"text-[20px] text-center text-white",children:[e.jsx("td",{className:"border-2 w-[100px] border-zinc-800 h-[90px]",children:e.jsx("i",{className:"bi bi-x-circle-fill text-[30px] cursor-pointer transition-colors duration-500 hover:text-orange-500",onClick:()=>m(r.id)})}),e.jsx("td",{className:" h-[90px] w-[120px] flex justify-center items-center",children:e.jsx("img",{src:r.pic,alt:"pic",className:"w-[70%] h-[90%] rounded-md object-cover"})}),e.jsx("td",{className:"border-2 border-zinc-800 h-[90px] text-[18px]",children:r.tittle}),e.jsx("td",{className:"border-2 border-zinc-800 h-[90px]",children:r.price}),e.jsx("td",{className:"border-2 border-zinc-800 h-[90px]",children:e.jsx("input",{type:"number",defaultValue:1,min:1,className:"w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"})}),e.jsx("td",{className:"border-2 border-zinc-800 h-[90px]",children:r.price})]})}),e.jsx("tr",{className:"card_color",children:e.jsx("td",{className:"border-2 border-zinc-800 h-[90px]",colSpan:6,children:e.jsxs("nav",{className:"flex w-[90%] items-center justify-between relative left-1/2 -translate-x-1/2",children:[e.jsxs("div",{className:"flex gap-5 items-center",children:[e.jsx("input",{type:"text",name:"",id:"Codeinput",className:"w-52 h-12 rounded-2xl product_color text-white pl-3 focus:outline-none",placeholder:"Code Promo"}),e.jsx("button",{className:"bg-orange-500 h-12 rounded-xl w-52 text-white transition-colors duration-500 hover:bg-white hover:text-orange-500 sh font-bold",onClick:N,children:"Appliquer le code Promo"})]}),e.jsx("button",{className:"bg-orange-500 h-12 rounded-xl w-52 text-white transition-colors duration-500 hover:bg-white hover:text-orange-500 sh font-bold",children:"Mettre A Jour le Panier"})]})})})]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"w-[90%] card_color h-12 pt-2 pl-5 flex items-center border-t-4 border-blue-500",children:[e.jsx("i",{className:"bi bi-window text-white"}),e.jsxs("div",{className:"flex items-center gap-5 ml-7 text-[18px] sm:text-[20px]",children:[e.jsx("h1",{className:"text-white  font-bold",children:"Votre Panier est vide"}),e.jsx("i",{className:"bi bi-emoji-smile-upside-down  text-orange-500"})]})]}),e.jsx("button",{className:"w-44 sm:w-48 h-12 rounded-xl text-sm sm:text-md bg-orange-500 text-white font-bold self-start mt-6 ml-6 sm:ml-16 transition-colors duration-500 hover:bg-white sh hover:text-orange-500",onClick:()=>{d("/Keroumi-V1/Store"),scrollTo({top:600,behavior:"smooth"})},children:"retourne a la boutique"})]}),o.length>0?e.jsxs("table",{className:`w-[95%] ${x.medium_table}`,children:[o.map(function(t){let r=a[t];return e.jsxs(e.Fragment,{children:[e.jsx("tr",{className:"text-center border-2 h-16 border-zinc-800",children:e.jsx("td",{children:e.jsx("i",{className:"bi bi-x-circle-fill text-[30px] cursor-pointer text-white transition-colors duration-500 hover:text-orange-500",onClick:()=>m(r.id)})})}),e.jsx("tr",{className:"h-16 border-2 border-zinc-800",children:e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-between pl-4 text-white font-bold ",children:[e.jsx("p",{children:"Produit: "}),e.jsx("h1",{className:"text-[13px] ml-4",children:r.tittle})]})})}),e.jsx("tr",{className:"h-16 border-2 border-zinc-800",children:e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-between pl-4 pr-4 text-white font-bold ",children:[e.jsx("p",{children:"Prix"}),e.jsxs("h2",{children:[r.price," Mad"]})]})})}),e.jsx("tr",{className:"h-16 border-2 border-zinc-800",children:e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-between pl-4 pr-4 text-white font-bold ",children:[e.jsx("p",{children:"Quantité"}),e.jsx("input",{type:"number",defaultValue:1,min:1,className:"w-[100px] h-9 rounded-lg pl-2 pr-2 focus:outline-none product_color"})]})})}),e.jsx("tr",{className:"h-16 border-2 border-zinc-800",children:e.jsx("td",{children:e.jsxs("div",{className:"flex items-center justify-between pl-4 pr-4 text-white font-bold ",children:[e.jsx("p",{children:"Sous-Total"}),e.jsxs("h2",{children:[r.price," Mad"]})]})})})]})}),e.jsx("tr",{className:"border-2 border-zinc-800",children:e.jsxs("td",{className:"flex flex-col items-center gap-2 border-zinc-800",children:[e.jsx("input",{type:"text",className:"w-[90%] h-12 rounded-2xl product_color text-white pl-3 focus:outline-none",placeholder:"Code Promo"}),e.jsx("button",{className:"bg-orange-500 h-12 rounded-xl w-[90%] text-white font-bold transition-colors duration-500 hover:bg-white hover:text-orange-500 sh",children:"Appliquer le code Promo"}),e.jsx("button",{className:"bg-orange-500 h-12 rounded-xl w-[90%] text-white font-bold transition-colors duration-500 hover:bg-white hover:text-orange-500 sh",children:"Mettre A Jour le Panier"})]})})]}):"",o.length>0?e.jsxs("nav",{className:"self-center md:self-end small_tablet:w-[550px] w-[90%] mr-0 small_tablet:mr-9 mt-20 h-96 flex flex-col gap-4",children:[e.jsx("h1",{className:"text-white font-bold text-[30px] uppercase",children:"Total panier"}),e.jsxs("div",{className:"flex flex-col card_color rounded-xl",children:[e.jsxs("div",{className:"flex justify-between w-full pl-10 pr-10 items-center self-center h-20  second_product text-[20px] font-bold text-white",children:[e.jsx("h2",{children:"Sous-Total : "}),e.jsxs("h3",{children:[n," Mad"]})]}),e.jsxs("div",{className:"flex justify-between w-full pl-10 pr-10 items-center self-center h-20 text-[20px] font-bold text-white",children:[e.jsx("h2",{children:"Total : "}),e.jsxs("h3",{children:[w," Mad"]})]})]}),e.jsx("button",{className:"bg-orange-500 w-full h-12 rounded-2xl text-white font-bold mt-5 transition-colors duration-500 hover:bg-white hover:text-orange-500 sh",onClick:()=>d("/Keroumi-V1/Store/Checkout"),children:"Valider La commande"})]}):""]})};export{I as default};
