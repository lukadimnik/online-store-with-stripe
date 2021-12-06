import React from "react";

export default function ProductDetailNutrition(props) {
    console.log(props)
    return <table className="table table-nutrition">
        <thead>
            <tr>
                <th>Nutrient</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Protein</td>
                <td>{props.protein}g</td>
            </tr>
            <tr>
                <td>Carbohydrates</td>
                <td>{props.carbs}g</td>
            </tr>
            <tr>
                <td>Fat</td>
                <td>{props.fat}g</td>
            </tr>
            <tr>
                <td>Salt</td>
                <td>{props.salt}g</td>
            </tr>
        </tbody>
    </table>;
}