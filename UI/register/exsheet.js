function myfun()/*I have created DOM model for making styles in textfields and capitalizing the texts(also adding fontsize) */
{
    var i,j,k;
    var doc=document.getElementsByTagName("input");
    var b=document.getElementsByTagName("label");
    var c=document.getElementsByTagName("textarea");
    var d=document.getElementsByTagName("select");
    var e=document.getElementsByTagName("button");
    for(var i=0;i<doc.length;i++)
    {
         doc[i].style.fontSize="12px";
         doc[i].style.border="2px solid red";
         doc[i].style.backgroundColor="lightgreen";
         doc[i].style.textTransform="uppercase";
        
    }       
    for(var j=0;j<b.length;j++)
    {
         b[j].style.fontSize="12px";
         b[j].style.backgroundColor="blue";
         b[j].style.textTransform="uppercase";
    }
    for(var k=0;k<c.length;k++)
    {
         c[k].style.fontSize="12px";
         c[k].style.backgroundColor="lightblue";
         c[k].style.textTransform="uppercase";
         c[k].style.border="2px solid red";
    }          
    for(var i=0;i<d.length;i++)
    {
        d[i].style.fontSize="12px";
        d[i].style.backgroundColor="lightyellow";
        d[i].style.textTransform="uppercase";
        d[i].style.border="2px solid red";
    }
    for(var i=0;i<e.length;i++)
    {
         e[i].style.fontSize="12px";
         e[i].style.border="2px solid red";
         e[i].style.backgroundColor="lightgreen";
         e[i].style.textTransform="uppercase";
    }
    
}