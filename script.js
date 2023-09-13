 
//  let searchBar =   document.querySelector('#in')


// searchBar.addEventListener( "click" , () => {

//     let searchValue = searchBar.value;
//     console.log("heklo")


//     let l1 = document.querySelector('#list1')
//     let l1num = document.querySelector('#list1-num')
//     let l1name = document.querySelector('#list1-name')

//     // console.log(l1num.value)

//     if( !l1num.innerHTML.includes(searchValue) &&  !l1name.innerHTML.includes(searchValue) && searchValue!=""){
//         l1.style.margin = "0"
//         l1.style.fontSize = "0"
//         l1.style.height = "0"
//     }
//     else{
//         l1.style.display = "flex"
//     }



// } )


let searchButton = document.getElementById('search-btn');


// let b = document.getElementById('list2-num');
// let c = document.getElementById('list3-num');
// let d = document.getElementById('list4-num');
// let e = document.getElementById('list5-num');


searchButton.addEventListener('click' , myFunction);
// searchButton.addEventListener('dblclick' , myHero);


function myFunction(){
    

    var userInput = document.querySelector('.card-text-2').value;

    const redirection = {
        "12267" : "Page1.html",
        "12248" : "Page2.html",
        "12245" : "Page3.html",
        "12288" : "Page4.html",
        "12145" : "Page5.html"
    };

    if(redirection.hasOwnProperty(userInput)){
        const redirectUrl = redirection[userInput];
        window.location.href = redirectUrl;
    }
    else{
        alert("No matching");
    }

    // if (userInput.trim === "12267"){
    //     window.location.href = "locate.html";
    // }
    // else{
    //     console.log("hello")
    // }


    // // Construct the URL for the target page, you can replace 'target_page.html' with your actual target page URL
    // var targetURL = 'locate.html';

    // // Navigate to the target page
    // window.location.href = targetURL;

}


// function myHero(){
    

//     var userInput = document.querySelector('.card-text-2').value;

//     var targetURL = 'locator.html';
//     window.location.href = targetURL;

// }

