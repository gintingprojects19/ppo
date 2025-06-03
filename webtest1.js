var kelas = document.getElementById("kelas");
var tbl =document.getElementById("tbl");

/*tbl.style.display="none";*/
tbl.addEventListener("click",function(){
    if(kelas.value == "bahasa-inggris-kelas-X"){
/*        a=prompt("nama");
            if(a==""){
                a=prompt("nama");
            }else{
              document.write(" Hello ",a," Selamat datang di Website Penilaian Online");  
            }*/
        a=confirm("apakah kelas yang anda pilih sudah benar");
        if(a==true){
            alert("Terimakasih, Selamat mengikuti penilaian. Semoga mendapat nilai yang terbaik");
            window.location.href="https://www.youtube.com/";
        }
        
       }
})