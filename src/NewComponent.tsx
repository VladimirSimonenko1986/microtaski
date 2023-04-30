import React from "react";

type TopCarsType = {
    topCars: CarsType[]
}

type CarsType = {
    manufacturer: string,
    model: string
}

export const NewComponent = (props: TopCarsType) => {
    return (
        <table>
<thead>
            <tr>
                <th>№</th>
                <th>Car</th>
                <th>Model</th>
            </tr>
</thead>
            <tbody>
            {props.topCars.map((car, index )=> {
                return (
                    <tr>
                        <td>{index + 1}</td>
                        <td>{car.manufacturer}</td>
                        <td>{car.model}</td>
                    </tr>
                )
            })}


        </tbody>
        </table>



            )
            }