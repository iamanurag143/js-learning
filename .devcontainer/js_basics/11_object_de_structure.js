/* Object de-structuring */

let course = {
    courseName : "Javascript",
    price : "$99",
    courseInstructor : "Anurag"
}

// now if I have to access courseInstructor here we can access it like : course.courseInstructor
// but we can use syntaxtical sugar here, so intead of writing "course.courseInstructor" we can make it short i.e only ourseInstructor or we can give some other name also

let {courseInstructor} = course  //now we don't have to use "course.courseInstructor" for access it we can simply use courseInstructor
console.log(courseInstructor)  //output: Anurag

let {courseName:name} = course // here we defined courseName as name only so we can use name only to access it
console.log(name)  //output: Javascript






/* some basic API concept */
// API is values comes from backend : we write it in the form of json or xml

/* JSON Structure
{
  "menu": {
    "id": "file",
    "value": "File",
    "popup": {
      "menuitem": [
        {
          "value": "New",
          "onclick": "CreateNewDoc()"
        },
        {
          "value": "Open",
          "onclick": "OpenDoc()"
        },
        {
          "value": "Close",
          "onclick": "CloseDoc()"
        }
      ]
    }
  }
}
*/


/* XML Structure

<menu id="file" value="File">
  <popup>
    <menuitem value="New" onclick="CreateNewDoc()" />
    <menuitem value="Open" onclick="OpenDoc()" />
    <menuitem value="Close" onclick="CloseDoc()" />
  </popup>
</menu>

*/

