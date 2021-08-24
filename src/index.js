console.log(window.React);
console.log(window.React.createElement);
console.log(window.ReactDOM);
console.log(window.ReactDOM.render);

const React = window.React;
const ReactDOM = window.ReactDOM;
let root = document.querySelector("#root")

let n = 0;
const App = () => React.createElement('div', {
    className: "red"
}, [n, React.createElement('button', {
    onClick: () => {
        n += 1
        ReactDOM.render(App(), root)
    }
}, "+1")]) //所有div内部的东西都放在第三个参数中
ReactDOM.render(App(), root)