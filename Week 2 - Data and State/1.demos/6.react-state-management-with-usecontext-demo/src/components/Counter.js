import { useMealsListContext } from "../providers/MealsProvider";

const Counter = () => {

    const { meals } = useMealsListContext();  // take the meals state from the context

    return (
        <div>
            <h3>Number of meals today: {meals.length}</h3>
        </div>
    );

}

export default Counter;