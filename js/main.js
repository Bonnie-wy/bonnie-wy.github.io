const option = {
    "Fun & Challenging" : "Founders and Coders strives to bring diversity to the programme, this brings together a group of people with different background, perspective and experience. Not only do we gain experiences from complex coding problems but we also get to learn from one another.",
    "The Impact" : "What excites me about technology is being part of an industry that is widely used and increasingly integrated within our lives. A recent example I could think of is how a situation such as Covid quickly changed the way we work and integrate technology so that we can work from home and stay connected. Technology solves problems that could bring real impact to the society and that is what excites me about working in this industry.",
    "The Culture" : "The tech community is built on a culture of support and empowerment. Since I have been on the coding journey, I have personally received a lot of support that I have not seen anywhere else. For example, I have benefited from free resources such as FreeCodeCamp, YouTube and Code First Girls; I have also received help by talented developers in the community that I do not personally know. This culture is very empowering and one that I would like to be part of so that I can uplift others around me.",
};

// Create option buttons in the DOM
const button = document.getElementById("button");
const speechBubbleText = document.getElementById("speechBubbleText"); 

Object.keys(option).forEach((option) => {
    const optionButtons = document.createElement("button");
    optionButtons.setAttribute("class","button-reason"); 
    optionButtons.textContent = option;
    button.appendChild(optionButtons);
});

// Function to display text
const displayText = (event) => {
    let selectedOption = event.target.textContent;
    speechBubbleText.innerHTML = option[selectedOption];
}

// Function to remove active, add active to the selected button
const setButtonActive = (event) => {   
    const buttons = document.getElementsByClassName("button-reason");
    for (let b of buttons) {
        b.classList.remove("active");
    }
    event.target.classList.add("active");
}

// Reset page on load
function resetPage() {
//    const textAtStart = document.getElementById("answer");
   speechBubbleText.innerHTML = "Click on the options above to find out more!";
}

window.onload = resetPage;

document.getElementById("button").addEventListener("click",displayText);
document.getElementById("button").addEventListener("click",setButtonActive);


// function for smooth scrolling
const smoothScrolling = () => {
document.querySelectorAll('a[href^="#"]')
    .forEach(element => {
        element.onclick = function(e) {
            e.preventDefault();
            let hash = this.getAttribute('href');
            let target = document.querySelector(hash);
            let offsetPosition = target.offsetTop;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        };
    });
}
smoothScrolling();
