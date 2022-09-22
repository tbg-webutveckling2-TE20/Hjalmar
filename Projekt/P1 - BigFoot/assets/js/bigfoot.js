function loadBigfoot() {
    document.getElementById("bigFoot").src ="assets/images/bigfoot.png";

}

function moveBigfoot(){
    const width = window.innerWidth;
    const height = window.innerHeight;
    alert ('Du hittade Bigfoot!')
    var picture = document.getElementById("bigFoot")
    var y = Math.random() * height
    var x = Math.random() * width


    picture.style.top = y + "px"
    picture.style.left = x + "px"

    console.log(width, height);
}

