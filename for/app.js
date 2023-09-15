let menu = ["burger","pizza","broast","tikka","boti roll","chicken roll","bihari boti"]
let freeItems = ["cold drink","salaad","fries"]

for(var i = 0; i < menu.length; i++) {
    for (var j = 0; j < freeItems.length; j++) {
        document.write("1" + menu[i] +  " ke sath 1 " + freeItems[j] + " free <hr>" )
    }
}

