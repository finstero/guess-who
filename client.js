console.log('Here are all the available people:', people);

$(readyNow);

function readyNow(){
    // console.log('hello jQ');
    for (let i=0; i<people.length; i++){
        let toAppend = `
            <div class="imgDiv">
                <img data-githubname="${people[i].githubUsername}" src="https://github.com/${people[i].githubUsername}.png?size=250" alt="Profile image of Chris">
            </div>
            `;
        $('#appendPics').append(toAppend);
        
        // $(toAppend).data('person', people[i]); //this is doing nothing! why doesn't this work??
        // console.log('hopefully person object', $(toAppend).data('person', person));
    }
    console.log('grabbing githubname data from image', $('img').data()); //only grabs first images data and I don't know why

    $('#randomName').append(randomName());
    $('#appendPics').on('click', '.imgDiv', handlePicClick);

}

// function randomNumber(min, max){
//     return Math.floor(Math.random() * (1 + max - min) + min);
// }

function randomName(){
    $('#randomName').empty();
    let randomIndex = Math.floor(Math.random() * (1 + people.length-1));
    console.log('length', people.length);
    let randomName = people[randomIndex].name;
    let randomUsername = people[randomIndex].githubUsername;
    let toAppend = $(`
        <span class="name" data-gitname="${randomUsername}">${randomName}</span>
    `)
    // console.log('name ', randomName, ' username', randomUsername);
    return toAppend;
}

function handlePicClick(){
    // console.log('clicked pic!');
    // console.log('logging this', $(this));
    if ($(this).find('img').data('githubname') == $('#randomName').children().data('gitname')){
        // console.log('matched!');
        $('#response').empty();  
        $('#response').append(`
            <span>You are correct!</span>
        `)
        $('#randomName').append(randomName());  
    }
    else{
        // console.log('not correct');
        // console.log('github name of random generated', $('#randomName').children().data('gitname'));
        // console.log('github name of clicked', $(this).find('img').data());
        $('#response').empty();
        $('#response').append(`
        <span>Oops! You are not correct. Please try again!</span>
    `)

    }
}