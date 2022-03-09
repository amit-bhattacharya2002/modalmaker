
var users=[];
var userNames=[];
var userLocation = [];
var userImgSrcLarge = [];
var userImgSrcMed = [];
var userImgSrcThumb = [];
var userEmail =[];
var usersCity = [];
var userPhone=[];
var userAdd = [];
var userDob=[];


async function getUsers() {
    const data = await fetch('https://randomuser.me/api/?results=12').then((response)=> response.json());
    console.log(data.results);
    users = data.results;
    for(var i = 0; i<users.length; i++){
        userNames[i] = users[i].name.title+" "+users[i].name.first+" "+users[i].name.last;
        
        userLocation[i] = users[i].location.city+" "+users[i].location.state;

        userImgSrcLarge[i] = users[i].picture.large;
        userImgSrcMed[i] = users[i].picture.medium;
        userImgSrcThumb[i] = users[i].picture.thumbnail;

        userEmail[i] = users[i].email;

        usersCity[i] = users[i].location.city;
        userPhone[i] = users[i].phone;
        userAdd[i] = users[i].location.street.number+" "+users[i].location.street.number+", "+users[i].location.city+", "+users[i].nat+" "+users[i].location.postcode;
        userDob[i] = users[i].dob.date;


    }
    console.log(usersCity)
    for(var i = 0; i<users.length; i++){
        var mainCont = document.createElement('div');
        mainCont.classList.add('card');

        var imgClass = document.createElement('div');
        imgClass.classList.add("card-img-container");
        var imgElm = document.createElement('img');
        imgElm.classList.add('card-img');
        imgElm.src = userImgSrcThumb[i];
        imgClass.appendChild(imgElm);


        var infoCont = document.createElement('div');
        infoCont.classList.add('card-info-container');
        var name= document.createElement('h3');
        var email= document.createElement('p');
        var location= document.createElement('p');

        name.innerText = userNames[i];
        email.innerText = userEmail[i];
        location.innerText = userLocation[i];

        name.classList.add('card-name');
        name.classList.add('cap');
        email.classList.add('card-text');
        location.classList.add('card-text');
        location.classList.add('cap');

        infoCont.append(name, email, location);

        mainCont.append(imgClass, infoCont);

        $('#gallery').append(mainCont);


        

        
        
        mainCont.addEventListener('click', function(e) {
            
            var searchName = e.target.childNodes;
            // var name = document.querySelector(searchName);

            console.log(searchName)
            // var searchN = searchName[0].innerText;
            // var index = searchIndex(userNames, searchN)
            // console.log(index)

            // console.log(index);
            // console.log(userImgSrcLarge[i]);
            // console.log(userNames[i]);
            // console.log(userEmail[i]);
            // usersCity[i];
            // userPhone[i];
            // userAdd[i];
            // userDob[i];

            i = 0

            document.querySelector('.modal-container').classList.remove('disappear');
            const closeBtn = document.querySelector('#modal-close-btn');
            const userImg = document.querySelector('.modal-img');
            const nextBtn = document.querySelector('.modal-next');
            const prevBtn = document.querySelector('.modal-prev');
            const userName = document.querySelector('#name');

            const lines = document.getElementsByClassName('modal-text');

            console.log(lines.length);

            closeBtn.addEventListener('click', function(){
                document.querySelector('.modal-container').classList.add('disappear');
            })
            nextBtn.addEventListener('click', function(){
                i++;
                if(i<userNames.length){

                    userImg.src = userImgSrcLarge[i];
                    userName.innerText = userNames[i];
                    lines[0].innerText = userEmail[i];
                    lines[1].innerText = usersCity[i];
                    lines[2].innerText = userPhone[i];
                    lines[3].innerText = userAdd[i];
                    lines[4].innerText = userDob[i];
                }
            })
            prevBtn.addEventListener('click', function(){
                i--;
                if(i>=0){

                    userImg.src = userImgSrcLarge[i];
                    userName.innerText = userNames[i];
                    lines[0].innerText = userEmail[i];
                    lines[1].innerText = usersCity[i];
                    lines[2].innerText = userPhone[i];
                    lines[3].innerText = userAdd[i];
                    lines[4].innerText = userDob[i];
                }
            })
            userImg.src = userImgSrcLarge[i];
            userName.innerText = userNames[i];
            lines[0].innerText = userEmail[i];
            lines[1].innerText = usersCity[i];
            lines[2].innerText = userPhone[i];
            lines[3].innerText = userAdd[i];
            lines[4].innerText = userDob[i];

        
        })
        
    }

}

function searchIndex(arrayUser, email){
    var index =0;
    for(var i = 0; i<arrayUser.length;i++){
        console.log(arrayUser[i]+" ----- "+email)
        if(arrayUser[i].localeCompare(email) == 0){
            index = i;
            break;
        }

    }
    return index;

}

getUsers();

