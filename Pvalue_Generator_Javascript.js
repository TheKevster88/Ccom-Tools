  function reset_Form() {
  window.location.reload();
  //Resets entire page. 
}

function device_Submission() {
	document.getElementById('keytype_Definitions').style.display='block';
	document.getElementById('top_form').style.display='block';
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
	line_Range();
	mpk_Range();
	clear_Table();
	device_Change_Update();
	generate_ui();

	//Calls multiple functions to unhide the table form and generates the keys.
	//Clear table function has to be right before the generate_ui function or the keys will populate twice. 
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
	primary_Sip_Output();
	secondary_Sip_Output();
	BLF_Sip_Output();
	Firmware_Output();
	document.getElementById('test_Table').innerHTML = "";
	document.getElementById("Pvalues").innerHTML="";
	form_Pvalue_Output();
}
function primary_Sip_Output() {
	switch (primary_Registration.value) {
		case 'UDP5060':
			document.getElementById("primary_Registration_Output").innerHTML = "P130=0<br>P2329=1<br>P47=register.cytracom.net<br>P40=5060";
			break;
		case 'UDP5062':
			document.getElementById("primary_Registration_Output").innerHTML = "P130=0<br>P2329=1<br>P47=register.cytracom.net:5062<br>P40=5062";
			break;
		case 'TCP5060':
			document.getElementById("primary_Registration_Output").innerHTML = "P130=1<br>P2329=0<br>P47=register.cytracom.net<br>P40=5060";
			break;
		default:
			document.getElementById("primary_Registration_Output").innerHTML = "";
			break;
	}
}

function secondary_Sip_Output() {
	switch (secondary_Registration.value) {
		case 'Register5060':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P2312=register.cytracom.net";
			break;
		case 'Register5062':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P2312=register.cytracom.net:5062";
			break;
		case 'KR1':
			document.getElementById("Seconary_Registration_Output").innerHTML = "P2312=kr1.cytracom.net";
			break;
		default:
			document.getElementById("Seconary_Registration_Output").innerHTML = "";
			break;
	}
}
function BLF_Sip_Output() {
	switch (blf_Registration.value){
		case 'BLF':
			document.getElementById("BLF_Output").innerHTML = "P2375=blf.cytracom.net";
			break;
		case 'Reg':
			document.getElementById("BLF_Output").innerHTML = "P2375=register.cytracom.net";
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