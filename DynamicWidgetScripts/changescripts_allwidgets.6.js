/*************************************************
Dynamic Widget Script Changer
Last Modified: 12172021
Created By: Edsel Villadoz
Description: This Sisense plug-in will apply a script to all widgets in a dashboard based on the logged-in user's group.
This file named 'changescripts_allwidgets.6.js' reads the configurations from the file 'config.js' found within the same folder.
Please make sure you edit 'config.js' to apply the changes you would like to make to Sisense widgets.
If you would not like to use the user group functionality, set 'useGroups' (line 15) from 'true' to 'false'.
**************************************************/

import { defaultConfig } from './config';
import { wScript } from './config';

// SET TO TRUE OR FALSE TO USE OR OMIT USER GROUP FUNCTIONALITY:
let useGroups = true;


prism.run([() => {
		prism.on("dashboardloaded", (el, args) => {
			prism.activeDashboard.widgets.$$widgets.forEach(widget => {
				if(useGroups){	
					defaultConfig.forEach((config) => {
						prism.user.groupsName.forEach((prismGroup) => {
							if(config.groupName === prismGroup.name) {
								widget.script = config.wScript;
								widget.refresh();
							}
						});
					});
				}
				else{
					widget.script = wScript;
					widget.refresh();
				}
        	});
		});	
 	},
]);