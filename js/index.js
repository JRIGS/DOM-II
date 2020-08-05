// Your code goes here
// let navHoverEffect = document.querySelectorAll('.nav-link')
// navHoverEffect.addEventListener("mouseenter", event => {
//     event.target.style.color = "red";

//     setTimeout(event => {
//         event.target.style.color = "";
//     }, 500)
// }, false)


// 1-2.)Mouse Over https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
let navHoverEffect = document.querySelectorAll('.nav-link')
navHoverEffect.forEach(element => {
    element.addEventListener("mouseover", function (event) {
        event.target.style.color = "red";
    })

    element.addEventListener("mouseout", function (event) {
        event.target.style.color = "black";
    })

    console.log(element);
});

// 3.)Click https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event--------

let grabImgContainer = document.querySelectorAll('.img-content')
// console.log(grabImgContainer[0].children[0]);
grabImgContainer[0].children[0].addEventListener('click', event => {
    //  console.log(grabImgContainer[0].children[0].src);
    if (grabImgContainer[0].children[0].src === "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg") {
        grabImgContainer[0].children[0].src = "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    } else {
        grabImgContainer[0].children[0].src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
    }
})



//  if(grabImgContainer[0].children[0].src === "img/adventure.jpg"){
//     grabImgContainer[0].children[0].src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
//  }
//  else if(grabImgContainer[0].children[0].src === "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"){
//     grabImgContainer[0].children[0].src = "img/adventure.jpg"
//  }
// event = console.log('clicked')
//     if( grabImgContainer[0].children[0].src === "img/adventure.jpg"){
//         grabImgContainer[0].children[0].src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
//     }else if(grabImgContainer[0].children[0].src === "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"){
//         grabImgContainer[0].children[0].src = "img/adventure.jpg"
//     }

//     event.target.src = "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"
//         console.log(event);


// 4.)Double Click https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

let expandImg = grabImgContainer[1].children[0]

expandImg.addEventListener('dblclick', function (event) {
    expandImg.classList.toggle('large');
})

// 5-6.) ----------------------- 
let headingTitleHover = document.querySelector('.logo-heading').addEventListener("mouseover", function (event) {
    event.target.style.opacity = "0.5";

    headingTitleHover.addEventListener("mouseout", function (event) {
        event.target.style.color = "red";
    })
})

// 7.) 
document.addEventListener('keydown', event => {
    if (event.keyCode === 27) {
        console.log("You cannot escape");
    } else {
        console.log("Other keys wont work either")
    }
})

// 8.) 
window.onload = (event) => {
    console.log('page has loaded successfully');
  };

 // OR
//     window.addEventListener('load', (event) => {
//     console.log('page is fully loaded');
//   });

// 9.)
document.addEventListener("drag", function(event) {

}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = 0;
}, false);

// 10.)
let transition = document.querySelector('.transition');
let imgRotate = document.querySelector('.content-destination')

transition.addEventListener('transitionrun', function() {
  imgRotate.children[3] = 'transitionrun fired';
});

transition.addEventListener('transitionstart', function() {
    imgRotate.children[3] = 'transitionstart fired';
});

transition.addEventListener('transitionend', function() {
    imgRotate.children[3] = 'transitionend fired';
});