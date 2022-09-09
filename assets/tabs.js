function openTab(event, tab) {
  var i, tabList, tabTabs, tabGroup, tabContent; 

  tabList = event.target.parentNode;
  tabTabs = tabList.getElementsByClassName("tab");

  tabGroup = tabList.parentElement; 
  tabContent = tabGroup.getElementsByClassName("tab-content");

  for (i=0; i<tabContent.length; i++) {
    if (tabContent[i].id === tab) {
      tabContent[i].style.display = "grid";
    }
    else {
      tabContent[i].style.display = "none";
    }

    tabTabs[i].className = tabTabs[i].className.replace(" tab-highlight", "")
  
  }
  event.currentTarget.className += " tab-highlight"


}


function openSubTab(event, subtab){
  var i, subtabList, subtabTabs, subtabGroup, subtabContent; 

  subtabList = event.target.parentNode;
  subtabTabs = subtabList.getElementsByClassName("subtab");

  subtabGroup = subtabList.parentElement; 
  subtabContent = subtabGroup.getElementsByClassName("subtab-content");

  for (i=0; i<subtabContent.length; i++) {
    if (subtabContent[i].id === subtab) {
      subtabContent[i].style.display = "grid";
    }
    else {
      subtabContent[i].style.display = "none";
    }

    subtabTabs[i].className = subtabTabs[i].className.replace(" subtab-highlight", "")
  
  }
  event.currentTarget.className += " subtab-highlight"

  refresh();

}

function openTabModified(tablist, tab) {
    var i, x, tablinks;
    x = document.getElementsByClassName("tab-content");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tab");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" tab-hightlight", "");
    }
    document.getElementById(tab).style.display = "grid";
    document.getElementById(tablist).className += " tab-hightlight";

    

}
