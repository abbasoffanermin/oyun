table()
let count = 1
  let int=15
  let int2=0
  let int3=10
function table() {
    let first = []
    let last = []
    let rnd
  
    let num = 0
    let tbl = document.getElementById("tbl")
    for (let i = 0; i < 16; i++) {
        first[i] = i + 1
    }
    for (let i = 0; i < 16; i++) {
        rnd = Math.floor(Math.random() * first.length)
        last[i] = first[rnd]
        first.splice(rnd, 1)
    }
    let data = ""
    for (i = 0; i < 4; i++) {
        data += `<tr>`
        for (j = 0; j < 4; j++) {
            data += `<td onclick="Click(${last[num]})" id="help${last[num]}">${last[num]}</td>`
            num++
        }
        data += `</tr>`
    }
    tbl.innerHTML = data
}
function Click(data) {
    if (data == count ) {
        count++
        document.getElementById("help" + data).style.backgroundColor = "green"
    }
    else {
        document.getElementById("help" + data).style.backgroundColor = "red"
        setTimeout(function () {
            
        }
            ,1000)
            setTimeout(function () {
                Swal.fire({
                    title: 'Yeni oyuna başlamaq istəyirsiz?',
                    
                    icon: 'question',
                    showCancelButton: true,
                    confirmButtonColor: '#3085d6',
                    cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes!'
                  }).then((result) => {
                    if (result.isConfirmed) {
                      Swal.fire(
                        'Yeni oyuna başlayırsınız',
                     location.reload()
                      )
                    }
                  })
            }
                ,3000)
            
    }
    document.getElementById("help" + data).style.color = "yellow"



    





}


function yeni(){
    if(count==16){
        Swal.fire({
            title: 'Təbriklər.Yeni oyuna başlamaq istəyirsiniz?',
            showDenyButton: true,
            confirmButtonText: 'Save',
            
          }).then((result) => {
            
            if (result.isConfirmed) {
              Swal.fire('Yeni oyuna başlayırsınız!', '', 'success')
              location.reload()
            }else if (result.isDenied) {
                
              }
          })
    }

}
function time(){
int--
document.getElementById("saat").innerHTML=`Qalan vaxt:${int}`


if(int==int2){
     clearInterval(son) 
    alert("uduzdunuz")
    Swal.fire({
        title: 'Yeni oyuna başlamaq istəyirsiz?',
        icon: 'question',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
      confirmButtonText: 'Yes!'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Yeni oyuna başlayırsınız',
         location.reload()
          )
        }
      })  
     
}

if(int==int3){
setInterval(function(){
  document.getElementById("saat").style.color="red"
//   setInterval(function(){
//   document.getElementById("saat").style.color="white"
// },3000)
},1000)

}


}
time()
  let son =setInterval(time,1000)
