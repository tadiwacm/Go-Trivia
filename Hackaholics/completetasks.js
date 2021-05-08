
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
    else if(!document.getElementById('c4').checked)
	    {
		alert('You have not completed task 4!');
		return false;
	  }
    else if(!document.getElementById('c5').checked)
	    {
		alert('You have not completed task 5!');
		return false;
	  }
    else if(!document.getElementById('c6').checked)
	    {
		alert('You have not completed task 6!');
		return false;
	  }
	else document.getElementById("box").style.display = "block";
  return true;
}

function warning(){
	if(document.getElementById('c2').checked){
		document.getElementById("box2").style.display = "block";
	}
}

function closeWin(){
	box2.close();
}

