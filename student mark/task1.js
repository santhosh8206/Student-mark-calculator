
const form=document.getElementById("user");
const tb=document.querySelector('.table tbody');

form.addEventListener("submit",function(e){
    e.preventDefault();

    const inputname=document.getElementById("name").value.trim();
    const roll=document.getElementById("roll").value.trim();
    const sub1=Number(document.getElementById("sub1").value);
    const sub2=Number(document.getElementById("sub2").value);
    const sub3=Number(document.getElementById("sub3").value);
    const sub4=Number(document.getElementById("sub4").value);
    const sub5=Number(document.getElementById("sub5").value);

    const total=sub1+sub2+sub3+sub4+sub5;

    // ✅ Grade calculation
    let grade;
    if(total >= 450) grade="A+";
    else if(total >= 400) grade="A";
    else if(total >= 350) grade="B+";
    else if(total >= 300) grade="B";
    else grade="C";

    // ✅ Pass/Fail
    function result(total){
        return total >= 185 ? "Pass" : "Fail";
    }

    const row=document.createElement("tr");
    row.innerHTML = `
          <td>${inputname}</td>
          <td>${roll}</td>
          <td>${sub1}</td>
          <td>${sub2}</td>
          <td>${sub3}</td>
          <td>${sub4}</td>
          <td>${sub5}</td>
          <td>${total}</td>
          <td>${grade}</td>
          <td>${result(total)}</td>
      `;
    tb.appendChild(row);

    form.reset();
});