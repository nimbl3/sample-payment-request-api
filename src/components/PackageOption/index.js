import React from 'react';

import './index.css';

const PackageOption = ({active, onClick, price}) => {
    const packageClass = active ? 'package-option package-option--active' : 'package-option';
    return (
        <div onClick={() => onClick(price)}>
            <table className={packageClass}>
                <tr className="package-option__header">
                    <td className="package-option__column package-option__column--name">
                        <div className="package-option__column--name-header">Quick Shot</div>
                        <div className="package-option__column--name-sub-header">30 min</div>
                    </td>
                    <td className="package-option__column package-option__column--price"> {price} THB </td>
                </tr>
                <tr className="package-option__content">
                    <td colSpan={2} className="package-option__column package-option__column--description">
                        <ul className="package-option__column--description--list">
                            <li className="package-option__column--description--item">5 high resolution photos</li>
                            <li className="package-option__column--description--item">Image enhancement</li>
                            <li className="package-option__column--description--item">Cloud folder</li>
                        </ul>
                    </td>
                </tr>
            </table>
        </div>
    )
}

export default PackageOption