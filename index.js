let allitems = [];

function add() {
    const thing = document.getElementById("item").value;
    if (thing === "") {
        alert('Please enter something to buy');
    } else {
        allitems.push(thing);
    }
    // console.log(allitems);
    // return;
    updateUI();
}
// now i can keep array
// next gonna do is show it on table in html page
// function check() { 
function updateUI() {
    const itemTest = document.getElementById('test');
    itemTest.innerHTML = "";
    let i = 0;
    while (i < allitems.length) {
        itemTest.innerHTML += `
        <td>${allitems[i]}</td>
        <th><button onclick="del('${allitems[i]}')">Delete</button>
        </th>`;
        i++;
    }
}

function del(itemName) {
    let i = 0;
    let temp = [];
    while (i < allitems.length) {
        const thing = allitems[i];
        if (thing !== itemName) {
            temp.push(thing);
        }
        i++;
    }
    allitems = temp;
    updateUI();
}