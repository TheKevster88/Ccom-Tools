  function reset_Form() {
  window.location.reload();
  //Resets entire page. 
}
function device_Submission() {
	document.getElementById('keytype_Definitions').style.display='block';
	document.getElementById('top_form').style.display='block';
	document.getElementById('registration_Options').style.display='block';
	registration_Hide();
	line_Range();
	mpk_Range();
	clear_Table();
	device_Change_Update();
	generate_ui();

	//Calls multiple functions to unhide the table form and generates the keys.
	//Clear table function has to be right before the generate_ui function or the keys will populate twice. 
}
function sidecar_Selection_Update(){
	line_Range();
	mpk_Range();
	clear_Table();
	device_Change_Update();
	generate_ui();
}
function firmware_Menu_Show() {
	switch (myDevice.value) {
		case 'D2':
			document.getElementById('D2_Firmware_Select').style.display='block';
			document.getElementById('GXP_Firmware_Select').style.display='none';
			break;
		default:
			document.getElementById('D2_Firmware_Select').style.display='none';
			document.getElementById('GXP_Firmware_Select').style.display='block';
			break;
	}
}

function device_Submission_Alert() {
      prefer = document.forms[0].myDevice.value;
	  
	  switch (myDevice.value) {
		case 'D2':
			prefix="Cytracom ";
			break;
		default:
			prefix="GXP ";
			break;
		}
   alert("You chose " + prefix + prefer);
   
   //This gives an alert in the browser saying you selected x device
   //This function is currently not being used
}

function sidecar_Selection_Function() {
	Sidecar_select = document.forms[1].mySidecar.value;
	alert("You chose sidecar " + Sidecar_select);
}

function device_Change_Update (){
	switch (myDevice.value) {
		case '2140':
			document.getElementById('sidecar_Selection').style.display='block';
			break;
		default:
			document.getElementById('sidecar_Selection').style.display='none';
			break;
		break;
}		

//When you click down and click on a different device, if you clicked on GXP 2140, the sidecar dropdown menu will appear.
//When changing to a different device other than the GXP 2140, the sidecar menu will dissappear. 
}

function line_Range() {
	switch (myDevice.value) {
		case '2100':
			endLine=4;
			break;
		case '2110':
			endLine=4;
			break;
		case '2120':
			endLine=6;
			break;
		case '2124':
			endLine=4;
			break;
		case '2130':
			endLine=3;
			break;
		case '2140':
			endLine=4;
			break;
		case '2160':
			endLine=6;
			break;
		case 'D2':
			endLine=4;
			break;
		}
}
function mpk_Range() {
   switch (myDevice.value) {
    case '2100':
		startMPK=1;
		endMPK=7;
		break;
	case '2110':
		startMPK=1;
		endMPK=18;
		break;
	case '2120':
		startMPK=1;
		endMPK=7;
		break;
	case '2124':
		startMPK=1;
		endMPK=24;
	case '2130':
		startMPK=1;
		endMPK=8;
		break;
	case '2140':
		switch (mySidecar.value) {
			case '1':
			startMPK=1;
			endMPK=40;
			break;
			case '2':
			startMPK=41;
			endMPK=80;
			break;
			case '3':
			startMPK=81;
			endMPK=120;
			break;
			case '4':
			startMPK=121;
			endMPK=160;
			break;
			case '5':
			startMPK=161;
			endMPK=200;
			break;
			}
		break;
	case '2160':
		startMPK=1;
		endMPK=24;
		break;
	case 'D2':
		startMPK=1;
		endMPK=24;
		break;
		}


//Defines the range for the mpks keys for the mpk form to generate.
}
 
   function generate_ui() {
   
    for (let i = startMPK; i <= endMPK; i++) {
	
     let row = document.createElement("tr");

     let keyName = document.createElement("td");
     let keyNameText = document.createTextNode("MPK #" + i + ": ");
     keyName.setAttribute("id", "key_name" + i);
     keyName.appendChild(keyNameText);
     row.appendChild(keyName);


	 let keyType = document.createElement("td");
     let keyTypeDropdown = document.createElement("input");
     keyTypeDropdown.setAttribute("type", "number");
     keyTypeDropdown.setAttribute("value", "1");

     
     keyTypeDropdown.setAttribute("id", "keytype" + i);
     keyType.appendChild(keyTypeDropdown);
     row.appendChild(keyType);
	 
	 let accountType = document.createElement("td");
	 let accountTypeDropdown = document.createElement("select");

     for (let j = 1; j <= endLine; j++) {
      let Account= document.createElement("option");
      Account.setAttribute("value", j);
      let accountLabel = document.createTextNode("Account " + j);
      Account.appendChild(accountLabel);
      accountTypeDropdown.appendChild(Account);
     }
	 
	 
     accountTypeDropdown.setAttribute("id", "account_" + i);
     accountType.appendChild(accountTypeDropdown);
     row.appendChild(accountType);
	 
	 
     let label = document.createElement("td");
	 
     let labelInput = document.createElement("input");
     label.appendChild(labelInput);
     labelInput.setAttribute("type", "text");
	 labelInput.setAttribute("Account", "text");
     labelInput.setAttribute("id", "label_" + i);
     row.appendChild(label);

     let value = document.createElement("td");
	 
     let valueInput = document.createElement("input");
     value.appendChild(valueInput);
     valueInput.setAttribute("type", "text");
	 valueInput.setAttribute("Account", "text");
     valueInput.setAttribute("id", "value_" + i);
     row.appendChild(value);

     document.getElementById("the_thing").appendChild(row);
    }
	//generate_ui is Jared's contribution to this project for getting started. Account field was added by me in process and keyType field was modified to be number input.
}

function clear_Table() {
var Table = document.getElementById("the_thing");
Table.innerHTML = "<tr><td>Key</td><td>Key Type</td><td>Account</td><td>Key Label</td><td>Key Value</td></tr>";
}

function clear_Table_Button() {
var Table = document.getElementById("the_thing");
Table.innerHTML = "<tr><td>Key</td><td>Key Type</td><td>Account</td><td>Key Label</td><td>Key Value</td></tr>";
generate_ui();
}

function Submit_Output() {
	document.getElementById('pvalue_Output').style.display='block';
	sip_Account_Reg_Pvalues();
	sip_Credentials_Output();
	primary_Sip_Output();
	secondary_Sip_Output();
	BLF_Sip_Output();
	Firmware_Output();
	document.getElementById("Pvalues").innerHTML="";
	form_Pvalue_Output();
}
function Submit_Output_XML() {
	document.getElementById('pvalue_Output_XML').style.display='block';
	sip_Account_Reg_Pvalues();
	sip_Credentials_Output_XML();
	primary_Sip_Output_XML();
	secondary_Sip_Output_XML();
	BLF_Sip_Output_XML();
	Firmware_Output_XML();
	document.getElementById("Pvalues_XML").innerHTML="";
	form_Pvalue_Output_XML();
}
function sip_Account_Reg_Pvalues() {
	switch (account_Sip_Selection.value) {
		case '1':
			sip_Name_Pvalue = 270;
			sip_ID_Pvalue = 35;
			sip_AuthID_Pvalue = 36;
			sip_Password_Pvalue = 34;
			sip_PrimaryReg_Pvalue1 = 130;
			sip_PrimaryReg_Pvalue2 = 2329;
			sip_PrimaryReg_Pvalue3 = 47;
			sip_PrimaryReg_Pvalue4 = 40;
			sip_SecReg_Pvalue = 2312;
			sip_blf_Pvalue = 2375;
		break;
		case "2":
			sip_Name_Pvalue = 417;
			sip_ID_Pvalue = 404;
			sip_AuthID_Pvalue = 405;
			sip_Password_Pvalue = 406;
			sip_PrimaryReg_Pvalue1 = 448;
			sip_PrimaryReg_Pvalue2 = 2429;
			sip_PrimaryReg_Pvalue3 = 402;
			sip_PrimaryReg_Pvalue4 = 413;
			sip_SecReg_Pvalue = 2412;
			sip_blf_Pvalue = 2475;
		break;
		case "3":
			sip_Name_Pvalue = 517;
			sip_ID_Pvalue = 504;
			sip_AuthID_Pvalue = 505;
			sip_Password_Pvalue = 506;
			sip_PrimaryReg_Pvalue1 = 548;
			sip_PrimaryReg_Pvalue2 = 2529;
			sip_PrimaryReg_Pvalue3 = 502;
			sip_PrimaryReg_Pvalue4 = 513;
			sip_SecReg_Pvalue = 2512;
			sip_blf_Pvalue = 2575;
		break;
		case "4":
			sip_Name_Pvalue = 617;
			sip_ID_Pvalue = 604;
			sip_AuthID_Pvalue = 605;
			sip_Password_Pvalue = 606;
			sip_PrimaryReg_Pvalue1 = 648;
			sip_PrimaryReg_Pvalue2 = 2629;
			sip_PrimaryReg_Pvalue3 = 602;
			sip_PrimaryReg_Pvalue4 = 613;
			sip_SecReg_Pvalue = 2612;
			sip_blf_Pvalue = 2675;
		break;
	}
}
function sip_Credentials_Output_XML() {
	account_Name_Output = document.getElementById("account_Name_Input").value;
	switch (account_Name_Output) {
		case '':
			document.getElementById("account_Name_XML").innerHTML = "";
			break;
		default:
			document.getElementById("account_Name_XML").innerHTML = "&ltP" + sip_Name_Pvalue + "&gt" + account_Name_Output + "&lt/P" + sip_Name_Pvalue + "&gt";
			break;
	}
	sip_ID_Output = document.getElementById("sip_ID_Input").value;
	switch (sip_ID_Output) {
		case '':
			document.getElementById("sip_ID_XML").innerHTML = "";
			break;
		default:
			document.getElementById("sip_ID_XML").innerHTML = "&ltP" + sip_ID_Pvalue + "&gt" + sip_ID_Output + "&lt/P" + sip_ID_Pvalue + "&gt" + "<br>" + "&ltP" + sip_AuthID_Pvalue + "&gt" + sip_ID_Output + "&lt/P" + sip_AuthID_Pvalue + "&gt";
			break;
	}
	sip_Password_Output = document.getElementById("sip_Password_Input").value;
	switch (sip_Password_Output) {
		case '':
			document.getElementById("sip_Password_XML").innerHTML = "";
			break;
		default:
			document.getElementById("sip_Password_XML").innerHTML = "&ltP" + sip_Password_Pvalue + "&gt" + sip_Password_Output + "&lt/P" + sip_Password_Pvalue + "&gt";
			break;
			
	}
}
function primary_Sip_Output_XML() {
	switch (primary_Registration.value) {
		case 'UDP5060':
			document.getElementById("primary_Registration_Output_XML").innerHTML = "&ltP" + sip_PrimaryReg_Pvalue1 + "&gt0&lt/P" + sip_PrimaryReg_Pvalue1 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue2 + "&gt1&lt/P" + sip_PrimaryReg_Pvalue2 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue3 + "&gtregister.cytracom.net&lt/P" + sip_PrimaryReg_Pvalue3 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue4 + "&gt5060&lt/P" + sip_PrimaryReg_Pvalue4 + "&gt";
			break;
		case 'UDP5062':
			document.getElementById("primary_Registration_Output_XML").innerHTML = "&ltP" + sip_PrimaryReg_Pvalue1 + "&gt0&lt/P" + sip_PrimaryReg_Pvalue1 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue2 + "&gt1&lt/P" + sip_PrimaryReg_Pvalue2 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue3 + "&gtregister.cytracom.net:5062&lt/P" + sip_PrimaryReg_Pvalue3 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue4 + "&gt5062&lt/P" + sip_PrimaryReg_Pvalue4 + "&gt";
			break;
		case 'TCP5060':
			document.getElementById("primary_Registration_Output_XML").innerHTML = "&ltP" + sip_PrimaryReg_Pvalue1 + "&gt1&lt/P" + sip_PrimaryReg_Pvalue1 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue2 + "&gt0&lt/P" + sip_PrimaryReg_Pvalue2 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue3 + "&gtregister.cytracom.net&lt/P" + sip_PrimaryReg_Pvalue3 + "&gt<br>&ltP" + sip_PrimaryReg_Pvalue4 + "&gt5060&lt/P" + sip_PrimaryReg_Pvalue4 + "&gt";
			break;
		default:
			document.getElementById("primary_Registration_Output_XML").innerHTML = "";
			break;
	}
	document.getElementById("Provision_Server").innerHTML = "&ltP237&gttftp.cytracom.net&ltP/237&gt<br>&ltP212&gt1&ltP/212&gt";
}

function secondary_Sip_Output_XML() {
	switch (secondary_Registration.value) {
		case 'Register5060':
			document.getElementById("Seconary_Registration_Output_XML").innerHTML = "&ltP" + sip_SecReg_Pvalue + "&gtregister.cytracom.net&lt/P" + sip_SecReg_Pvalue + "&gt";
			break;
		case 'Register5062':
			document.getElementById("Seconary_Registration_Output_XML").innerHTML = "&ltP" + sip_SecReg_Pvalue + "&gtregister.cytracom.net:5062&lt/P" + sip_SecReg_Pvalue + "&gt";
			break;
		case 'KR1':
			document.getElementById("Seconary_Registration_Output_XML").innerHTML = "&ltP" + sip_SecReg_Pvalue + "&gtkr1.cytracom.net&lt/P" + sip_SecReg_Pvalue + "&gt";
			break;
		default:
			document.getElementById("Seconary_Registration_Output_XML").innerHTML = "";
			break;
	}
}
function BLF_Sip_Output_XML() {
	switch (blf_Registration.value){
		case 'BLF':
			document.getElementById("BLF_Output_XML").innerHTML = "&ltP" + sip_blf_Pvalue + "&gtblf.cytracom.net&lt/P" + sip_blf_Pvalue + "&gt";
			break;
		case 'Reg':
			document.getElementById("BLF_Output_XML").innerHTML = "&ltP" + sip_blf_Pvalue + "&gtregister.cytracom.ne&lt/P" + sip_blf_Pvalue + "&gt";
			break;
		default:
			document.getElementById("BLF_Output_XML").innerHTML = "";
			break;
		}
}
function Firmware_Output_XML() {
	switch (myDevice.value) {
		case 'D2':
			switch (D2_Firmware.value) {
				case '5.65':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/D2/5-65&lt/P192&gt";
					break;
				case '5.48':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/D2/5-48&lt/P192&gt";
					break;
				case '5.45':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/D2/5-45&lt/P192&gt";
					break;
				case '1.13':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/D2/1-13&lt/P192&gt";
					break;
				default:
					document.getElementById("Firmware_Output_XML").innerHTML = "";
					break;
			}
		break;
		default:
			switch (GXP_Firmware.value) {
				case '11.48':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/GXP/11-48&lt/P192&gt";
					break;
				case '11.10':
					document.getElementById("Firmware_Output_XML").innerHTML = "&ltP192&gtfw.cytracom.com/GXP/11-10&lt/P192&gt";
					break;
				default:
					document.getElementById("Firmware_Output_XML").innerHTML = "";
					break;
			}
		break;
	}
}
function sip_Credentials_Output() {
	account_Name_Output = document.getElementById("account_Name_Input").value;
	switch (account_Name_Output) {
		case '':
			document.getElementById("account_Name").innerHTML = "";
			break;
		default:
			document.getElementById("account_Name").innerHTML = "P" + sip_Name_Pvalue + "=" + account_Name_Output;
			break;
	}
	sip_ID_Output = document.getElementById("sip_ID_Input").value;
	switch (sip_ID_Output) {
		case '':
			document.getElementById("sip_ID").innerHTML = "";
			break;
		default:
			document.getElementById("sip_ID").innerHTML = "P" + sip_ID_Pvalue + "=" + sip_ID_Output + "<br>" + "P" + sip_AuthID_Pvalue + "=" + sip_ID_Output;
			break;
	}
	sip_Password_Output = document.getElementById("sip_Password_Input").value;
	switch (sip_Password_Output) {
		case '':
			document.getElementById("sip_Password").innerHTML = "";
			break;
		default:
			document.getElementById("sip_Password").innerHTML = "P" + sip_Password_Pvalue + "=" + sip_Password_Output;
			break;
			
	}
}
function primary_Sip_Output() {
	switch (primary_Registration.value) {
		case 'UDP5060':
			document.getElementById("primary_Registration_Output").innerHTML = "P" + sip_PrimaryReg_Pvalue1 + "=0<br>P" + sip_PrimaryReg_Pvalue2 + "=1<br>P" + sip_PrimaryReg_Pvalue3 + "=register.cytracom.net<br>P" + sip_PrimaryReg_Pvalue4 + "=5060";
			break;
		case 'UDP5062':
			document.getElementById("primary_Registration_Output").innerHTML = "P" + sip_PrimaryReg_Pvalue1 + "=0<br>P" + sip_PrimaryReg_Pvalue2 + "=1<br>P" + sip_PrimaryReg_Pvalue3 + "=register.cytracom.net:5062<br>P" + sip_PrimaryReg_Pvalue4 + "=5062";
			break;
		case 'TCP5060':
			document.getElementById("primary_Registration_Output").innerHTML = "P" + sip_PrimaryReg_Pvalue1 + "=1<br>P" + sip_PrimaryReg_Pvalue2 + "=0<br>P" + sip_PrimaryReg_Pvalue3 + "=register.cytracom.net<br>P" + sip_PrimaryReg_Pvalue4 + "=5060";
			break;
		default:
			document.getElementById("primary_Registration_Output").innerHTML = "";
			break;
	}
}

function secondary_Sip_Output() {
	switch (secondary_Registration.value) {
		case 'Register5060':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P" + sip_SecReg_Pvalue + "=register.cytracom.net";
			break;
		case 'Register5062':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P" + sip_SecReg_Pvalue + "=register.cytracom.net:5062";
			break;
		case 'KR1':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P" + sip_SecReg_Pvalue + "=kr1.cytracom.net";
			break;
		default:
			document.getElementById("Seconary_Registration_Output").innerHTML = "";
			break;
	}
}
function BLF_Sip_Output() {
	switch (blf_Registration.value){
		case 'BLF':
			document.getElementById("BLF_Output").innerHTML = "P" + sip_blf_Pvalue + "=blf.cytracom.net";
			break;
		case 'Reg':
			document.getElementById("BLF_Output").innerHTML = "P" + sip_blf_Pvalue + "=register.cytracom.net";
			break;
		default:
			document.getElementById("BLF_Output").innerHTML = "";
			break;
		}
}
function Firmware_Output() {
	switch (myDevice.value) {
		case 'D2':
			switch (D2_Firmware.value) {
				case '5.65':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/D2/5-65";
					break;
				case '5.48':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/D2/5-48";
					break;
				case '5.45':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/D2/5-45";
					break;
				case '1.13':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/D2/1-13";
					break;
				default:
					document.getElementById("Firmware_Output").innerHTML = "";
					break;
			}
		break;
		default:
			switch (GXP_Firmware.value) {
				case '11.48':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/GXP/11-48";
					break;
				case '11.10':
					document.getElementById("Firmware_Output").innerHTML = "P192=fw.cytracom.com/GXP/11-10";
					break;
				default:
					document.getElementById("Firmware_Output").innerHTML = "";
					break;
			}
		break;
	}
}
function registration_Show() {
	document.getElementById('registration_Show_Button').style.display='none';
	document.getElementById('registration_Hide_Button').style.display='block';
	document.getElementById('registration_Servers').style.display='block';
	firmware_Menu_Show();
}
function registration_Hide() {
	document.getElementById('registration_Show_Button').style.display='block';
	document.getElementById('registration_Hide_Button').style.display='none';
	document.getElementById('registration_Servers').style.display='none';
	document.getElementById('GXP_Firmware_Select').style.display='none';
	document.getElementById('D2_Firmware_Select').style.display='none';
	
}
function keytype_Show() {
	document.getElementById('keytype_Definitions_List').style.display='block';
	document.getElementById('keytype_Show_Button').style.display='none';
	document.getElementById('keytype_Hide_Button').style.display='block';
}
function keytype_Hide() {
	document.getElementById('keytype_Definitions_List').style.display='none';
	document.getElementById('keytype_Hide_Button').style.display='none';
	document.getElementById('keytype_Show_Button').style.display='block';
}
function account_Lock() {
	document.getElementById("blf_Registration").disabled = true;
	document.getElementById('lock_Account_Button').style.display='none';
	document.getElementById('unlock_Account_Button').style.display='block';
	AccountLock=true;
}
function account_Unlock() {
	document.getElementById("blf_Registration").disabled = false;
	document.getElementById('lock_Account_Button').style.display='none';
	document.getElementById('unlock_Account_Button').style.display='none';
	AccountLock=false;
}
function form_Pvalue_Output(){


	for ( i=startMPK; i <= endMPK; i++) {
		form_Pvalue_Output_Device();
		pvalue_Account_Output()
		document.getElementById("Pvalues").innerHTML+= "P" + pvalue1 + "=" + document.getElementById('keytype'+i).value + "<br>";
		document.getElementById("Pvalues").innerHTML+= "P" + pvalue2 + "=" + post_Account_Output + "<br>";
		document.getElementById("Pvalues").innerHTML+= "P" + pvalue3 + "=" + document.getElementById('label_'+i).value + "<br>";
		document.getElementById("Pvalues").innerHTML+= "P" + pvalue4 + "=" + document.getElementById('value_'+i).value + "<br>";
	}
}
function form_Pvalue_Output_XML(){


	for ( i=startMPK; i <= endMPK; i++) {
		form_Pvalue_Output_Device();
		pvalue_Account_Output()
		document.getElementById("Pvalues_XML").innerHTML+= "&ltP" + pvalue1 + "&gt" + document.getElementById('keytype'+i).value + "&lt/P" + pvalue1 + "&gt" + "<br>";
		document.getElementById("Pvalues_XML").innerHTML+= "&ltP" + pvalue2 + "&gt" + post_Account_Output + "&lt/P" + pvalue2 + "&gt" + "<br>";
		document.getElementById("Pvalues_XML").innerHTML+= "&ltP" + pvalue3 + "&gt" + document.getElementById('label_'+i).value + "&lt/P" + pvalue3 + "&gt" + "<br>";
		document.getElementById("Pvalues_XML").innerHTML+= "&ltP" + pvalue4 + "&gt" + document.getElementById('value_'+i).value + "&lt/P" + pvalue4 + "&gt" + "<br>";
	}
}
function form_Pvalue_Output_Device(){
	switch (myDevice.value) {
		case '2100':
			form_Pvalue_Output_Device_GXPD2();
			break;
		case '2110':
			form_Pvalue_Output_Device_GXPD2();
			break;	
		case '2120':
			form_Pvalue_Output_Device_GXPD2();
			break;
		case '2124':
			form_Pvalue_Output_Device_GXPD2();
			break;
		case '2130':
			form_Pvalue_Output_Device_GXPD2();
			break;
		case '2160':
			form_Pvalue_Output_Device_GXPD2();
			break;
		case '2140':
			pvalue1=23000 + i*5-5;
			pvalue2=23000 + i*5-4;
			pvalue3=23000 + i*5-3;
			pvalue4=23000 + i*5-2;
			break;
		case 'D2':
			form_Pvalue_Output_Device_GXPD2();
			break;
	}
}
function form_Pvalue_Output_Device_GXPD2() {
	if (i<=7) {
		pvalue1 = 322+i;
		pvalue2 = 300 + i*3-2;
		pvalue3 = 300 + i*3-1;
		pvalue4 = 300 + i*3;
	} else if (i<=18) {
		pvalue1 = 324 + i*4-3;
		pvalue2 = 324 + i*4-2;
		pvalue3 = 324 + i*4-1;
		pvalue4 = 324 + i*4;
	} else {
		pvalue1 = 1364 + i*4;
		pvalue2 = 1364 + i*4+1;
		pvalue3 = 1364 + i*4+2;
		pvalue4 = 1364 + i*4+3;
	}
}
function pvalue_Account_Output() {
	pre_Account_Output = document.getElementById('account_'+i).value;
	post_Account_Output = pre_Account_Output - 1;
}
function pvalue_output_hide() {
	document.getElementById('pvalue_Output').style.display='none';
}
function pvalue_output_xml_hide() {
	document.getElementById('pvalue_Output_XML').style.display='none';
}