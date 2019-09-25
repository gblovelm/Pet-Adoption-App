const Pet = () => {
    return React.createElement("div", {}, [
        React.createElement("h1", {}, "Luna"),
        React.createElement("h2", {}, "Dog"),
        React.createElement("h2", {}, "Havanese")
    ]);
};

const App = () => {  // a React Component. Returns result of React.createElement
    return React.createElement("div", { id: "something-important" },
        [ 
            React.createElement("h1", {}, "Adopt Me!"),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
            React.createElement(Pet, { name: "Luna", animal: "Dog", breed: "Havanese"}),
        ]
    );
};

ReactDOM.render(
    React.createElement(App),       // this stamps our app weve created
    document.getElementById("root")  // where to render it - see above
);