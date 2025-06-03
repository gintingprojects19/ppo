var kelas = document.getElementById("kelas");
var tbl =document.getElementById("tbl");
var konfirmasi=document.getElementById("konfirm");
var textkonfirmasi=document.getElementById("text-konfir");
var yes=document.getElementById("yes");
var no=document.getElementById("no");

/*tbl.style.display="none";*/
tbl.addEventListener("click",function(){
    if(kelas.value == "bahasa-inggris-kelas-X"){

        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Bahasa Inggris kelas X. Apakah pilihan Anda sudah benar  ? ";
        yes.addEventListener("click",function(){
            window.location.href="https://github.com/";
            konfirmasi.style.display="none";
        })        
        no.addEventListener("click",function(){
            
            konfirmasi.style.display="none";
        })
        }  
    else if(kelas.value == "bahasa-inggris-kelas-XI"){
        
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda memilih Bahasa Inggris kelas XI. Apakah pilihan Anda sudah benar  ? ";
        
        yes.addEventListener("click",function(){
            window.location.href="https://kompas.com/";
            konfirmasi.style.display="none";
        })        
        no.addEventListener("click",function(){
            
            konfirmasi.style.display="none";
        })
        }
    /*else if(kelas.value == "x"){
        konfirmasi.style.display="block";
        textkonfirmasi.innerHTML="Anda belum memilih mapel dan kelas";
        textkonfirmasi.style.color="red";
        no.style.display="none";
        yes.addEventListener("click",function(){
            
            konfirmasi.style.display="none";
        })        
        
        
        }*/
})