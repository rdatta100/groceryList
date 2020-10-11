function initialize() //initialize the global lists and arrays
{
	list = document.getElementById("groceryList");
	groceries = [];
	listItems = [];
	
}

function addGroceryItem() //this adds the input to the grocery list
{
	var groceryName = document.getElementById("grocery").value;
	var groceryRepeat = false;
	
	for (var i = 0; i < groceries.length; i++)
	{
		if (groceryName === groceries[i])
		{
			groceryRepeat = true;
		} 
	}
	
	if (groceryName == "")
	{
		window.alert("Please enter an item!");
	} 
	else {
		if (groceryRepeat === false)
		{
			var li = document.createElement("li");
			listItems.push(li);
			list.appendChild(li);
			groceries[groceries.length] = groceryName;
		} 
		else 
		{
			window.alert("You already have that grocery item!");
		}
	}
	/*
	I N C L U D E S   E N H A N C E M E N T 
	gets the value of the grocery item, 
	groceryRepeat variable keeps track whether that item is repeated or not
	the for loop goes through the groceries array to check
	the if statement makes sure there are no blank inputs
	if there are no repeats, the embedded if statement:
	- creates a list item that attaches itself to the grocery list 
	- adds that grocery item to an array
	the else statement:
	alerts the user that there is a repeat and they have the option to change the grocery 
	*/
	
	display();
}
			
			
function deleteGroceryItem() //when the delete button is pressed, it deletes that specific grocery item
{
	var deleteThisItem = document.getElementById("deleteThis").value;
	
	if (deleteThisItem <= 0 || deleteThisItem > groceries.length)
	{
		window.alert("You don't have that many groceries!");
	} 
	else if (deleteThisItem == "")
	{
		window.alert("You have to put in a number!");
	} 
	else 
	{
		list.removeChild(listItems[deleteThisItem - 1]);
		groceries.splice((deleteThisItem - 1), 1);
		listItems.splice((deleteThisItem - 1), 1);
	}

	display();
}
	
function changeList() // takes the two numbers and switches those grocery items
{
	var intValue = document.getElementById("first").value;
	var finValue = document.getElementById("second").value;
	
	if (groceries.length < finValue || groceries.length < intValue)
	{
		window.alert("You don't have that many groceries!");
	} 
	else if (intValue === "" || finValue === "")
	{
		window.alert("You have to put in a number!");
	}
	else if (intValue === finValue)
	{
		window.alert("That's the same number!");
	}
	else
	{
		if (intValue > 0 && finValue > 0) 
		{
			var temp = 0;
			temp = groceries[intValue - 1];
			groceries[intValue - 1] = groceries[finValue - 1];
			groceries[finValue - 1] = temp;
		}
		else 
		{
			window.alert("That grocery does not exist!");
		}
	}

	/*
	these several window alerts are to make sure no errors happen during the switching process
	makes sure the groceries asked to be switched exist and are not the same
	also makes sure the user did not input a negative number or 0, or even nothing at all
	*/

	display();
}

function display() //displays all of the groceries
{
	for (var i = 0; i < groceries.length; i++)
	{
		listItems[i].innerHTML = groceries[i];
	}
}
			