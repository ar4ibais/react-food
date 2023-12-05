import Meal from "./Meal";

const MealList = ({ meals }) => {
    return (
        <div className="list">
            {meals.map(el => (
                <Meal key={el.idMeal} {...el} />
            ))}
        </div>
    );
}

export default MealList;