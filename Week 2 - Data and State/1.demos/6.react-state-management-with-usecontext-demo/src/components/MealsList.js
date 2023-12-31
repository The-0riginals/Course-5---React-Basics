import { useMealsListContext } from "../providers/MealsProvider";

const MealsList = () => {

    const { meals } = useMealsListContext();
    console.log(meals);

    return (
        <div>
            <h1>Meals List using Context API</h1>
            {meals.map((meal, index) => (   // map over the meals array and display each meal
                <h2 key={index}>{meal}</h2>
            ))}
        </div>
    );
}

export default MealsList;