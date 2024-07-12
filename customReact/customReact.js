const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: "_blank"
    },
    text: "click me to visit google"
}

function customRender(reactElement, container) {
    // const domElement = document.createElement(reactElement.type);
    // domElement.innerText=reactElement.text;
    // domElement.setAttribute('href', reactElement.props.href);
    // domElement.setAttribute('target', reactElement.props.target);
    // container.appendChild(domElement);

    const domElement = document.createElement(reactElement.type);
    domElement.innerText = reactElement.text;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop])
    }
    container.appendChild(domElement);

}

const mainContainer = document.querySelector("#root");
customRender(reactElement, mainContainer);