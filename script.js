function operation(stage, element, delay) {
    let count = 0;
    element.innerHTML = stage;
    let interval = setInterval(() => {
        if (count < 3) {
            element.innerHTML += '.';
            count++;
        } else {
            clearInterval(interval);
        }
    }, delay);
}

let x = document.querySelector(".container");
x.children[1].addEventListener('click', function () {
    let u = confirm("Are you sure you want to start?");
    if (u) {
        x.children[1].style.display = "none";
        x.children[0].style.display = "none";
        document.body.style.backgroundColor = 'black';
        x.children[2].style.color = 'yellow';
        let stages = ["Starting", "Connecting to the server", "Hacking the server", "Downloading the data"];
        let delay = 2000;
        
        stages.forEach((stage, index) => {
            setTimeout(() => {
                operation(stage, x.children[2].children[index], delay);
                console.log(index * delay * 3);
            }, index * delay * 3); // Adjust the timing for each stage
        });
        setTimeout(() => {
            x.children[2].children[4].innerHTML = "Data downloaded successfully!"; 
        }, (stages.length * delay * 3)+delay);
    }
});
