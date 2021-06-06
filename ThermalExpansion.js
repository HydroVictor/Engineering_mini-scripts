alert ("Attention! You\'re now on the official Phoenix web page. Please make sure you follow the rules of confidential info distribution");
var Name1 = 'GAS TURBINE - DIRT COVER HOLDER';
document.write(Name1);
document.write('<p><br/?>');

//to round to n decimal places
function round(num, places) 
{
    var multiplier = Math.pow(10, places);
    return Math.round(num * multiplier) / multiplier;
}


//Calculate Thermal expansion
function ThermalExpansionFunc()
{
/* 	
	var ThermalExpansionCoef = prompt('Please enter Thermal Expansion Coefficient, [1/F]');
	var deltaT = prompt('Please enter deltaT, [F]');
*/	
	var Length = prompt('Please enter Length. [in]');
	var result_1 = confirm("Thermal Expansion Coefficient = 1e-5 [1/F] \ndeltaT = 630 [F] \nDo you want to enter different values?");
	if  (result_1==true) {
		var ThermalExpansionCoef = prompt('Please enter Thermal Expansion Coefficient, [1/F]');
		var deltaT = prompt('Please enter deltaT, [F]');
	}
	else {
		var ThermalExpansionCoef = 1e-5;
		var deltaT = 630;
	}
	document.write("Thermal Expansion Coefficient ="+ ThermalExpansionCoef +" [1/F] ");
	document.write('<br/?>');
	document.write("Length ="+ Length +" [in] ");
	document.write('<br/?>');
	document.write("deltaT ="+ deltaT +" [F] ");
	document.write('<br/?>');
	return ThermalExpansionCoef*Length*deltaT;
}
var ThermalExpansion = ThermalExpansionFunc();
document.write("<p><b>Thermal expansion = "+ round(ThermalExpansion,5) +" [in]</b>");