function closeDiv(id) {
    document.getElementById(id).style.display = "none";

}
function openDiv(id) {
    document.getElementById(id).style.display = "block";

}

function openmenu(){
    document.getElementById('side-menu').style.right = "0px";

}

function closemenu(){
    document.getElementById('side-menu').style.right = "-350px";
}
const obj = {
    Student: [
        { stuId: '1', stuImg: './images/user.png', stuName: 'SHANZEY', stuAge: '13', stuSubject: 'SE', stuAddress: "Rawalpindi" },
        { stuId: '2', stuImg: './images/user.png', stuName: 'AHEMD', stuAge: '12', stuSubject: 'SE', stuAddress: "Rawalpindi" },
        { stuId: '3', stuImg: './images/user.png', stuName: 'SAAD', stuAge: '14', stuSubject: 'SE', stuAddress: "Rawalpindi" },
        { stuId: '4', stuImg: './images/user.png', stuName: 'HUZAIFA', stuAge: '14', stuSubject: 'SE', stuAddress: "Rawalpindi" },
        { stuId: '5', stuImg: './images/user.png', stuName: 'ISMAIL', stuAge: '13', stuSubject: 'SE', stuAddress: "Rawalpindi" },
        { stuId: '6', stuImg: './images/user.png', stuName: 'ZOHAN', stuAge: '12', stuSubject: 'SE', stuAddress: "Rawalpindi" },

    ]
}

//For Adding new Record
let i = 7;
const inputImg0 = document.getElementById('image0')
function getImg0(event) {
    const img0 = document.getElementById('img0')
    let url = event.target.files[0];

    img0.src = "./images/" + url.name;
}
inputImg0?.addEventListener('change', getImg0)

const submit = document.getElementById('myForm');
submit.addEventListener('submit', (event) => {
    event.preventDefault();

    const img = document.getElementById('img0').src;
    const name = document.getElementById('name').value
    const age = document.getElementById("age").value
    const subject = document.getElementById("subject").value
    const address = document.getElementById("address").value


    const id = { stuId: i, stuImg: img, stuName: name, stuAge: age, stuSubject: subject, stuAddress: address };
    if (age <= 12 && age >= 15) {
        alert("Fill age correct")
    } else {
        obj.Student.push(id);
        i++;
        submit.reset();
        alert("New Entry Added Successfully")
    }
    show();
});


//For Searching ALl Record
const search = document.getElementById('searchDiv');
search.addEventListener("submit", (event) => {
    event.preventDefault();
    try {
        const p = document.getElementById('search');
        const img = document.getElementById("img2");
        const identity = document.getElementById('identity2').value;
        for (let key in obj.Student) {
            if (obj.Student.hasOwnProperty(key)) {
                value = obj.Student[key].stuId;
                if (value == identity) {
                    console.log(obj.Student[key].stuImg);
                    img.setAttribute("src","");
                    img.src = obj.Student[key].stuImg;
                    p.innerHTML +="Student Id : "+ obj.Student[key].stuId + "<br>";
                    p.innerHTML +="Student Name : "+ obj.Student[key].stuName + "<br>";
                    p.innerHTML += "Student Age : " +obj.Student[key].stuAge + "<br>";
                    p.innerHTML += "Major Subject : " + obj.Student[key].stuSubject + "<br>";
                    p.innerHTML += "Address : " + obj.Student[key].stuAddress + "<br>";
                    p.innerHTML += "<br>";
                    console.log(obj);
                    
                }
            }
        }

    } catch (error) {
        alert(error)
    }
});

//For showing Alll Record
function show() {

    const root = document.getElementById('root');
    root.innerHTML = '';
    obj.Student.forEach(stu => {

        const dataDiv = document.createElement('div');
        const dataImg = document.createElement('img');

        dataImg.classList.add("w-3/4", "h-3/4");


        dataDiv.classList.add("my-6", "font-bold", "mx-auto", "grid", "place-items-center", "border-2", "border-solid", "border-green-200", "p-4", "rounded-md");
        const data = document.createElement('p');
        data.classList.add("font-bold", "text-lg");

        root.appendChild(dataDiv);
        dataDiv.appendChild(dataImg);
        dataDiv.appendChild(data);

        dataImg.src = stu.stuImg;
        data.innerHTML += "Student Id : " + +stu.stuId + "<br>";
        data.innerHTML += "Student Name : " + stu.stuName + "<br>";
        data.innerHTML += "Student Age  : " + stu.stuAge + "<br>";
        data.innerHTML += "Major Subject : " + stu.stuSubject + "<br>";
        data.innerHTML += "Address : " + stu.stuAddress + "<br>";
        data.innerHTML += "<br>";

    });

    console.log(obj);
}


//For Updating Record
const inputImg1 = document.getElementById('image1')

function getImg1(event) {
    const img1 = document.getElementById('img1')
    let url = event.target.files[0];

    console.log(url.name)

    img1.src = "./images/" + url.name;
}

inputImg1?.addEventListener('change', getImg1)

const updateDiv = document.getElementById('updateDiv');
updateDiv.addEventListener('submit', (event) => {
    event.preventDefault();
    const identity = document.getElementById('identity1').value;
    const img = document.getElementById('img1').src;
    const name = document.getElementById('name1').value
    const age = document.getElementById("age1").value
    const subject = document.getElementById("subject1").value
    const address = document.getElementById("address1").value

    const Array = { stuId: identity, stuImg: img, stuName: name, stuAge: age, stuSubject: subject, stuAddress: address }
    for (let key in obj.Student) {
        if (obj.Student.hasOwnProperty(key)) {
            value = obj.Student[key].stuId;
            if (value == identity) {
                obj.Student[key] = Array;
                alert("Record Update for Student ID" + identity)
                show();
            }
        }
    }

})


//For Deleting Records
 const deleteRecord = document.getElementById('deleteDiv');
 deleteRecord.addEventListener('submit',(event)=>{
    try {
        event.preventDefault();
        const identity = document.getElementById('identity3').value;

        for (let key in obj.Student) {
            if (obj.Student.hasOwnProperty(key)) {
                value = obj.Student[key].stuId;
                if (value == identity) {
                    alert("Record Deleted Successfully for Student ID "+ identity)
                    show()
                    
                }
            }
        }
    } catch (error) {
        alert(error)
    }
 })




