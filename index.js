$(document).ready(function(){

  document.getElementById("displayContent").style.display = "none";
 
  function myFunction() {
      var para = document.createElement("P");
      var t = document.createTextNode("This is a paragraph.");
      para.appendChild(t);
      document.getElementById("myDIV").appendChild(para);
    }
     
  $('#submitConsultation').click(function(event){
      event.stopPropagation()
  console.log('hello')
  document.getElementById("laserMedLogoMain").style.display = "none";

  function setAttributes(el, options) {
    Object.keys(options).forEach(function(attr) {
      el.setAttribute(attr, options[attr]);
    })
    options = [];
}

  function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];
  
    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
  
    // creating all cells
    for (var i = 0; i < items.length; i++) {
      // creates a table row
      var row = document.createElement("tr");
  
      for (var j = 0; j < 2; j++) {
        // Create a <td> element and a text node, make the text
        // node the contents of the <td>, and put the <td> at
        // the end of the table row
        var cell = document.createElement("td");
        var cellText = document.createTextNode("cell in row "+i+", column "+j);
        cell.appendChild(cellText);
        row.appendChild(cell);
      }
  
      // add the row to the end of the table body
      tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    tbl.setAttribute("border", "2");
  }
  
  items = [];
  row2 = [];
  row3 = [];
  row4 = [];
  row5 = [];
  row6 = [];
  row7 = [];
  row8 = [];
  row9 = [];
  row10 = [];
  cost = [];
  // let table = document.getElementById('#consultationTable')
  // let row = table.insertRow();
  
   // make a newAccount obj
   const newConsultation = {
      "patientName": $('#patientName').val().trim(),
      // "consultaionDate": $('#consultationDate').val().trim(),
      "service": $('#selectService :selected').text(),
      "howMany": $('#howMany :selected').text(),
      "treatmentAmount": $('#selectTreatment :selected').text(),
      "treatmentSchedule": $('#treatmentSchedule :selected').text(),
      "bodyArea": $('#bodyArea :selected').text(),
      "estimatedCost": $('#serviceCost :selected').text(),

      "service2": $('#selectService2 :selected').text(),
      "howMany2": $('#howMany2 :selected').text(),
      "treatmentAmount2": $('#selectTreatment2 :selected').text(),
      "treatmentSchedule2": $('#treatmentSchedule2 :selected').text(),
      "bodyArea2": $('#bodyArea2 :selected').text(),
      "estimatedCost2": $('#serviceCost2 :selected').text(),

      "service3": $('#selectService3 :selected').text(),
      "howMany3": $('#howMany3 :selected').text(),
      "treatmentAmount3": $('#selectTreatment3 :selected').text(),
      "treatmentSchedule3": $('#treatmentSchedule3 :selected').text(),
      "bodyArea3": $('#bodyArea3 :selected').text(),
      "estimatedCost3": $('#serviceCost3 :selected').text(),

      "service4": $('#selectService4 :selected').text(),
      "howMany4": $('#howMany4 :selected').text(),
      "treatmentAmount4": $('#selectTreatment4 :selected').text(),
      "treatmentSchedule4": $('#treatmentSchedule4 :selected').text(),
      "bodyArea4": $('#bodyArea4 :selected').text(),
      "estimatedCost4": $('#serviceCost4 :selected').text(),

      "service5": $('#selectService5 :selected').text(),
      "howMany5": $('#howMany5 :selected').text(),
      "treatmentAmount5": $('#selectTreatment5 :selected').text(),
      "treatmentSchedule5": $('#treatmentSchedule5 :selected').text(),
      "bodyArea5": $('#bodyArea5 :selected').text(),
      "estimatedCost5": $('#serviceCost5 :selected').text(),

      "service6": $('#selectService6 :selected').text(),
      "howMany6": $('#howMany6 :selected').text(),
      "treatmentAmount6": $('#selectTreatment6 :selected').text(),
      "treatmentSchedule6": $('#treatmentSchedule6 :selected').text(),
      "bodyArea6": $('#bodyArea6 :selected').text(),
      "estimatedCost6": $('#serviceCost6 :selected').text(),

      "service7": $('#selectService7 :selected').text(),
      "howMany7": $('#howMany7 :selected').text(),
      "treatmentAmount7": $('#selectTreatment7 :selected').text(),
      "treatmentSchedule7": $('#treatmentSchedule7 :selected').text(),
      "bodyArea7": $('#bodyArea7 :selected').text(),
      "estimatedCost7": $('#serviceCost7 :selected').text(),

      "service8": $('#selectService8 :selected').text(),
      "treatmentAmount8": $('#selectTreatment8 :selected').text(),
      "treatmentSchedule8": $('#treatmentSchedule8 :selected').text(),
      "bodyArea8": $('#bodyArea8 :selected').text(),
      "estimatedCost8": $('#serviceCost8 :selected').text(),

      "service9": $('#selectService9 :selected').text(),
      "treatmentAmount9": $('#selectTreatment9 :selected').text(),
      "treatmentSchedule9": $('#treatmentSchedule9 :selected').text(),
      "bodyArea9": $('#bodyArea9 :selected').text(),
      "estimatedCost9": $('#serviceCost9 :selected').text(),

      "service10": $('#selectService10 :selected').text(),
      "treatmentAmount10": $('#selectTreatment10 :selected').text(),
      "treatmentSchedule10": $('#treatmentSchedule10 :selected').text(),
      "bodyArea10": $('#bodyArea10 :selected').text(),
      "estimatedCost10": $('#serviceCost10 :selected').text(),
     
    };

    
    patientName = newConsultation.patientName;
    consultaionDate = newConsultation.consultaionDate;
    service = newConsultation.service;
    howMany = newConsultation.howMany;
    treatmentAmount = newConsultation.treatmentAmount;
    treatmentSchedule = newConsultation.treatmentSchedule;
    bodyArea = newConsultation.bodyArea;
    estimatedCost = newConsultation.estimatedCost;
    
    switch (service) {
      
      case 'Botox':
        console.log('botox selected as service')
        var str = "";
        var estimatedCost = str.replace("", 14);
        document.querySelector('#showCost').innerHTML = 14;
        cost.push(14)
        break;
        case 'Dysport':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 14);
        document.querySelector('#showCost').innerHTML = 14;
        cost.push(14)
        break;
        case 'Jeuveau':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",14);
        document.querySelector('#showCost').innerHTML = 14;
        cost.push(14)
        break;
        case 'Botox-Hyperhydrosis':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 15);
        document.querySelector('#showCost').innerHTML = 15;
        cost.push(15)
        break;
        case 'Botox Inj Hyperhydrosis':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 15);
        document.querySelector('#showCost').innerHTML = 15;
        cost.push(15)
        break;
        case 'Belotero':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 595);
        document.querySelector('#showCost').innerHTML = 595;
        cost.push(595)
        break;
        case 'Radiesse':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 795);
        document.querySelector('#showCost').innerHTML = 795;
        cost.push(795)
        break;
        case 'Restylane Refyne':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 700);
        document.querySelector('#showCost').innerHTML = 700;
        cost.push(700)
        break;
        case 'Restylane Defyne':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 700);
        document.querySelector('#showCost').innerHTML = 700;
        cost.push(700)
        break;
        case 'Restylane-1 ml':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 645);
        document.querySelector('#showCost').innerHTML = 645;
        cost.push(645)
        break;
        case 'Sculptra':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 125);
        document.querySelector('#showCost').innerHTML = 125;
        cost.push(125)
        break;
        case 'Sculptra Vial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 875);
        document.querySelector('#showCost').innerHTML = 875;
        cost.push(875)
        break;
        case 'PRP 1st tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 1500);
        document.querySelector('#showCost').innerHTML = 1500;
        cost.push(1500)
        break;
        case 'PRP 2nd tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 1000);
        document.querySelector('#showCost').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'PRP 3rd tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 500);
        document.querySelector('#showCost').innerHTML = 500;
        cost.push(500)
        break;
        case 'Velashape 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 250);
        document.querySelector('#showCost').innerHTML = 250;
        cost.push(250)
        break;
        case 'BodyFX Single Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("", 750);
        document.querySelector('#showCost').innerHTML = 750;
        cost.push(750)
        break;
        case 'Varicose Vein EVLT':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 4500);
        document.querySelector('#showCost').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Sclerotherapy-1tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",325);
        document.querySelector('#showCost').innerHTML = 325;
        cost.push(325)
        break;
        case 'Dplx Scan Extrem':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 422);
        document.querySelector('#showCost').innerHTML = 422;
        cost.push(422)
        break;
        case 'Dplx Scan of Unilateral Extrem':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",287);
        document.querySelector('#showCost').innerHTML = 287;
        cost.push(287)
        break;
        case 'Doppler':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 217);
        document.querySelector('#showCost').innerHTML = 217;
        cost.push(217)
        break;
        case 'Hose for Sclerotherapy':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",50);
        document.querySelector('#showCost').innerHTML = 50;
        cost.push(50)
        break;
        case 'Hose for Vein Surgery':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 95);
        document.querySelector('#showCost').innerHTML = 95;
        cost.push(95)
        break;
        case 'Face Spider Veins':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",125);
        document.querySelector('#showCost').innerHTML = 125;
        cost.push(125)
        break;
        case 'Foto Facial 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 350);
        document.querySelector('#showCost').innerHTML = 350;
        cost.push(350)
        break;
        case 'Fractionated 45CO2 Chest Add-On':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",750);
        document.querySelector('#showCost').innerHTML = 750;
        cost.push(750)
        break;
        case 'Fractionated CO2 with AQ Serum':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 2150);
        document.querySelector('#showCost').innerHTML = 2150;
        cost.push(2150)
        break;
        case 'RF Needling - Full Face':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",1000);
        document.querySelector('#showCost').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Tattoo Laser':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 150);
        document.querySelector('#showCost').innerHTML = 150;
        cost.push(150)
        break;
        case 'Ulthera - ADD-ONS(Neck/Decolletage)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",1000);
        document.querySelector('#showCost').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Ulthera - Decolletage':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 1250);
        document.querySelector('#showCost').innerHTML = 1250;
        cost.push(1250)
        break;
        case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",1500);
        document.querySelector('#showCost').innerHTML = 1500;
        cost.push(1500)
        break;
        case 'Ulthera - Full Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 4500);
        document.querySelector('#showCost').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Ulthera - Full Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",2750);
        document.querySelector('#showCost').innerHTML = 2750;
        cost.push(2750)
        break;
        case 'Ulthera - Lower Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 3250);
        document.querySelector('#showCost').innerHTML = 3250;
        cost.push(3250)
        break;
        case 'Vivace Series of 3 Treatments':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",1950);
        document.querySelector('#showCost').innerHTML = 1950;
        cost.push(1950)
        break;
        case 'Vivace Treatment':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 800);
        document.querySelector('#showCost').innerHTML = 800;
        cost.push(800)
        break;
        case '1st Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",750);
        document.querySelector('#showCost').innerHTML = 750;
        cost.push(750)
        break;
        case '2nd Tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 400);
        document.querySelector('#showCost').innerHTML = 400;
        cost.push(400)
        break;
        case '3rd Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",250);
        document.querySelector('#showCost').innerHTML = 250;
        cost.push(250)
        break;
        case 'PCA Chemiacal Package of 3':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 400);
        document.querySelector('#showCost').innerHTML = 400;
        cost.push(400)
        break;
        case 'Acne Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",110);
        document.querySelector('#showCost').innerHTML = 110;
        cost.push(110)
        break;
        case 'Deep Cleansing Facial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 110);
        document.querySelector('#showCost').innerHTML = 110;
        cost.push(110)
        break;
        case 'Anti-Aging Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",110);
        document.querySelector('#showCost').innerHTML = 110;
        cost.push(110)
        break;
        case 'Brow Wax':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 25);
        document.querySelector('#showCost').innerHTML = 25;
        cost.push(25)
        break;
        case 'Brow Tint':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",25);
        document.querySelector('#showCost').innerHTML = 25;
        cost.push(25)
        break;
        case 'Lash Tint':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 25);
        document.querySelector('#showCost').innerHTML = 25;
        cost.push(25)
        break;
        case 'HydrFacial w Growth Factor':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",250);
        document.querySelector('#showCost').innerHTML = 250;
        cost.push(250)
        break;
        case 'Dermaplaning':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 130);
        document.querySelector('#showCost').innerHTML = 130;
        cost.push(130)
        break;
        case 'Injection Fee':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",350);
        document.querySelector('#showCost').innerHTML = 350;
        cost.push(350)
        break;
        case 'Abdomen-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 300);
        document.querySelector('#showCost').innerHTML = 300;
        cost.push(300)
        break;
        case 'Abdomen-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",160);
        document.querySelector('#showCost').innerHTML = 160;
        cost.push(160)
        break;
        case 'Arms-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 350);
        document.querySelector('#showCost').innerHTML = 350;
        cost.push(350)
        break;
        case 'Arm-lower':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",200);
        document.querySelector('#showCost').innerHTML = 200;
        cost.push(200)
        break;
        case 'Arms-upper':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 200);
        document.querySelector('#showCost').innerHTML = 200;
        cost.push(200)
        break;
        case 'Back-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",400);
        document.querySelector('#showCost').innerHTML = 400;
        cost.push(400)
        break;
        case 'Back-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 280);
        document.querySelector('#showCost').innerHTML = 280;
        cost.push(280)
        break;
        case 'Bikini-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",320);
        document.querySelector('#showCost').innerHTML = 320;
        cost.push(320)
        break;
        case 'Bikini-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 200);
        document.querySelector('#showCost').innerHTML = 200;
        cost.push(200)
        break;
        case 'Buttocks':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",160);
        document.querySelector('#showCost').innerHTML = 160;
        cost.push(160)
        break;
        case 'Chest':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 280);
        document.querySelector('#showCost').innerHTML = 280;
        cost.push(280)
        break;
        case 'Chin':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",100);
        document.querySelector('#showCost').innerHTML = 100;
        cost.push(100)
        break;
        case 'Ears':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 120);
        document.querySelector('#showCost').innerHTML = 120;
        cost.push(120)
        break;
        case 'Eyebrows':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",100);
        document.querySelector('#showCost').innerHTML = 100;
        cost.push(100)
        break;
        case 'Face-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 280);
        document.querySelector('#showCost').innerHTML = 280;
        cost.push(280)
        break;
        case 'Face-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",200);
        document.querySelector('#showCost').innerHTML = 200;
        cost.push(200)
        break;
        case 'Hair line':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 160);
        document.querySelector('#showCost').innerHTML = 160;
        cost.push(160)
        break;
        case 'Legs-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",400);
        document.querySelector('#showCost').innerHTML = 400;
        cost.push(400)
        break;
        case 'Legs-lower':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 280);
        document.querySelector('#showCost').innerHTML = 280;
        cost.push(280)
        break;
        case 'Legs-upper':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",280);
        document.querySelector('#showCost').innerHTML = 280;
        cost.push(280)
        break;
        case 'Lip':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 100);
        document.querySelector('#showCost').innerHTML = 100;
        cost.push(100)
        break;
        case 'Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",150);
        document.querySelector('#showCost').innerHTML = 150;
        cost.push(150)
        break;
        case 'Nipples':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost = str.replace("", 120);
        document.querySelector('#showCost').innerHTML = 120;
        cost.push(120)
        break;
        case 'Underarms':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost = str.replace("",100);
        document.querySelector('#showCost').innerHTML = 100;
        cost.push(100)
        break;
         
    
      default:
        break;
    }

    

    function addSigns(num){
    return "$"+num+".00"
    }
    console.log('cost row 1---->',estimatedCost)
    console.log('cost row addsigns()---->',addSigns(estimatedCost))
    document.querySelector('#showCost').innerHTML = addSigns(estimatedCost*howMany)

   

    items.push(patientName);
    items.push(consultaionDate);
    items.push(service);
    items.push(treatmentAmount);
    items.push(treatmentSchedule);
    items.push(bodyArea);
    items.push(addSigns(estimatedCost));
//----------------------------------------------------service2--------------------------------------------   
    service2 = newConsultation.service2;
    howMany2 = newConsultation.howMany2;
    treatmentAmount2= newConsultation.treatmentAmount2;
    treatmentSchedule2 = newConsultation.treatmentSchedule2;
    bodyArea2 = newConsultation.bodyArea2;
    estimatedCost2 = newConsultation.estimatedCost2;

    switch (service2) {
      
      case 'Botox':
        console.log('botox selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 14);
        document.querySelector('#showCost2').innerHTML = 14;
        cost.push(14)
        break;
        case 'Dysport':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 14);
        document.querySelector('#showCost2').innerHTML = 14;
        cost.push(14)
        break;
        case 'Jeuveau':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",14);
        document.querySelector('#showCost2').innerHTML = 14;
        cost.push(14)
        break;
        case 'Botox-Hyperhydrosis':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 15);
        document.querySelector('#showCost2').innerHTML = 15;
        cost.push(15)
        break;
        case 'Botox Inj Hyperhydrosis':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 15);
        document.querySelector('#showCost2').innerHTML = 15;
        cost.push(15)
        break;
        case 'Belotero':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 595);
        document.querySelector('#showCost2').innerHTML = 595;
        cost.push(595)
        break;
        case 'Radiesse':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 795);
        document.querySelector('#showCost2').innerHTML = 795;
        cost.push(795)
        break;
        case 'Restylane Refyne':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 700);
        document.querySelector('#showCost2').innerHTML = 700;
        cost.push(700)
        break;
        case 'Restylane Defyne':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 700);
        document.querySelector('#showCost2').innerHTML = 700;
        cost.push(700)
        break;
        case 'Restylane-1 ml':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 645);
        document.querySelector('#showCost2').innerHTML = 645;
        cost.push(645)
        break;
        case 'Sculptra':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 125);
        document.querySelector('#showCost2').innerHTML = 125;
        cost.push(125)
        break;
        case 'Sculptra Vial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 875);
        document.querySelector('#showCost2').innerHTML = 875;
        cost.push(875)
        break;
        case 'PRP 1st tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 1500);
        document.querySelector('#showCost2').innerHTML = 1500;
        cost.push(1500)
        break;
        case 'PRP 2nd tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 1000);
        document.querySelector('#showCost2').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'PRP 3rd tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2= str.replace("", 500);
        document.querySelector('#showCost2').innerHTML = 500;
        cost.push(500)
        break;
        case 'Velashape 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 250);
        document.querySelector('#showCost2').innerHTML = 250;
        cost.push(250)
        break;
        case 'BodyFX Single Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 750);
        document.querySelector('#showCost2').innerHTML = 750;
        cost.push(750)
        break;
        case 'Varicose Vein EVLT':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 4500);
        document.querySelector('#showCost2').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Sclerotherapy-1tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",325);
        document.querySelector('#showCost2').innerHTML = 325;
        cost.push(325)
        break;
        case 'Dplx Scan Extrem':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 422);
        document.querySelector('#showCost2').innerHTML = 422;
        cost.push(422)
        break;
        case 'Dplx Scan of Unilateral Extrem':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",287);
        document.querySelector('#showCost2').innerHTML = 287;
        cost.push(287)
        break;
        case 'Doppler':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 217);
        document.querySelector('#showCost2').innerHTML = 217;
        cost.push(217)
        break;
        case 'Hose for Sclerotherapy':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",50);
        document.querySelector('#showCost2').innerHTML = 50;
        cost.push(50)
        break;
        case 'Hose for Vein Surgery':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 95);
        document.querySelector('#showCost2').innerHTML = 95;
        cost.push(95)
        break;
        case 'Face Spider Veins':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",125);
        document.querySelector('#showCost2').innerHTML = 125;
        cost.push(125)
        break;
        case 'Foto Facial 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 350);
        document.querySelector('#showCost2').innerHTML = 350;
        cost.push(350)
        break;
        case 'Fractionated 45CO2 Chest Add-On':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",750);
        document.querySelector('#showCost2').innerHTML = 750;
        cost.push(750)
        break;
        case 'Fractionated CO2 with AQ Serum':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 2150);
        document.querySelector('#showCost2').innerHTML = 2150;
        cost.push(2150)
        break;
        case 'RF Needling - Full Face':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",1000);
        document.querySelector('#showCost2').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Tattoo Laser':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 150);
        document.querySelector('#showCost2').innerHTML = 150;
        cost.push(150)
        break;
        case 'Ulthera - ADD-ONS(Neck/Decolletage)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",1000);
        document.querySelector('#showCost2').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Ulthera - Decolletage':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 1250);
        document.querySelector('#showCost2').innerHTML = 1250;
        cost.push(1250)
        break;
        case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",1500);
        document.querySelector('#showCost2').innerHTML = 1500;
        cost.push(1500)
        break;
        case 'Ulthera - Full Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 4500);
        document.querySelector('#showCost2').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Ulthera - Full Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",2750);
        document.querySelector('#showCost2').innerHTML = 2750;
        cost.push(2750)
        break;
        case 'Ulthera - Lower Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 3250);
        document.querySelector('#showCost2').innerHTML = 3250;
        cost.push(3250)
        break;
        case 'Vivace Series of 3 Treatments':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",1950);
        document.querySelector('#showCost2').innerHTML = 1950;
        cost.push(1950)
        break;
        case 'Vivace Treatment':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 800);
        document.querySelector('#showCost2').innerHTML = 800;
        cost.push(800)
        break;
        case '1st Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",750);
        document.querySelector('#showCost2').innerHTML = 750;
        cost.push(750)
        break;
        case '2nd Tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 400);
        document.querySelector('#showCost2').innerHTML = 400;
        cost.push(400)
        break;
        case '3rd Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",250);
        document.querySelector('#showCost2').innerHTML = 250;
        cost.push(250)
        break;
        case 'PCA Chemiacal Package of 3':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 400);
        document.querySelector('#showCost2').innerHTML = 400;
        cost.push(400)
        break;
        case 'Acne Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",110);
        document.querySelector('#showCost2').innerHTML = 110;
        cost.push(110)
        break;
        case 'Deep Cleansing Facial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 110);
        document.querySelector('#showCost2').innerHTML = 110;
        cost.push(110)
        break;
        case 'Anti-Aging Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",110);
        document.querySelector('#showCost2').innerHTML = 110;
        cost.push(110)
        break;
        case 'Brow Wax':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 25);
        document.querySelector('#showCost2').innerHTML = 25;
        cost.push(25)
        break;
        case 'Brow Tint':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",25);
        document.querySelector('#showCost2').innerHTML = 25;
        cost.push(25)
        break;
        case 'Lash Tint':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 25);
        document.querySelector('#showCost2').innerHTML = 25;
        cost.push(25)
        break;
        case 'HydrFacial w Growth Factor':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",250);
        document.querySelector('#showCost2').innerHTML = 250;
        cost.push(250)
        break;
        case 'Dermaplaning':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 130);
        document.querySelector('#showCost2').innerHTML = 130;
        cost.push(130)
        break;
        case 'Injection Fee':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",350);
        document.querySelector('#showCost2').innerHTML = 350;
        cost.push(350)
        break;
        case 'Abdomen-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 300);
        document.querySelector('#showCost2').innerHTML = 300;
        cost.push(300)
        break;
        case 'Abdomen-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",160);
        document.querySelector('#showCost2').innerHTML = 160;
        cost.push(160)
        break;
        case 'Arms-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 350);
        document.querySelector('#showCost2').innerHTML = 350;
        cost.push(350)
        break;
        case 'Arm-lower':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",200);
        document.querySelector('#showCost2').innerHTML = 200;
        cost.push(200)
        break;
        case 'Arms-upper':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 200);
        document.querySelector('#showCost2').innerHTML = 200;
        cost.push(200)
        break;
        case 'Back-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",400);
        document.querySelector('#showCost2').innerHTML = 400;
        cost.push(400)
        break;
        case 'Back-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 280);
        document.querySelector('#showCost2').innerHTML = 280;
        cost.push(280)
        break;
        case 'Bikini-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",320);
        document.querySelector('#showCost2').innerHTML = 320;
        cost.push(320)
        break;
        case 'Bikini-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 200);
        document.querySelector('#showCost2').innerHTML = 200;
        cost.push(200)
        break;
        case 'Buttocks':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",160);
        document.querySelector('#showCost2').innerHTML = 160;
        cost.push(160)
        break;
        case 'Chest':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 280);
        document.querySelector('#showCost2').innerHTML = 280;
        cost.push(280)
        break;
        case 'Chin':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",100);
        document.querySelector('#showCost2').innerHTML = 100;
        cost.push(100)
        break;
        case 'Ears':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 120);
        document.querySelector('#showCost2').innerHTML = 120;
        cost.push(120)
        break;
        case 'Eyebrows':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",100);
        document.querySelector('#showCost2').innerHTML = 100;
        cost.push(100)
        break;
        case 'Face-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 280);
        document.querySelector('#showCost2').innerHTML = 280;
        cost.push(280)
        break;
        case 'Face-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",200);
        document.querySelector('#showCost2').innerHTML = 200;
        cost.push(200)
        break;
        case 'Hair line':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 160);
        document.querySelector('#showCost2').innerHTML = 160;
        cost.push(160)
        break;
        case 'Legs-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",400);
        document.querySelector('#showCost2').innerHTML = 400;
        cost.push(400)
        break;
        case 'Legs-lower':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 280);
        document.querySelector('#showCost2').innerHTML = 280;
        cost.push(280)
        break;
        case 'Legs-upper':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",280);
        document.querySelector('#showCost2').innerHTML = 280;
        cost.push(280)
        break;
        case 'Lip':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 100);
        document.querySelector('#showCost2').innerHTML = 100;
        cost.push(100)
        break;
        case 'Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",150);
        document.querySelector('#showCost2').innerHTML = 150;
        cost.push(150)
        break;
        case 'Nipples':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost2 = str.replace("", 120);
        document.querySelector('#showCost2').innerHTML = 120;
        cost.push(120)
        break;
        case 'Underarms':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost2 = str.replace("",100);
        document.querySelector('#showCost2').innerHTML = 100;
        cost.push(100)
        break;;
        
        
    
      default:
        break;
    }
    document.querySelector('#showCost2').innerHTML = addSigns(estimatedCost2*howMany2 ) 
   row2.push(service2);
   row2.push(treatmentAmount2);
   row2.push(treatmentSchedule2);
   row2.push(bodyArea2);
   row2.push(estimatedCost2);
//---------------------------------------------------------service3----------------------------------------
   service3 = newConsultation.service3;
   howMany3 = newConsultation.howMany3;
   treatmentAmount3= newConsultation.treatmentAmount3;
   treatmentSchedule3 = newConsultation.treatmentSchedule3;
   bodyArea3 = newConsultation.bodyArea3;
   estimatedCost3 = newConsultation.estimatedCost3;

   switch (service3) {
      
    case 'Botox':
      console.log('botox selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 14);
      document.querySelector('#showCost3').innerHTML = 14;
      cost.push(14)
      break;
      case 'Dysport':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 14);
      document.querySelector('#showCost3').innerHTML = 14;
      cost.push(14)
      break;
      case 'Jeuveau':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("",14);
      document.querySelector('#showCost3').innerHTML = 14;
      cost.push(14)
      break;
      case 'Botox-Hyperhydrosis':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 15);
      document.querySelector('#showCost3').innerHTML = 15;
      cost.push(15)
      break;
      case 'Botox Inj Hyperhydrosis':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 15);
      document.querySelector('#showCost3').innerHTML = 15;
      cost.push(15)
      break;
      case 'Belotero':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 595);
      document.querySelector('#showCost3').innerHTML = 595;
      cost.push(595)
      break;
      case 'Radiesse':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 795);
      document.querySelector('#showCost3').innerHTML = 795;
      cost.push(795)
      break;
      case 'Restylane Refyne':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 700);
      document.querySelector('#showCost3').innerHTML = 700;
      cost.push(700)
      break;
      case 'Restylane Defyne':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 700);
      document.querySelector('#showCost3').innerHTML = 700;
      cost.push(700)
      break;
      case 'Restylane-1 ml':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 645);
      document.querySelector('#showCost3').innerHTML = 645;
      cost.push(645)
      break;
      case 'Sculptra':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 125);
      document.querySelector('#showCost3').innerHTML = 125;
      cost.push(125)
      break;
      case 'Sculptra Vial':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 875);
      document.querySelector('#showCost3').innerHTML = 875;
      cost.push(875)
      break;
      case 'PRP 1st tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 1500);
      document.querySelector('#showCost3').innerHTML = 1500;
      cost.push(1500)
      break;
      case 'PRP 2nd tx':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 1000);
      document.querySelector('#showCost3').innerHTML = 1000;
      cost.push(1000)
      break;
      case 'PRP 3rd tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost3 = str.replace("", 500);
      document.querySelector('#showCost3').innerHTML = 500;
      cost.push(500)
      break;
      case 'Velashape 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 250);
        document.querySelector('#showCost3').innerHTML = 250;
        cost.push(250)
        break;
        case 'BodyFX Single Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 750);
        document.querySelector('#showCost3').innerHTML = 750;
        cost.push(750)
        break;
        case 'Varicose Vein EVLT':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 4500);
        document.querySelector('#showCost3').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Sclerotherapy-1tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",325);
        document.querySelector('#showCost3').innerHTML = 325;
        cost.push(325)
        break;
        case 'Dplx Scan Extrem':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 422);
        document.querySelector('#showCost3').innerHTML = 422;
        cost.push(422)
        break;
        case 'Dplx Scan of Unilateral Extrem':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",287);
        document.querySelector('#showCost3').innerHTML = 287;
        cost.push(287)
        break;
        case 'Doppler':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 217);
        document.querySelector('#showCost3').innerHTML = 217;
        cost.push(217)
        break;
        case 'Hose for Sclerotherapy':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",50);
        document.querySelector('#showCost3').innerHTML = 50;
        cost.push(50)
        break;
        case 'Hose for Vein Surgery':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 95);
        document.querySelector('#showCost3').innerHTML = 95;
        cost.push(95)
        break;
        case 'Face Spider Veins':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",125);
        document.querySelector('#showCost3').innerHTML = 125;
        cost.push(125)
        break;
        case 'Foto Facial 1tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 350);
        document.querySelector('#showCost3').innerHTML = 350;
        cost.push(350)
        break;
        case 'Fractionated 45CO2 Chest Add-On':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",750);
        document.querySelector('#showCost3').innerHTML = 750;
        cost.push(750)
        break;
        case 'Fractionated CO2 with AQ Serum':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 2150);
        document.querySelector('#showCost3').innerHTML = 2150;
        cost.push(2150)
        break;
        case 'RF Needling - Full Face':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",1000);
        document.querySelector('#showCost3').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Tattoo Laser':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 150);
        document.querySelector('#showCost3').innerHTML = 150;
        cost.push(150)
        break;
        case 'Ulthera - ADD-ONS(Neck/Decolletage)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",1000);
        document.querySelector('#showCost3').innerHTML = 1000;
        cost.push(1000)
        break;
        case 'Ulthera - Decolletage':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 1250);
        document.querySelector('#showCost3').innerHTML = 1250;
        cost.push(1250)
        break;
        case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",1500);
        document.querySelector('#showCost3').innerHTML = 1500;
        cost.push(1500)
        break;
        case 'Ulthera - Full Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 4500);
        document.querySelector('#showCost3').innerHTML = 4500;
        cost.push(4500)
        break;
        case 'Ulthera - Full Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",2750);
        document.querySelector('#showCost3').innerHTML = 2750;
        cost.push(2750)
        break;
        case 'Ulthera - Lower Face':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 3250);
        document.querySelector('#showCost3').innerHTML = 3250;
        cost.push(3250)
        break;
        case 'Vivace Series of 3 Treatments':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",1950);
        document.querySelector('#showCost3').innerHTML = 1950;
        cost.push(1950)
        break;
        case 'Vivace Treatment':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 800);
        document.querySelector('#showCost3').innerHTML = 800;
        cost.push(800)
        break;
        case '1st Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",750);
        document.querySelector('#showCost3').innerHTML = 750;
        cost.push(750)
        break;
        case '2nd Tx':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 400);
        document.querySelector('#showCost3').innerHTML = 400;
        cost.push(400)
        break;
        case '3rd Tx':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",250);
        document.querySelector('#showCost3').innerHTML = 250;
        cost.push(250)
        break;
        case 'PCA Chemiacal Package of 3':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 400);
        document.querySelector('#showCost3').innerHTML = 400;
        cost.push(400)
        break;
        case 'Acne Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",110);
        document.querySelector('#showCost3').innerHTML = 110;
        cost.push(110)
        break;
        case 'Deep Cleansing Facial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 110);
        document.querySelector('#showCost3').innerHTML = 110;
        cost.push(110)
        break;
        case 'Anti-Aging Facial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",110);
        document.querySelector('#showCost3').innerHTML = 110;
        cost.push(110)
        break;
        case 'Brow Wax':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 25);
        document.querySelector('#showCost3').innerHTML = 25;
        cost.push(25)
        break;
        case 'Brow Tint':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",25);
        document.querySelector('#showCost3').innerHTML = 25;
        cost.push(25)
        break;
        case 'Lash Tint':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 25);
        document.querySelector('#showCost3').innerHTML = 25;
        cost.push(25)
        break;
        case 'HydrFacial w Growth Factor':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",250);
        document.querySelector('#showCost3').innerHTML = 250;
        cost.push(250)
        break;
        case 'Dermaplaning':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 130);
        document.querySelector('#showCost3').innerHTML = 130;
        cost.push(130)
        break;
        case 'Injection Fee':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",350);
        document.querySelector('#showCost3').innerHTML = 350;
        cost.push(350)
        break;
        case 'Abdomen-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 300);
        document.querySelector('#showCost3').innerHTML = 300;
        cost.push(300)
        break;
        case 'Abdomen-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",160);
        document.querySelector('#showCost3').innerHTML = 160;
        cost.push(160)
        break;
        case 'Arms-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 350);
        document.querySelector('#showCost3').innerHTML = 350;
        cost.push(350)
        break;
        case 'Arm-lower':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",200);
        document.querySelector('#showCost3').innerHTML = 200;
        cost.push(200)
        break;
        case 'Arms-upper':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 200);
        document.querySelector('#showCost3').innerHTML = 200;
        cost.push(200)
        break;
        case 'Back-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",400);
        document.querySelector('#showCost3').innerHTML = 400;
        cost.push(400)
        break;
        case 'Back-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 280);
        document.querySelector('#showCost3').innerHTML = 280;
        cost.push(280)
        break;
        case 'Bikini-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",320);
        document.querySelector('#showCost3').innerHTML = 320;
        cost.push(320)
        break;
        case 'Bikini-partial':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 200);
        document.querySelector('#showCost3').innerHTML = 200;
        cost.push(200)
        break;
        case 'Buttocks':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",160);
        document.querySelector('#showCost3').innerHTML = 160;
        cost.push(160)
        break;
        case 'Chest':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 280);
        document.querySelector('#showCost3').innerHTML = 280;
        cost.push(280)
        break;
        case 'Chin':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",100);
        document.querySelector('#showCost3').innerHTML = 100;
        cost.push(100)
        break;
        case 'Ears':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 120);
        document.querySelector('#showCost3').innerHTML = 120;
        cost.push(120)
        break;
        case 'Eyebrows':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",100);
        document.querySelector('#showCost3').innerHTML = 100;
        cost.push(100)
        break;
        case 'Face-full':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 280);
        document.querySelector('#showCost3').innerHTML = 280;
        cost.push(280)
        break;
        case 'Face-partial':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",200);
        document.querySelector('#showCost3').innerHTML = 200;
        cost.push(200)
        break;
        case 'Hair line':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 160);
        document.querySelector('#showCost3').innerHTML = 160;
        cost.push(160)
        break;
        case 'Legs-full':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",400);
        document.querySelector('#showCost3').innerHTML = 400;
        cost.push(400)
        break;
        case 'Legs-lower':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 280);
        document.querySelector('#showCost3').innerHTML = 280;
        cost.push(280)
        break;
        case 'Legs-upper':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",280);
        document.querySelector('#showCost3').innerHTML = 280;
        cost.push(280)
        break;
        case 'Lip':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 100);
        document.querySelector('#showCost3').innerHTML = 100;
        cost.push(100)
        break;
        case 'Neck':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",150);
        document.querySelector('#showCost3').innerHTML = 150;
        cost.push(150)
        break;
        case 'Nipples':
        console.log('dysport selected as service')
        var str = "";
        var estimatedCost3 = str.replace("", 120);
        document.querySelector('#showCost3').innerHTML = 120;
        cost.push(120)
        break;
        case 'Underarms':
        console.log('jeuveau selected as service')
        var str = "";
        var estimatedCost3 = str.replace("",100);
        document.querySelector('#showCost3').innerHTML = 100;
        cost.push(100)
        break;
      
      
  
    default:
      break;
  }
  document.querySelector('#showCost3').innerHTML = addSigns(estimatedCost3*howMany3)

  row3.push(service3);
  row3.push(treatmentAmount3);
  row3.push(treatmentSchedule3);
  row3.push(bodyArea3);
  row3.push(estimatedCost3);

  service4 = newConsultation.service4;
  howMany4 = newConsultation.howMany4;
  treatmentAmount4= newConsultation.treatmentAmount4;
  treatmentSchedule4 = newConsultation.treatmentSchedule4;
  bodyArea4 = newConsultation.bodyArea4;
  estimatedCost4 = newConsultation.estimatedCost4;

  switch (service4) {
      
    case 'Botox':
      console.log('botox selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 14);
      document.querySelector('#showCost4').innerHTML = 14;
      cost.push(14)
      break;
      case 'Dysport':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 14);
      document.querySelector('#showCost4').innerHTML = 14;
      cost.push(14)
      break;
      case 'Jeuveau':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",14);
      document.querySelector('#showCost4').innerHTML = 14;
      cost.push(14)
      break;
      case 'Botox-Hyperhydrosis':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 15);
      document.querySelector('#showCost4').innerHTML = 15;
      cost.push(15)
      break;
      case 'Botox Inj Hyperhydrosis':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 15);
      document.querySelector('#showCost4').innerHTML = 15;
      cost.push(15)
      break;
      case 'Belotero':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 595);
      document.querySelector('#showCost4').innerHTML = 595;
      cost.push(595)
      break;
      case 'Radiesse':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 795);
      document.querySelector('#showCost4').innerHTML = 795;
      cost.push(795)
      break;
      case 'Restylane Refyne':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 700);
      document.querySelector('#showCost4').innerHTML = 700;
      cost.push(700)
      break;
      case 'Restylane Defyne':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 700);
      document.querySelector('#showCost4').innerHTML = 700;
      cost.push(700)
      break;
      case 'Restylane-1 ml':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 645);
      document.querySelector('#showCost4').innerHTML = 645;
      cost.push(645)
      break;
      case 'Sculptra':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 125);
      document.querySelector('#showCost4').innerHTML = 125;
      cost.push(125)
      break;
      case 'Sculptra Vial':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 875);
      document.querySelector('#showCost4').innerHTML = 875;
      cost.push(875)
      break;
      case 'PRP 1st tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 1500);
      document.querySelector('#showCost4').innerHTML = 1500;
      cost.push(1500)
      break;
      case 'PRP 2nd tx':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 1000);
      document.querySelector('#showCost4').innerHTML = 1000;
      cost.push(1000)
      break;
      case 'PRP 3rd tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 500);
      document.querySelector('#showCost4').innerHTML = 500;
      cost.push(500)
      break;
      case 'Velashape 1tx':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 250);
      document.querySelector('#showCost4').innerHTML = 250;
      cost.push(250)
      break;
      case 'BodyFX Single Tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 750);
      document.querySelector('#showCost4').innerHTML = 750;
      cost.push(750)
      break;
      case 'Varicose Vein EVLT':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 4500);
      document.querySelector('#showCost4').innerHTML = 4500;
      cost.push(4500)
      break;
      case 'Sclerotherapy-1tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",325);
      document.querySelector('#showCost4').innerHTML = 325;
      cost.push(325)
      break;
      case 'Dplx Scan Extrem':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 422);
      document.querySelector('#showCost4').innerHTML = 422;
      cost.push(422)
      break;
      case 'Dplx Scan of Unilateral Extrem':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",287);
      document.querySelector('#showCost4').innerHTML = 287;
      cost.push(287)
      break;
      case 'Doppler':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 217);
      document.querySelector('#showCost4').innerHTML = 217;
      cost.push(217)
      break;
      case 'Hose for Sclerotherapy':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",50);
      document.querySelector('#showCost4').innerHTML = 50;
      cost.push(50)
      break;
      case 'Hose for Vein Surgery':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 95);
      document.querySelector('#showCost4').innerHTML = 95;
      cost.push(95)
      break;
      case 'Face Spider Veins':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",125);
      document.querySelector('#showCost4').innerHTML = 125;
      cost.push(125)
      break;
      case 'Foto Facial 1tx':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 350);
      document.querySelector('#showCost4').innerHTML = 350;
      cost.push(350)
      break;
      case 'Fractionated 45CO2 Chest Add-On':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",750);
      document.querySelector('#showCost4').innerHTML = 750;
      cost.push(750)
      break;
      case 'Fractionated CO2 with AQ Serum':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 2150);
      document.querySelector('#showCost4').innerHTML = 2150;
      cost.push(2150)
      break;
      case 'RF Needling - Full Face':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",1000);
      document.querySelector('#showCost4').innerHTML = 1000;
      cost.push(1000)
      break;
      case 'Tattoo Laser':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 150);
      document.querySelector('#showCost4').innerHTML = 150;
      cost.push(150)
      break;
      case 'Ulthera - ADD-ONS(Neck/Decolletage)':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",1000);
      document.querySelector('#showCost4').innerHTML = 1000;
      cost.push(1000)
      break;
      case 'Ulthera - Decolletage':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 1250);
      document.querySelector('#showCost4').innerHTML = 1250;
      cost.push(1250)
      break;
      case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",1500);
      document.querySelector('#showCost4').innerHTML = 1500;
      cost.push(1500)
      break;
      case 'Ulthera - Full Face':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 4500);
      document.querySelector('#showCost4').innerHTML = 4500;
      cost.push(4500)
      break;
      case 'Ulthera - Full Neck':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",2750);
      document.querySelector('#showCost4').innerHTML = 2750;
      cost.push(2750)
      break;
      case 'Ulthera - Lower Face':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 3250);
      document.querySelector('#showCost4').innerHTML = 3250;
      cost.push(3250)
      break;
      case 'Vivace Series of 3 Treatments':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",1950);
      document.querySelector('#showCost4').innerHTML = 1950;
      cost.push(1950)
      break;
      case 'Vivace Treatment':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 800);
      document.querySelector('#showCost4').innerHTML = 800;
      cost.push(800)
      break;
      case '1st Tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",750);
      document.querySelector('#showCost4').innerHTML = 750;
      cost.push(750)
      break;
      case '2nd Tx':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 400);
      document.querySelector('#showCost4').innerHTML = 400;
      cost.push(400)
      break;
      case '3rd Tx':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",250);
      document.querySelector('#showCost4').innerHTML = 250;
      cost.push(250)
      break;
      case 'PCA Chemiacal Package of 3':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 400);
      document.querySelector('#showCost4').innerHTML = 400;
      cost.push(400)
      break;
      case 'Acne Facial':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",110);
      document.querySelector('#showCost4').innerHTML = 110;
      cost.push(110)
      break;
      case 'Deep Cleansing Facial':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 110);
      document.querySelector('#showCost4').innerHTML = 110;
      cost.push(110)
      break;
      case 'Anti-Aging Facial':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",110);
      document.querySelector('#showCost4').innerHTML = 110;
      cost.push(110)
      break;
      case 'Brow Wax':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 25);
      document.querySelector('#showCost4').innerHTML = 25;
      cost.push(25)
      break;
      case 'Brow Tint':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",25);
      document.querySelector('#showCost4').innerHTML = 25;
      cost.push(25)
      break;
      case 'Lash Tint':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 25);
      document.querySelector('#showCost4').innerHTML = 25;
      cost.push(25)
      break;
      case 'HydrFacial w Growth Factor':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",250);
      document.querySelector('#showCost4').innerHTML = 250;
      cost.push(250)
      break;
      case 'Dermaplaning':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 130);
      document.querySelector('#showCost4').innerHTML = 130;
      cost.push(130)
      break;
      case 'Injection Fee':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",350);
      document.querySelector('#showCost4').innerHTML = 350;
      cost.push(350)
      break;
      case 'Abdomen-full':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 300);
      document.querySelector('#showCost4').innerHTML = 300;
      cost.push(300)
      break;
      case 'Abdomen-partial':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",160);
      document.querySelector('#showCost4').innerHTML = 160;
      cost.push(160)
      break;
      case 'Arms-full':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 350);
      document.querySelector('#showCost4').innerHTML = 350;
      cost.push(350)
      break;
      case 'Arm-lower':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",200);
      document.querySelector('#showCost4').innerHTML = 200;
      cost.push(200)
      break;
      case 'Arms-upper':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 200);
      document.querySelector('#showCost4').innerHTML = 200;
      cost.push(200)
      break;
      case 'Back-full':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",400);
      document.querySelector('#showCost4').innerHTML = 400;
      cost.push(400)
      break;
      case 'Back-partial':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 280);
      document.querySelector('#showCost4').innerHTML = 280;
      cost.push(280)
      break;
      case 'Bikini-full':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",320);
      document.querySelector('#showCost4').innerHTML = 320;
      cost.push(320)
      break;
      case 'Bikini-partial':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 200);
      document.querySelector('#showCost4').innerHTML = 200;
      cost.push(200)
      break;
      case 'Buttocks':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",160);
      document.querySelector('#showCost4').innerHTML = 160;
      cost.push(160)
      break;
      case 'Chest':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 280);
      document.querySelector('#showCost4').innerHTML = 280;
      cost.push(280)
      break;
      case 'Chin':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",100);
      document.querySelector('#showCost4').innerHTML = 100;
      cost.push(100)
      break;
      case 'Ears':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 120);
      document.querySelector('#showCost4').innerHTML = 120;
      cost.push(120)
      break;
      case 'Eyebrows':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",100);
      document.querySelector('#showCost4').innerHTML = 100;
      cost.push(100)
      break;
      case 'Face-full':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 280);
      document.querySelector('#showCost4').innerHTML = 280;
      cost.push(280)
      break;
      case 'Face-partial':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",200);
      document.querySelector('#showCost4').innerHTML = 200;
      cost.push(200)
      break;
      case 'Hair line':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 160);
      document.querySelector('#showCost4').innerHTML = 160;
      cost.push(160)
      break;
      case 'Legs-full':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",400);
      document.querySelector('#showCost4').innerHTML = 400;
      cost.push(400)
      break;
      case 'Legs-lower':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 280);
      document.querySelector('#showCost4').innerHTML = 280;
      cost.push(280)
      break;
      case 'Legs-upper':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",280);
      document.querySelector('#showCost4').innerHTML = 280;
      cost.push(280)
      break;
      case 'Lip':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 100);
      document.querySelector('#showCost4').innerHTML = 100;
      cost.push(100)
      break;
      case 'Neck':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",150);
      document.querySelector('#showCost4').innerHTML = 150;
      cost.push(150)
      break;
      case 'Nipples':
      console.log('dysport selected as service')
      var str = "";
      var estimatedCost4 = str.replace("", 120);
      document.querySelector('#showCost4').innerHTML = 120;
      cost.push(120)
      break;
      case 'Underarms':
      console.log('jeuveau selected as service')
      var str = "";
      var estimatedCost4 = str.replace("",100);
      document.querySelector('#showCost4').innerHTML = 100;
      cost.push(100)
      break;
       
  
    default:
      break;
  }

  document.querySelector('#showCost4').innerHTML = addSigns(estimatedCost4*howMany4)

 row4.push(service4);
 row4.push(treatmentAmount4);
 row4.push(treatmentSchedule4);
 row4.push(bodyArea4);
 row4.push(estimatedCost4);

 service5 = newConsultation.service5;
 howMany5 = newConsultation.howMany5;
 treatmentAmount5= newConsultation.treatmentAmount5;
 treatmentSchedule5 = newConsultation.treatmentSchedule5;
 bodyArea5 = newConsultation.bodyArea5;
 estimatedCost5 = newConsultation.estimatedCost5;

 switch (service5) {
      
  case 'Botox':
    console.log('botox selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 14);
    document.querySelector('#showCost5').innerHTML = 14;
    cost.push(14)
    break;
    case 'Dysport':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 14);
    document.querySelector('#showCost5').innerHTML = 14;
    cost.push(14)
    break;
    case 'Jeuveau':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",14);
    document.querySelector('#showCost5').innerHTML = 14;
    cost.push(14)
    break;
    case 'Botox-Hyperhydrosis':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 15);
    document.querySelector('#showCost5').innerHTML = 15;
    cost.push(15)
    break;
    case 'Botox Inj Hyperhydrosis':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 15);
    document.querySelector('#showCost5').innerHTML = 15;
    cost.push(15)
    break;
    case 'Belotero':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 595);
    document.querySelector('#showCost5').innerHTML = 595;
    cost.push(595)
    break;
    case 'Radiesse':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 795);
    document.querySelector('#showCost5').innerHTML = 795;
    cost.push(795)
    break;
    case 'Restylane Refyne':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 700);
    document.querySelector('#showCost5').innerHTML = 700;
    cost.push(700)
    break;
    case 'Restylane Defyne':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 700);
    document.querySelector('#showCost5').innerHTML = 700;
    cost.push(700)
    break;
    case 'Restylane-1 ml':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 645);
    document.querySelector('#showCost5').innerHTML = 645;
    cost.push(645)
    break;
    case 'Sculptra':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 125);
    document.querySelector('#showCost5').innerHTML = 125;
    cost.push(125)
    break;
    case 'Sculptra Vial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 875);
    document.querySelector('#showCost5').innerHTML = 875;
    cost.push(875)
    break;
    case 'PRP 1st tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 1500);
    document.querySelector('#showCost5').innerHTML = 1500;
    cost.push(1500)
    break;
    case 'PRP 2nd tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 1000);
    document.querySelector('#showCost5').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'PRP 3rd tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 500);
    document.querySelector('#showCost5').innerHTML = 500;
    cost.push(500)
    break;
    case 'Velashape 1tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 250);
    document.querySelector('#showCost5').innerHTML = 250;
    cost.push(250)
    break;
    case 'BodyFX Single Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 750);
    document.querySelector('#showCost5').innerHTML = 750;
    cost.push(750)
    break;
    case 'Varicose Vein EVLT':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 4500);
    document.querySelector('#showCost5').innerHTML = 4500;
    cost.push(4500)
    break;
    case 'Sclerotherapy-1tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",325);
    document.querySelector('#showCost5').innerHTML = 325;
    cost.push(325)
    break;
    case 'Dplx Scan Extrem':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 422);
    document.querySelector('#showCost5').innerHTML = 422;
    cost.push(422)
    break;
    case 'Dplx Scan of Unilateral Extrem':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",287);
    document.querySelector('#showCost5').innerHTML = 287;
    cost.push(287)
    break;
    case 'Doppler':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 217);
    document.querySelector('#showCost5').innerHTML = 217;
    cost.push(217)
    break;
    case 'Hose for Sclerotherapy':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",50);
    document.querySelector('#showCost5').innerHTML = 50;
    cost.push(50)
    break;
    case 'Hose for Vein Surgery':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 95);
    document.querySelector('#showCost5').innerHTML = 95;
    cost.push(95)
    break;
    case 'Face Spider Veins':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",125);
    document.querySelector('#showCost5').innerHTML = 125;
    cost.push(125)
    break;
    case 'Foto Facial 1tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 350);
    document.querySelector('#showCost5').innerHTML = 350;
    cost.push(350)
    break;
    case 'Fractionated 45CO2 Chest Add-On':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",750);
    document.querySelector('#showCost5').innerHTML = 750;
    cost.push(750)
    break;
    case 'Fractionated CO2 with AQ Serum':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 2150);
    document.querySelector('#showCost5').innerHTML = 2150;
    cost.push(2150)
    break;
    case 'RF Needling - Full Face':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",1000);
    document.querySelector('#showCost5').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'Tattoo Laser':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 150);
    document.querySelector('#showCost5').innerHTML = 150;
    cost.push(150)
    break;
    case 'Ulthera - ADD-ONS(Neck/Decolletage)':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",1000);
    document.querySelector('#showCost5').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'Ulthera - Decolletage':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 1250);
    document.querySelector('#showCost5').innerHTML = 1250;
    cost.push(1250)
    break;
    case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",1500);
    document.querySelector('#showCost5').innerHTML = 1500;
    cost.push(1500)
    break;
    case 'Ulthera - Full Face':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 4500);
    document.querySelector('#showCost5').innerHTML = 4500;
    cost.push(4500)
    break;
    case 'Ulthera - Full Neck':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",2750);
    document.querySelector('#showCost5').innerHTML = 2750;
    cost.push(2750)
    break;
    case 'Ulthera - Lower Face':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 3250);
    document.querySelector('#showCost5').innerHTML = 3250;
    cost.push(3250)
    break;
    case 'Vivace Series of 3 Treatments':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",1950);
    document.querySelector('#showCost5').innerHTML = 1950;
    cost.push(1950)
    break;
    case 'Vivace Treatment':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 800);
    document.querySelector('#showCost5').innerHTML = 800;
    cost.push(800)
    break;
    case '1st Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",750);
    document.querySelector('#showCost5').innerHTML = 750;
    cost.push(750)
    break;
    case '2nd Tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 400);
    document.querySelector('#showCost5').innerHTML = 400;
    cost.push(400)
    break;
    case '3rd Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",250);
    document.querySelector('#showCost5').innerHTML = 250;
    cost.push(250)
    break;
    case 'PCA Chemiacal Package of 3':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 400);
    document.querySelector('#showCost5').innerHTML = 400;
    cost.push(400)
    break;
    case 'Acne Facial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",110);
    document.querySelector('#showCost5').innerHTML = 110;
    cost.push(110)
    break;
    case 'Deep Cleansing Facial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 110);
    document.querySelector('#showCost5').innerHTML = 110;
    cost.push(110)
    break;
    case 'Anti-Aging Facial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",110);
    document.querySelector('#showCost5').innerHTML = 110;
    cost.push(110)
    break;
    case 'Brow Wax':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 25);
    document.querySelector('#showCost5').innerHTML = 25;
    cost.push(25)
    break;
    case 'Brow Tint':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",25);
    document.querySelector('#showCost5').innerHTML = 25;
    cost.push(25)
    break;
    case 'Lash Tint':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 25);
    document.querySelector('#showCost5').innerHTML = 25;
    cost.push(25)
    break;
    case 'HydrFacial w Growth Factor':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",250);
    document.querySelector('#showCost5').innerHTML = 250;
    cost.push(250)
    break;
    case 'Dermaplaning':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 130);
    document.querySelector('#showCost5').innerHTML = 130;
    cost.push(130)
    break;
    case 'Injection Fee':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",350);
    document.querySelector('#showCost5').innerHTML = 350;
    cost.push(350)
    break;
    case 'Abdomen-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 300);
    document.querySelector('#showCost5').innerHTML = 300;
    cost.push(300)
    break;
    case 'Abdomen-partial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",160);
    document.querySelector('#showCost5').innerHTML = 160;
    cost.push(160)
    break;
    case 'Arms-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 350);
    document.querySelector('#showCost5').innerHTML = 350;
    cost.push(350)
    break;
    case 'Arm-lower':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",200);
    document.querySelector('#showCost5').innerHTML = 200;
    cost.push(200)
    break;
    case 'Arms-upper':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 200);
    document.querySelector('#showCost5').innerHTML = 200;
    cost.push(200)
    break;
    case 'Back-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",400);
    document.querySelector('#showCost5').innerHTML = 400;
    cost.push(400)
    break;
    case 'Back-partial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 280);
    document.querySelector('#showCost5').innerHTML = 280;
    cost.push(280)
    break;
    case 'Bikini-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",320);
    document.querySelector('#showCost5').innerHTML = 320;
    cost.push(320)
    break;
    case 'Bikini-partial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 200);
    document.querySelector('#showCost5').innerHTML = 200;
    cost.push(200)
    break;
    case 'Buttocks':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",160);
    document.querySelector('#showCost5').innerHTML = 160;
    cost.push(160)
    break;
    case 'Chest':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 280);
    document.querySelector('#showCost5').innerHTML = 280;
    cost.push(280)
    break;
    case 'Chin':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",100);
    document.querySelector('#showCost5').innerHTML = 100;
    cost.push(100)
    break;
    case 'Ears':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 120);
    document.querySelector('#showCost5').innerHTML = 120;
    cost.push(120)
    break;
    case 'Eyebrows':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",100);
    document.querySelector('#showCost5').innerHTML = 100;
    cost.push(100)
    break;
    case 'Face-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 280);
    document.querySelector('#showCost5').innerHTML = 280;
    cost.push(280)
    break;
    case 'Face-partial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",200);
    document.querySelector('#showCost5').innerHTML = 200;
    cost.push(200)
    break;
    case 'Hair line':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 160);
    document.querySelector('#showCost5').innerHTML = 160;
    cost.push(160)
    break;
    case 'Legs-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",400);
    document.querySelector('#showCost5').innerHTML = 400;
    cost.push(400)
    break;
    case 'Legs-lower':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 280);
    document.querySelector('#showCost5').innerHTML = 280;
    cost.push(280)
    break;
    case 'Legs-upper':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",280);
    document.querySelector('#showCost5').innerHTML = 280;
    cost.push(280)
    break;
    case 'Lip':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 100);
    document.querySelector('#showCost5').innerHTML = 100;
    cost.push(100)
    break;
    case 'Neck':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",150);
    document.querySelector('#showCost5').innerHTML = 150;
    cost.push(150)
    break;
    case 'Nipples':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost5 = str.replace("", 120);
    document.querySelector('#showCost5').innerHTML = 120;
    cost.push(120)
    break;
    case 'Underarms':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost5 = str.replace("",100);
    document.querySelector('#showCost5').innerHTML = 100;
    cost.push(100)
    break;
     

  default:
    break;
} 

document.querySelector('#showCost5').innerHTML = addSigns(estimatedCost5*howMany5)

row5.push(service5);
row5.push(treatmentAmount5);
row5.push(treatmentSchedule5);
row5.push(bodyArea5);
row5.push(estimatedCost5);

service6 = newConsultation.service6;
howMany6 = newConsultation.howMany6;
treatmentAmount6= newConsultation.treatmentAmount6;
treatmentSchedule6= newConsultation.treatmentSchedule6;
bodyArea6 = newConsultation.bodyArea6;
estimatedCost6 = newConsultation.estimatedCost6;

switch (service6) {
      
  case 'Botox':
    console.log('botox selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 14);
    document.querySelector('#showCost6').innerHTML = 14;
    cost.push(14)
    break;
    case 'Dysport':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 14);
    document.querySelector('#showCost6').innerHTML = 14;
    cost.push(14)
    break;
    case 'Jeuveau':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",14);
    document.querySelector('#showCost6').innerHTML = 14;
    cost.push(14)
    break;
    case 'Botox-Hyperhydrosis':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 15);
    document.querySelector('#showCost6').innerHTML = 15;
    cost.push(15)
    break;
    case 'Botox Inj Hyperhydrosis':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 15);
    document.querySelector('#showCost6').innerHTML = 15;
    cost.push(15)
    break;
    case 'Belotero':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 595);
    document.querySelector('#showCost6').innerHTML = 595;
    cost.push(595)
    break;
    case 'Radiesse':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 795);
    document.querySelector('#showCost6').innerHTML = 795;
    cost.push(795)
    break;
    case 'Restylane Refyne':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 700);
    document.querySelector('#showCost6').innerHTML = 700;
    cost.push(700)
    break;
    case 'Restylane Defyne':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 700);
    document.querySelector('#showCost6').innerHTML = 700;
    cost.push(700)
    break;
    case 'Restylane-1 ml':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 645);
    document.querySelector('#showCost6').innerHTML = 645;
    cost.push(645)
    break;
    case 'Sculptra':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 125);
    document.querySelector('#showCost6').innerHTML = 125;
    cost.push(125)
    break;
    case 'Sculptra Vial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 875);
    document.querySelector('#showCost6').innerHTML = 875;
    cost.push(875)
    break;
    case 'PRP 1st tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 1500);
    document.querySelector('#showCost6').innerHTML = 1500;
    cost.push(1500)
    break;
    case 'PRP 2nd tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 1000);
    document.querySelector('#showCost6').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'PRP 3rd tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 500);
    document.querySelector('#showCost6').innerHTML = 500;
    cost.push(500)
    break;
    case 'Velashape 1tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 250);
    document.querySelector('#showCost6').innerHTML = 250;
    cost.push(250)
    break;
    case 'BodyFX Single Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 750);
    document.querySelector('#showCost6').innerHTML = 750;
    cost.push(750)
    break;
    case 'Varicose Vein EVLT':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 4500);
    document.querySelector('#showCost6').innerHTML = 4500;
    cost.push(4500)
    break;
    case 'Sclerotherapy-1tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",325);
    document.querySelector('#showCost6').innerHTML = 325;
    cost.push(325)
    break;
    case 'Dplx Scan Extrem':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 422);
    document.querySelector('#showCost6').innerHTML = 422;
    cost.push(422)
    break;
    case 'Dplx Scan of Unilateral Extrem':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",287);
    document.querySelector('#showCost6').innerHTML = 287;
    cost.push(287)
    break;
    case 'Doppler':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 217);
    document.querySelector('#showCost6').innerHTML = 217;
    cost.push(217)
    break;
    case 'Hose for Sclerotherapy':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",50);
    document.querySelector('#showCost6').innerHTML = 50;
    cost.push(50)
    break;
    case 'Hose for Vein Surgery':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 95);
    document.querySelector('#showCost6').innerHTML = 95;
    cost.push(95)
    break;
    case 'Face Spider Veins':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",125);
    document.querySelector('#showCost6').innerHTML = 125;
    cost.push(125)
    break;
    case 'Foto Facial 1tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 350);
    document.querySelector('#showCost6').innerHTML = 350;
    cost.push(350)
    break;
    case 'Fractionated 45CO2 Chest Add-On':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",750);
    document.querySelector('#showCost6').innerHTML = 750;
    cost.push(750)
    break;
    case 'Fractionated CO2 with AQ Serum':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 2150);
    document.querySelector('#showCost6').innerHTML = 2150;
    cost.push(2150)
    break;
    case 'RF Needling - Full Face':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",1000);
    document.querySelector('#showCost6').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'Tattoo Laser':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 150);
    document.querySelector('#showCost6').innerHTML = 150;
    cost.push(150)
    break;
    case 'Ulthera - ADD-ONS(Neck/Decolletage)':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",1000);
    document.querySelector('#showCost6').innerHTML = 1000;
    cost.push(1000)
    break;
    case 'Ulthera - Decolletage':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 1250);
    document.querySelector('#showCost6').innerHTML = 1250;
    cost.push(1250)
    break;
    case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",1500);
    document.querySelector('#showCost6').innerHTML = 1500;
    cost.push(1500)
    break;
    case 'Ulthera - Full Face':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 4500);
    document.querySelector('#showCost6').innerHTML = 4500;
    cost.push(4500)
    break;
    case 'Ulthera - Full Neck':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",2750);
    document.querySelector('#showCost6').innerHTML = 2750;
    cost.push(2750)
    break;
    case 'Ulthera - Lower Face':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 3250);
    document.querySelector('#showCost6').innerHTML = 3250;
    cost.push(3250)
    break;
    case 'Vivace Series of 3 Treatments':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",1950);
    document.querySelector('#showCost6').innerHTML = 1950;
    cost.push(1950)
    break;
    case 'Vivace Treatment':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 800);
    document.querySelector('#showCost6').innerHTML = 800;
    cost.push(800)
    break;
    case '1st Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",750);
    document.querySelector('#showCost6').innerHTML = 750;
    cost.push(750)
    break;
    case '2nd Tx':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 400);
    document.querySelector('#showCost6').innerHTML = 400;
    cost.push(400)
    break;
    case '3rd Tx':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",250);
    document.querySelector('#showCost6').innerHTML = 250;
    cost.push(250)
    break;
    case 'PCA Chemiacal Package of 3':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 400);
    document.querySelector('#showCost6').innerHTML = 400;
    cost.push(400)
    break;
    case 'Acne Facial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",110);
    document.querySelector('#showCost6').innerHTML = 110;
    cost.push(110)
    break;
    case 'Deep Cleansing Facial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 110);
    document.querySelector('#showCost6').innerHTML = 110;
    cost.push(110)
    break;
    case 'Anti-Aging Facial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",110);
    document.querySelector('#showCost6').innerHTML = 110;
    cost.push(110)
    break;
    case 'Brow Wax':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 25);
    document.querySelector('#showCost6').innerHTML = 25;
    cost.push(25)
    break;
    case 'Brow Tint':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",25);
    document.querySelector('#showCost6').innerHTML = 25;
    cost.push(25)
    break;
    case 'Lash Tint':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 25);
    document.querySelector('#showCost6').innerHTML = 25;
    cost.push(25)
    break;
    case 'HydrFacial w Growth Factor':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",250);
    document.querySelector('#showCost6').innerHTML = 250;
    cost.push(250)
    break;
    case 'Dermaplaning':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 130);
    document.querySelector('#showCost6').innerHTML = 130;
    cost.push(130)
    break;
    case 'Injection Fee':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",350);
    document.querySelector('#showCost6').innerHTML = 350;
    cost.push(350)
    break;
    case 'Abdomen-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 300);
    document.querySelector('#showCost6').innerHTML = 300;
    cost.push(300)
    break;
    case 'Abdomen-partial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",160);
    document.querySelector('#showCost6').innerHTML = 160;
    cost.push(160)
    break;
    case 'Arms-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 350);
    document.querySelector('#showCost6').innerHTML = 350;
    cost.push(350)
    break;
    case 'Arm-lower':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",200);
    document.querySelector('#showCost6').innerHTML = 200;
    cost.push(200)
    break;
    case 'Arms-upper':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 200);
    document.querySelector('#showCost6').innerHTML = 200;
    cost.push(200)
    break;
    case 'Back-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",400);
    document.querySelector('#showCost6').innerHTML = 400;
    cost.push(400)
    break;
    case 'Back-partial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 280);
    document.querySelector('#showCost6').innerHTML = 280;
    cost.push(280)
    break;
    case 'Bikini-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",320);
    document.querySelector('#showCost6').innerHTML = 320;
    cost.push(320)
    break;
    case 'Bikini-partial':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 200);
    document.querySelector('#showCost6').innerHTML = 200;
    cost.push(200)
    break;
    case 'Buttocks':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",160);
    document.querySelector('#showCost6').innerHTML = 160;
    cost.push(160)
    break;
    case 'Chest':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 280);
    document.querySelector('#showCost6').innerHTML = 280;
    cost.push(280)
    break;
    case 'Chin':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",100);
    document.querySelector('#showCost6').innerHTML = 100;
    cost.push(100)
    break;
    case 'Ears':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 120);
    document.querySelector('#showCost6').innerHTML = 120;
    cost.push(120)
    break;
    case 'Eyebrows':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",100);
    document.querySelector('#showCost6').innerHTML = 100;
    cost.push(100)
    break;
    case 'Face-full':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 280);
    document.querySelector('#showCost6').innerHTML = 280;
    cost.push(280)
    break;
    case 'Face-partial':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",200);
    document.querySelector('#showCost6').innerHTML = 200;
    cost.push(200)
    break;
    case 'Hair line':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 160);
    document.querySelector('#showCost6').innerHTML = 160;
    cost.push(160)
    break;
    case 'Legs-full':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",400);
    document.querySelector('#showCost6').innerHTML = 400;
    cost.push(400)
    break;
    case 'Legs-lower':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 280);
    document.querySelector('#showCost6').innerHTML = 280;
    cost.push(280)
    break;
    case 'Legs-upper':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",280);
    document.querySelector('#showCost6').innerHTML = 280;
    cost.push(280)
    break;
    case 'Lip':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 100);
    document.querySelector('#showCost6').innerHTML = 100;
    cost.push(100)
    break;
    case 'Neck':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",150);
    document.querySelector('#showCost6').innerHTML = 150;
    cost.push(150)
    break;
    case 'Nipples':
    console.log('dysport selected as service')
    var str = "";
    var estimatedCost6 = str.replace("", 120);
    document.querySelector('#showCost6').innerHTML = 120;
    cost.push(120)
    break;
    case 'Underarms':
    console.log('jeuveau selected as service')
    var str = "";
    var estimatedCost6 = str.replace("",100);
    document.querySelector('#showCost6').innerHTML = 100;
    cost.push(100)
    break;
     

  default:
    break;
}  

document.querySelector('#showCost6').innerHTML = addSigns(estimatedCost6*howMany6)

row6.push(service6);
row6.push(treatmentAmount6);
row6.push(treatmentSchedule6);
row6.push(bodyArea6);
row6.push(estimatedCost6);

service7 = newConsultation.service7;
howMany7 = newConsultation.howMany7;
treatmentAmount7= newConsultation.treatmentAmount7;
treatmentSchedule7 = newConsultation.treatmentSchedule7;
bodyArea7 = newConsultation.bodyArea7;
estimatedCost7 = newConsultation.estimatedCost7;

switch (service7) {
      
case 'Botox':
  console.log('botox selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 14);
  document.querySelector('#showCost7').innerHTML = 14;
  cost.push(14)
  break;
  case 'Dysport':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 14);
  document.querySelector('#showCost7').innerHTML = 14;
  cost.push(14)
  break;
  case 'Jeuveau':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",14);
  document.querySelector('#showCost7').innerHTML = 14;
  cost.push(14)
  break;
  case 'Botox-Hyperhydrosis':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 15);
  document.querySelector('#showCost7').innerHTML = 15;
  cost.push(15)
  break;
  case 'Botox Inj Hyperhydrosis':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 15);
  document.querySelector('#showCost7').innerHTML = 15;
  cost.push(15)
  break;
  case 'Belotero':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 595);
  document.querySelector('#showCost7').innerHTML = 595;
  cost.push(595)
  break;
  case 'Radiesse':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 795);
  document.querySelector('#showCost7').innerHTML = 795;
  cost.push(795)
  break;
  case 'Restylane Refyne':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 700);
  document.querySelector('#showCost7').innerHTML = 700;
  cost.push(700)
  break;
  case 'Restylane Defyne':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 700);
  document.querySelector('#showCost7').innerHTML = 700;
  cost.push(700)
  break;
  case 'Restylane-1 ml':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 645);
  document.querySelector('#showCost7').innerHTML = 645;
  cost.push(645)
  break;
  case 'Sculptra':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 125);
  document.querySelector('#showCost7').innerHTML = 125;
  cost.push(125)
  break;
  case 'Sculptra Vial':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 875);
  document.querySelector('#showCost7').innerHTML = 875;
  cost.push(875)
  break;
  case 'PRP 1st tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 1500);
  document.querySelector('#showCost7').innerHTML = 1500;
  cost.push(1500)
  break;
  case 'PRP 2nd tx':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 1000);
  document.querySelector('#showCost7').innerHTML = 1000;
  cost.push(1000)
  break;
  case 'PRP 3rd tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 500);
  document.querySelector('#showCost7').innerHTML = 500;
  cost.push(500)
  break;
  case 'Velashape 1tx':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 250);
  document.querySelector('#showCost7').innerHTML = 250;
  cost.push(250)
  break;
  case 'BodyFX Single Tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 750);
  document.querySelector('#showCost7').innerHTML = 750;
  cost.push(750)
  break;
  case 'Varicose Vein EVLT':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 4500);
  document.querySelector('#showCost7').innerHTML = 4500;
  cost.push(4500)
  break;
  case 'Sclerotherapy-1tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",325);
  document.querySelector('#showCost7').innerHTML = 325;
  cost.push(325)
  break;
  case 'Dplx Scan Extrem':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 422);
  document.querySelector('#showCost7').innerHTML = 422;
  cost.push(422)
  break;
  case 'Dplx Scan of Unilateral Extrem':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",287);
  document.querySelector('#showCost7').innerHTML = 287;
  cost.push(287)
  break;
  case 'Doppler':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 217);
  document.querySelector('#showCost7').innerHTML = 217;
  cost.push(217)
  break;
  case 'Hose for Sclerotherapy':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",50);
  document.querySelector('#showCost7').innerHTML = 50;
  cost.push(50)
  break;
  case 'Hose for Vein Surgery':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 95);
  document.querySelector('#showCost7').innerHTML = 95;
  cost.push(95)
  break;
  case 'Face Spider Veins':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",125);
  document.querySelector('#showCost7').innerHTML = 125;
  cost.push(125)
  break;
  case 'Foto Facial 1tx':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 350);
  document.querySelector('#showCost7').innerHTML = 350;
  cost.push(350)
  break;
  case 'Fractionated 45CO2 Chest Add-On':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",750);
  document.querySelector('#showCost7').innerHTML = 750;
  cost.push(750)
  break;
  case 'Fractionated CO2 with AQ Serum':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 2150);
  document.querySelector('#showCost7').innerHTML = 2150;
  cost.push(2150)
  break;
  case 'RF Needling - Full Face':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",1000);
  document.querySelector('#showCost7').innerHTML = 1000;
  cost.push(1000)
  break;
  case 'Tattoo Laser':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 150);
  document.querySelector('#showCost7').innerHTML = 150;
  cost.push(150)
  break;
  case 'Ulthera - ADD-ONS(Neck/Decolletage)':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",1000);
  document.querySelector('#showCost7').innerHTML = 1000;
  cost.push(1000)
  break;
  case 'Ulthera - Decolletage':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 1250);
  document.querySelector('#showCost7').innerHTML = 1250;
  cost.push(1250)
  break;
  case 'Ulthera - Eyes (above brow, lower eyes, crows feet)':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",1500);
  document.querySelector('#showCost7').innerHTML = 1500;
  cost.push(1500)
  break;
  case 'Ulthera - Full Face':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 4500);
  document.querySelector('#showCost7').innerHTML = 4500;
  cost.push(4500)
  break;
  case 'Ulthera - Full Neck':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",2750);
  document.querySelector('#showCost7').innerHTML = 2750;
  cost.push(2750)
  break;
  case 'Ulthera - Lower Face':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 3250);
  document.querySelector('#showCost7').innerHTML = 3250;
  cost.push(3250)
  break;
  case 'Vivace Series of 3 Treatments':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",1950);
  document.querySelector('#showCost7').innerHTML = 1950;
  cost.push(1950)
  break;
  case 'Vivace Treatment':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 800);
  document.querySelector('#showCost7').innerHTML = 800;
  cost.push(800)
  break;
  case '1st Tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",750);
  document.querySelector('#showCost7').innerHTML = 750;
  cost.push(750)
  break;
  case '2nd Tx':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 400);
  document.querySelector('#showCost7').innerHTML = 400;
  cost.push(400)
  break;
  case '3rd Tx':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",250);
  document.querySelector('#showCost7').innerHTML = 250;
  cost.push(250)
  break;
  case 'PCA Chemiacal Package of 3':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 400);
  document.querySelector('#showCost7').innerHTML = 400;
  cost.push(400)
  break;
  case 'Acne Facial':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",110);
  document.querySelector('#showCost7').innerHTML = 110;
  cost.push(110)
  break;
  case 'Deep Cleansing Facial':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 110);
  document.querySelector('#showCost7').innerHTML = 110;
  cost.push(110)
  break;
  case 'Anti-Aging Facial':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",110);
  document.querySelector('#showCost7').innerHTML = 110;
  cost.push(110)
  break;
  case 'Brow Wax':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 25);
  document.querySelector('#showCost7').innerHTML = 25;
  cost.push(25)
  break;
  case 'Brow Tint':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",25);
  document.querySelector('#showCost7').innerHTML = 25;
  cost.push(25)
  break;
  case 'Lash Tint':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 25);
  document.querySelector('#showCost7').innerHTML = 25;
  cost.push(25)
  break;
  case 'HydrFacial w Growth Factor':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",250);
  document.querySelector('#showCost7').innerHTML = 250;
  cost.push(250)
  break;
  case 'Dermaplaning':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 130);
  document.querySelector('#showCost7').innerHTML = 130;
  cost.push(130)
  break;
  case 'Injection Fee':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",350);
  document.querySelector('#showCost7').innerHTML = 350;
  cost.push(350)
  break;
  case 'Abdomen-full':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 300);
  document.querySelector('#showCost7').innerHTML = 300;
  cost.push(300)
  break;
  case 'Abdomen-partial':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",160);
  document.querySelector('#showCost7').innerHTML = 160;
  cost.push(160)
  break;
  case 'Arms-full':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 350);
  document.querySelector('#showCost7').innerHTML = 350;
  cost.push(350)
  break;
  case 'Arm-lower':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",200);
  document.querySelector('#showCost7').innerHTML = 200;
  cost.push(200)
  break;
  case 'Arms-upper':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 200);
  document.querySelector('#showCost7').innerHTML = 200;
  cost.push(200)
  break;
  case 'Back-full':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",400);
  document.querySelector('#showCost7').innerHTML = 400;
  cost.push(400)
  break;
  case 'Back-partial':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 280);
  document.querySelector('#showCost7').innerHTML = 280;
  cost.push(280)
  break;
  case 'Bikini-full':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",320);
  document.querySelector('#showCost7').innerHTML = 320;
  cost.push(320)
  break;
  case 'Bikini-partial':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 200);
  document.querySelector('#showCost7').innerHTML = 200;
  cost.push(200)
  break;
  case 'Buttocks':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",160);
  document.querySelector('#showCost7').innerHTML = 160;
  cost.push(160)
  break;
  case 'Chest':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 280);
  document.querySelector('#showCost7').innerHTML = 280;
  cost.push(280)
  break;
  case 'Chin':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",100);
  document.querySelector('#showCost7').innerHTML = 100;
  cost.push(100)
  break;
  case 'Ears':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 120);
  document.querySelector('#showCost7').innerHTML = 120;
  cost.push(120)
  break;
  case 'Eyebrows':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",100);
  document.querySelector('#showCost7').innerHTML = 100;
  cost.push(100)
  break;
  case 'Face-full':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 280);
  document.querySelector('#showCost7').innerHTML = 280;
  cost.push(280)
  break;
  case 'Face-partial':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",200);
  document.querySelector('#showCost7').innerHTML = 200;
  cost.push(200)
  break;
  case 'Hair line':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 160);
  document.querySelector('#showCost7').innerHTML = 160;
  cost.push(160)
  break;
  case 'Legs-full':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",400);
  document.querySelector('#showCost7').innerHTML = 400;
  cost.push(400)
  break;
  case 'Legs-lower':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 280);
  document.querySelector('#showCost7').innerHTML = 280;
  cost.push(280)
  break;
  case 'Legs-upper':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",280);
  document.querySelector('#showCost7').innerHTML = 280;
  cost.push(280)
  break;
  case 'Lip':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 100);
  document.querySelector('#showCost7').innerHTML = 100;
  cost.push(100)
  break;
  case 'Neck':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",150);
  document.querySelector('#showCost7').innerHTML = 150;
  cost.push(150)
  break;
  case 'Nipples':
  console.log('dysport selected as service')
  var str = "";
  var estimatedCost7 = str.replace("", 120);
  document.querySelector('#showCost7').innerHTML = 120;
  cost.push(120)
  break;
  case 'Underarms':
  console.log('jeuveau selected as service')
  var str = "";
  var estimatedCost7 = str.replace("",100);
  document.querySelector('#showCost7').innerHTML = 100;
  cost.push(100)
  break;
   

default:
  break;
}
sum = 0;
for(i = 0; i <cost.length; i++){
 sum = sum + cost[i]

}
console.log('this is the sum of consultation cost--->',sum);
document.querySelector('#showCost7').innerHTML = addSigns(estimatedCost7*howMany7)

row7.push(service7);
row7.push(treatmentAmount7);
row7.push(treatmentSchedule7);
row7.push(bodyArea7);
row7.push(estimatedCost7);

service8 = newConsultation.service8;
treatmentAmount8= newConsultation.treatmentAmount8;
treatmentSchedule8 = newConsultation.treatmentSchedule8;
bodyArea8 = newConsultation.bodyArea8;
estimatedCost8 = newConsultation.estimatedCost8;

row8.push(service8);
row8.push(treatmentAmount8);
row8.push(treatmentSchedule8);
row8.push(bodyArea8);
row8.push(estimatedCost8);

service9 = newConsultation.service9;
treatmentAmount9= newConsultation.treatmentAmount9;
treatmentSchedule9 = newConsultation.treatmentSchedule9;
bodyArea9 = newConsultation.bodyArea9;
estimatedCost9 = newConsultation.estimatedCost9;

row9.push(service9);
row9.push(treatmentAmount9);
row9.push(treatmentSchedule9);
row9.push(bodyArea9);
row9.push(estimatedCost9);

service10 = newConsultation.service10;
treatmentAmount10 = newConsultation.treatmentAmount10;
treatmentSchedule10 = newConsultation.treatmentSchedule10;
bodyArea10 = newConsultation.bodyArea10;
estimatedCost10 = newConsultation.estimatedCost10;

row10.push(service10);
row10.push(treatmentAmount10);
row10.push(treatmentSchedule10);
row10.push(bodyArea10);
row10.push(estimatedCost10);
   // get the reference for the body
   var body = document.getElementsByTagName("body")[0];

   // creates a <table> element and a <tbody> element
   var tbl = document.createElement("table");
   var tblBody = document.createElement("tbody");
   var cell = document.createElement("td");
    for (let i = 0; i < items.length; ++i) {
      // let cell = row.insertCell();
      console.log(items[i])
      if (i === 0) {
        let textID = document.createElement('div');
        setAttributes(textID, {
          "class": "displayText"
        });
        textID.innerHTML = `<span id="firstName">${items[i]}</span>`
        textID = document.createTextNode(items[i]);
        cell.appendChild(textID);
      }
      else if (i === 1) {
        let textID = document.createElement('div');
        setAttributes(textID, {
          "class": "displayText"
        });
        textID.innerHTML = `<span id="firstName">${items[i]}</span>`
        textID = document.createTextNode(items[i]);
        cell.appendChild(textID);
      }
      

      const div1 = document.getElementById('selectService');
      const align = div1.getAttribute('scale');
      console.log('should say unit--->',align)

      document.querySelector('#showServices').innerHTML = `${items[2]}*${howMany}`;
      document.querySelector('#showTreatment').innerHTML = items[3];
      document.querySelector('#showSchedule').innerHTML = items[4];
      document.querySelector('#showAreaBody').innerHTML = items[5];
      // document.querySelector('#showCost').innerHTML = items[6];
      document.querySelector('#showServices2').innerHTML = row2[0];
      document.querySelector('#showTreatment2').innerHTML = row2[1];
      document.querySelector('#showSchedule2').innerHTML = row2[2];
      document.querySelector('#showAreaBody2').innerHTML = row2[3];
      // document.querySelector('#showCost2').innerHTML = row2[4];
      document.querySelector('#showServices3').innerHTML = row3[0];
      document.querySelector('#showTreatment3').innerHTML = row3[1];
      document.querySelector('#showSchedule3').innerHTML = row3[2];
      document.querySelector('#showAreaBody3').innerHTML = row3[3];
      // document.querySelector('#showCost3').innerHTML = row3[4];
      document.querySelector('#showServices4').innerHTML = row4[0];
      document.querySelector('#showTreatment4').innerHTML = row4[1];
      document.querySelector('#showSchedule4').innerHTML = row4[2];
      document.querySelector('#showAreaBody4').innerHTML = row4[3];
      // document.querySelector('#showCost4').innerHTML = row4[4];
      document.querySelector('#showServices5').innerHTML = row5[0];
      document.querySelector('#showTreatment5').innerHTML = row5[1];
      document.querySelector('#showSchedule5').innerHTML = row5[2];
      document.querySelector('#showAreaBody5').innerHTML = row5[3];
      // document.querySelector('#showCost5').innerHTML = row5[4];
      document.querySelector('#showServices6').innerHTML = row6[0];
      document.querySelector('#showTreatment6').innerHTML = row6[1];
      document.querySelector('#showSchedule6').innerHTML = row6[2];
      document.querySelector('#showAreaBody6').innerHTML = row6[3];
      // document.querySelector('#showCost6').innerHTML = row6[4];
      document.querySelector('#showServices7').innerHTML = row7[0];
      document.querySelector('#showTreatment7').innerHTML = row7[1];
      document.querySelector('#showSchedule7').innerHTML = row7[2];
      document.querySelector('#showAreaBody7').innerHTML = row7[3];
      // document.querySelector('#showCost7').innerHTML = row7[4];
      document.querySelector('#showTotal').innerHTML = ` $${sum}.00`;
      document.querySelector('#patientSignature').innerHTML = `<mark>I have read and understand LaserMed Skin & Vein Clinic's Policies</mark>_________________________________________________________________${readDate}`
      var date = new Date();
      var readDate = date.toDateString();
      if(items[0] !== ""){
       
        document.querySelector('#welcomePatient').innerHTML = `Hello ${items[0]}, below is a summary of your consultation on ${readDate}. The estimated price is highlighted at the bottom.`;
      } else{
        document.querySelector('#welcomePatient').innerHTML = `You forgot to enter your patient's name. Below is a summary of your consultation on ${readDate}. The estimated price is highlighted at the bottom.`;
      }
      // document.querySelector('#todaysDate').innerHTML = date.toDateString();
      // document.querySelector('#showServices8').innerHTML = row8[0];
      // document.querySelector('#showTreatment8').innerHTML = row8[1];
      // document.querySelector('#showSchedule8').innerHTML = row8[2];
      // document.querySelector('#showAreaBody8').innerHTML = row8[3];
      // document.querySelector('#showCost8').innerHTML = row8[4];
      // document.querySelector('#showServices9').innerHTML = row9[0];
      // document.querySelector('#showTreatment9').innerHTML = row9[1];
      // document.querySelector('#showSchedule9').innerHTML = row9[2];
      // document.querySelector('#showAreaBody9').innerHTML = row9[3];
      // document.querySelector('#showCost9').innerHTML = row9[4];
      // document.querySelector('#showServices10').innerHTML = row10[0];
      // document.querySelector('#showTreatment10').innerHTML = row10[1];
      // document.querySelector('#showSchedule10').innerHTML = row10[2];
      // document.querySelector('#showAreaBody10').innerHTML = row10[3];
      // document.querySelector('#showCost10').innerHTML = row10[4];

       // creates a table row
      var row = document.createElement("tr");
      // for (var j = 0; j < row2.length; j++) {
      //   // Create a <td> element and a text node, make the text
      //   // node the contents of the <td>, and put the <td> at
      //   // the end of the table row
      //   var cell = document.createElement("td");
      //   var cellText = document.createTextNode("cell in row "+items[i]+", column "+j);
      //   cell.appendChild(cellText);
      //   row.appendChild(cell);
      // }
  
      // add the row to the end of the table body
      // tblBody.appendChild(row);
    }
  
    // put the <tbody> in the <table>
    // tbl.appendChild(tblBody);
    // appends <table> into <body>
    // body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    // tbl.setAttribute("border", "2");

    
    
      // var elements = document.getElementById("consultationForm").elements;
      // var obj ={};
      // for(var i = 0 ; i < elements.length ; i++){
      //     var item = elements.item(i);
      //     obj[item.name] = item.value;
      // }
      var form = document.getElementById('consultationForm');
      var data = new FormData(form);
      
      // var queryString = $('#consultationForm').formSerialize();
      console.log(data)
      // document.getElementById("demo").innerHTML = JSON.stringify(items);
      console.log(cost)
     

    let newh1 = document.getElementById('showServices');
  //   var para = document.createElement("P");
  //   var t = document.createTextNode(newConsultation["Patient name"]);
  //   para.appendChild(t);
  //   document.getElementById("showServices").appendChild(para);

     let newConsultationstringify = JSON.stringify(newConsultation);
  
    
    console.log(newConsultation);
    document.getElementById("consultationForm").style.display = "none";
    document.getElementById("displayContent").style.display = "block";

  
  })


});
