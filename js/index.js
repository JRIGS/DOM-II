// Your code goes here
// let navHoverEffect = document.querySelectorAll('.nav-link')
// navHoverEffect.addEventListener("mouseenter", event => {
//     event.target.style.color = "red";

//     setTimeout(event => {
//         event.target.style.color = "";
//     }, 500)
// }, false)


// 1.)Mouse Over https://developer.mozilla.org/en-US/docs/Web/API/Element/mouseover_event
let navHoverEffect = document.querySelectorAll('.nav-link')
navHoverEffect.forEach(element => {
    element.addEventListener("mouseover", function(event){
        event.target.style.color = "red";         
    })

    element.addEventListener("mouseout", function(event){
    event.target.style.color = "black"; })

    console.log(element);
});

// 2.)Click https://developer.mozilla.org/en-US/docs/Web/API/Element/click_event

let grabImgContainer = document.querySelectorAll('.img-content')
    // console.log(grabImgContainer[0].children[0]);
 grabImgContainer[0].children[0].addEventListener('click', event =>{
    //  console.log(grabImgContainer[0].children[0].src);
    if(grabImgContainer[0].children[0].src === "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2020/02/322868_1100-1100x628.jpg"){
        grabImgContainer[0].children[0].src = "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    }
    else{
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


// 3.)Double Click https://developer.mozilla.org/en-US/docs/Web/API/Element/dblclick_event

let expandImg = grabImgContainer[1].children[0]

expandImg.addEventListener('dblclick', function(event){
    expandImg.classList.toggle('large');
})


