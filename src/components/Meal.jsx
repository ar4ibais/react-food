import { Link } from "react-router-dom";

const Meal = ({
    strMeal: name,
    strMealThumb: image,
    idMeal: id
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={name} />
            </div>
            <div className="card-content">
                <span className="card-title">{name}</span>
            </div>
            <div className="card-action">
                <Link to={`/meal/${id}`} className="btn">Watch Recipe</Link >
            </div>
        </div >
    );
}

export default Meal;