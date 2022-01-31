function Baseline_Input_Submission() {
	
	
	Tier1CountInt = document.getElementById("Tier1Count").value;
	Tier1MinimumCallsInputInt = document.getElementById("Tier1MinimumCallsInput").value;
	
	Tier2CountInt = document.getElementById("Tier2Count").value;
	Tier2MinimumCallsInputInt = document.getElementById("Tier2MinimumCallsInput").value;
	
	Tier3CountInt = document.getElementById("Tier3Count").value;
	Tier3MinimumCallsInputInt = document.getElementById("Tier3MinimumCallsInput").value;
	

	
	output_Display();
}
function output_Display() {
	document.getElementById('call_Output').style.display='block';
	
	
	Tier1Total = Tier1CountInt * Tier1MinimumCallsInputInt;
	Tier2Total = Tier2CountInt * Tier2MinimumCallsInputInt;
	Tier3Total = Tier3CountInt * Tier3MinimumCallsInputInt;
	

	
	total_Calls_Output_Display = Tier1Total + Tier2Total + Tier3Total;
	daily_Call_Average = total_Calls_Output_Display / 5;
	
	Tier1TotalPercentage = Tier1Total / total_Calls_Output_Display * 100;
	Tier1TotalPercentage = Tier1TotalPercentage.toFixed(2);
	Tier1IndividualPercentage = Tier1MinimumCallsInputInt / total_Calls_Output_Display * 100;
	Tier1IndividualPercentage = Tier1IndividualPercentage.toFixed(2);
	
	Tier2TotalPercentage = Tier2Total / total_Calls_Output_Display * 100;
	Tier2TotalPercentage = Tier2TotalPercentage.toFixed(2);
	Tier2IndividualPercentage = Tier2MinimumCallsInputInt / total_Calls_Output_Display * 100;
	Tier2IndividualPercentage = Tier2IndividualPercentage.toFixed(2);
	
	Tier3TotalPercentage = Tier3Total / total_Calls_Output_Display * 100;
	Tier3TotalPercentage = Tier3TotalPercentage.toFixed(2);
	Tier3IndividualPercentage = Tier3MinimumCallsInputInt / total_Calls_Output_Display * 100;
	Tier3IndividualPercentage = Tier3IndividualPercentage.toFixed(2);
	
	document.getElementById("total_Calls_Output").innerHTML = "Total Weekly Calls Required for Effective Baselines: " + total_Calls_Output_Display;
	
	document.getElementById("Daily_Average").innerHTML = "Daily Average Calls: " + daily_Call_Average;
	
	
	
	document.getElementById("tier1_Total_Display").innerHTML = "Tier 1 Total Calls: " + Tier1Total + "<br>" + "Tier %: " + Tier1TotalPercentage + "%<br>" + "Individual %: " + Tier1IndividualPercentage + "%";
	
	document.getElementById("tier2_Total_Display").innerHTML = "Tier 2 Total Calls: " + Tier2Total + "<br>" + "Tier %: " + Tier2TotalPercentage + "%<br>" + "Individual %: " + Tier2IndividualPercentage + "%";
	
	document.getElementById("tier3_Total_Display").innerHTML = "Tier 3 Total Calls: " + Tier3Total + "<br>" + "Tier %: " + Tier3TotalPercentage + "%<br>" + "Individual %: " + Tier3IndividualPercentage + "%";
	
	
	document.getElementById("follow_Up_Question_Displayed").innerHTML = "Were there " + total_Calls_Output_Display + " calls last week?";
	
}
function follow_Up() {
	document.getElementById('follow_Up_Question').style.display='block';
	document.getElementById("follow_Up_Question_Displayed").innerHTML = "Were there " + total_Calls_Output_Display + " calls last week?";
}
function follow_Up_True() {
	document.getElementById('follow_Up_True').style.display='block';
	document.getElementById('follow_Up_False').style.display='none';
}
function follow_Up_False() {
	document.getElementById('follow_Up_True').style.display='none';
	document.getElementById('follow_Up_False').style.display='block';
}
function follow_Up_Question_Input_Submission() {
	revised_Total_Calls = document.getElementById('follow_Up_Question_Input').value;
	Tier1_Revised_Calls = revised_Total_Calls * Tier1IndividualPercentage / 100;
	Tier1_Revised_Calls = Tier1_Revised_Calls.toFixed(0);
	Tier2_Revised_Calls = revised_Total_Calls * Tier2IndividualPercentage / 100;
	Tier2_Revised_Calls = Tier2_Revised_Calls.toFixed(0);
	Tier3_Revised_Calls = revised_Total_Calls * Tier3IndividualPercentage / 100;
	Tier3_Revised_Calls = Tier3_Revised_Calls.toFixed(0);
	daily_Call_Average_Revised = revised_Total_Calls / 5;
	
	document.getElementById("Revised_Average").innerHTML = "Revised Daily Average: " + daily_Call_Average_Revised;
	document.getElementById("Tier1_Follow_Up_Output").innerHTML = "Revised Tier 1 Baseline: " + Tier1_Revised_Calls;
	document.getElementById("Tier2_Follow_Up_Output").innerHTML = "Revised Tier 2 Baseline: " + Tier2_Revised_Calls;
	document.getElementById("Tier3_Follow_Up_Output").innerHTML = "Revised Tier 3 Baseline: " + Tier3_Revised_Calls;
	
}