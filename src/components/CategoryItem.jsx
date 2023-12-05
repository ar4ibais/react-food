import { Link } from "react-router-dom";

const CategoryItem = ({
    idCategory: id,
    strCategory: category,
    strCategoryThumb: image,
    strCategoryDescription: description
}) => {
    return (
        <div className="card">
            <div className="card-image">
                <img src={image} alt={category} />
            </div>
            <div className="card-content">
                <span className="card-title">{category}</span>
                <p>{description.slice(0, 60)}... </p>
            </div>
            <div className="card-action">
                <Link to={`/category/${category}`} className="btn">Watch category</Link >
            </div>
        </div >
    );
}

export default CategoryItem;