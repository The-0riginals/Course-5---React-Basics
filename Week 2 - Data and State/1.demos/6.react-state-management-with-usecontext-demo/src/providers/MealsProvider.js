import React from 'react';

//context Api is used to pass data through the component tree without having to pass props down manually at every level

const MealsContext = React.createContext();  // create a context object

const todaysMeals = ["Baked Beans", "Baked Sweet Potatoes", "Baked Potatoes","Baked Chicken", "Baked Fish"];

// MealsProvider is a component that wraps the children components with the context provider
// The context provider accepts a value prop that is used to pass the state and the updater function to the context
const MealsProvider = ({ children }) => { 

    const [meals, setMealsList] = React.useState(todaysMeals);

    //pass the state and the updater function to the value prop of the context provider
    return (
        <MealsContext.Provider value={{ meals }}>  
            {children} 
        </MealsContext.Provider>
    );

};

export const useMealsListContext = () => React.useContext(MealsContext); // create a custom hook to consume the context in the child components

export default MealsProvider;