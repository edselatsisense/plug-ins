/*************************************************
THERE ARE TWO ARRAY OBJECTS THAT WORK WITH THIS PLUG-IN.
IF YOU ARE USING THE USER GROUP FUNCTIONALITY, THE PLUG-IN WILL PASS THE FIRST ARRAY CALLED 'defaultConfig'.
USER GROUP FUNCTIONALITY IS SET TRUE, BY DEFAULT.
IF YOU ARE NOT USING USER GROUP FUNCTIONALITY, THE PLUG-IN WILL PASS THE VARIABLE 'wScript'.

FOR REFFERENCE ON WHAT SETTINGS CAN BE CHANGED WITHIN A VISUALIZATION- PLEASE REFER TO HIGHCHARTS DOCUMENTATION : https://api.highcharts.com/highcharts/
*************************************************/

/*
IF YOU ARE USING USER GROUP FUNCTIONALITY, EDIT THE OBJECT 'defaultConfig'
	- 'groupName' specifies the group you would like to apply changes to
	- 'wScript' spcifies the script to be applied to widgets on the dashboard
*/

export const defaultConfig = [
	{
		//THE EXAMPLE BELOW WILL BE APPLIED BY DEFAULT
		groupName: 'Admins',
		wScript: `

			widget.on('processresult',function(w,e){
		
				e.result.plotOptions.series.dataLabels.style.color = 'red';
				e.result.plotOptions.series.dataLabels.style.fontSize = '12px';
				e.result.plotOptions.series.dataLabels.style.fontWeight = 'bold';
				e.result.plotOptions.series.dataLabels.allowOverlap = true;
		
			})
		`
	},	
	{
		groupName: '',
		wScript: ''
	},
	// YOU CAN ADD MORE GROUPS AND SCRIPTS TO BE APPLIED, SIMPLY CREATE A NEW OBJECT WITHIN THE ARRAY
]

/******************************************************************/

/*
IF YOU ARE NOT USING USER GROUP FUNCTIONALITY, EDIT THE VARIABLE 'wScript':
	- 'wScript' spcifies the script to be applied to widgets on the dashboard
*/

export const wScript = `
	widget.on('processresult',function(w,e){

		e.result.plotOptions.series.dataLabels.style.color = 'blue';
		e.result.plotOptions.series.dataLabels.style.fontSize = '12px';
		e.result.plotOptions.series.dataLabels.style.fontWeight = 'bold';
		e.result.plotOptions.series.dataLabels.allowOverlap = true;

	})
`