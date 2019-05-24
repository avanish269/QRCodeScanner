function openQRCamera(node){
  var r=new FileReader();
  r.onload=function(){
    node.value="";
    qrcode.callback=function(res){
      if(res instanceof Error){
        alert("No QR code found");
      } else {
        node.parentNode.previousElementSibling.value=res;
      }
    };
    qrcode.decode(r.result);
  };
  var v=node.files[0];
  //v=v%100;
  r.readAsDataURL(v);
}
