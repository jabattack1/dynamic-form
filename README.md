**pages/index.js**<br><br>
	•	if there is stored data componentDIdMount will fetch local data in localStorage from data/rooms.js.<br>
	•	parsedData will be passed down to the Parent component through ‘peter’ attribute.<br><br>

**components/parent.js**<br><br>
	•	if there is data in localStorage state will be updated using its props.<br>
	•	if the state has a ‘checked’ value, check=true attribute along with a 'child to parent' callback function and data will be passed down to all the child components (room1, room2, room3, room4).<br>
	•	when submit button is clicked state will be stingified and put into localStorage<br>
	•	functions room1Value, room2Value, room3Value, room4Value will update the state according to data received back from child components.<br>
	•	functions room1Value, room2Value, room3Value, room4Value also controls which room will be ‘checked’.<br><br>

**components/(room1.js, room2.js, room3.js, room4.js)**<br><br>
	•	state will be updated if there is data passed down as props<br>
	•	all child components will return content that includes the heading, select fields, and checkboxes for room2, room3, and room4.<br>
	•	if the component’s check value is true it will return jsx with select options enabled. if the component’s check value is false it will return jsx with select options disabled<br>
	•	if component receives props from localStorage (room1) select tag value will be set to the value of the props. (room2, room3, room4) select[option] will be set to set to ‘selected’ using React.Fragments<br><br><br>

**added clear button to wipe data on localStorage**
