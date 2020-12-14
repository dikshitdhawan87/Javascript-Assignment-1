(function selfIvoked() {
  var personalData = [
    {
      name: "Alpha",
      age: 24,
      dob: "29 Nov 1987",
      email: "aplha@gmail.com",
      company: "Alpha Paharma Ltd",
    },
    {
      name: "Beta",
      age: 26,
      dob: "26 Oct 1985",
      email: "beta@gmail.com",
      company: "Beta Electrnoics Ltd",
    },
    {
      name: "Charlie",
      age: 22,
      dob: "12 Sept 1986",
      email: "charlie@gmail.com",
      company: "Charlie Infosystem Ltd",
    },
    {
      name: "Delta",
      age: 28,
      dob: "28 Aug 1991",
      email: "delta@gmail.com",
      company: "Delta Pendamics Ltd",
    },
    {
      name: "Echo",
      age: 27,
      dob: "27 Oct 1987",
      email: "echo@gmail.com",
      company: "Echo Agriculture Ltd",
    },
  ];

  var h1 = document.createElement("h1");
  h1.textContent = "My Dynamic Table";
  document.body.appendChild(h1);

  var myDynamicTable = document.createElement("table");
  myDynamicTable.setAttribute("id", "myDynamicTable");
  document.body.appendChild(myDynamicTable);

  var headerRow = document.createElement("tr");
  myDynamicTable.appendChild(headerRow);
  var thName = document.createElement("th");
  var thNameLabel = document.createTextNode("Name");
  thName.appendChild(thNameLabel);
  headerRow.appendChild(thName);

  var thAge = document.createElement("th");
  var thAgeLabel = document.createTextNode("Age");
  thAge.appendChild(thAgeLabel);
  headerRow.appendChild(thAge);

  var thDob = document.createElement("th");
  var thDobLabel = document.createTextNode("DOB");
  thDob.appendChild(thDobLabel);
  headerRow.appendChild(thDob);

  var thEmail = document.createElement("th");
  var thEmailLabel = document.createTextNode("EMail");
  thEmail.appendChild(thEmailLabel);
  headerRow.appendChild(thEmail);

  var thCompany = document.createElement("th");
  var thCompanyLabel = document.createTextNode("Company");
  thCompany.appendChild(thCompanyLabel);
  headerRow.appendChild(thCompany);

  for (var index = 0; index < personalData.length; index++) {
    let tr = document.createElement("tr");

    let myDynamicTable = document.getElementById("myDynamicTable");
    myDynamicTable.appendChild(tr);

    let tdName = document.createElement("td");
    let textNameValue = document.createTextNode(personalData[index].name);
    tdName.appendChild(textNameValue);
    tr.appendChild(tdName);

    let tdAge = document.createElement("td");
    let textAgeValue = document.createTextNode(personalData[index].age);
    tdAge.appendChild(textAgeValue);
    tr.appendChild(tdAge);

    let tdDob = document.createElement("td");
    let textDobValue = document.createTextNode(personalData[index].dob);
    tdDob.appendChild(textDobValue);
    tr.appendChild(tdDob);

    let tdEmail = document.createElement("td");
    let textEmailValue = document.createTextNode(personalData[index].email);
    tdEmail.appendChild(textEmailValue);
    tr.appendChild(tdEmail);

    let tdCompany = document.createElement("td");
    let textCompanyValue = document.createTextNode(personalData[index].company);
    tdCompany.appendChild(textCompanyValue);
    tr.appendChild(tdCompany);
  }

  var styleSheet = document.createElement("style");
  styleSheet.innerHTML =
    "table, th, td {border: 1px solid black; border-collapse:collapse}";
  styleSheet.innerHTML += "th {background-color: lightgray}";
  document.body.appendChild(styleSheet);
})();
