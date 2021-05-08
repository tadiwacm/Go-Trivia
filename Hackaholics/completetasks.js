
function taskdone(){
	if(!document.getElementById('c1').checked)
  {
    alert('You have not completed task 1!');
    return false;
  }
  else if(!document.getElementById('c2').checked)
	    {
		alert('You have not completed task 2!');
		return false;
		}
  else if(!document.getElementById('c3').checked)
	    {
		alert('You have not completed task 3!');
		return false;
	  }
	else document.getElementById("box").style.display = "block";
  return true;
}

