//โหลด user ทั้งหมดจาก api http://localhost:8000/users

//นำ  user z ที่ได้มาแสดงในตาราง
const BASE_URL = 'http://localhost:8000';

window.onload = async() => {
    const response = await axios.get(`${BASE_URL}/users`);
    console.log(response.data);

    const userDOM = document.getElementById('user');

    let htmlData = '<div>'
    htmlData += '</div>'

    userDOM.innerHTML = htmlData;

}