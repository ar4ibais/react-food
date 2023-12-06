
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { getMealById } from "../api";
import Preloader from "../components/Preloader";

const Recipe = () => {
    const { id } = useParams()
    const navigate = useNavigate();
    const [recipe, setRecipe] = useState({})

    useEffect(() => {
        getMealById(id).then(data => {
            setRecipe(data.meals[0])
        })
    }, [id])
    const {
        strMealThumb: image,
        strMeal: name,
        strCategory: category,
        strArea: region,
        strInstructions: text,
        strYoutube: video
    } = recipe;
    return (
        <>
            {!recipe.idMeal ? <Preloader /> : (
                <div className="recipe">
                    <img src={image} alt={name} />
                    <h1>{name}</h1>
                    <h6>Category: {category}</h6>
                    {region && <h6>Region: {region}</h6>}
                    <p>Recipe: {text}</p>

                    <table className="centered">
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Object.keys(recipe).map(key => {
                                    if (key.includes('Ingredient') && recipe[key]) {
                                        return (
                                            <tr key={key}>
                                                <td>{recipe[key]}</td>
                                                <td>{
                                                    recipe[`strMeasure${key.slice(13)}`]
                                                }</td>
                                            </tr>
                                        )
                                    } else {
                                        return null
                                    }
                                })
                            }
                        </tbody>
                    </table>
                    {video && (
                        <div className="row">
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>Video Recipe</h5>
                            <iframe
                                width={600}
                                height={300}
                                title={id}
                                src={`https://www.youtube.com/embed/${video.slice(-11)}`}
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            )}
            <button className="btn" onClick={() => navigate(-1)} style={{ marginBottom: 22 }}>Go Back</button>
        </>
    );
}

export default Recipe;