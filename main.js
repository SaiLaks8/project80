var name_of_guest_array = [];
    
function submit()
{
    var GuestName = document.getElementById("Enter_name").value;
	name_of_guest_array.push(GuestName);
	console.log(GuestName);
	document.getElementById("display_name").innerHTML=name_of_guest_array;
    console.log(name_of_guest_array);
    var lenght_of_the_array = name_of_guest_array.length;
    console.log(lenght_of_the_array);
   }



function show_list()
{
	var i= name_of_guest_array.join("<br>");
	console.log(name_of_guest_array);
	document.getElementById("show_names").innerHTML=i.toString();
	}


function sorting()
	{
		name_of_guest_array.sort()
		var i= name_of_guest_array.join("<br>");
		console.log(name_of_guest_array.sort);		
		document.getElementById("sorted").innerHTML=i.toString();
		}


function search()
{
	var s= document.getElementById("s1").value;
	var found=0;
	var j;
	for(j=0; j<name_of_guest_array.length; j++)
		{
			if(s==name_of_guest_array[j]){
				found=found+1;
			}	
		}
	document.getElementById("search_names").innerHTML="name found "+found+" time/s";
	console.log("found name "+found+" time/s");
}
