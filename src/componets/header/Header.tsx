import { Link, NavLink, Outlet } from 'react-router-dom';
import { BsBasketFill } from 'react-icons/bs';
import { BsFillStarFill } from 'react-icons/bs';
import { useAppSelector } from '../../app/hooks';
import { IElem } from '../../features/slices/interfaces/interface';
import styles from './header.module.scss';
import logo from './logo.svg';

function Header(): JSX.Element {
    const selectedAutos = useAppSelector(
        (state) => state.autoSelected.itemsSelected
    );
    const autosBasket = useAppSelector((state) => state.autoBasket.itemsBasket);

    const allQuantity = autosBasket.reduce(
        (acc: number, order: IElem): number => {
            if (order.quantity !== undefined) {
                return order.quantity + acc;
            }
            return 0;
        },
        0
    );

    return (
        <>
            <nav className=" teal lighten-1 ">
                <div className="container nav-wrapper">
                    <Link to="/" className="brand-logo">
                        <img src={logo} alt="logo" />
                    </Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li style={{ marginRight: '15px' }}>
                            <NavLink to="/">
                                <span style={{ fontWeight: 'bold' }}>Home</span>
                            </NavLink>
                        </li>
                        <li style={{ marginRight: '15px' }}>
                            <NavLink to="basket">
                                <span
                                    style={{
                                        marginRight: '10px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Basket
                                </span>
                                <BsBasketFill className={styles.icon} />
                                <span
                                    style={{
                                        marginLeft: '5px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {allQuantity !== 0 ? allQuantity : null}
                                </span>
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="selected">
                                <span
                                    style={{
                                        marginRight: '8px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    Selected
                                </span>
                                <BsFillStarFill className={styles.icon} />
                                <span
                                    style={{
                                        marginLeft: '5px',
                                        fontWeight: 'bold',
                                    }}
                                >
                                    {selectedAutos.length !== 0
                                        ? selectedAutos.length
                                        : null}
                                </span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
            <Outlet />
        </>
    );
}

export { Header };
