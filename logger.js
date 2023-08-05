export default function logger(reducer) {
    return (prevState, action, args) => {
        console.group(action);
        console.log("Pre State:", prevState);
        console.log("Action arguments:", args);
        const nextState = reducer(prevState, action, args);
        console.log("Next State:", prevState);
        console.groupEnd();
        return nextState;
    };
}
