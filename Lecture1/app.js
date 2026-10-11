// /* 
// <div id="parent">
//     <div id="child">
//         <h1></h1>
//         <h2></h2>
//     </div>
//     <div id="child2">
//         <h1></h1>
//         <h2></h2>
//     </div>
// </div>

// */


// const parent = React.createElement("div", {id: "parent"}, 
//     React.createElement("div", {id: "child"}, 
//         [React.createElement("h1", {}, "i am a h1 tag"), React.createElement("h2", {}, "i am a h2 tag")]
//     )
// );
const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, 
        [React.createElement("h1", {}, "i am a h1 tag"), React.createElement("h2", {}, "i am a h2 tag")]
    ),
    React.createElement("div", {id: "child2"}, 
        [React.createElement("h1", {}, "i am a h1 tag"), React.createElement("h2", {}, "i am a h2 tag")]
    )
]);


// const heading = React.createElement("h1", {id: "heading", xyz: "abc"}, "Hello World from ReactJS");

// console.log(heading);
console.log(parent);

const root= ReactDOM.render(parent, document.getElementById("root"));

// root.render(heading);
root.render(parent);






