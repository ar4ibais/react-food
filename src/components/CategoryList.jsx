import CategoryItem from "./CategoryItem";

const CategoryList = ({ catalog = [] }) => {
    return (
        <div className="catalog list">
            {catalog.map(el => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export default CategoryList;