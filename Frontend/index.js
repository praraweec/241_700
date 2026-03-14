const BASE_URL = "http://localhost:8000";

let mode = 'create'; // เพิ่มข้อมูล
let selectedId ='';

window.onload = async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    console.log('id', id);
    if (id) {
        mode = 'Edit';
        selectedId = id;

        //1.ดึงข้อมูล user เก่ามาแสดง
        try{
            const response = await axios.get(`${BASE_URL}/users/${id}`);
            console.log('response', response.data);
            const user = response.data;
            let firstnameDOM = document.querySelector('input[name=firstname]');
            let lastnameDOM = document.querySelector('input[name=lastname]');
            let ageDOM = document.querySelector('input[name=age]');
            let descriptionDOM = document.querySelector('textarea[name=description]');

            firstnameDOM.value = user.firstname;
            lastnameDOM.value = user.lastname;
            ageDOM.value = user.age;
            descriptionDOM.value = user.description;

            let genderDOMs = document.querySelectorAll('input[name=gender]');
            let interestDOMs = document.querySelectorAll('input[name=interests]');

            for(let i = 0; i < genderDOMs.length; i++) {
                if(genderDOMs[i].value == user.gender) {
                    genderDOMs[i].checked = true;
                }
            }

            for (let i = 0; i < interestDOMs.length; i++) {
                if(user.interests.includes(interestDOMs[i].value)) {
                    interestDOMs[i].checked = true;
                }
            }


        }catch(error){
            console.log('error', error);
        }

        //2.จะนำข้อมูล user ที่ได้มาแสดงใน form เพื่อให้ผู้ใช้แก้ไขข้อมูล

    }
}
const validateData = (userData) => {
    let errors=[]
    if (!userData.firstname) {
        errors.push('กรุณากรอกชื่อ');
    }
    if (!userData.lastname) {
        errors.push('กรุณากรอกนามสกุล');
    }
    if (!userData.age) {
        errors.push('กรุณากรอกอายุ');
    }
    if (!userData.gender) {
        errors.push('กรุณาเลือกเพศ');
    }
    if (!userData.interests) {
        errors.push('กรุณาเลือกความสนใจอย่างน้อย 1 ข้อ');
    }
    if (!userData.description) {
        errors.push('กรุณากรอกคำอธิบาย');
    }   
    return errors;
}

const submitData = async () => {
    let firstnameDOM = document.querySelector('input[name=firstname]');
    let lastnameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked')||{};
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked')||{};
    let descriptionDOM = document.querySelector('textarea[name=description]');
    
    let messageDOM = document.getElementById("message")
  try {
    let interest = '';
    for (let i = 0; i < interestDOMs.length; i++) {
        interest += interestDOMs[i].value;
        if (i != interestDOMs.length - 1) {
            interest += ', ';
        }
    }
    let userData = {
        firstname: firstnameDOM.value,
        lastname: lastnameDOM.value,
        age: ageDOM.value,
        gender: genderDOM.value,
        description: descriptionDOM.value,
        interests: interest
    }
   

    const errors = validateData(userData);
    if (errors.length > 0) {
        throw {
            message:'กรุณากรอกข้อมูลให้ครบถ้วน',
            errors: errors
        }
    }

    let message = 'บันทึกข้อมูลสำเร็จ';

    if (mode == 'CREATE'){
        const response = await axios.post(`${BASE_URL}/users`, userData);
        console.log('response', response).data;
    }else{
        const response = await axios.put(`${BASE_URL}/users/${selectedId}`, userData);
        message = 'แก้ไขข้อมูลสำเร็จ';
        console.log('response', response.data);
    }
    
    console.log('submitData', userData);
        const response = await axios.post(`${BASE_URL}/users`, userData);
        console.log('response', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';
    } catch (error) {
        console.log('Error message',error.message);
        console.log('Error details',error.errors);
        if (error.response) {
            console.log('error response :', error.response.data.message);
            error.message = error.response.data.message
            error.errors = error.response.data.errors
        
        }

        // messageDOM.innerText = 'เกิดข้อผิดพลาดในการบันทึกข้อมูล';
        // messageDOM.className = 'message danger';

        let htmlData ='<div>'
        htmlData += `<div>${error.message}</div>`
        htmlData += '<ul>'
        for (let i = 0 ; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '</ul>'

        htmlData += '<div>'

        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';

    
}
}
