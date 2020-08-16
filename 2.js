function submit1(btnEle){
   // console.log(btnEle);
    let ip= document.querySelector(btnEle);
    let ipval= ip.parent.parent.child[0].child[0];
  //  console.log(ipval.Value);
  if(ipval.value)
  {
    document.querySelector("#disp").innerHTML=ipval.value;
  }
    ipval.value="";
}