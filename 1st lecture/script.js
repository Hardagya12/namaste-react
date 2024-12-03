const heading = React.createElement("h1", { id: "heading" }, "Hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
console.log(heading);
// this is an object that contains all the information about the tag
//Props
// Props are the attributes of the tag
//  {id: "heading"}, "Hello from React" these are the props
// "Hello from React" is the children which will go inside the  h1 tag
//  {} object is the place where we give attributes to the tag
// {id: "heading"}
// reaact.createelement is an object
// root.render is a function which creates the tag and adds it to the page 


// Creating nested elements

// const parent = React.createElement("div",
//      { id: "parent" }, 
//      React.createElement
//      ("div",
//      { id: "child" },
//       React.createElement("h1", {}, "I'm H1 tag!")
//     )
// );
// root.render(parent);

// parent is an object which is a React element
// React.createElement is a function which creates an object 
//  Whhe it is rendering through root.render by DOM it converts it to Html
// ReactElement (Object) => Html(Browser Understands)

//  If we want to give multiple attributes to the tag we use an array
//  <div id = "parent">
//      <div id = "child">
//      <h1></h1>
//      <h2></h2>
//  </div>
//  </div>

// const parent = React.createElement("div",
//     { id: "parent" }, 
//     React.createElement
//     ("div",
//     { id: "child" },
//      [React.createElement("h1", {}, "I'm H1 tag!"),
//       React.createElement("h2", {}, "I'm H2 tag!")]
//    )
// );
// root.render(parent);
 
//  MORE NESTED STRUCTURE

//  <div id = "parent">
//      <div id = "child">
//      <h1></h1>
//      <h2></h2>
//  </div>
//      <div id = "child2">
//      <h1></h1>
//      <h2></h2>
//  </div>
//  </div>

const parent = React.createElement("div",
    { id: "parent" }, 
    [    React.createElement
        ("div",
        { id: "child" },
         [React.createElement("h1", {}, "I'm H1 tag!"),
          React.createElement("h2", {}, "I'm H2 tag!")]
       ),
       React.createElement
       ("div",
       { id: "child2" },
        [React.createElement("h1", {}, "I'm H1 tag!"),
         React.createElement("h2", {}, "I'm H2 tag!")]
      )]

);
root.render(parent);